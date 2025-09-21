// ---------------------------------------------------------
// Copyright 2025 Thorn Duke. All rights reserved.
// Licensed under the MIT License.
// See LICENSE in the project root for license information.
// ---------------------------------------------------------
const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

let fb2kTokens = [];
let tokensArray = [];
let keywordsArray = [];

function loadTokens(context) {
  const fb2kTokensPath = path.join(
    context.extensionPath,
    'data',
    'fb2kTokens.json'
  );

  try {
    const fileContent = fs.readFileSync(fb2kTokensPath, 'utf8');
    fb2kTokens = JSON.parse(fileContent);
    tokensArray = fb2kTokens.map((item) => item.token);
  } catch (err) {
    console.error('Error loading tokens:', err);
    vscode.window.showErrorMessage(
      'Unable to load snippets for Foobar2000 Title Formatting language.'
    );
  }
}

function loadKeywords(context) {
  const basePath = path.join(context.extensionPath, 'data', 'fb2kTokens.json');

  try {
    const fileContent = fs.readFileSync(basePath, 'utf8');
    const data = JSON.parse(fileContent);
    keywordsArray = data
      .filter((item) => item.role === 'keyword')
      .map((item) => item.token)
      .filter((item, index, arr) => arr.indexOf(item) === index)
      .sort((a, b) => b.length - a.length);
  } catch (err) {
    console.error('Error loading keywords:', err);
    vscode.window.showErrorMessage(
      'Unable to load keywords for Foobar2000 Title Formatting language.'
    );
  }
}

function popupHeader(token) {
  return `#### ${token.role} **${token.sign}**`;
}

function popupDescription(token) {
  if (token.description.length > 0) {
    const description = token.description.join('\n\n');
    return `\n\n${description}`;
  }
  return '';
}

function popupExample(token) {
  if (token.example.length > 0) {
    return `\n\nExample: \`${token.example}\``;
  }
  return '';
}

function popupFooter(token) {
  let mdStr = '';
  if (token['ref-link'].length == 1) {
    mdStr = `\n\nSee [${token.realm} reference](${token['ref-link'][0]}) for more information.`;
  } else if (token['ref-link'].length == 2) {
    mdStr = `\n\nSee [${token.realm} reference](${token['ref-link'][0]}) for more information.\n\nSee [Album list reference](${token['ref-link'][1]}) for the branch-remapping version.`;
  } else mdStr = '';

  return mdStr;
}

/**
 * Funzione per trovare le stringhe delimitate
 */
function findDelimitedToken(lineText, position) {
  const delimiters = [
    { open: '$', close: '(', type: 'function' },
    { open: '%<', close: '>%', type: 'tag' },
    { open: '%', close: '%', type: 'tag' }
  ];

  for (const { open, close, type } of delimiters) {
    let start = position.character;

    while (start >= 0) {
      if (lineText.startsWith(open, start)) {
        const end = lineText.indexOf(close, start + open.length);
        if (end !== -1) {
          const tokenStart = start + open.length;
          const tokenEnd = end;

          // Il cursore è compreso tra apertura e chiusura?
          if (
            position.character >= start
            && position.character <= end + close.length
          ) {
            let token = lineText.substring(tokenStart, tokenEnd);

            // Per le funzioni, prendi solo il nome
            if (type === 'function') {
              const match = token.match(/^([a-zA-Z0-9_]+)/);
              token = match ? match[1] : token;
            }
            const range = new vscode.Range(
              new vscode.Position(position.line, start),
              new vscode.Position(position.line, end + close.length)
            );

            return { token, range };
          }
        }
      }
      start--;
    }
  }
  return null;
}

/**
 * Funzione per trovare le parole chiave
 */
function findKeyword(lineText, position, keyword) {
  let offset = 0;
  while (true) {
    const keywordIndex = lineText.indexOf(keyword, offset);
    if (keywordIndex === -1) {
      return null;
    }

    const keywordEndIndex = keywordIndex + keyword.length;
    if (
      position.character >= keywordIndex
      && position.character <= keywordEndIndex
    ) {
      return new vscode.Range(
        new vscode.Position(position.line, keywordIndex),
        new vscode.Position(position.line, keywordEndIndex)
      );
    }

    offset = keywordIndex + 1;
  }
}

function activate(context) {
  loadTokens(context);
  loadKeywords(context);

  let disposableJoinLines = vscode.commands.registerTextEditorCommand(
    'foobar2000-title-formatting-syntax.joinLinesSmart',
    (editor, edit) => {
      // Controlla che il linguaggio sia 'fb2k'
      if (editor.document.languageId !== 'fb2k') {
        return;
      }

      const document = editor.document;
      const selections = editor.selections;

      selections.forEach((selection) => {
        let startLine = selection.start.line;
        let endLine = selection.end.line;

        // Se non c'è selezione, trova il blocco tra righe vuote o commenti
        if (selection.isEmpty) {
          // Trova in alto
          while (
            startLine > 0
            && !/^\s*$/.test(document.lineAt(startLine - 1).text)
            && !/^\s*\/\//.test(document.lineAt(startLine - 1).text)
          ) {
            startLine--;
          }
          // Trova in basso
          while (
            endLine < document.lineCount - 1
            && !/^\s*$/.test(document.lineAt(endLine + 1).text)
            && !/^\s*\/\//.test(document.lineAt(endLine + 1).text)
          ) {
            endLine++;
          }
        }

        // Prendi le linee da unire
        const lines = [];
        for (let i = startLine; i <= endLine; i++) {
          lines.push(document.lineAt(i).text.trim());
        }
        const joined = lines.join('');

        // Sostituisci il blocco selezionato
        const range = new vscode.Range(
          new vscode.Position(startLine, 0),
          new vscode.Position(endLine, document.lineAt(endLine).text.length)
        );
        edit.replace(range, joined);
      });
    }
  );

  let disposableJoinLinesNoComments = vscode.commands.registerTextEditorCommand(
    'foobar2000-title-formatting-syntax.joinLinesNoComments',
    (editor, edit) => {
      // Controlla che il linguaggio sia 'fb2k'
      if (editor.document.languageId !== 'fb2k') {
        return;
      }

      const document = editor.document;
      const selections = editor.selections;

      selections.forEach((selection) => {
        let startLine = selection.start.line;
        let endLine = selection.end.line;

        // Se non c'è selezione, trova il blocco tra righe vuote
        if (selection.isEmpty) {
          // Trova in alto
          while (
            startLine > 0
            && !/^\s*$/.test(document.lineAt(startLine - 1).text)
          ) {
            startLine--;
          }
          // Trova in basso
          while (
            endLine < document.lineCount - 1
            && !/^\s*$/.test(document.lineAt(endLine + 1).text)
          ) {
            endLine++;
          }
        }

        // Prendi le linee da unire, elimina commenti e spazi iniziali
        const lines = [];
        for (let i = startLine; i <= endLine; i++) {
          const text = document.lineAt(i).text;
          if (!/^\s*\/\//.test(text)) {
            lines.push(text.trim());
          }
        }
        const joined = lines.join('');

        // Sostituisci il blocco selezionato
        const range = new vscode.Range(
          new vscode.Position(startLine, 0),
          new vscode.Position(endLine, document.lineAt(endLine).text.length)
        );
        edit.replace(range, joined);
      });
    }
  );

  let disposableRemoveIndentation = vscode.commands.registerTextEditorCommand(
    'foobar2000-title-formatting-syntax.removeIndentation',
    (editor, edit) => {
      // Controlla che il linguaggio sia 'fb2k'
      if (editor.document.languageId !== 'fb2k') {
        return;
      }

      const document = editor.document;
      const selections = editor.selections;

      selections.forEach((selection) => {
        let startLine = selection.start.line;
        let endLine = selection.end.line;

        // Se non c'è selezione, trova il blocco tra righe vuote o commenti
        if (selection.isEmpty) {
          // Trova in alto
          while (
            startLine > 0
            && !/^\s*$/.test(document.lineAt(startLine - 1).text)
            && !/^\s*\/\//.test(document.lineAt(startLine - 1).text)
          ) {
            startLine--;
          }
          // Trova in basso
          while (
            endLine < document.lineCount - 1
            && !/^\s*$/.test(document.lineAt(endLine + 1).text)
            && !/^\s*\/\//.test(document.lineAt(endLine + 1).text)
          ) {
            endLine++;
          }
        }

        // Prendi le linee da unire
        const lines = [];
        for (let i = startLine; i <= endLine; i++) {
          lines.push(document.lineAt(i).text.trim());
        }
        const joined = lines.join('\n');

        // Sostituisci il blocco selezionato
        const range = new vscode.Range(
          new vscode.Position(startLine, 0),
          new vscode.Position(endLine, document.lineAt(endLine).text.length)
        );
        edit.replace(range, joined);
      });
    }
  );

  // Registra un Hover Provider per il linguaggio
  let hoverProvider = vscode.languages.registerHoverProvider('fb2k', {
    provideHover(document, position, token) {
      const line = document.lineAt(position);
      const lineText = line.text;

      let hoveredToken = null;
      let tokenRange = null;

      // Cerca i token delimitati
      const match = findDelimitedToken(lineText, position);
      if (match) {
        hoveredToken = match.token;
        tokenRange = match.range;
      }

      // Se non trova un token delimitato, cerca le parole chiave
      if (!tokensArray.includes(hoveredToken)) {
        for (const keyword of keywordsArray) {
          const keywordRange = findKeyword(lineText, position, keyword);
          if (keywordRange) {
            hoveredToken = keyword;
            tokenRange = keywordRange;
            break;
          }
        }
      }

      if (hoveredToken && tokensArray.includes(hoveredToken)) {
        const fb2kToken = fb2kTokens.find(
          (item) => item.token === hoveredToken
        );

        const markdownString = new vscode.MarkdownString();
        markdownString.appendMarkdown(popupHeader(fb2kToken));
        markdownString.appendMarkdown(popupDescription(fb2kToken));
        markdownString.appendMarkdown(popupExample(fb2kToken));
        markdownString.appendMarkdown(popupFooter(fb2kToken));

        return new vscode.Hover(markdownString, tokenRange);
      }
      return undefined;
    }
  });

  context.subscriptions.push(disposableJoinLines);
  context.subscriptions.push(disposableJoinLinesNoComments);
  context.subscriptions.push(disposableRemoveIndentation);
  context.subscriptions.push(hoverProvider);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};

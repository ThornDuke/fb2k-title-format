// ---------------------------------------------------------
// Copyright 2025 Thorn Duke. All rights reserved.
// Licensed under the MIT License.
// See LICENSE in the project root for license information.
// ---------------------------------------------------------
const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

let fb2kSnippets = {};
let fb2kTokens = [];
let tokensArray = [];

function loadSnippets(context) {
  const snippetPath = path.join(
    context.extensionPath,
    'snippets',
    'FB2k-title-formatting.code-snippets'
  );

  try {
    const fileContent = fs.readFileSync(snippetPath, 'utf8');
    fb2kSnippets = JSON.parse(fileContent);
    // console.log('§> 1:', { fileContent, fb2kSnippets });
  } catch (err) {
    console.error('Error loading snippets:', err);
    vscode.window.showErrorMessage(
      'Unable to load snippets for Foobar2000 Title Formatting language.'
    );
  }
}

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
    console.log('§> 1:', { fb2kTokens, tokensArray });
  } catch (err) {
    console.error('Error loading tokens:', err);
    vscode.window.showErrorMessage(
      'Unable to load snippets for Foobar2000 Title Formatting language.'
    );
  }
}

function activate(context) {
  // Carica gli snippet all'attivazione dell'estensione
  loadSnippets(context);
  loadTokens(context);

  // Registra il CompletionItemProvider per il linguaggio 'fb2k'
  const completionProvider = vscode.languages.registerCompletionItemProvider(
    'fb2k',
    {
      provideCompletionItems(document, position) {
        const completions = [];
        for (const key in fb2kSnippets) {
          if (Object.prototype.hasOwnProperty.call(fb2kSnippets, key)) {
            const snippet = fb2kSnippets[key];
            const completionItem = new vscode.CompletionItem(key);
            completionItem.kind = vscode.CompletionItemKind.Snippet;
            completionItem.insertText = new vscode.SnippetString(
              snippet.body.join('\n')
            );
            completionItem.detail = snippet.description;
            completions.push(completionItem);
          }
        }
        return completions;
      }
    }
  );

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
      // Ottiene la parola sotto il cursore
      const wordRange = document.getWordRangeAtPosition(position);
      const hoveredWord = document.getText(wordRange);
      console.log('§>', { hoveredWord });

      // Controlla se la parola è inserita nell'array dei fb2kTokens
      if (tokensArray.includes(hoveredWord)) {
        const fb2kToken = fb2kTokens.find((item) => item.token === hoveredWord);
        const markdownString = new vscode.MarkdownString();

        // Aggiunge il markdown
        markdownString.appendCodeblock(fb2kToken.code);
        markdownString.appendMarkdown(fb2kToken.description);
        console.log('§> 3:', { hoveredWord, fb2kToken });

        return new vscode.Hover(markdownString);
      }

      // Se non si trova una corrispondenza, non restituisce nulla
      console.log('§> error finding a match');
      return undefined;
    }
  });

  context.subscriptions.push(completionProvider);
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

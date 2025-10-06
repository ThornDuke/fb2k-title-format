// ---------------------------------------------------------
// Copyright 2025 Thorn Duke. All rights reserved.
// Licensed under the MIT License.
// See LICENSE in the project root for license information.
// ---------------------------------------------------------

/**
 * Rimuove l'indentazione da tutte le linee selezionate o dal blocco.
 * @param {vscode.TextEditor} editor
 * @param {vscode.TextEditorEdit} edit
 */
function removeIndentation(editor, edit) {
  if (editor.document.languageId !== 'fb2k') {
    return;
  }

  const document = editor.document;
  const selections = editor.selections;

  selections.forEach((selection) => {
    let startLine = selection.start.line;
    let endLine = selection.end.line;

    if (selection.isEmpty) {
      // Trova in alto (non vuoto e non commento)
      while (
        startLine > 0
        && !/^\s*$/.test(document.lineAt(startLine - 1).text)
        && !/^\s*\/\//.test(document.lineAt(startLine - 1).text)
      ) {
        startLine--;
      }
      // Trova in basso (non vuoto e non commento)
      while (
        endLine < document.lineCount - 1
        && !/^\s*$/.test(document.lineAt(endLine + 1).text)
        && !/^\s*\/\//.test(document.lineAt(endLine + 1).text)
      ) {
        endLine++;
      }
    }

    // Prendi le linee e rimuovi solo gli spazi iniziali/finali, unendo con newline
    const lines = [];
    for (let i = startLine; i <= endLine; i++) {
      lines.push(document.lineAt(i).text.trim());
    }
    const joined = lines.join('\n'); // Importante: mantiene i newline

    const range = new vscode.Range(
      new vscode.Position(startLine, 0),
      new vscode.Position(endLine, document.lineAt(endLine).text.length)
    );
    edit.replace(range, joined);
  });
}

module.exports = {
  removeIndentation
};

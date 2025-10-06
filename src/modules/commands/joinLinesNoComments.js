// ---------------------------------------------------------
// Copyright 2025 Thorn Duke. All rights reserved.
// Licensed under the MIT License.
// See LICENSE in the project root for license information.
// ---------------------------------------------------------

/**
 * Unisce le linee selezionate o il blocco di codice tra linee vuote, escludendo i commenti.
 * @param {vscode.TextEditor} editor
 * @param {vscode.TextEditorEdit} edit
 */
function joinLinesNoComments(editor, edit) {
  if (editor.document.languageId !== 'fb2k') {
    return;
  }

  const document = editor.document;
  const selections = editor.selections;

  selections.forEach((selection) => {
    let startLine = selection.start.line;
    let endLine = selection.end.line;

    if (selection.isEmpty) {
      // Trova in alto (non vuoto)
      while (
        startLine > 0
        && !/^\s*$/.test(document.lineAt(startLine - 1).text)
      ) {
        startLine--;
      }
      // Trova in basso (non vuoto)
      while (
        endLine < document.lineCount - 1
        && !/^\s*$/.test(document.lineAt(endLine + 1).text)
      ) {
        endLine++;
      }
    }

    // Prendi le linee da unire, escludendo i commenti e rimuovendo gli spazi
    const lines = [];
    for (let i = startLine; i <= endLine; i++) {
      const text = document.lineAt(i).text;
      if (!/^\s*\/\//.test(text)) {
        lines.push(text.trim());
      }
    }
    const joined = lines.join('');

    const range = new vscode.Range(
      new vscode.Position(startLine, 0),
      new vscode.Position(endLine, document.lineAt(endLine).text.length)
    );
    edit.replace(range, joined);
  });
}

module.exports = {
  joinLinesNoComments
};

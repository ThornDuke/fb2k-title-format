// ---------------------------------------------------------
// Copyright 2025 Thorn Duke. All rights reserved.
// Licensed under the MIT License.
// See LICENSE in the project root for license information.
// ---------------------------------------------------------

/**
 * Unisce le linee selezionate o il blocco di codice tra linee vuote/commentate in una singola linea.
 * @param {vscode.TextEditor} editor
 * @param {vscode.TextEditorEdit} edit
 */
function joinLinesSmart(editor, edit) {
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

    // Prendi le linee da unire (rimuovendo gli spazi iniziali/finali)
    const lines = [];
    for (let i = startLine; i <= endLine; i++) {
      lines.push(document.lineAt(i).text.trim());
    }
    const joined = lines.join('');

    // Sostituisci il blocco selezionato/trovato
    const range = new editor.document.getWordRangeAtPosition(
      new editor.document.positionAt(0),
      new editor.Document(0, 0) // Dummy range, verrà sovrascritto
    );
    edit.replace(
      new editor.document.getWordRangeAtPosition(
        new editor.document.positionAt(0),
        new editor.Document(0, 0)
      ),
      joined
    );
    edit.replace(
      new editor.document.getWordRangeAtPosition(
        new editor.document.positionAt(0),
        new editor.Document(0, 0)
      ),
      joined
    );

    const fullRange = new vscode.Range(
      new vscode.Position(startLine, 0),
      new vscode.Position(endLine, document.lineAt(endLine).text.length)
    );
    edit.replace(fullRange, joined);
  });
}

module.exports = {
  joinLinesSmart
};

const vscode = require('vscode');
const path = require('path');
const fs = require('fs/promises');
const { parseFB2KScript } = require('./parseFB2KScript');

/**
 * Compila il file attivo, salva il risultato in un file e apre il nuovo
 * file in un nuovo tab
 * @param {vscode.TextEditor} editor
 */
function transpileCurrentFile(editor, edit) {
  // 1. Prende il contenuto del file aperto nel tab attivo
  // const editor = vscode.window.activeTextEditor;

  if (editor.document.languageId !== 'fb2k') {
    return;
  }

  const document = editor.document;
  const originalUri = document.uri;

  if (originalUri.scheme !== 'file') {
    vscode.window.showInformationMessage(
      'Questo comando funziona solo per i file salvati su disco.'
    );
    return;
  }

  const originalText = document.getText();

  // 2. Lo passa alla funzione parseFB2KScript()
  const transformedText = parseFB2KScript(originalText);

  // --- Gestione dei Percorsi ---
  const originalFilePath = originalUri.fsPath;
  const originalDir = path.dirname(originalFilePath);
  const originalBaseName = path.basename(originalFilePath);
  const originalExt = path.extname(originalBaseName);
  const originalNameNoExt = path.basename(originalBaseName, originalExt);

  // Crea il nuovo nome del file (es: file.txt -> file.transformed.txt)
  const newFileName = `${originalNameNoExt}.transformed${originalExt}`;
  const newFilePath = path.join(originalDir, newFileName);
  const newFileUri = vscode.Uri.file(newFilePath);

  try {
    // 3. Lo salva in un file nella stessa cartella
    fs.writeFile(newFilePath, transformedText, 'utf8');

    // 4. Apre automaticamente il file creato in un nuovo tab

    // Aprire il file come documento di testo
    const newDocument = vscode.workspace.openTextDocument(newFileUri);

    // Mostrare il documento in un nuovo editor (ViewColumn.Beside lo apre accanto)
    vscode.window.showTextDocument(newDocument, {
      viewColumn: vscode.ViewColumn.Beside
    });

    vscode.window.showInformationMessage(
      `File trasformato salvato e aperto: ${newFileName}`
    );
  } catch (error) {
    console.error(error);
    vscode.window.showErrorMessage(
      `Errore durante il salvataggio o l'apertura del file: ${error.message}`
    );
  }
}

module.exports = {
  transpileCurrentFile
};

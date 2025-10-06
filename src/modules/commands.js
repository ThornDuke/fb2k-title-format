// ---------------------------------------------------------
// Copyright 2025 Thorn Duke. All rights reserved.
// Licensed under the MIT License.
// See LICENSE in the project root for license information.
// ---------------------------------------------------------
const vscode = require('vscode');

// Importa la logica da ogni file
const { joinLinesSmart } = require('./commands/joinLinesSmart');
const { joinLinesNoComments } = require('./commands/joinLinesNoComments');
const { removeIndentation } = require('./commands/removeIndentation');

/**
 * Registra tutti i comandi dell'estensione.
 * @param {typeof vscode} vscode L'API di vscode.
 * @param {vscode.ExtensionContext} context Il contesto dell'estensione.
 * @returns {vscode.Disposable[]} Un array di oggetti Disposable.
 */
function registerAllCommands(vscode, context) {
  const disposableJoinLines = vscode.commands.registerTextEditorCommand(
    'foobar2000-title-formatting-syntax.joinLinesSmart',
    joinLinesSmart // Si riferisce alla funzione importata
  );

  const disposableJoinLinesNoComments =
    vscode.commands.registerTextEditorCommand(
      'foobar2000-title-formatting-syntax.joinLinesNoComments',
      joinLinesNoComments // Si riferisce alla funzione importata
    );

  const disposableRemoveIndentation = vscode.commands.registerTextEditorCommand(
    'foobar2000-title-formatting-syntax.removeIndentation',
    removeIndentation // Si riferisce alla funzione importata
  );

  return [
    disposableJoinLines,
    disposableJoinLinesNoComments,
    disposableRemoveIndentation
  ];
}

module.exports = {
  registerAllCommands
};

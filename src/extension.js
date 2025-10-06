// ---------------------------------------------------------
// Copyright 2025 Thorn Duke. All rights reserved.
// Licensed under the MIT License.
// See LICENSE in the project root for license information.
// ---------------------------------------------------------
const vscode = require('vscode');
const loader = require('./modules/loader'); // Modulo per caricare dati
const hoverProvider = require('./modules/hoverProvider'); // Modulo per Hover
const commands = require('./modules/commands'); // Modulo per i comandi

// Variabili globali condivise
let fb2kTokens = [];
let tokensArray = [];
let keywordsArray = [];

function activate(context) {
  // Caricamento dei dati e aggiornamento delle variabili
  const data = loader.loadAllData(context);
  fb2kTokens = data.fb2kTokens;
  tokensArray = data.tokensArray;
  keywordsArray = data.keywordsArray;

  // Registrazione dei comandi
  const commandSubscriptions = commands.registerAllCommands(vscode, context);
  context.subscriptions.push(...commandSubscriptions);

  // Registrazione del Hover Provider
  const hoverSubscription = hoverProvider.registerHoverProvider(
    vscode,
    fb2kTokens,
    tokensArray,
    keywordsArray
  );
  context.subscriptions.push(hoverSubscription);
}

function deactivate() {
  // Logica di disattivazione
}

module.exports = {
  activate,
  deactivate
};

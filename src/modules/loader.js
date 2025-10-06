// ---------------------------------------------------------
// Copyright 2025 Thorn Duke. All rights reserved.
// Licensed under the MIT License.
// See LICENSE in the project root for license information.
// ---------------------------------------------------------
const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

/**
 * Carica i dati dei token e delle parole chiave da fb2kTokens.json.
 * @param {vscode.ExtensionContext} context Il contesto dell'estensione.
 * @returns {{fb2kTokens: Array, tokensArray: Array, keywordsArray: Array}} I dati caricati.
 */
function loadAllData(context) {
  const fb2kTokensPath = path.join(
    context.extensionPath,
    'data',
    'fb2kTokens.json'
  );

  let fb2kTokens = [];
  let tokensArray = [];
  let keywordsArray = [];

  try {
    const fileContent = fs.readFileSync(fb2kTokensPath, 'utf8');
    const data = JSON.parse(fileContent);
    fb2kTokens = data;
    tokensArray = data.map((item) => item.token);

    keywordsArray = data
      .filter((item) => item.role === 'keyword')
      .map((item) => item.token)
      .filter((item, index, arr) => arr.indexOf(item) === index)
      .sort((a, b) => b.length - a.length);
  } catch (err) {
    console.error('Error loading data:', err);
    vscode.window.showErrorMessage(
      'Unable to load data for Foobar2000 Title Formatting language.'
    );
  }

  return { fb2kTokens, tokensArray, keywordsArray };
}

module.exports = {
  loadAllData
};

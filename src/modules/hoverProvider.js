// ---------------------------------------------------------
// Copyright 2025 Thorn Duke. All rights reserved.
// Licensed under the MIT License.
// See LICENSE in the project root for license information.
// ---------------------------------------------------------
const vscode = require('vscode');
const { findDelimitedToken, findKeyword } = require('./tokenFinder');
const popupUtils = require('./popupUtils');

function registerHoverProvider(vscode, fb2kTokens, tokensArray, keywordsArray) {
  // Registra un Hover Provider per il linguaggio 'fb2k'
  return vscode.languages.registerHoverProvider('fb2k', {
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
        markdownString.appendMarkdown(popupUtils.popupHeader(fb2kToken));
        markdownString.appendMarkdown(popupUtils.popupDescription(fb2kToken));
        markdownString.appendMarkdown(popupUtils.popupExample(fb2kToken));
        markdownString.appendMarkdown(popupUtils.popupFooter(fb2kToken));

        return new vscode.Hover(markdownString, tokenRange);
      }
      return undefined;
    }
  });
}

module.exports = {
  registerHoverProvider
};

// ---------------------------------------------------------
// Copyright 2025 Thorn Duke. All rights reserved.
// Licensed under the MIT License.
// See LICENSE in the project root for license information.
// ---------------------------------------------------------
const vscode = require('vscode');

/**
 * Funzione per trovare le stringhe delimitate ($(), %<>, %%)
 */
function findDelimitedToken(lineText, position) {
  const delimiters = [
    { open: '$', close: '(', type: 'function' },
    { open: '%<', close: '>%', type: 'tag' },
    { open: '%', close: '%', type: 'tag' }
  ];

  // ... (implementazione di findDelimitedToken copiata/spostata qui) ...
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
 * Funzione per trovare le parole chiave (come if, else, etc.)
 */
function findKeyword(lineText, position, keyword) {
  // ... (implementazione di findKeyword copiata/spostata qui) ...
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

module.exports = {
  findDelimitedToken,
  findKeyword
};

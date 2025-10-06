// ---------------------------------------------------------
// Copyright 2025 Thorn Duke. All rights reserved.
// Licensed under the MIT License.
// See LICENSE in the project root for license information.
// ---------------------------------------------------------

function popupHeader(token) {
  return `#### ${token.role} **${token.sign}**`;
}

function popupDescription(token) {
  if (token.description && token.description.length > 0) {
    const description = token.description.join('\n\n');
    return `\n\n${description}`;
  }
  return '';
}

function popupExample(token) {
  if (token.example && token.example.length > 0) {
    return `\n\nExample: \`${token.example}\``;
  }
  return '';
}

function popupFooter(token) {
  let mdStr = '';
  if (token['ref-link'] && token['ref-link'].length === 1) {
    mdStr = `\n\nSee [${token.realm} reference](${token['ref-link'][0]}) for more information.`;
  } else if (token['ref-link'] && token['ref-link'].length === 2) {
    mdStr = `\n\nSee [${token.realm} reference](${token['ref-link'][0]}) for more information.\n\nSee [Album list reference](${token['ref-link'][1]}) for the branch-remapping version.`;
  } else mdStr = '';

  return mdStr;
}

module.exports = {
  popupHeader,
  popupDescription,
  popupExample,
  popupFooter
};

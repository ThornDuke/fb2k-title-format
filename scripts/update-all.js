const updateSnippets = require('./update-snippets');
const updateSyntaxFile = require('./update-syntax');

function logResult(result) {
  const msg = `§> ${result.message}${result.result === 'error' ? '\n§> ' + result.error : ''}`;
  const banner = `
  §>------------------------------------------------
  §>
  ${msg}
  §>
  §>------------------------------------------------
  `;
  console.log(banner);
}

async function updateAll() {
  const syntaxFileUpdated = updateSyntaxFile();
  logResult(syntaxFileUpdated);
  if (syntaxFileUpdated.result === 'success') {
    const snippetsUpdated = updateSnippets();
    logResult(snippetsUpdated);
  }
}

updateAll();

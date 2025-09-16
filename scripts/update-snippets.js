const fs = require('fs');

function createSnippets() {
  try {
    // Legge il file tokens.json
    const tokensData = fs.readFileSync('data/fb2kTokens.json', 'utf8');
    const tokens = JSON.parse(tokensData);

    const snippets = {};

    // Itera sull'array di token per creare gli snippet
    tokens.forEach((tokenObj) => {
      const { token, role, realm, sign, description } = tokenObj;
      const snippetBody = tokenObj['snippet-body'];

      // Crea la chiave per lo snippet (es. "Function: $add(a,b,...)")
      const key = `${role.charAt(0).toUpperCase() + tokenObj.role.slice(1)}: ${sign}`;

      // Costruisce l'oggetto snippet
      snippets[key] = {
        prefix: token,
        body: snippetBody,
        description: `${realm}: ${description[0]}`
      };
    });

    // Scrive il file snippets.json
    fs.writeFileSync(
      'snippets/FB2k-title-formatting.code-snippets',
      JSON.stringify(snippets, null, 2),
      'utf8'
    );
    console.log('File snippets.json creato con successo!');
  } catch (error) {
    console.error('Si è verificato un errore:', error);
  }
}

// Esegui la funzione
createSnippets();

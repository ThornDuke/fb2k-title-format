const fs = require('fs');
const path = require('path');

function updateSnippets() {
  const tokensPath = path.join(__dirname, '..', 'data', 'fb2kTokens.json');
  const snippetsPath = path.join(
    __dirname,
    '..',
    'snippets',
    'FB2k-title-formatting.code-snippets'
  );

  try {
    // Legge il file tokens.json
    const tokensData = fs.readFileSync(tokensPath, 'utf8');
    const tokens = JSON.parse(tokensData);

    const snippets = {};

    // Iterates over the token array to create the snippets
    tokens.forEach((tokenObj) => {
      const { token, role, realm, sign, description } = tokenObj;
      const snippetBody = tokenObj['snippet-body'];

      // Creates the key for the snippet (e.g. "Function: $add(a,b,...)")
      const key = `${role.charAt(0).toUpperCase() + tokenObj.role.slice(1)}: ${sign}`;

      // Builds the snippet object
      let prefixStr;
      if (role === 'function') {
        prefixStr = `$${token}(`;
      } else if (role === 'tag') {
        prefixStr = sign;
      } else {
        prefixStr = token;
      }
      snippets[key] = {
        prefix: prefixStr,
        body: snippetBody,
        description: `${realm}: ${description[0]}`
      };
    });

    // Writes the snippets file
    fs.writeFileSync(snippetsPath, JSON.stringify(snippets, null, 2), 'utf8');
    return { result: 'success', message: 'Snippets updated successfully.' };
  } catch (error) {
    return {
      result: 'error',
      message: `Error updating snippets:`,
      error: error.message
    };
  }
}

module.exports = updateSnippets;

// If the script is run directly (not imported), execute the function
if (require.main === module) {
  updateSnippets();
}

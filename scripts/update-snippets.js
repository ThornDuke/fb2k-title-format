const fs = require('fs');
const path = require('path');

const snippetsFolder = 'snippets';
const dataFolder = 'data';
const dataFilename = 'fb2kTokens.json';

// Mappa per definire la destinazione di ciascuno snippet
const FILE_MAP = [
  { realm: 'CUI', role: 'function', filename: 'cuiFunctions.code-snippets' },
  { realm: 'CUI', role: 'tag', filename: 'cuiTags.code-snippets' },
  {
    realm: 'FB2K Album List',
    role: 'function',
    filename: 'fb2kFunctions.code-snippets'
  },
  {
    realm: 'FB2K Album List',
    role: 'tag',
    filename: 'fb2kTags.code-snippets'
  },
  {
    realm: 'FB2K Playback Statistics',
    role: 'tag',
    filename: 'fb2kTags.code-snippets'
  },
  {
    realm: 'FB2K Playlist Organizer',
    role: 'tag',
    filename: 'fb2kTags.code-snippets'
  },
  {
    realm: 'FB2K Query',
    role: 'keyword',
    filename: 'fb2kKeywords.code-snippets'
  },
  {
    realm: 'FB2K',
    role: 'function',
    filename: 'fb2kFunctions.code-snippets'
  },
  {
    realm: 'FB2K',
    role: 'tag',
    filename: 'fb2kTags.code-snippets'
  }
];

// Funzione helper per ottenere il percorso completo di output
function getOutputPath(filename) {
  return path.join(__dirname, '..', snippetsFolder, filename);
}

/**
 * Genera l'oggetto snippet per un singolo token.
 */
function createSnippet(tokenObj) {
  const { token, role, sign, description } = tokenObj;
  const key = `${role.charAt(0).toUpperCase() + role.slice(1)}: ${sign}`;
  let prefixStr;

  if (role === 'function') {
    prefixStr = `$${token}(`;
  } else if (role === 'tag') {
    prefixStr = sign;
  } else {
    prefixStr = token;
  }

  return {
    key: key,
    snippet: {
      prefix: prefixStr,
      body: tokenObj['snippet-body'],
      description: `${tokenObj.realm}: ${description[0]}`
    }
  };
}

function updateSnippets() {
  const tokensPath = path.join(__dirname, '..', dataFolder, dataFilename);

  try {
    const tokensData = fs.readFileSync(tokensPath, 'utf8');
    const tokens = JSON.parse(tokensData);

    // 1. Usa reduce per raggruppare gli snippet nell'oggetto `groupedSnippets`
    const groupedSnippets = tokens.reduce((acc, tokenObj) => {
      const targetMap = FILE_MAP.find(
        (map) =>
          tokenObj.realm.startsWith(map.realm) && tokenObj.role === map.role
      );

      if (targetMap) {
        const { key, snippet } = createSnippet(tokenObj);
        const filename = targetMap.filename;

        // Inizializza l'oggetto per questo file se non esiste
        if (!acc[filename]) {
          acc[filename] = {};
        }

        // Aggiunge lo snippet
        acc[filename][key] = snippet;
      }
      return acc;
    }, {}); // Inizializza con un oggetto vuoto

    // 2. Scrive i file iterando sull'oggetto raggruppato
    for (const filename in groupedSnippets) {
      const outputPath = getOutputPath(filename);
      fs.writeFileSync(
        outputPath,
        JSON.stringify(groupedSnippets[filename], null, 2),
        'utf8'
      );
    }

    return { result: 'success', message: 'Snippets updated successfully.' };
  } catch (error) {
    return {
      result: 'error',
      message: `Error updating snippets: ${error.message}`,
      error: error.message
    };
  }
}

module.exports = updateSnippets;

// Se lo script è eseguito direttamente, esegue la funzione
if (require.main === module) {
  updateSnippets();
}

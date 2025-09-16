const fs = require('fs');
const path = require('path');

function updateSyntaxFile() {
  const tokensPath = path.join(__dirname, '..', 'data', 'fb2kTokens.json');
  const syntaxPath = path.join(
    __dirname,
    '..',
    'syntaxes',
    'foobar2000.tmLanguage.json'
  );

  try {
    // Legge e analizza i file JSON
    const tokensData = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
    const syntaxData = JSON.parse(fs.readFileSync(syntaxPath, 'utf8'));

    // Filtra e prepara i token
    const functions = tokensData
      // .filter((t) => t.role === 'function' && t.realm === 'FB2K')
      .filter((t) => t.role === 'function')
      .map((t) => t.token)
      .filter((item, index, arr) => arr.indexOf(item) === index)
      .join('|');

    const tags = tokensData
      // .filter((t) => t.role === 'tag' && t.realm === 'FB2K')
      .filter(
        (t) =>
          t.role === 'tag'
          && !(t.sign.startsWith('%<') || t.sign.endsWith('>%'))
      )
      // .map((t) => t.token.replace(/ /g, '_'))
      .map((t) => t.token)
      .filter((item, index, arr) => arr.indexOf(item) === index)
      .join('|');

    const albumListTags = tokensData
      .filter(
        (t) =>
          t.role === 'tag' && t.sign.startsWith('%<') && t.sign.endsWith('>%')
      )
      // .map((t) => t.token.replace(/ /g, '_'))
      .map((t) => t.token)
      .filter((item, index, arr) => arr.indexOf(item) === index)
      .join('|');

    const keywords = tokensData
      .filter((t) => t.role === 'keyword')
      .map((t) => t.token)
      .join('|');

    // Aggiorna la sintassi JSON con i nuovi dati
    const functionPattern = syntaxData.repository.functions.patterns[0];
    if (functionPattern) {
      functionPattern.begin = `\\$(${functions})\\s*\\(`;
    }

    const tagsPattern = syntaxData.repository.tags.patterns[0];
    if (tagsPattern) {
      tagsPattern.match = `%(${tags})%`;
    }

    const albumListTagsPattern = syntaxData.repository.tags.patterns[2];
    if (albumListTagsPattern) {
      albumListTagsPattern.match = `%<(${albumListTags})>%`;
    }

    const keywordsPattern = syntaxData.repository.keywords.patterns[0];
    if (keywordsPattern) {
      keywordsPattern.match = `\\b(${keywords})\\b`;
    }

    // Scrive il file aggiornato
    fs.writeFileSync(syntaxPath, JSON.stringify(syntaxData, null, 2), 'utf8');
    console.log('File mylanguage.json aggiornato con successo!');
  } catch (error) {
    console.error('Si è verificato un errore:', error);
  }
}

updateSyntaxFile();

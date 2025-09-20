const fs = require('fs');
const path = require('path');

function addIdField() {
  const tokensPath = path.join(__dirname, '..', 'data', 'fb2kTokens.json');

  try {
    // Read and parse JSON files
    const tokensData = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
    // cicle on tokensData and add id field
    let newTokens = tokensData.map((token, index) => ({
      id: index + 1,
      ...token
    }));

    // Write back to the file
    fs.writeFileSync(tokensPath, JSON.stringify(newTokens, null, 2), 'utf8');
    console.log('ID fields added successfully.');
  } catch (error) {
    console.error('Error processing tokens:', error);
  }
}

addIdField();

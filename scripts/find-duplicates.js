const fs = require('fs');
const path = require('path');

function printDuplicates() {
  const tokensPath = path.join(__dirname, '..', 'data', 'fb2kTokens.json');
  const duplicatesPath = path.join(
    __dirname,
    '..',
    'data',
    'duplicatedTokens.json'
  );

  let tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
  let duplicates = [];
  try {
    while (tokens.length > 0) {
      // Find all occurrences of the first element in the array
      const { token, role } = tokens[0];
      const repeated = tokens.filter(
        (curr) => curr.token === token && curr.role === role
      );
      // If it finds repeated items, it adds them to the `duplicates` array.
      if (repeated.length > 1) {
        duplicates = duplicates.concat(repeated);
      }
      // Removes the element just checked and any repetitions from
      // the `tokens` array
      tokens = tokens.filter(
        (item) =>
          !repeated.map((repeatedItem) => repeatedItem.id).includes(item.id)
      );
      if (repeated.length > 1) {
        console.log(
          `found duplicates: ${String(repeated.length).padStart(3, '0')}\t residual tokens: ${String(tokens.length).padStart(3, '0')}`
        );
      }
    }

    // Write duplicates to the file
    fs.writeFileSync(
      duplicatesPath,
      JSON.stringify(duplicates, null, 2),
      'utf8'
    );
    console.log(
      `${duplicates.length} duplicates added successfully in "duplicatedTokens.json".`
    );
  } catch (error) {
    console.error('Error processing duplicates:', error);
  }
}

printDuplicates();

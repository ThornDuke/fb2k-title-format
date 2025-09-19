const updateSnippets = require('./update-snippets');
const updateSyntaxFile = require('./update-syntax');

async function updateAll() {
  try {
    await updateSyntaxFile();
    await updateSnippets();
    console.log();
    console.log('------------------------------------------------');
    console.log();
    console.log('All files have been updated successfully.');
    console.log();
    console.log('------------------------------------------------');
    console.log();
  } catch (error) {
    console.error('An error occurred while updating files:', error);
  }
}

updateAll();

const path = require('path');
const fs = require('fs');

/**
 * Restituisce il path del progetto Node. Risale la gerarchia delle directory
 * alla ricerca del file 'package.json'. Se non lo trova solleva una eccezione.
 * @returns {string} Il percorso assoluto della root del progetto.
 */
function getProjectRoot() {
  let currentDir = __dirname;

  // Risali la gerarchia finché non raggiungi la root del filesystem
  while (true) {
    const packageJsonPath = path.join(currentDir, 'package.json');

    // Controlla se package.json esiste nella directory corrente
    if (fs.existsSync(packageJsonPath)) {
      return currentDir;
    }

    const parentDir = path.dirname(currentDir);

    // Se la directory corrente è la root del filesystem non ha trovato
    // 'package.json', quindi solleva un'eccezione
    if (parentDir === currentDir) {
      throw new Error(
        'Cannot find package.json. Are you sure that this is a Node project?'
      );
    }

    currentDir = parentDir;
  }
}

module.exports = {
  getProjectRoot
};

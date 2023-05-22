const fs = require('fs');
const path = require('path');

function traverseDirectory(directoryPath) {
  const files = fs.readdirSync(directoryPath);

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      traverseDirectory(filePath); // Appel récursif pour explorer les sous-dossiers
    } else {
      console.log(filePath); // Afficher le chemin du fichier
    }
  }
}

// Spécifiez le chemin du répertoire à explorer
const directoryPath = 'DATA';

traverseDirectory(directoryPath);


//////////////////////////////////////////////////////
// Check if he is JSON                              //
//  In : 
//  Out : True if is JSON                           //
//////////////////////////////////////////////////////
function isStatFile(str) {
  try {JSON.parse(str);return true;} 
  catch (error) {return false;}
}


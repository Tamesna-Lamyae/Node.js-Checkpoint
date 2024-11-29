const fs = require('fs');

// Création du fichier 'welcome.txt'
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" created!');

  // Lecture du fichier 'welcome.txt'
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});

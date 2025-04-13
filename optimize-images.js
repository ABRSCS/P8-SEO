const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration des tailles d'images
const sizes = {
  mobile: 300,
  desktop: 800
};

// Liste des dossiers à traiter
const folders = [
  'assets/images/gallery/concerts',
  'assets/images/gallery/entreprise',
  'assets/images/gallery/mariage',
  'assets/images/gallery/portraits'
];

async function optimizeImage(inputPath, outputPath, width) {
  try {
    await sharp(inputPath)
      .resize(width)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Image optimisée: ${outputPath}`);
  } catch (error) {
    console.error(`Erreur lors de l'optimisation de ${inputPath}:`, error);
  }
}

async function processFolder(folder) {
  try {
    const files = fs.readdirSync(folder);
    
    for (const file of files) {
      if (file.endsWith('.webp') && !file.includes('_mobile') && !file.includes('_desktop')) {
        const inputPath = path.join(folder, file);
        const mobilePath = path.join(folder, file.replace('.webp', '_mobile.webp'));
        const desktopPath = path.join(folder, file.replace('.webp', '_desktop.webp'));
        
        // Créer la version mobile
        await optimizeImage(inputPath, mobilePath, sizes.mobile);
        
        // Créer la version desktop
        await optimizeImage(inputPath, desktopPath, sizes.desktop);
      }
    }
  } catch (error) {
    console.error(`Erreur lors du traitement du dossier ${folder}:`, error);
  }
}

async function main() {
  for (const folder of folders) {
    await processFolder(folder);
  }
  console.log('Optimisation des images terminée !');
}

main(); 
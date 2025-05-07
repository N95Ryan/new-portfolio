const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = {
  'icon-192': 192,
  'icon-512': 512,
  'apple-touch-icon': 180
};

async function generateIcons() {
  const inputFile = path.join(__dirname, '../public/favicon.ico');
  const outputDir = path.join(__dirname, '../public');

  // Vérifier si le fichier source existe
  if (!fs.existsSync(inputFile)) {
    console.error('Le fichier favicon.ico n\'existe pas dans le dossier public');
    process.exit(1);
  }

  // Générer chaque taille d'icône
  for (const [name, size] of Object.entries(sizes)) {
    try {
      await sharp(inputFile)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(path.join(outputDir, `${name}.png`));
      
      console.log(`✅ ${name}.png généré avec succès`);
    } catch (error) {
      console.error(`❌ Erreur lors de la génération de ${name}.png:`, error);
    }
  }

  // Générer l'icône Safari (en PNG car Sharp ne supporte pas la conversion directe en SVG)
  try {
    await sharp(inputFile)
      .resize(512, 512, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(path.join(outputDir, 'safari-pinned-tab.png'));
    
    console.log('✅ safari-pinned-tab.png généré avec succès');
  } catch (error) {
    console.error('❌ Erreur lors de la génération de safari-pinned-tab.png:', error);
  }
}

generateIcons().catch(console.error); 
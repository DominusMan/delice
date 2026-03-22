const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Images à télécharger avec leurs URLs Unsplash
const images = [
  { name: 'foie-gras.jpeg', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80' },
  { name: 'crevettes.jpeg', url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80' },
  { name: 'huitre.jpeg', url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80' },
  { name: 'gravlaxe.jpeg', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80' },
  { name: 'veloute-truffe.jpeg', url: 'https://images.unsplash.com/photo-1547521861-7a01fb3b7793?w=800&q=80' },
  { name: 'filet-mignon.jpeg', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80' },
  { name: 'saumon.jpeg', url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80' },
  { name: 'coq-vin.jpeg', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80' },
  { name: 'homard.jpeg', url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80' },
  { name: 'canard.jpeg', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80' },
  { name: 'turbot.jpeg', url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80' },
  { name: 'veau.jpeg', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80' },
  { name: 'tiramisu.jpeg', url: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80' },
  { name: 'crème-brûlée.jpeg', url: 'https://images.unsplash.com/photo-1488477181946-85a2138e159e?w=800&q=80' },
  { name: 'souffle.jpeg', url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80' },
  { name: 'panna-cotta.jpeg', url: 'https://images.unsplash.com/photo-1488477181946-85a2138e159e?w=800&q=80' },
  { name: 'tarte-tatin.jpeg', url: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64e12?w=800&q=80' },
  { name: 'mousse-passion.jpeg', url: 'https://images.unsplash.com/photo-1488477181946-85a2138e159e?w=800&q=80' },
  { name: 'profiteroles.jpeg', url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80' },
  { name: 'citron-meringuée.jpeg', url: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64e12?w=800&q=80' },
  { name: 'mofongo.jpeg', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80' },
  { name: 'dhal.jpeg', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80' },
  { name: 'rougail.jpeg', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80' },
  { name: 'accras.jpeg', url: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80' },
  { name: 'poisson-creole.jpeg', url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80' },
  { name: 'colombo.jpeg', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80' }
];

const imagesDir = path.join(__dirname, '../public/images');

function downloadImage(imageData) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, imageData.name);
    
    // Skip si l'image existe déjà
    if (fs.existsSync(filePath)) {
      console.log(`✓ ${imageData.name} existe déjà`);
      resolve();
      return;
    }

    const protocol = imageData.url.startsWith('https') ? https : http;
    
    protocol.get(imageData.url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filePath))
          .on('finish', () => {
            console.log(`✓ Téléchargé: ${imageData.name}`);
            resolve();
          })
          .on('error', reject);
      } else {
        console.warn(`⚠ Erreur ${response.statusCode} pour ${imageData.name}`);
        resolve();
      }
    }).on('error', (err) => {
      console.warn(`⚠ Erreur de téléchargement pour ${imageData.name}: ${err.message}`);
      resolve();
    });
  });
}

async function downloadAllImages() {
  console.log('📥 Début du téléchargement des images...\n');
  
  for (const imageData of images) {
    try {
      await downloadImage(imageData);
    } catch (error) {
      console.error(`Erreur: ${error.message}`);
    }
  }
  
  console.log('\n✅ Téléchargement terminé!');
}

downloadAllImages();

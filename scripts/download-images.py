#!/usr/bin/env python3
import urllib.request
import os
import sys
from pathlib import Path

# Images à télécharger avec leurs URLs Unsplash
images = [
    ('foie-gras.jpeg', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80'),
    ('crevettes.jpeg', 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'),
    ('huitre.jpeg', 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'),
    ('gravlaxe.jpeg', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80'),
    ('veloute-truffe.jpeg', 'https://images.unsplash.com/photo-1547521861-7a01fb3b7793?w=800&q=80'),
    ('filet-mignon.jpeg', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80'),
    ('saumon.jpeg', 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'),
    ('coq-vin.jpeg', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80'),
    ('homard.jpeg', 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'),
    ('canard.jpeg', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80'),
    ('turbot.jpeg', 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'),
    ('veau.jpeg', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80'),
    ('tiramisu.jpeg', 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80'),
    ('crème-brûlée.jpeg', 'https://images.unsplash.com/photo-1488477181946-85a2138e159e?w=800&q=80'),
    ('souffle.jpeg', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80'),
    ('panna-cotta.jpeg', 'https://images.unsplash.com/photo-1488477181946-85a2138e159e?w=800&q=80'),
    ('tarte-tatin.jpeg', 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64e12?w=800&q=80'),
    ('mousse-passion.jpeg', 'https://images.unsplash.com/photo-1488477181946-85a2138e159e?w=800&q=80'),
    ('profiteroles.jpeg', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80'),
    ('citron-meringuée.jpeg', 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64e12?w=800&q=80'),
    ('mofongo.jpeg', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80'),
    ('dhal.jpeg', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80'),
    ('rougail.jpeg', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80'),
    ('accras.jpeg', 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80'),
    ('poisson-creole.jpeg', 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'),
    ('colombo.jpeg', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80'),
]

images_dir = Path(__file__).parent.parent / 'public' / 'images'
images_dir.mkdir(parents=True, exist_ok=True)

def download_image(filename, url):
    filepath = images_dir / filename
    
    # Skip si l'image existe déjà
    if filepath.exists():
        print(f"✓ {filename} existe déjà")
        return True
    
    try:
        print(f"📥 Téléchargement: {filename}...", end=' ', flush=True)
        urllib.request.urlretrieve(url, filepath)
        print("✓")
        return True
    except Exception as e:
        print(f"✗ Erreur: {e}")
        return False

def main():
    print("🌐 Téléchargement des images depuis Unsplash...\n")
    
    success = 0
    failed = 0
    
    for filename, url in images:
        if download_image(filename, url):
            success += 1
        else:
            failed += 1
    
    print(f"\n✅ Résumé: {success} images téléchargées, {failed} erreurs")
    return 0 if failed == 0 else 1

if __name__ == '__main__':
    sys.exit(main())

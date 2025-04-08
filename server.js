const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration de la compression
app.use(compression({
  level: 6,
  threshold: 1024,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  }
}));

// Configuration du cache et des en-têtes
app.use((req, res, next) => {
  // Cache-Control pour les ressources statiques
  if (req.path.match(/\.(css|js|jpg|jpeg|png|gif|webp|ico|svg|woff|woff2|ttf|eot)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
  
  // En-têtes pour le bfcache
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  // En-têtes de sécurité
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  next();
});

// Servir les fichiers statiques avec des options optimisées
app.use(express.static(path.join(__dirname), {
  maxAge: '1y',
  etag: true,
  lastModified: true,
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

// Route principale avec gestion d'erreur
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'), (err) => {
    if (err) {
      next(err);
    }
  });
});

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Une erreur est survenue');
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
  console.log('Compression GZIP activée pour réduire la taille des fichiers');
}); 
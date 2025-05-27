## README – Projet 8 : Optimisation SEO du site "Nina Carducci, Photographe Bordeaux"

---

**Projet réalisé dans le cadre du parcours développeur web – OpenClassrooms**

---

### Présentation

Ce projet consiste à optimiser le référencement naturel (SEO) et les performances du site vitrine de Nina Carducci, photographe professionnelle à Bordeaux. L’objectif est d’améliorer la visibilité du site sur les moteurs de recherche, d’optimiser le temps de chargement et d’assurer une expérience utilisateur optimale, tout en respectant les standards du web.

---

### Fonctionnalités principales

- **Site vitrine responsive** présentant :
  - Un carrousel d’images en page d’accueil
  - Une section "À propos"
  - Un portfolio filtrable (concerts, entreprises, mariages, portraits)
  - La présentation des services et tarifs
  - Un formulaire de contact
  - Intégration des réseaux sociaux (Instagram)

- **Optimisations SEO** :
  - Balises meta (title, description, Open Graph, Twitter Cards)
  - Balises sémantiques (h1, h2, etc.)
  - Données structurées (schema.org LocalBusiness)
  - Attributs alt descriptifs sur toutes les images
  - URL et structure optimisées

- **Optimisations techniques** :
  - Préchargement des ressources critiques (CSS, images, scripts)
  - Chargement différé (lazy loading) des images non critiques
  - Minification CSS/JS
  - Utilisation de formats d’images modernes (WebP)
  - .htaccess pour la gestion du cache et la sécurité
  - Rapport Lighthouse intégré

---

### Installation et utilisation

**Prérequis** :
- Node.js (v16+ recommandé)
- npm

**Installation** :
1. Cloner le dépôt :
   ```bash
   git clone https://github.com/ABRSCS/P8-SEO.git
   cd P8-SEO
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Lancer le serveur local :
   ```bash
   node server.js
   ```
   Le site sera accessible sur `http://localhost:3000` (ou le port configuré).

---

### Structure du projet

```
P8-SEO/
│
├── assets/                # Images, CSS, JS minifiés
│   ├── bootstrap/
│   ├── images/
│   ├── maugallery.min.js
│   ├── scripts.js
│   └── style.min.css
│
├── node_modules/          # Dépendances npm
│
├── .htaccess              # Optimisations serveur (cache, sécurité)
├── check_modules.php      # Vérification des modules PHP
├── index.html             # Page principale du site
├── optimize-images.js     # Script d’optimisation des images
├── package.json           # Dépendances et scripts npm
├── package-lock.json
├── server.js              # Serveur Node.js pour le développement
├── Rapport Lighthouse.html# Rapport d’audit de performance
└── README.md              # Ce fichier
```

---

### Points clés de l’optimisation SEO

- **Meta-données enrichies** : chaque page possède des balises meta adaptées pour le référencement et le partage sur les réseaux sociaux (Open Graph, Twitter Cards)[1].
- **Données structurées** : intégration du schéma LocalBusiness pour améliorer l’affichage dans les résultats Google[1].
- **Performance** : score élevé sur Lighthouse grâce à l’optimisation des ressources, du lazy loading, des images WebP et à la minification[1].
- **Accessibilité** : navigation clavier, textes alternatifs, contraste respecté[1].
- **Sécurité** : configuration .htaccess pour limiter les risques courants.

---

### Scripts utiles

- **Optimisation des images** :
  ```bash
  node optimize-images.js
  ```
- **Vérification HTML W3C** :
  Utiliser `server.js` pour servir le site et valider le HTML via les outils en ligne.

---

### Auteur

- ABRSCS pour OpenClassrooms – Projet 8

---

### Ressources externes

- [Bootstrap](https://getbootstrap.com/)
- [Maugallery](https://github.com/emn178/maugallery)
- [Google Fonts](https://fonts.google.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

### Rapport Lighthouse

Un rapport d’audit Lighthouse est disponible dans le fichier `Rapport Lighthouse.html` pour justifier les optimisations réalisées et les scores obtenus.

---

### Contact

Pour toute question ou contribution, merci d’ouvrir une issue sur le dépôt GitHub ou de contacter l’auteur via le formulaire du site.

---

> **NB :** Ce projet est un exercice pédagogique et n’est pas destiné à une mise en production commerciale.

---

[1]: Voir l’implémentation SEO et les optimisations dans le fichier `index.html` et les scripts associés (cf. contenu fourni).



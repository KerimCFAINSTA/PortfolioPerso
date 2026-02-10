# 🚀 Portfolio Web - Design Futuriste Cyberpunk

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Mobile_First-green?style=for-the-badge)
![Performance](https://img.shields.io/badge/Performance-GPU_Accelerated-blueviolet?style=for-the-badge)

Site portfolio one-page moderne avec esthétique cyberpunk, animations fluides et design futuriste. Présente mes compétences, projets académiques et personnels, mon parcours BTS SIO SLAM de manière interactive et visuellement attractive.

**[Voir le Portfolio en Ligne](https://kocait.fr)**

## Aperçu

Portfolio web moderne avec :
- **Design Cyberpunk** : Palette néon (cyan, magenta, jaune)
- **Animations Fluides** : Intersection Observer API + GPU acceleration
- **100% Responsive** : Mobile-first avec breakpoints optimisés
- **Navigation Sticky** : Scroll smooth + active link highlighting
- **Système de Modals** : 8 modals détaillées pour les projets
- **Effets Visuels** : Glow néon, blur backdrop, gradients animés

## Table des Matières

- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Sections](#-sections)
- [Projets Présentés](#-projets-présentés)
- [Installation](#-installation)
- [Architecture](#-architecture)
- [Design System](#-design-system)
- [Animations](#-animations)
- [Responsive Design](#-responsive-design)
- [Déploiement](#-déploiement)
- [Performances](#-performances)
- [Roadmap](#-roadmap)
- [Auteur](#-auteur)

## Fonctionnalités

### Navigation & Interface

**Navigation Sticky**
- Position fixe en haut de page
- Effet blur backdrop + bordure néon
- Hover effects avec glow
- Icône '>' animée au survol

**Scroll Smooth**
- Défilement fluide entre sections
- Mise en surbrillance du lien actif
- Navigation sans rechargement de page

**Animations au Scroll**
- Intersection Observer API
- Fade-in progressif des sections
- Transitions CSS optimisées (0.6s)

### Sections Interactives

| Section | Description | Fonctionnalités |
|---------|-------------|-----------------|
| **Accueil** | Hero section | Avatar animé + présentation |
| **À propos** | Présentation personnelle | Parcours, objectifs, motivations |
| **Entreprise** | Abby Ambers | Mission, rôle, réalisations |
| **BTS SIO** | Formation | Explication SLAM + compétences |
| **CV** | Curriculum Vitae | Visualisation + téléchargement PDF |
| **Parcours** | Timeline | Expériences professionnelles |
| **Compétences** | Skills Grid | Tags par catégorie (langages, frameworks) |
| **Projets** | Portfolio projets | 8 projets avec modals détaillées |
| **Veille** | Veille techno | Documentation PHP avancée |
| **Tableau** | Synthèse BTS | Compétences BTS SIO |
| **Contact** | Formulaire | Coordonnées + liens sociaux |

### Système de Modals Avancé

**8 Modals Détaillées** pour chaque projet :
- **Description complète** du projet
- **Stack technique** avec tags visuels
- **Fonctionnalités principales** en liste
- **Informations projet** : Durée, Contexte, Type
- **Badge responsive** si applicable
- **Liens ressources** :
  - Documentation PDF
  - Repository GitHub
  - Site déployé

**Méthodes de Fermeture** :
- Bouton close (X)
- Clic extérieur de la modal
- Touche Échap (ESC)

## Technologies

### Stack Frontend

| Catégorie | Technologie | Version | Justification |
|-----------|-------------|---------|---------------|
| **Structure** | HTML5 | - | Sémantique moderne |
| **Styles** | CSS3 | - | Animations, grilles, flexbox |
| **Interactivité** | JavaScript | ES6+ | Vanilla, APIs Web modernes |
| **Typographie** | Google Fonts | - | Orbitron + Rajdhani |

### Bibliothèques & APIs

**JavaScript Vanilla** (aucune dépendance npm)
- **Intersection Observer API** : Animations au scroll
- **Fetch API** : Potentiel formulaire contact
- **LocalStorage** : Sauvegarde préférences
- **DOM Events** : Interactions utilisateur

**CSS Moderne**
- **CSS Variables** (Custom Properties) : Thème cohérent
- **CSS Grid** : Layouts complexes
- **Flexbox** : Alignements
- **Keyframes** : Animations fluides
- **Transform & Transitions** : GPU-acceleration

## Sections

### 1. Accueil (Hero Section)

```html
<section id="accueil">
  <div class="hero-content">
    <div class="avatar-container">
      <!-- Avatar animé avec effet float + shine -->
    </div>
    <h1>Kerim Koca</h1>
    <p>Développeur Web Full-Stack | BTS SIO SLAM</p>
  </div>
</section>
```

**Animations** :
- Avatar : Float effect (translateY + rotate)
- Effet shine avec pseudo-élément ::before
- Bordure néon + box-shadow glow

### 2. À Propos

Présentation personnelle avec :
- Parcours professionnel
- Objectifs de carrière
- Motivations et passions
- Soft skills

### 3. Entreprise - Abby Ambers

**Présentation de l'entreprise d'alternance** :
- Secteur d'activité : Customisation textile
- Mon rôle : Développeur Web
- Missions principales
- Réalisations concrètes

### 4. BTS SIO SLAM

**Explication de la formation** :
- BTS Services Informatiques aux Organisations
- Option SLAM (Solutions Logicielles et Applications Métier)
- Compétences développées
- Projets académiques

### 5. CV

**Visualisation et téléchargement** :
- CV intégré dans la page
- Bouton de téléchargement PDF
- Version optimisée pour impression

### 6. Parcours

**Timeline interactive** avec :
- Expériences professionnelles
- Formation académique
- Projets marquants
- Design chronologique vertical

### 7. Compétences

**Grille de compétences** organisée par catégorie :

**Langages** : 
`PHP` `JavaScript` `HTML5` `CSS3` `SQL` `Java`

**Frameworks & Libraries** :
`Tailwind CSS` `Bootstrap` `Chart.js` `jQuery`

**Outils & Technologies** :
`Git` `GitHub` `VS Code` `XAMPP` `MySQL` `WordPress`

**Méthodologies** :
`MVC` `POO` `Agile` `Responsive Design`

### 8. Projets

**8 projets présentés** (voir section dédiée)

### 9. Veille Technologique

**Documentation complète sur PHP** :
- Nouvelles fonctionnalités PHP 8.x
- Best practices
- Patterns de conception
- Optimisations performances

### 10. Tableau Synthèse BTS

**Tableau récapitulatif** des compétences BTS SIO :
- Compétences techniques
- Compétences transverses
- Projets associés
- Niveau de maîtrise

### 11. Contact

**Formulaire de contact** avec :
- Nom, Email, Message
- Validation frontend
- Liens vers réseaux sociaux :
  - GitHub
  - LinkedIn
  - Email
  - Portfolio

## Projets Présentés

### Projets Académiques

#### 1. Chauffeur
**Application MVC de gestion**
- **Stack** : PHP, MySQL, HTML, CSS
- **Architecture** : MVC natif
- **Fonctionnalités** : CRUD complet, gestion utilisateurs
- **Contexte** : Projet BTS SIO SLAM

#### 2. Gestion Notes
**Système multi-rôles de gestion des notes**
- **Stack** : PHP, PDO, MySQL, MVC
- **Fonctionnalités** : 
  - Authentification sécurisée (bcrypt)
  - Gestion élèves/professeurs
  - CRUD notes avec validation
- **Sécurité** : Requêtes préparées, sessions

#### 3. Gestion Tickets GLPI
**Installation et configuration GLPI**
- **Environnement** : VM Linux
- **Technologies** : Apache, MySQL, PHP
- **Compétences** : Administration système, ticketing

#### 4. Site Statique SkillDev
**Site vitrine responsive**
- **Stack** : HTML5, CSS3
- **Features** : Design moderne, animations CSS
- **Responsive** : Mobile-first

### Projets Personnels

#### 5. DiamondLux
**Marketplace e-commerce de luxe**
- **Stack** : PHP, MySQL, JavaScript
- **Architecture** : MVC professionnel
- **Fonctionnalités** :
  - Catalogue avec filtres AJAX
  - Panier + codes promo
  - Wishlist
  - Dashboard analytics (Chart.js)
  - Système d'avis avec photos
- **Sécurité** : OWASP Top 10
- **Métriques** : 115h, 8000+ lignes, 15 tables BDD

#### 6. Portfolio Personnel
**Site portfolio one-page futuriste**
- **Stack** : HTML5, CSS3, JavaScript
- **Design** : Cyberpunk, palette néon
- **Features** :
  - Animations GPU-accelerated
  - Intersection Observer API
  - Système de modals
  - Dark theme
- **Ce projet actuel** 

#### 7. Site WordPress Abby Ambers
**E-commerce professionnel**
- **CMS** : WordPress + WooCommerce
- **Customisation** : Thème enfant personnalisé
- **Fonctionnalités** : Catalogue produits, paiement en ligne
- **SEO** : Optimisations complètes

#### 8. Site CMS SkillDeve
**Plateforme de formation en développement**
- **Statut** : En cours
- **Contexte** : Formation Udemy (70h)
- **Stack** : PHP, MySQL, CMS custom

## Installation

### Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Un éditeur de code (VS Code recommandé)
- Un serveur local (optionnel) : Live Server, XAMPP, Python

### Installation Locale

#### Option 1 : Ouverture Simple

```bash
# Cloner le repository
git clone https://github.com/votre-username/portfolio.git
cd portfolio

# Ouvrir index.html dans votre navigateur
# Double-clic sur le fichier OU
open index.html  # macOS
start index.html # Windows
```

#### Option 2 : Live Server (VS Code)

1. **Installer l'extension Live Server** dans VS Code
2. **Clic droit** sur `index.html`
3. Sélectionner **"Open with Live Server"**
4. Le site s'ouvre automatiquement : `http://127.0.0.1:5500`

#### Option 3 : Python HTTP Server

```bash
# Python 3
python -m http.server 8000

# Accéder à : http://localhost:8000
```

### Structure des Fichiers

```
portfolio/
│
├── index.html              # Page principale (structure complète)
├── README.md               # Documentation (ce fichier)
│
└── images/                 # Ressources visuelles
    ├── avatar.jpg          # Photo de profil
    ├── logo.png            # Logo personnel
    ├── cv.pdf              # CV téléchargeable
    └── projets/            # Screenshots projets
        ├── diamon.jpg
        ├── gestion-notes.jpg
        └── ...
```

## Architecture

### HTML5 Sémantique

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <!-- Meta tags SEO -->
  <!-- Google Fonts -->
  <!-- Styles CSS inline -->
</head>
<body>
  <!-- Navigation Sticky -->
  <nav>...</nav>
  
  <!-- Sections One-Page -->
  <section id="accueil">...</section>
  <section id="apropos">...</section>
  <section id="entreprise">...</section>
  <section id="bts-sio">...</section>
  <section id="cv">...</section>
  <section id="parcours">...</section>
  <section id="competences">...</section>
  <section id="projets">...</section>
  <section id="veille">...</section>
  <section id="tableau">...</section>
  <section id="contact">...</section>
  
  <!-- Footer -->
  <footer>...</footer>
  
  <!-- Modals Projets (x8) -->
  <div class="modal" id="modal-1">...</div>
  <div class="modal" id="modal-2">...</div>
  <!-- ... -->
  
  <!-- Scripts JavaScript -->
  <script>...</script>
</body>
</html>
```

### Organisation CSS

**Variables CSS** (Design System)
```css
:root {
  /* Couleurs Néon */
  --cyan: #00ffff;
  --magenta: #ff00ff;
  --yellow: #ffff00;
  --dark: #0a0a0a;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, var(--cyan), var(--magenta));
  --gradient-secondary: linear-gradient(135deg, var(--magenta), var(--yellow));
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  
  /* Typography */
  --font-title: 'Orbitron', sans-serif;
  --font-body: 'Rajdhani', sans-serif;
}
```

**Organisation par Sections**
```css
/* 1. Reset & Base */
*, *::before, *::after { ... }
body { ... }

/* 2. Background Animé */
body::before { /* Radial gradients */ }
body::after { /* Grille CSS */ }

/* 3. Navigation */
nav { position: fixed; backdrop-filter: blur(10px); }

/* 4. Sections */
section { min-height: 100vh; padding: var(--spacing-lg); }

/* 5. Composants */
.card { ... }
.button { ... }
.timeline { ... }

/* 6. Modals */
.modal { ... }

/* 7. Animations */
@keyframes fadeIn { ... }
@keyframes slideUp { ... }

/* 8. Responsive */
@media (max-width: 968px) { ... }
```

### JavaScript Modulaire

**Event Listeners**
```javascript
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Active Link Highlighting
window.addEventListener('scroll', () => {
  // Détection section visible
  // Ajout classe .active sur lien
});

// Modals
document.querySelectorAll('[data-project]').forEach(btn => {
  btn.addEventListener('click', () => {
    // Ouverture modal
  });
});

// Close Modal (ESC key)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Fermeture modal active
  }
});
```

**Intersection Observer**
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});
```

## Design System

### Palette de Couleurs Cyberpunk

| Couleur | Hex | Usage |
|---------|-----|-------|
| **Cyan Néon** | `#00ffff` | Accents principaux, bordures, glow |
| **Magenta Néon** | `#ff00ff` | Accents secondaires, hover effects |
| **Jaune Néon** | `#ffff00` | Call-to-actions, highlights |
| **Noir Profond** | `#0a0a0a` | Background principal |
| **Gris Foncé** | `#1a1a1a` | Cards, containers |
| **Blanc** | `#ffffff` | Texte principal |

### Typographie

**Polices Google Fonts**
- **Titres** : [Orbitron](https://fonts.google.com/specimen/Orbitron) (futuriste, tech)
- **Corps** : [Rajdhani](https://fonts.google.com/specimen/Rajdhani) (moderne, lisible)

**Hiérarchie**
```css
h1 { font-size: 4.5rem; /* 72px */ }
h2 { font-size: 3.5rem; /* 56px */ }
h3 { font-size: 2.5rem; /* 40px */ }
h4 { font-size: 1.8rem; /* 28px */ }
p  { font-size: 1.1rem; /* 17.6px */ }
```

### Effets Visuels

#### Glow Néon
```css
.glow {
  box-shadow: 
    0 0 10px var(--cyan),
    0 0 20px var(--cyan),
    0 0 30px var(--cyan),
    0 0 40px var(--cyan);
}
```

#### Backdrop Blur
```css
nav {
  backdrop-filter: blur(10px);
  background: rgba(10, 10, 10, 0.8);
}
```

#### Gradients Animés
```css
@keyframes bgPulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}
```

## Animations

### Fade-in au Scroll

**HTML**
```html
<section class="fade-in">
  <h2>Titre Section</h2>
  <p>Contenu...</p>
</section>
```

**CSS**
```css
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**JavaScript** (Intersection Observer)
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});
```

### Animations CSS Keyframes

**Float Effect** (Avatar)
```css
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.avatar {
  animation: float 6s ease-in-out infinite;
}
```

**Shine Effect** (Avatar)
```css
@keyframes shine {
  0% { left: -100%; }
  100% { left: 200%; }
}

.avatar::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.3), 
    transparent);
  animation: shine 3s infinite;
}
```

**Pulse Background**
```css
@keyframes bgPulse {
  0%, 100% { 
    opacity: 0.3; 
    transform: scale(1) translate(-50%, -50%); 
  }
  50% { 
    opacity: 0.6; 
    transform: scale(1.1) translate(-50%, -50%); 
  }
}
```

### Hover Effects

**Cards Hover**
```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 
    0 0 20px var(--cyan),
    0 10px 40px rgba(0, 255, 255, 0.3);
  border-color: var(--cyan);
}
```

**Buttons Hover** (Fill Effect)
```css
.button {
  position: relative;
  overflow: hidden;
}

.button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--gradient-primary);
  transition: left 0.3s ease;
  z-index: -1;
}

.button:hover::before {
  left: 0;
}
```

## Responsive Design

### Breakpoints

| Device | Breakpoint | Layout |
|--------|-----------|--------|
| **Desktop** | > 968px | Design par défaut (multi-colonnes) |
| **Tablette** | 768px - 968px | Media query active |
| **Mobile** | < 768px | Layout 1 colonne |

### Media Query Principale

```css
@media (max-width: 968px) {
  /* Navigation */
  nav {
    flex-direction: column;
    gap: 1rem;
  }
  
  /* Hero Section */
  #accueil .hero-content {
    grid-template-columns: 1fr;
  }
  
  .avatar {
    width: 250px;
    height: 250px;
  }
  
  /* Typography */
  h1 { font-size: 3rem; }
  h2 { font-size: 2.5rem; }
  
  /* Grilles */
  .grid-2 { grid-template-columns: 1fr; }
  .grid-3 { grid-template-columns: 1fr; }
  
  /* Modal Footer */
  .modal-footer {
    flex-direction: column;
    gap: 1rem;
  }
}
```

### Optimisations Mobile

**Viewport Meta Tag**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Touch-Friendly**
- Boutons/liens : Taille minimale 44x44px
- Espacement suffisant entre éléments cliquables

**Performance**
- Animations GPU-accélérées (`transform`, `opacity`)
- Pas de layout reflow

**Overflow**
- Gestion scroll mobile native
- `overflow-x: hidden` sur body

## Déploiement

### Plateformes Recommandées

#### 1. Netlify (⭐ Recommandé)

**Avantages** :
- Hébergement gratuit sites statiques
- Déploiement automatique depuis GitHub
- HTTPS automatique (Let's Encrypt)
- CDN global intégré
- Formulaires sans backend
- Domaine custom gratuit

**Étapes** :
1. Créer un compte sur [Netlify](https://www.netlify.com)
2. Connecter votre repository GitHub
3. Configuration build :
   - **Build command** : (vide)
   - **Publish directory** : `/` (racine)
4. Deploy automatique à chaque push

**URL générée** : `https://votre-site.netlify.app`

#### 2. GitHub Pages

**Avantages** :
- Gratuit
- Intégré à GitHub
- Facile à configurer

**Étapes** :
1. Repository GitHub → Settings → Pages
2. Source : Branch `main` → Folder `/` (root)
3. Save

**URL générée** : `https://username.github.io/portfolio`

#### 3. Vercel

**Similaire à Netlify**
- Gratuit pour projets personnels
- Déploiement automatique
- CDN global

**Étapes** :
1. Compte sur [Vercel](https://vercel.com)
2. Import GitHub repository
3. Deploy automatique

#### 4. Firebase Hosting

**Plateforme Google**
- CDN Google
- HTTPS automatique
- CLI pour déploiement

### Optimisations Production

#### Minification

**HTML**
```bash
# Outil : html-minifier
npm install -g html-minifier
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
```

**CSS**
```bash
# Outil : cssnano
npm install -g cssnano-cli
cssnano style.css style.min.css
```

**JavaScript**
```bash
# Outil : terser
npm install -g terser
terser script.js -o script.min.js
```

#### Compression Images

```bash
# Outil : ImageOptim, TinyPNG
# Format recommandé : WebP
```

#### Headers de Cache

**Netlify** (`netlify.toml`)
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
```

## Performances

### Optimisations Appliquées

**GPU Acceleration**
```css
.animated {
  transform: translateZ(0);
  will-change: transform, opacity;
}
```

**Intersection Observer**
- Pas de scroll event listeners lourds
- Animations déclenchées uniquement quand visible

**CSS au lieu de JS**
- Transitions CSS natives
- Keyframes animations
- Meilleure performance

**Debouncing** (si scroll events)
```javascript
let timeout;
window.addEventListener('scroll', () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    // Code optimisé
  }, 100);
});
```

### Métriques Lighthouse

**Objectifs** :
- 🟢 Performance : > 90
- 🟢 Accessibilité : > 90
- 🟢 Best Practices : > 90
- 🟢 SEO : > 90

**Améliorations futures** :
- Lazy loading images
- Service Worker pour cache
- WebP pour images
- Preload fonts critiques

## Roadmap

### Court Terme (1-2 semaines)

| Tâche | Priorité | Estimation |
|-------|----------|------------|
| **Formulaire contact fonctionnel** | 🔴 Haute | 4-6h |
| Backend EmailJS/Formspree | | |
| **Meta tags SEO** | 🔴 Haute | 2-3h |
| Open Graph, Twitter Cards | | |
| **Attributs alt images** | 🟡 Moyenne | 1-2h |
| Accessibilité | | |
| **Google Analytics** | 🟡 Moyenne | 1h |
| Suivi visiteurs | | |

### Moyen Terme (1 mois)

- [ ] **Mode sombre/clair** : Toggle theme avec localStorage
- [ ] **Blog intégré** : Articles techniques (Markdown → HTML)
- [ ] **Multilingue** : Français/Anglais (i18n)
- [ ] **Animations réduites** : `prefers-reduced-motion` media query
- [ ] **Service Worker** : Cache offline, PWA
- [ ] **Lazy loading** : Images chargées à la demande
- [ ] **WebP images** : Format optimisé

### Long Terme (3-6 mois)

- [ ] **API Backend** : Node.js/Express pour fonctionnalités avancées
- [ ] **CMS Headless** : Gestion contenu dynamique (Strapi, Contentful)
- [ ] **Animations 3D** : Three.js pour effets cyberpunk
- [ ] **Easter eggs** : Jeux cachés, Matrix rain, etc.
- [ ] **Analytics avancées** : Hotjar, heatmaps
- [ ] **A/B Testing** : Optimisation conversions
- [ ] **Version mobile app** : PWA installable

## Statistiques

### Code

| Métrique | Valeur |
|----------|--------|
| Lignes HTML | ~800 |
| Lignes CSS | ~1200 |
| Lignes JavaScript | ~300 |
| Fichiers | 1 (index.html) |
| Sections | 11 |
| Modals | 8 |
| Projets présentés | 8 |

### Animations

| Type | Nombre |
|------|--------|
| Keyframes CSS | 5+ |
| Transitions | 20+ |
| Hover effects | 15+ |
| Scroll animations | 11 |

### Responsive

| Breakpoint | Adaptations |
|-----------|-------------|
| Mobile (< 768px) | 15+ adaptations |
| Tablette (768-968px) | 10+ adaptations |

## Compétences Démontrées

Ce portfolio démontre une maîtrise de :

**HTML5 sémantique** et structuré  
**CSS3 avancé** : Animations, grilles, variables, keyframes  
**JavaScript ES6+** moderne : APIs Web, async/await  
**Responsive design** mobile-first  
**Intersection Observer API** : Animations au scroll  
**Système de modals** complet et accessible  
**GPU acceleration** : Optimisation performances  
**Design UX/UI** : Esthétique cyberpunk professionnelle  
**Accessibilité** : Navigation clavier, ARIA (en amélioration)  
**Git & GitHub** : Versioning, déploiement  
**Documentation** : README complet, code commenté  

## Auteur

**Kerim Koca** - Développeur Web Full-Stack  
🎓 BTS SIO SLAM - Alternance Abby Ambers

Vous êtes libre de :
- Utiliser ce code pour votre propre portfolio
- Modifier et adapter le design
- Partager et distribuer

## 🙏 Remerciements

- **Google Fonts** : Orbitron & Rajdhani
- **MDN Web Docs** : Documentation HTML/CSS/JS
- **CSS-Tricks** : Tutoriels animations et grilles
- **Intersection Observer API** : Animations performantes
- **Netlify** : Hébergement gratuit et fiable

## 📚 Ressources Utiles

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Google Fonts](https://fonts.google.com/)
- [Netlify Docs](https://docs.netlify.com/)
- [Can I Use](https://caniuse.com/)

---

**⭐ Si ce portfolio vous inspire, n'hésitez pas à lui donner une étoile sur GitHub !**


```
████████████████████████████████████████████████████
█   PORTFOLIO WEB - DESIGN CYBERPUNK            █
█  Animations fluides | GPU-accelerated          █
█  Responsive 100% | One-page navigation         █
█  8 projets détaillés | Modals interactives     █
████████████████████████████████████████████████████
```

**Design Futuriste | Performance Optimale | 100% Responsive**

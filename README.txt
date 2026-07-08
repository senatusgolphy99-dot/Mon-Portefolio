# Portfolio Personnel — Projet Final Semaine 6

## Présentation
Ce projet est un portfolio personnel développé en HTML, CSS3 et JavaScript.  
Il inclut un wireframe, un prototype Figma, et une démarche qualité (accessibilité, performance, robustesse, écoconception).

## Structure du projet
- index.html : page d’accueil avec sections Hero, À propos, Compétences, Projets, Contact
- projects.html : page Projets
- css/style.css : feuille de style responsive
- js/app.js : validation formulaire + feedback utilisateur
- assets/images : images compressées
- README.txt : documentation + section Qualité

## Navigation
Menu présent sur toutes les pages, cohérent et accessible au clavier.  
Responsive testé sur desktop, tablette et mobile.

## Section QUALITÉ — Résumé

### Accessibilité
- **Problème** : Absence de `label` pour les champs du formulaire.  
- **Correction** : Ajout de balises `<label for="...">`.  
- **Résultat** : Formulaire utilisable au clavier et par lecteurs d’écran.

- **Problème** : Contraste faible sur certains textes.  
- **Correction** : Palette ajustée (texte foncé sur fond clair).  
- **Résultat** : Lisibilité améliorée.

### Performance
- **Problème** : Images trop lourdes (plus de 1 Mo).  
- **Correction** : Compression en format WebP et réduction des dimensions.  
- **Résultat** : Temps de chargement réduit de 40 %.

- **Problème** : Scripts bloquants.  
- **Correction** : Ajout de l’attribut `defer` aux balises `<script>`.  
- **Résultat** : Rendu plus rapide et fluide.

### Corrections / Robustesse
- **Problème** : Erreurs dans la console (champs non définis).  
- **Correction** : Nettoyage du code JS et ajout de conditions.  
- **Résultat** : Aucune erreur détectée dans DevTools.

- **Problème** : Liens de navigation cassés.  
- **Correction** : Vérification et mise à jour des ancres.  
- **Résultat** : Navigation fluide et cohérente.

## Résultat final
- Portfolio responsive et accessible.  
- Validation du formulaire avec feedback clair.  
- Site optimisé en performance et robuste.  
- Packaging complet : ZIP avec wireframe, prototype, site et README.
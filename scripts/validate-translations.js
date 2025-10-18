#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  messagesPath: path.join(__dirname, '..', 'messages'),
  skillDetailsPath: path.join(__dirname, '..', 'src', 'app', '[locale]', 'components', 'skills', 'skillDetails.tsx'),
  supportedLocales: ['fr', 'en'],
  exitOnError: process.env.NODE_ENV === 'production'
};

// Cache pour éviter de relire les fichiers
let translationsCache = null;

// Fonction utilitaire pour lire les fichiers de traduction avec cache
function loadTranslations() {
  if (translationsCache) {
    return translationsCache;
  }

  const translations = {};
  
  for (const locale of CONFIG.supportedLocales) {
    const filePath = path.join(CONFIG.messagesPath, `${locale}.json`);
    
    try {
      if (!fs.existsSync(filePath)) {
        console.warn(`⚠️  Fichier de traduction manquant: ${filePath}`);
        continue;
      }
      
      const content = fs.readFileSync(filePath, 'utf8');
      translations[locale] = JSON.parse(content);
    } catch (error) {
      console.error(`❌ Erreur lors de la lecture de ${filePath}:`, error.message);
      if (CONFIG.exitOnError) {
        process.exit(1);
      }
    }
  }
  
  translationsCache = translations;
  return translations;
}

// Extraire les clés de compétences des traductions (optimisé)
function extractSkillKeys(translations) {
  const skills = translations.skills?.list || {};
  const allKeys = [];
  
  // Utilisation d'Object.entries pour de meilleures performances
  for (const [category, categorySkills] of Object.entries(skills)) {
    if (typeof categorySkills === 'object' && categorySkills !== null) {
      for (const key of Object.keys(categorySkills)) {
        allKeys.push(`${category}.${key}`);
      }
    }
  }
  
  return allKeys;
}

// Extraire les clés du fichier skillDetails.tsx (optimisé avec cache)
let skillDetailsCache = null;

function extractSkillDetailsKeys() {
  if (skillDetailsCache) {
    return skillDetailsCache;
  }

  try {
    if (!fs.existsSync(CONFIG.skillDetailsPath)) {
      console.warn(`⚠️  Fichier skillDetails.tsx manquant: ${CONFIG.skillDetailsPath}`);
      return [];
    }

    const content = fs.readFileSync(CONFIG.skillDetailsPath, 'utf8');
    const keys = [];
    
    // Regex optimisée pour trouver les clés dans les objets
    const keyRegex = /key:\s*["']([^"']+)["']/g;
    let match;
    
    while ((match = keyRegex.exec(content)) !== null) {
      keys.push(match[1]);
    }
    
    skillDetailsCache = keys;
    return keys;
  } catch (error) {
    console.error(`❌ Erreur lors de la lecture de skillDetails.tsx:`, error.message);
    return [];
  }
}

// Fonction principale de validation (optimisée)
function validateTranslations() {
  console.log('🔍 Validation des traductions de compétences...\n');
  
  const translations = loadTranslations();
  const skillDetailsKeys = extractSkillDetailsKeys();
  
  // Validation des traductions par locale
  const validationResults = {};
  let hasErrors = false;
  
  for (const [locale, translationData] of Object.entries(translations)) {
    const keys = extractSkillKeys(translationData);
    validationResults[locale] = keys;
    
    console.log(`📊 ${locale.toUpperCase()}: ${keys.length} clés de compétences`);
  }
  
  console.log(`📊 skillDetails.tsx: ${skillDetailsKeys.length} clés\n`);
  
  // Vérifications optimisées avec Set pour de meilleures performances
  const frKeys = validationResults.fr || [];
  const enKeys = validationResults.en || [];
  const skillDetailsSet = new Set(skillDetailsKeys);
  const frKeysSet = new Set(frKeys);
  const enKeysSet = new Set(enKeys);
  
  // Vérifier les clés manquantes dans skillDetails.tsx
  const missingInSkillDetails = frKeys.filter(key => {
    const skillKey = key.split('.')[1];
    return !skillDetailsSet.has(skillKey);
  });
  
  if (missingInSkillDetails.length > 0) {
    console.log('❌ Clés présentes dans les traductions mais manquantes dans skillDetails.tsx:');
    missingInSkillDetails.forEach(key => console.log(`   - ${key}`));
    console.log('');
    hasErrors = true;
  }
  
  // Vérifier les clés manquantes dans les traductions
  const missingInTranslations = skillDetailsKeys.filter(skillKey => {
    return !frKeys.some(key => key.endsWith(`.${skillKey}`));
  });
  
  if (missingInTranslations.length > 0) {
    console.log('❌ Clés présentes dans skillDetails.tsx mais manquantes dans les traductions:');
    missingInTranslations.forEach(key => console.log(`   - ${key}`));
    console.log('');
    hasErrors = true;
  }
  
  // Vérifier la cohérence entre fr et en (optimisé avec Set)
  const inconsistentKeys = frKeys.filter(key => !enKeysSet.has(key));
  if (inconsistentKeys.length > 0) {
    console.log('❌ Clés présentes en français mais manquantes en anglais:');
    inconsistentKeys.forEach(key => console.log(`   - ${key}`));
    console.log('');
    hasErrors = true;
  }
  
  const inconsistentKeysEn = enKeys.filter(key => !frKeysSet.has(key));
  if (inconsistentKeysEn.length > 0) {
    console.log('❌ Clés présentes en anglais mais manquantes en français:');
    inconsistentKeysEn.forEach(key => console.log(`   - ${key}`));
    console.log('');
    hasErrors = true;
  }
  
  // Résultat final
  if (!hasErrors) {
    console.log('✅ Toutes les traductions sont cohérentes !');
  } else {
    console.log('⚠️  Des incohérences ont été détectées. Corrigez-les pour éviter les erreurs d\'hydratation.');
    if (CONFIG.exitOnError) {
      process.exit(1);
    }
  }
}

// Exécuter la validation
validateTranslations();

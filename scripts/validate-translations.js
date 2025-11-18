#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// File paths
const messagesDir = path.join(__dirname, '..', 'messages');
const skillDetailsPath = path.join(__dirname, '..', 'src', 'app', '[locale]', 'components', 'skills', 'skillDetails.tsx');

// Read translation files
const enTranslations = JSON.parse(fs.readFileSync(path.join(messagesDir, 'en.json'), 'utf8'));
const frTranslations = JSON.parse(fs.readFileSync(path.join(messagesDir, 'fr.json'), 'utf8'));

// Extract keys used in skillDetails.tsx
const skillDetailsContent = fs.readFileSync(skillDetailsPath, 'utf8');
const keyMatches = skillDetailsContent.match(/key:\s*"([^"]+)"/g);
const usedKeys = keyMatches ? keyMatches.map(match => match.match(/"([^"]+)"/)[1]) : [];

console.log('🔍 Validation des traductions...\n');

let hasErrors = false;

// Check each used key
usedKeys.forEach(key => {
  const enExists = enTranslations.skills?.list?.languages?.[key] || 
                   enTranslations.skills?.list?.frameworks?.[key] ||
                   enTranslations.skills?.list?.mobile?.[key] ||
                   enTranslations.skills?.list?.database?.[key] ||
                   enTranslations.skills?.list?.tools?.[key];
  
  const frExists = frTranslations.skills?.list?.languages?.[key] || 
                   frTranslations.skills?.list?.frameworks?.[key] ||
                   frTranslations.skills?.list?.mobile?.[key] ||
                   frTranslations.skills?.list?.database?.[key] ||
                   frTranslations.skills?.list?.tools?.[key];

  if (!enExists || !frExists) {
    console.error(`❌ Clé manquante: "${key}"`);
    if (!enExists) console.error(`   - Manquante dans en.json`);
    if (!frExists) console.error(`   - Manquante dans fr.json`);
    hasErrors = true;
  } else {
    console.log(`✅ Clé valide: "${key}"`);
  }
});

// Check for orphaned keys in translations
const allTranslationKeys = new Set();
Object.values(enTranslations.skills?.list || {}).forEach(category => {
  Object.keys(category).forEach(key => allTranslationKeys.add(key));
});

const orphanKeys = [...allTranslationKeys].filter(key => !usedKeys.includes(key));
if (orphanKeys.length > 0) {
  console.log(`\n⚠️  Clés orphelines (non utilisées): ${orphanKeys.join(', ')}`);
}

if (hasErrors) {
  console.log('\n❌ Des erreurs ont été trouvées. Veuillez les corriger avant de continuer.');
  process.exit(1);
} else {
  console.log('\n✅ Toutes les traductions sont cohérentes !');
}


export function validateTranslationKeys(obj1: Record<string, string>, obj2: Record<string, string>): void {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();

  if (JSON.stringify(keys1) !== JSON.stringify(keys2)) {
    throw new Error(`Translation keys mismatch!\nMissing in first: ${keys2.filter(k => !keys1.includes(k))}\nMissing in second: ${keys1.filter(k => !keys2.includes(k))}`);
  }
}

// validateTranslationKeys(langEN, langUA); // Throws error if keys don't match
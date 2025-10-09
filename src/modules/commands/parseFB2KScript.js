// ---------------------------------------------------------
// Copyright 2025 Thorn Duke. All rights reserved.
// Licensed under the MIT License.
// See LICENSE in the project root for license information.
// ---------------------------------------------------------
// Helper function to find matching closing parenthesis
function findClosingParen(str, startIdx) {
  let depth = 1;
  let inQuotes = false;

  for (let i = startIdx; i < str.length; i++) {
    if (str[i] === "'" && (i === 0 || str[i - 1] !== '\\')) {
      inQuotes = !inQuotes;
    }
    if (!inQuotes) {
      if (str[i] === '(') depth++;
      if (str[i] === ')') {
        depth--;
        if (depth === 0) return i;
      }
    }
  }
  return -1;
}

// Helper function to extract second parameter
function extractSecondParam(content) {
  let depth = 0;
  let inQuotes = false;

  for (let i = 0; i < content.length; i++) {
    if (content[i] === "'" && (i === 0 || content[i - 1] !== '\\')) {
      inQuotes = !inQuotes;
    }
    if (!inQuotes) {
      if (content[i] === '(') depth++;
      if (content[i] === ')') depth--;
      if (content[i] === ',' && depth === 0) {
        return content.substring(i + 1);
      }
    }
  }
  return '';
}

// Helper function to extract variable name (first parameter)
function extractVarName(content) {
  let depth = 0;
  let inQuotes = false;

  for (let i = 0; i < content.length; i++) {
    if (content[i] === "'" && (i === 0 || content[i - 1] !== '\\')) {
      inQuotes = !inQuotes;
    }
    if (!inQuotes) {
      if (content[i] === '(') depth++;
      if (content[i] === ')') depth--;
      if (content[i] === ',' && depth === 0) {
        return content.substring(0, i);
      }
    }
  }
  return content;
}

function parseFB2KScript(script) {
  let lines = script.split('\n');

  // Step 1: Remove comment lines (lines starting with //)
  lines = lines.filter((line) => !line.startsWith('//'));

  // Step 2: Remove indentation
  lines = lines.map((line) => line.trim());

  // Step 3: Remove empty lines
  lines = lines.filter((line) => line.length > 0);

  // Step 4: Join into single line
  let code = lines.join('');

  // Step 5: Parse and substitute variables
  const variables = new Map();
  const putVars = new Map();

  // First pass: collect all $puts and $put definitions
  let idx = 0;
  while (idx < code.length) {
    if (code.substring(idx, idx + 6) === '$puts(') {
      let closeIdx = findClosingParen(code, idx + 6);
      if (closeIdx !== -1) {
        let content = code.substring(idx + 6, closeIdx);
        let varName = extractVarName(content);
        let value = extractSecondParam(content);
        variables.set(varName, value);
      }
      idx++;
    } else if (code.substring(idx, idx + 5) === '$put(') {
      let closeIdx = findClosingParen(code, idx + 5);
      if (closeIdx !== -1) {
        let content = code.substring(idx + 5, closeIdx);
        let varName = extractVarName(content);
        let value = extractSecondParam(content);
        putVars.set(varName, value);
        variables.set(varName, value);
      }
      idx++;
    } else {
      idx++;
    }
  }

  // Second pass: replace $get() with values (recursive substitution)
  let maxIterations = 100;
  let iteration = 0;
  let changed = true;

  while (changed && iteration < maxIterations) {
    changed = false;
    iteration++;
    let newCode = '';
    let i = 0;

    while (i < code.length) {
      if (code.substring(i, i + 5) === '$get(') {
        let closeIdx = findClosingParen(code, i + 5);
        if (closeIdx !== -1) {
          let varName = code.substring(i + 5, closeIdx);
          if (variables.has(varName)) {
            newCode += variables.get(varName);
            changed = true;
          } else {
            // Variable not defined, remove $get()
            changed = true;
          }
          i = closeIdx + 1;
        } else {
          newCode += code[i];
          i++;
        }
      } else {
        newCode += code[i];
        i++;
      }
    }

    code = newCode;

    // Update variable values with substituted content
    for (let [varName, value] of variables.entries()) {
      let updatedValue = value;
      let j = 0;
      let newValue = '';

      while (j < updatedValue.length) {
        if (updatedValue.substring(j, j + 5) === '$get(') {
          let closeIdx = findClosingParen(updatedValue, j + 5);
          if (closeIdx !== -1) {
            let refVarName = updatedValue.substring(j + 5, closeIdx);
            if (variables.has(refVarName)) {
              newValue += variables.get(refVarName);
            }
            j = closeIdx + 1;
          } else {
            newValue += updatedValue[j];
            j++;
          }
        } else {
          newValue += updatedValue[j];
          j++;
        }
      }

      if (newValue !== value) {
        variables.set(varName, newValue);
        changed = true;
      }
    }
  }

  // Step 6: Remove all $puts() instructions
  let result = '';
  let i = 0;

  while (i < code.length) {
    if (code.substring(i, i + 6) === '$puts(') {
      let closeIdx = findClosingParen(code, i + 6);
      if (closeIdx !== -1) {
        i = closeIdx + 1;
      } else {
        result += code[i];
        i++;
      }
    } else {
      result += code[i];
      i++;
    }
  }

  code = result;

  // Step 7: Replace $put() with second parameter
  result = '';
  i = 0;

  while (i < code.length) {
    if (code.substring(i, i + 5) === '$put(') {
      let closeIdx = findClosingParen(code, i + 5);
      if (closeIdx !== -1) {
        let content = code.substring(i + 5, closeIdx);
        let value = extractSecondParam(content);
        result += value;
        i = closeIdx + 1;
      } else {
        result += code[i];
        i++;
      }
    } else {
      result += code[i];
      i++;
    }
  }

  code = result;

  // Step 8: Clean up single quotes around spaces
  result = '';
  i = 0;

  while (i < code.length) {
    if (code[i] === "'") {
      let j = i + 1;
      let hasOnlySpaces = true;
      let content = '';

      while (j < code.length && code[j] !== "'") {
        content += code[j];
        if (code[j] !== ' ') {
          hasOnlySpaces = false;
        }
        j++;
      }

      if (j < code.length && code[j] === "'") {
        if (hasOnlySpaces && content.length > 0) {
          // Only spaces: remove quotes but keep spaces
          result += content;
          i = j + 1;
        } else {
          // Not only spaces or empty: keep as is (including quotes)
          result += code.substring(i, j + 1);
          i = j + 1;
        }
      } else {
        result += code[i];
        i++;
      }
    } else {
      result += code[i];
      i++;
    }
  }

  return result;
}

module.exports = {
  parseFB2KScript
};

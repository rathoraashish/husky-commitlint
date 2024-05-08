module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Enforce lowercase commit type
    'type-case': [2, 'always', 'lower-case'],
    // Enforce uppercase scope
    'scope-case': [2, 'always', 'upper-case'],
    // Enforce subject and body to start with capital letters
    'subject-case': [2, 'always', ['sentence-case', 'start-case', 'upper-case']],
    // Maximum length for the subject
    'subject-max-length': [2, 'always', 100],
    // Allow empty commit footer
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert']],
  },
};

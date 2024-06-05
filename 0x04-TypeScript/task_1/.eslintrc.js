
module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
    "@typescript-eslint/naming-convention": [
  "error",
  {
    "selector": "variable",
    "format": [
      "camelCase",
      "PascalCase",
      "UPPER_CASE"
    ]
  },
  {
    "selector": "function",
    "format": [
      "camelCase",
      "PascalCase",
    ]
  },
  {
    "selector": "typeLike",
    "format": [
      "camelCase",
      "PascalCase"
    ]
  },
  {
    "selector": "interface",
    "format": ["PascalCase", "camelCase"]
  }
]
  },
};

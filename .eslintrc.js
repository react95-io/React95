module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jsx-a11y/label-has-associated-control": [ "error", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }],
    "jsx-a11y/label-has-associated-control": ["error", { assert: "either" } ],
    "jsx-a11y/label-has-for": 'off'
  }
}

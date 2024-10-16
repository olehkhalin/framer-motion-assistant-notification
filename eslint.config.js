import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tailwind from "eslint-plugin-tailwindcss";
import simpleImportSort from "eslint-plugin-simple-import-sort";
// import importPlugin from 'eslint-plugin-import';
import unusedImports from "eslint-plugin-unused-imports";



export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettierRecommended,
      ...tailwind.configs["flat/recommended"],
      // importPlugin.flatConfigs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // "react/self-closing-comp": [
      //   "error",
      //   {
      //     component: true,
      //     html: true,
      //   },
      // ],

      'jsx-a11y/alt-text': 'error',


      'simple-import-sort/imports': [
        'error',
        {
          groups: [
              // Packages `react` related packages come first.
              ["^react", "^@\\w", "^\\w", "^lib(/.*|$)"],
              // Internal packages.
              [
                "^types(/.*|$)",
                "^i18n(/.*|$)",
                "^store(/.*|$)",
                "^api(/.*|$)",
                "^provider(/.*|$)",
                "^configs(/.*|$)",
              ],
              [
                "^utils(/.*|$)",
                "^hooks(/.*|$)",
                "^pages(/.*|$)",
                "^steps(/.*|$)",
                "^blocks(/.*|$)",
                "components/ui(/.*|$)",
                "components/common(/.*|$)",
                "^components(/.*|$)",
                "^styles(/.*|$)",
                "^assets(/.*|$)",
              ],
              // Side effect imports.
              ["^\\u0000"],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports.
              ["^\\.(?!/?$).+\\.?(sass)$"],
            ]
        }
      ],
      'simple-import-sort/exports': 'error',

      // "import/first": "error",
      // "import/no-relative-parent-imports": "error",
      // "import/newline-after-import": "error",
      // "import/no-duplicates": "error",

      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
)

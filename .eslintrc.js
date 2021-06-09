module.exports = {
    root: true,

    env: {
        node: true
    },

    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],

    parserOptions: {
        ecmaVersion: 2020
    },

    rules: {
        semi: 2,
        'no-console': 'off',
        'no-debugger': 'off',
        indent: [
            'error',
            4
        ],
        'vue/script-indent': [
            'error',
            4
        ],
        'vue/attribute-hyphenation': 'error',
        'vue/html-end-tags': 'warn',
        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': 'warn',
        'vue/mustache-interpolation-spacing': 'warn',
        'vue/next-tick-style': 'error',
        'vue/no-async-in-computed-properties': 'warn',
        'vue/no-confusing-v-for-v-if': 'error',
        'vue/no-deprecated-dollar-listeners-api': 'warn',
        'vue/no-deprecated-dollar-scopedslots-api': 'warn',
        'vue/no-deprecated-events-api': 'warn',
        'vue/no-deprecated-filter': 'warn',
        'vue/no-deprecated-functional-template': 'warn',
        'vue/no-deprecated-html-element-is': 'warn',
        'vue/no-deprecated-props-default-this': 'warn',
        'vue/no-deprecated-scope-attribute': 'warn',
        'vue/no-deprecated-slot-attribute': 'warn',
        'vue/no-deprecated-slot-scope-attribute': 'warn',
        'vue/no-deprecated-v-bind-sync': 'warn',
        'vue/no-deprecated-v-on-native-modifier': 'warn',
        'vue/no-deprecated-v-on-number-modifiers': 'warn',
        'vue/no-deprecated-vue-config-keycodes': 'warn',
        'vue/no-dupe-keys': 'error',
        'vue/no-dupe-v-else-if': 'error',
        'vue/no-duplicate-attributes': 'warn',
        'vue/no-empty-component-block': 'warn',
        'vue/no-irregular-whitespace': 'warn',
        'vue/no-lone-template': 'warn',
        'vue/no-mutating-props': 'error',
        'vue/no-ref-as-operand': 'error',
        'vue/no-reserved-component-names': 'error',
        'vue/no-static-inline-styles': 'warn',
        'vue/no-template-shadow': 'warn',
        'vue/no-template-target-blank': 'warn',
        'vue/no-textarea-mustache': 'warn',
        'vue/no-unregistered-components': 'error',
        'vue/no-unsupported-features': 'warn',
        'vue/no-unused-components': 'error',
        'vue/no-unused-properties': 'warn',
        'vue/no-useless-mustaches': 'warn',
        'vue/no-useless-v-bind': 'warn',
        'vue/no-v-html': 'error',
        'vue/no-watch-after-await': 'warn',
        'vue/one-component-per-file': 'warn',
        'vue/this-in-template': 'warn',
        'vue/use-v-on-exact': 'warn',
        'vue/v-bind-style': 'error',
        'vue/v-on-style': 'error',
        'vue/valid-v-bind-sync': 'warn',
        'vue/valid-v-bind': 'error',
        'vue/valid-v-cloak': 'warn',
        'vue/valid-v-else-if': 'error',
        'vue/valid-v-else': 'error',
        'vue/valid-v-for': 'error',
        'vue/valid-v-html': 'error',
        'vue/valid-v-if': 'error',
        'vue/valid-v-is': 'error',
        'vue/valid-v-model': 'error',
        'vue/valid-v-on': 'error',
        'vue/valid-v-once': 'error',
        'vue/valid-v-pre': 'error',
        'vue/valid-v-show': 'error',
        'vue/valid-v-slot': 'error',
        'vue/valid-v-text': 'error'
    },

    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                mocha: true
            },
            rules: {
                indent: 'off',
                '@typescript-eslint/indent': ['error', 4]
            }
        }
    ]
}

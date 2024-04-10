// eslint-disable-next-line @typescript-eslint/no-var-requires
var path = require('path')

module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    env: {
        browser: true,
        es6: true,
        node: true,
        commonjs: true,
    },
    extends: ["plugin:@typescript-eslint/recommended"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        wx: true,
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: "module",
        project: path.join(__dirname, "./tsconfig.eslint.json"),
    },
    rules: {
        // 以下是自定义的规则
        'no-undef': 'off', // eslint和ts冲突
        '@typescript-eslint/no-require-imports': ['off'], // 忽略no-require-imports规则
        '@typescript-eslint/prefer-optional-chain': 'off', // 忽略prefer-optional-chain规则
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 非开发模式禁用console
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 非开发模式禁用debugger
        'no-param-reassign': 'off',
        'comma-dangle': 'off',
        'function-paren-newline': 'off',
        'operator-linebreak': 'off',
        'prefer-const': 'off',
        'prefer-template': 'off',
        'arrow-body-style': 'off',
        'no-restricted-properties': 'off',
        'max-len': 'off',
        'arrow-parens': 'off',
        'no-else-return': 'off',
        'newline-per-chained-call': 'off',
        '@typescript-eslint/no-explicit-any': 'off', // 禁用any
        '@typescript-eslint/indent': ['off'], // 忽略 @typescript-eslint/indent
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/dot-notation': 'off',
        // 命名规范
        '@typescript-eslint/naming-convention': ['off'],
    },
}

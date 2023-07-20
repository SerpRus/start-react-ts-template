module.exports = {
    env: {
        'browser': true,
        'es2021': true
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
    ],
    overrides: [
        {
            env: {
                'node': true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                'sourceType': 'script'
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: [
        '@typescript-eslint',
        'react'
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'indent': ['error', 4],
        'react/jsx-indent': ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
    }
}

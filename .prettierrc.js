module.exports = {
    printWidth: 140,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'as-needed',
    jsxSingleQuote: false,

    overrides: [
        {
            files: ['*.html'],
            options: {
                singleQuote: false
            }
        }
    ]
};

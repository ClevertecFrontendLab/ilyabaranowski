module.exports = {
    extends: require.resolve('arui-presets-lint/stylelint'),
    rules: {
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global'],
            },
        ],
        'arui-cssvars/use-variables': false,
        'stylelint-core-vars/use-vars': false,
        'stylelint-core-vars/use-mixins': false,
        'stylelint-core-vars/use-one-of-vars': false,
        'stylelint-core-vars/use-one-of-mixins': false,
        'stylelint-core-vars/do-not-use-dark-colors': false,
    },
};

module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "airbnb-base",
    "plugins": [
        "fp"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-var": "error",
        "fp/no-arguments": "error",
        "fp/no-class": "error",
        "fp/no-delete": "error",
        "fp/no-events": "error",
        "fp/no-get-set": "error",
        "fp/no-let": "error",
        "fp/no-loops": "error",
        "fp/no-mutating-assign": "error",
        "fp/no-mutation":  [
            "error",
            {"commonjs": true}
        ],
        "fp/no-proxy": "error",
        "fp/no-rest-parameters": "error",
        "fp/no-this": "error",
        "fp/no-throw": "error",
        "fp/no-valueof-field": "error",
        "fp/no-nil": "off",
        "fp/no-unused-expression": "off",
        "import/newline-after-import": "off",
        "no-console": "off",
        "comma-dangle": "off",
        "no-confusing-arrow": "off",
        "prefer-destructuring": "off",
        "no-return-await": "off"
    }
};

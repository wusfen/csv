var rule = {
    csv: {
        row: {
            before: /^|\n/,
            after: /\n|$/,
            col: {
                before: /^|,|\n/,
                after: /,|\n|$/
            },
            col2: {
                before: /(^|,|\n)/,
                after: /(,|\n|$)/,
                start: '"',
                end: '"',
                quo: '""',
                n: ',',
                comma: ','
            }
        }
    },
    javascript: {
        type: /\b(var|function)\b/,
        keyword: /\b(if|else|switch|case|default|for|continue|do|while|break|function|arguments|return|new|this|instanceof|try|catch|finally|throw|typeof|in|delete|var|true|false|null|void|with)\b/,
        string1: {
            start: "'",
            end: "'",
            convert: /\\./,
        },
        string2: {
            start: '"',
            end: '"',
            convert: /\\./,
        },
        string3: {
            start: '`',
            end: '`',
            convert: /\\./,
        },
        comment: /\/\/.*/,
        comment2: {
            start: /\/\*/,
            end: /\*\//,
        },
        number: /\b\d*\.*\d+\b/,
        operator1: /[+-]/,
        operator2: {
            before: /\w+\s*/,
            after: /\s*\w+/,
            start: /[*/]/, // 除号与正则易容出错
        },
        regexp: {
            start: '/',
            end: '/[igm]*',
            convert: /\\./,
        }
    }
}

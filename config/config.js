const NodeCache = require('node-cache')

const config = {
    prefix: 'chatgpt-',
    openaikey: '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',
    credentials: require('./fbstate.json'),
    cache: new NodeCache({
        checkperiod: 10000,
        deleteOnExpire: true
    }),
    ratelimit: new Map(),
    commands: new Map(),
    aliases: new Map()
}

module.exports = config

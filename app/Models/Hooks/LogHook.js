'use strict'

const Encryption = use('Encryption')

const LogHook = exports = module.exports = {}

LogHook.encrypt = async (log) => {
    log.content = await Encryption.encrypt(log.content)
}
LogHook.decrypt = async (logs) => {
    for (let log of logs) {
        log.content = await Encryption.decrypt(log.content)
    }
}

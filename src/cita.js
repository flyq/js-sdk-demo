const { default: CITASDK } = require('@cryptape/cita-sdk')
const config = require('./config')

var cita // config.chain indicates that the address of CITA to interact

cita = CITASDK(config.chain)
const account = cita.base.accounts.privateKeyToAccount(config.privateKey) // create account by private key from config
cita.base.accounts.wallet.add(account) 


module.exports = cita

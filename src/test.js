const cita = require("./cita");

const transaction = {
  nonce: 999999,
  quota: 1000000,
  chainId: "0x1",
  version: 2,
  validUntilBlock: 999999,
  value: "0x0"
};
transaction.from = cita.base.accounts.wallet[0].address
transaction.privateKey = cita.base.accounts.wallet[0].privateKey;

const transfer = async (to, value) => {
  checkBalance(to)
  const current = await cita.base.getBlockNumber()
  const tx = {
    ...transaction,
    to,
    value,
    validUntilBlock: +current + 88
  }


  const result = await cita.base.sendTransaction(tx)
  console.log(JSON.stringify(result, null, 2))
  setTimeout(() => {
    checkBalance(to)
  }, 6000)
}

const checkBalance = async to => {
  const balance = await cita.base.getBalance(to, 'pending')
    console.log(to)
    console.log(balance)
}

const to = '0x46a23e25df9a0f6c18729dda9ad1af3b6a131161'

transfer(to, '1000000000000')

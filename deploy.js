const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
 const provider = new HDWalletProvider(
   'moment tragic insect march gun month elevator divide solar dirt scheme marble',
   'https://goerli.infura.io/v3/7c33146d83824d1797ad615cabecaf8e'
 )
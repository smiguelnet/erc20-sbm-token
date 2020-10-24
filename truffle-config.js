require("dotenv").config();

const HDWalletProvider = require("truffle-hdwallet-provider");
const WALLET_MNEMONIC = process.env.WALLET_MNEMONIC;
const INFURA_KEY = process.env.INFURA_KEY;
const OWNER_ADDRESS = process.env.OWNER_ADDRESS;

if (!INFURA_KEY || !WALLET_MNEMONIC) {
  console.error("Invalid configuration. Infura key and wallet mnemonic required");
  process.exit(0);
}

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(WALLET_MNEMONIC, "https://rinkeby.infura.io/v3/" + INFURA_KEY);
      },
      network_id: "*" ,
      gas: 4712388,
      gasPrice: 100000000000
    }
  },
  contracts_directory: './contracts/',
  
  mocha: {
    reporter: "eth-gas-reporter",
    reporterOptions: {
      currency: "USD",
      gasPrice: 2,
    },
  },

  compilers: {
    solc: {
      name: "solc",
      version: "^0.5.0",
    },
  },
};

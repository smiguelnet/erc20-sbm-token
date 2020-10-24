require("dotenv").config();

const HDWalletProvider = require("truffle-hdwallet-provider");
const web3 = require("web3");

const WALLET_MNEMONIC = process.env.WALLET_MNEMONIC;
const INFURA_KEY = process.env.INFURA_KEY;
const OWNER_ADDRESS = process.env.OWNER_ADDRESS;
const NFT_CONTRACT_ADDRESS = process.env.NFT_CONTRACT_ADDRESS;
const NETWORK = process.env.NETWORK;

console.log(WALLET_MNEMONIC)
console.log(INFURA_KEY)
console.log(OWNER_ADDRESS)
console.log(NFT_CONTRACT_ADDRESS)
console.log(NETWORK)

if (!INFURA_KEY || !WALLET_MNEMONIC || !OWNER_ADDRESS || !NFT_CONTRACT_ADDRESS || !NETWORK) {
    console.error("Invalid configuration. Infura key, wallet mnemonic, owner and network are all required");
    process.exit(0);
}

const NFT_TOKEN_ABI = [
    {
        constant: false,
        inputs: [
          {
            name: "_to",
            type: "address"
          },
          {
            name: "_value",
            type: "uint256"
          }
        ],
        name: "transfer",
        outputs: [
          {
            name: "success",
            type: "bool"
          }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    }
];

const main = async () => {
    console.log("Initializing mint process...");
    console.log(`Network: ${NETWORK}`);
    console.log(`Owner: ${OWNER_ADDRESS}`);


    const provider = new HDWalletProvider(WALLET_MNEMONIC, `https://${NETWORK}.infura.io/v3/${INFURA_KEY}`);
    const web3Instance = new web3(provider);

    console.log(`NFT Contract Address: ${NFT_CONTRACT_ADDRESS}`);
    const nftContract = new web3Instance.eth.Contract(NFT_TOKEN_ABI, NFT_CONTRACT_ADDRESS, {gasLimit: "4712388"});
    
    const mintOperation = await nftContract.methods.transfer(OWNER_ADDRESS, 1000000).send({from: OWNER_ADDRESS});
    console.log(mintOperation);

    process.exit(0);
}
main();
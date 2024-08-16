require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.18",
  networks: {
    swisstronik: {
      // If you're using local testnet, replace `url` with local json-rpc address 
      url: "https://json-rpc.testnet.swisstronik.com/",
      chainId: Number(process.env.SWISSTRONIK_CHAIN_ID),
      accounts: [`0x` + `${process.env.PRIVATE_KEY}`],
    },
  },
};

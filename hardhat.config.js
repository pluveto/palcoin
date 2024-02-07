require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
      },
    },
    merlin: {
      url: "https://rpc.merlinchain.io",
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
  },
};

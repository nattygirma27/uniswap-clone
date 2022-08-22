require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/RFRqHNt4XwnaVahSEkB84p-Kt_GINuVp',
      accounts: ['f36b15c7304e906bc455ea34de6e95d3b19a696ee5eefb411364a6689156055f'],
    },
  },
};
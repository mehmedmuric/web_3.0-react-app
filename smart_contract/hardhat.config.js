require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/n9rpQj8UL2e-Yy3T_HvUBlCSIDXI88RL',
      accounts: ['a37909dc179a66d231453951f9ef045bb462c38b2b3229422a828f7fd14df3d1'],
    }
  }
}
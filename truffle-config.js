module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
     gasPrice:   0x1,
     gas:        0x1fffffffffffff
    }
  },
  compilers: {
    solc: {
      version: "0.8.13",
      settings: {
        optimizer: {
          enabled: true,
          runs: 150
        },
      }
    }
  }
};
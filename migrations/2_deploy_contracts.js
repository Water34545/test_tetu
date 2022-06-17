const VaultLibrary = artifacts.require("VaultLibrary");
const SmartVault = artifacts.require("SmartVault");

module.exports = function (deployer) {
  deployer.then(async () => {
    await deployer.deploy(VaultLibrary);
    await deployer.link(VaultLibrary, SmartVault)
    await deployer.deploy(SmartVault);
  })
}
const Migrations = artifacts.require("Migrations");

module.exports = function (deployer, network) {
  console.log(`Using network: ${network}`);
  deployer.deploy(Migrations);
};

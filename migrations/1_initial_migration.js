const Migrations = artifacts.require("Migrations");

module.exports = function (deployer, network, accounts) {
  console.log(`Network parameter: ${network}`);
  console.log(`Accounts parameter: ${accounts}`);
  deployer.deploy(Migrations);
};

const SmiguelToken = artifacts.require("SmiguelToken");

module.exports = function(deployer, network) {
  if (network === "rinkeby") {
    deployer.deploy(SmiguelToken, "0x104bFb601Cf3fcc5d40Fc24Bc3c69fECF933Cad8");
  } else {
    deployer.deploy(SmiguelToken); 
  }
};

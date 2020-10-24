const SmiguelToken = artifacts.require("SmiguelToken");

module.exports = function(deployer, network) {
    deployer.deploy(SmiguelToken), { from: "0xcfD0AcC92C8eABEF48049b6a1bC8b23B2fAe6bdf"}; 
};

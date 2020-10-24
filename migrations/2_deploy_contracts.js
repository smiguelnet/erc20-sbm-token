const SmiguelToken = artifacts.require("SmiguelToken");

module.exports = function(deployer, network) {
    deployer.deploy(SmiguelToken); 
};

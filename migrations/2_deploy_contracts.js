const SmiguelToken = artifacts.require("SmiguelToken");

module.exports = function (deployer) {
  deployer.deploy(SmiguelToken, "0x26701cA372935f93B995b12c3420DcFddE39F66D");
};

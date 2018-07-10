var firstContract = artifacts.require("FirstContract");

module.exports = function(deployer) {
  deployer.deploy(firstContract);
};
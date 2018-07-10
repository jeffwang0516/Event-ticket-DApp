var ticketToken = artifacts.require("TicketToken");

module.exports = function(deployer) {
  deployer.deploy(ticketToken);
};
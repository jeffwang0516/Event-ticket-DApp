var ticketToken = artifacts.require("TicketToken");

const INITIAL_SUPPLY = 100000;

contract('TicketToken Async', function(accounts) {
    it('should met initial supply', async function() {
        let contract = await ticketToken.deployed();
        let totalSupply = await contract.totalSupply.call();
        let senderBalance = await contract.balanceOf(accounts[0]);
        assert.equal(totalSupply.toNumber(), INITIAL_SUPPLY);
        assert.equal(totalSupply.toNumber(), senderBalance.toNumber());
    });

    it('should have right balance AFTER transfer', async function() {
        const AMOUNT = 123;
        let contract = await ticketToken.deployed();
        // check init balance
        let account0Balance = await contract.balanceOf(accounts[0]);
        let account1Balance = await contract.balanceOf(accounts[1]);
        assert.equal(account0Balance.toNumber(), INITIAL_SUPPLY);
        assert.equal(account1Balance.toNumber(), 0);
        // check balance after transferred
        await contract.transfer(accounts[1], AMOUNT);
        account0Balance = await contract.balanceOf(accounts[0]);
        account1Balance = await contract.balanceOf(accounts[1]);
        assert.equal(account0Balance.toNumber(), INITIAL_SUPPLY - AMOUNT);
        assert.equal(account1Balance.toNumber(), AMOUNT);
    });
});
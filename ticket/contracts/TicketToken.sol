pragma solidity ^0.4.22;
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract TicketToken is StandardToken {
    string public name = "TicketToken";
    string public symbol = "T@";
    uint8 public decimals = 2;

    uint256 INITIAL_SUPPLY = 100000;
    
    constructor() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}

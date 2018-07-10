pragma solidity ^0.4.22;


contract FirstContract {
    constructor() public{
    }

    function test() public pure returns (string) {
        return "Hi! Want tickets?!";
    }

    function echo(string name) public pure returns (string) {
        return name;
    }
}

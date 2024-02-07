// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// ref https://docs.openzeppelin.com/contracts/4.x/erc20
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Palcoin is ERC20 {
    constructor() ERC20("Palcoin", "PAL") {
        _mint(msg.sender, 42 * 10 ** 9);
    }

    function decimals() public view virtual override returns (uint8) {
        return 0;
    }
}

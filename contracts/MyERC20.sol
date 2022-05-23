// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyERC20 is ERC20, Ownable {
  constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

  function mint(address user, uint256 amount) external onlyOwner {
    _mint(user, amount * (10 ** decimals()));
  }

  function decimals() public view virtual override returns (uint8) {
    return 6;
  }
}
import { ethers } from "hardhat";

async function main() {
  const name = "Test IDR 18";
  const symbol = "TIDR18";
  const MyERC20 = await ethers.getContractFactory("MyERC20");
  const myERC20 = await MyERC20.deploy(name, symbol);

  await myERC20.deployed();

  console.log(`${name}: ${symbol} deployed to: ${myERC20.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

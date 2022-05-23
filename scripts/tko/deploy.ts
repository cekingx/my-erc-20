import { ethers } from "hardhat";

async function main() {
  const MyERC20 = await ethers.getContractFactory("MyERC20");
  const myERC20 = await MyERC20.deploy("TOKO", "TKO");

  await myERC20.deployed();

  console.log("TKO deployed to:", myERC20.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

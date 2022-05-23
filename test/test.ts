import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";

describe("MyERC20", function () {
  let minter: any;
  let user: any;

  before(async () => {
    [minter, user] = await ethers.getSigners();
  });

  it("Should mint correct amount", async function () {
    const MyERC20 = await ethers.getContractFactory("MyERC20");
    const myERC20 = await MyERC20.deploy("TKO", "TKO");
    await myERC20.deployed();

    await myERC20.mint(user.address, 1);

    expect(await myERC20.balanceOf(user.address)).to.equal(
      BigNumber.from("1000000000000000000")
    );
  });
});

const { ethers } = require("hardhat");

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const contract = await HelloWorld.deploy();

  await contract.waitForDeployment();

  const address = await contract.getAddress();

  console.log("HelloWorld deployed to:", address);
  console.log(
    "Sepolia Etherscan:",
    `https://sepolia.etherscan.io/address/${address}`
  );
  console.log("Message:", await contract.message());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
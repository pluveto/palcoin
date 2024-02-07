const hre = require("hardhat");
async function main() {
  const Palcoin = await hre.ethers.getContractFactory("Palcoin");
  const palcoin = await Palcoin.deploy();
  await palcoin.waitForDeployment()

  console.log("Token deployed: ", await palcoin.getAddress());
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

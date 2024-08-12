const { AptosClient, AptosAccount, TxnBuilderTypes, BCS } = require("aptos");

const client = new AptosClient("https://fullnode.devnet.aptoslabs.com");

exports.createPool = async (req, res) => {
  const { tokenA, tokenB, ownerPrivateKey } = req.body;

  const owner = new AptosAccount(ownerPrivateKey);

  // Call the create_pool function in the Move contract
  // (Example assumes you have compiled and published the Move contract)

  res.send({ message: "Liquidity pool created" });
};

exports.addLiquidity = async (req, res) => {
  const { poolId, amountA, amountB, ownerPrivateKey } = req.body;

  const owner = new AptosAccount(ownerPrivateKey);

  // Call the add_liquidity function in the Move contract

  res.send({ message: "Liquidity added to pool" });
};

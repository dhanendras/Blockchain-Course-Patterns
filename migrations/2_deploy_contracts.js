var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");

var SelfDestruct = artifacts.require("./SelfDestruct.sol");
var ContractFactory = artifacts.require("./ContractFactory.sol");
var NameRegistry = artifacts.require("./NameRegistry.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);

  deployer.deploy(SelfDestruct);
  // Pass the argument 
  deployer.deploy(ContractFactory,5,100);

  deployer.deploy(NameRegistry);
};

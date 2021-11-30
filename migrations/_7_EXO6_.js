//Ticker:  TL
//Supply:  99999000000000000000
//address: 0x03065c887fEE8e392Ade23D4d8E5e2feE07b47A7
var token = artifacts.require("ERC20TD.sol");
var evaluatorContract = artifacts.require("Evaluator.sol");

module.exports = (deployer, network, accounts) => {
    deployer.then(async () => {
        await createToken(deployer,network,accounts);
        await exo5(deployer, network, accounts); 
    });
};

async function createToken(deployer, network, accounts) {
    ourToken = await token.new('TLC', 'TL', web3.utils.toBN('99999000000000000000'));
}


async function exo5(deployer, network, accounts) {
    evaluator = await evaluatorContract.at('0xcff8985FF63cDce92036A2747605FB7ead26423e');
    await evaluator.submitExercice(ourToken.address);
    await evaluator.ex6_testAllowListing();
}
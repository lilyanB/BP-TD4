var token = artifacts.require("ERC20TD.sol");
var evaluatorContract = artifacts.require("Evaluator.sol");

module.exports = (deployer, network, accounts) => {
    deployer.then(async () => {
        await createToken(deployer, network, accounts); 
        await exo1(deployer, network, accounts); 
    });
};

async function createToken(deployer, network, accounts) {
    ourToken = await token.new('TLC', 'TL', web3.utils.toBN('99999000000000000000'));
}

async function exo1(deployer, network, accounts) {
    evaluator = await evaluatorContract.at('0xcff8985FF63cDce92036A2747605FB7ead26423e');
    await evaluator.submitExercice(ourToken.address);
    await evaluator.ex2_testErc20TickerAndSupply();
    console.log(ourToken.address);
}
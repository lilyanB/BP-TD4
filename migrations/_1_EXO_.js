var token = artifacts.require("ERC20TD.sol");

module.exports = (deployer, network, accounts) => {
    deployer.then(async () => {
        await createToken(deployer, network, accounts); 
    });
};

//Ticker:  TL and Supply:  99999000000000000000
async function createToken(deployer, network, accounts) {
    ourToken = await token.new('TLC', 'TL', web3.utils.toBN('99999000000000000000'));
    a = ourToken.address;
    console.log(a);
}
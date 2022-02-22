require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn proof grace father forget twice'; 
let testAccounts = [
"0x979380fd9c0178216cc4a6bf6df934375d10fe85d5075e2d78ee59fc6968d064",
"0x4cb2072854011262a7bc9ad8bea02a360ccc414f070e388d0f0d34c7be12a836",
"0x36e704c96d1a7d37883210b0b4897e69b7c0403e753978e320d3ba328564163b",
"0xb2e8fd50e052ea265c7fd5b95df66b9d2dfbb98e4b49b74adc499b6891b7bdd6",
"0x722c8de0484a8ce819d20f251526e49da487671d3c754f8ca45f79d386badafa",
"0xb3acab4457b92274d02465699e04161442c3a0a30bab194b99c681bbd90c946c",
"0x75bc3d08ab9298b8e2a123868ad031313a0ccff1b106a3b5fd2b2d3bc6af2f0f",
"0xd234d805ecbcd71e42f9cc5cf033ee25ebb06b7a11889b40d0e40094211d70ca",
"0xd8344d4e47c106aa83054cd4b01b6d38ce5af7d1d24bd1a57544cd831f86f91b",
"0x185c2fbebc4ea5c245d2974e9f9e43c7ebb83db15f92448ecf3c690fefb3d55a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


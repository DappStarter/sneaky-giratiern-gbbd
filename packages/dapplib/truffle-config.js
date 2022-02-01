require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name recipe place equip inner enroll frame sword'; 
let testAccounts = [
"0xa369af430c89d78ddf94af88f353818aa09d25f6ec5cfe7546b202efba9169e0",
"0xa1c48dc7f044789ca8924ad6bcf333cb5b43a4481aeb2a5d4c3f55a996f6b0d4",
"0xc6515c331c0e5325a6d5014e4552b19ab9924653b578cdfe736e8848c056bb8c",
"0x59afa6bc1e7e1eac12b1b9d6dd928819b124a73c281d86826f19d2f0302666c0",
"0x900efb379f631c0dd95daa5c959caa1959f99f4ba488fb3c048d01b62e8cf162",
"0x0495cd90cdf7dead49685ddc08f954ac51be7de6082c4a72ab25891da58ab355",
"0x3bded7088af5fb2d997b2fc6a14d23b77f56965037f94e460d66d5d7d3e105be",
"0x5f9adaf93ee1939fed1e87d5aac7f5c8a1e7aac0e1a0c070d98fcd692b005542",
"0x43f5d68881e6ea62f151c21a18f42acd42953202b2e0f299a0714fed4ef1b7e5",
"0xa62e52caf37d6e38b8710d91dc26deb070230c4ef2c1ff4d30019dae0aad1e86"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



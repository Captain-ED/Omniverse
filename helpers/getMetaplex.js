const fs = require("fs");
const path = require("path");

const {keypairIdentity, Metaplex, bundlrStorage} = require("@metaplex-foundation/js");
const {Connection, clusterApiUrl, Keypair} = require("@solana/web3.js");


//create a conection first
const connection = new Connection(clusterApiUrl('devnet'));

const filepath = path.join("/Users/sops", ".config/solana", "id.json");

//crate a wallet to use
const keypair = fs.readFileSync(filepath, {encoding: 'utf-8'});
const secretKey = Buffer.from(JSON.parse(keypair.toString()));
const wallet = Keypair.fromSecretKey(secretKey);
console.log({keypair, secretKey, wallet});


//then create metaplex instance to access the sugar factory
const metaplex = Metaplex.make(connection).use(keypairIdentity(wallet)).use(bundlrStorage());




module.exports = metaplex;
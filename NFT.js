function divider(){
    console.log("\n===========================================================================================================\n");
}
 
let nftContainer = [];
 
function mintNFT(name, description, creator) {
    let nft = {
        name: name,
        description: description,
        creator: creator
    };
    nftContainer.push(nft);
}
function listNFTs() {
   
    for (let i = 0; i < nftContainer.length; i++) {
        divider();
        console.log(`NFT ${i+1}:`);
        console.log("Name: " + nftContainer[i].name);
        console.log("Description: " + nftContainer[i].description);
        console.log("Creator: " + nftContainer[i].creator);
        console.log("");
    }
}
 
 
function getTotalSupply() {
    console.log("Total number of NFTs minted: " + nftContainer.length);
}
 
mintNFT("CryptoKitties", "A blockchain-based virtual game that allows players to adopt, raise, and trade virtual cats.", "Dapper Labs");
mintNFT("Decentraland", "A virtual reality platform powered by the Ethereum blockchain, where users can create, experience, and monetize content and applications.", "Decentraland Foundation");
mintNFT("Axie Infinity", "A Pokémon-inspired blockchain-based game where players can collect, breed, raise, battle, and trade fantasy creatures called Axies.", "Sky Mavis");
 
listNFTs();
divider();
getTotalSupply();
divider();
 
import Web3 from "web3";
 
let web3; 

if (typeof window !== "undefined" && typeof window.web3 !== "undefined"){
    // it means we are in the browser and metamask is running 
    web3 = new Web3(window.web3.currentProvider); 
    //web3 = new Web3(window.web3.currentProvider.enable());

} else {
    // we are on the server or the user is not running metamask 
    const provider = new Web3.providers.HttpProvider(
        "https://goerli.infura.io/v3/d80aee19d26b49a4bf93d326257517fa"
    );
    web3 = new Web3(provider);
}
 
export default web3;





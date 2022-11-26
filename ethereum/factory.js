import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), 
    "0xa7712F5b0692f076C23183bF0CE322b55232Bf6E"
);

export default instance; 
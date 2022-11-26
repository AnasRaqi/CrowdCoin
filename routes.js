const routes = require("next-routes")(); // it returns a function. and the function will be invoked. 


// order is important 
routes
    .add("/campaigns/new", "/campaigns/new" )
    .add("/campaigns/:address", "/campaigns/show") //wild card
    .add("/campaigns/:address/requests", "/campaigns/requests/index")
    .add("/campaigns/:address/requests/new", "/campaigns/requests/new"); 
    



module.exports = routes; 
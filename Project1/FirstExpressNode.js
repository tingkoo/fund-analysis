const express = require("express")
const app = express();

app.use( (inComingRequest, outGoingRest    )=> {
    console.log("We got a new request")
    // console.dir(inComingRequest)
    outGoingRest.send("<h1>We got our first express app running</h1>")
    }

)

app.listen(3000,()=>{
    console.log("LISTENING ON PORT 3000")
})
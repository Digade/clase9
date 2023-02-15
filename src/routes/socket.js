import {router} from "express";

const routerSocket = router();
routerSocket.get("/", (req,res) =>{
    res.render("index", {})
})

export default routerSocket
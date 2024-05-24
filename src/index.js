const express = require("express");
const app = express();
const {PORT} = require("./config");
const routesRouter = require("./routes");

app.listen(PORT, (req,res)=>{
    console.log(`Server running successfully on port : ${PORT}`);
});

app.use('/api',routesRouter);
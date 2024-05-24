const {	StatusCodes} = require("http-status-codes");

const homepage = (req,res)=>{
    return res.status(StatusCodes.OK).json({
        success:true,
        message: "Homepage reached successfully",
        error:{}
    });
};

module.exports = homepage;
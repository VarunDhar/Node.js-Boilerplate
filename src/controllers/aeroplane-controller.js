const { Logger } = require("../config");
const {AeroplaneServices} = require("../services");
const {StatusCodes} = require("http-status-codes");
async function createAeroplane(req,res){
    try {
        const aeroplane = await AeroplaneServices.createAeroplane({
            modelNo:req.body.modelNo,
            capacity:req.body.capacity
        });
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"Aeroplane added successfully",
            data:aeroplane,
            error:{}
        });

    } catch (error) {
        Logger.error("Error: creating aeroplane");
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Error: while creating Aeroplane",
            data:{},
            error:error
        });
    }
}

module.exports = {
    createAeroplane
};
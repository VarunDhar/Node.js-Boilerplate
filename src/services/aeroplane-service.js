const { Logger } = require("../config");
const {AeroplaneRepository} = require("../repositories");

const aeroplaneRepository = new AeroplaneRepository();

async function createAeroplane(data){
    try {
        const result = await aeroplaneRepository.create(data);
        return result;

    } catch (error) {
        Logger.error("Error : Creating data for Aeroplane repo");
        throw error;
    }
}

module.exports = {
    createAeroplane
};
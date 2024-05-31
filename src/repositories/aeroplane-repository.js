const CrudRepository = require("./crud-repository");
const {Aeroplane} = require("../models");
class AeroplaneRepository extends CrudRepository{
    constructor(){
        //console.log("aeroplane",Aeroplane);
        super(Aeroplane);
    }
}

module.exports = AeroplaneRepository;
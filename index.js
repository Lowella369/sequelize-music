const {sequelize, DataTypes, Model} = require('./db')

//create model for musician in our database
class Musician extends Model{
    //add query  methods here

}

//create attributes for model using init method
Musician.init({
    name: DataTypes.STRING,
    instrument: DataTypes.STRING,
    address: DataTypes.STRING
}, {
    sequelize, //specifies what database our model is stored
    timestamps: false 
})

module.exports = {Musician}
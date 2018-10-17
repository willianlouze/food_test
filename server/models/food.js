const fs = require('fs');
const config = require('../config/config');

module.exports = {
    create : (food) =>{
        let foods = JSON.parse(fs.readFileSync(config.database, 'utf8'));
        foods[food.name] = food.calorias;
        fs.writeFile(config.database, JSON.stringify(foods), function (err) {
            if (err) throw err;
            console.log('ok...')
        });
        return food;
    },

    findAll(){
        let foods = JSON.parse(fs.readFileSync(config.database, 'utf8'));
        return foods;
    },

    findOne(foodName){
        let food = JSON.parse(fs.readFileSync(config.database, 'utf8'));
        food = {"valor" : food[foodName.toString()]};
        return food;
    },

    updateOne : (food) =>{
        let foods = JSON.parse(fs.readFileSync(config.database, 'utf8'));
        if (foods.hasOwnProperty(food.name)){
            foods[food.name] = food.calorias;
            console.log(foods)
        fs.writeFile(config.database, JSON.stringify(foods), function (err) {
            if (err) throw err;
            console.log('ok...')
        });
            return true;
        }
        else{
            return false;
        }  
    },

    deleteOne : (foodName)=>{
        let foods = JSON.parse(fs.readFileSync(config.database, 'utf8'));
        if(foods.hasOwnProperty(foodName)){
            delete foods[foodName.toString()];
            fs.writeFile(config.database, JSON.stringify(foods), function (err) {
                if (err) throw err;
                console.log('ok...')
            });
            return true;
        }
        else{
            return false
        }
    }
}
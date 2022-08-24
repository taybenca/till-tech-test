const hipstercoffee = require('./hipstercoffee.json')

class Order {
    constructor(){
        this.list = []
        this.menu = hipstercoffee[0]['prices'][0]
    }

    addItem(item){
        this.list.push(item)
    }

    allList(){
        return this.list
    }
}

module.exports = Order;
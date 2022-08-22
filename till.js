const hipstercoffee = require('./hipstercoffee.json')

class Till {
    constructor(){
        this.list = []
        this.menu = hipstercoffee[0]['prices'][0]
        this.total = 0
    }

    addItem(item){
        this.list.push(item)
    }

    allList(){
        return this.list
    }
    calculator(){
        this.list.forEach(item => this.total += parseFloat(this.menu[item]))
        const tax = this.total * 0.0864
        return (this.total + tax).toFixed(2)
    }

}

const till = new Till()
till.addItem('Cappuccino')
till.addItem('Choc Mudcake')
console.log(till.calculator())


module.exports = Till
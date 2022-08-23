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
        this.tax = this.total * 0.0864
        return (this.total + this.tax).toFixed(2)
    }
    format(){
        console.log(hipstercoffee[0]['shopName'])
        console.log(hipstercoffee[0]['address'])
        console.log(`Phone: ${hipstercoffee[0]['phone']}`)
        console.log('-----------')
        this.list.forEach(item => console.log(`${item}: $${(this.menu[item]).toFixed(2)}`))
        console.log('-----------')
        console.log(`Tax: 8.64%`)
        console.log('-----------')
        console.log("Total: " + "$" + this.calculator()) 
    }

}

const till = new Till()
till.addItem('Cafe Latte')
till.addItem('Cafe Latte')
till.addItem('Blueberry Muffin')
till.addItem('Choc Mudcake')
till.format()


module.exports = Till
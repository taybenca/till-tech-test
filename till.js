const hipstercoffee = require('./hipstercoffee.json')
const Order = require('./order')

class Till {
    constructor(list){
        this.list = list
        this.menu = hipstercoffee[0]['prices'][0]
        this.total = 0
    }

    calculateTax(){
        this.list.forEach(item => this.total += parseFloat(this.menu[item]))
        this.tax = this.total * 0.0864
        return this.totalWithTax = (this.total + this.tax) 
    }

    checkOver50(){
        if(this.totalWithTax > 50){
            console.log('20% Spent over $50 Discount')
            const discount20 = this.totalWithTax * 0.2
            this.totalWithTax -= discount20
        }
    }

    containMuffin(){
        this.list.find(item => {
            if(item.includes('Muffin')){
                console.log('10% Muffin Discount')
                const discount10 = this.totalWithTax * 0.1
                this.totalWithTax -= discount10
            } 
        })
    }

    format(){
        console.log(hipstercoffee[0]['shopName'])
        console.log(hipstercoffee[0]['address'])
        console.log(`Phone: ${hipstercoffee[0]['phone']}`)
        console.log(`Customer name: ${this.name}`)
        console.log('-----------')
        this.list.forEach(item => console.log(`${item}: $${(this.menu[item]).toFixed(2)}`))
        console.log('-----------')
        console.log(`Tax: 8.64%`)
        console.log('-----------')
        this.calculateDiscount()
    }

    calculateDiscount(){
        this.calculateTax()
        this.checkOver50()
        this.containMuffin()
        console.log(`Total: $${(this.totalWithTax).toFixed(2)}`)  
        return this.totalWithTax.toFixed(2)      
    }

    payment(cash){
        const change = cash - this.totalWithTax
        console.log(`Cash received: $${cash.toFixed(2)}`)
        if(cash < this.totalWithTax){
            console.log(`Waiting to receive: $${(this.totalWithTax - cash).toFixed(2)}`)
        }else{
        console.log(`Change: $${change.toFixed(2)}`)
        return change.toFixed(2)
        }
    }
}


const order = new Order()
const list = order.allList()
const till = new Till([list])
order.addItem('Tea')

till.format()
till.payment(40)

module.exports = Till


const hipstercoffee = require('./hipstercoffee.json')
const Order = require('./order')
const prompt = require('prompt-sync')();

class Till {
    constructor(list){
        this.list = list
        this.menu = hipstercoffee[0]['prices'][0]
        this.total = 0
        //console.log(this.list)
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
        console.log('\n\n' + hipstercoffee[0]['shopName'])
        console.log(hipstercoffee[0]['address'])
        console.log(`Phone: ${hipstercoffee[0]['phone']}`)
        console.log('\n-----------------------')
        this.list.forEach(item => console.log(`${item}: $${(this.menu[item].toFixed(2))}`))
        console.log('-----------------------')
        console.log(`Tax: 8.64% = $${(this.tax).toFixed(2)}`)
        console.log('-----------------------')
        this.calculateDiscount()
    }

    calculateDiscount(){
        this.checkOver50()
        this.containMuffin()
        console.log('-----------------------')
        console.log(`Total: $${(this.totalWithTax).toFixed(2)}`)  
        return this.totalWithTax.toFixed(2)      
    }

    payment(cash){
        const change = cash - this.totalWithTax
        console.log('-----------------------')
        console.log(`Cash received: $${cash.toFixed(2)}`)
        if(cash < this.totalWithTax){
            const difference = this.totalWithTax - cash
            while(true){
                cash = prompt(`Waiting to receive: $${(difference).toFixed(2)} ...`)
                if(cash >= difference){
                    break
                }  
            }
            console.log(`Change: $${(cash - difference).toFixed(2)}`)
            return change.toFixed(2)           
        }else{
        console.log(`Change: $${change.toFixed(2)}`)
        return change.toFixed(2)
        }
    }
}

module.exports = Till


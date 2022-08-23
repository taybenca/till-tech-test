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
    calculateTax(){
        this.list.forEach(item => this.total += parseFloat(this.menu[item]))
        this.tax = this.total * 0.0864
        return this.totalWithTax = (this.total + this.tax) //34.7648
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
        console.log(`Change: $${change.toFixed(2)}`)
        return change.toFixed(2)
    }
}


const till = new Till()

till.addItem('Muffin Of The Day')
till.addItem('Muffin Of The Day')
till.addItem('Tea')
till.format()
till.payment(50)


module.exports = Till
const Order = require('./order')
const Till = require ('./till')
const prompt = require('prompt-sync')();

const order = new Order()

const run = () => {
    console.log('Welcome to The Coffee Connection.', '\n')
    while(true){
        const item = prompt('Add an item. Press 0 exit...')
        if(item == '0'){
            break
        }else{
            order.addItem(item)
        }
    }
    const list = order.allList()
    
    const till = new Till(list)
    till.calculateTax()
    till.format()
    const cash = prompt('Receive the cash...')
    till.payment(parseFloat(cash))
    
    console.log('Thank you!')
}

run()
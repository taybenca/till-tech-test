const Till = require('./till')
const Order = require('./order')

describe('Till', () => {

    it('cashier adds two items, calculate the total with tax', () =>{
        const order = new Order()
        order.addItem('Cappuccino');
        order.addItem('Choc Mudcake');
        const list = order.allList()
        const till = new Till(list);
        
        expect(till.calculateTax()).toStrictEqual(11.1356)
    })

    it('customer buys more than $50 and gets 20% discount', ()=>{
        const order = new Order()
        const list = order.allList()
        const till = new Till(list);
        order.addItem('Affogato');
        order.addItem('Tiramisu');
        order.addItem('Choc Mousse');
        order.addItem('Affogato');
        order.addItem('Cafe Latte');
        till.calculateTax()
        expect(till.calculateDiscount()).toEqual('46.89')
    })

    it('customer buys more than $50 and gets 20% discount, and buys a muffin gets 10% muffin discount', ()=>{
        const order = new Order()
        const list = order.allList()
        const till = new Till(list);
        order.addItem('Affogato');
        order.addItem('Tiramisu');
        order.addItem('Choc Mousse');
        order.addItem('Affogato');
        order.addItem('Cafe Latte');
        order.addItem('Muffin Of The Day');
        till.calculateTax()
        expect(till.calculateDiscount()).toEqual('45.76')
    })

    it('customer spent less than 50%, buys a muffin, and gets 10% muffin discount', ()=>{
        const order = new Order()
        const list = order.allList()
        const till = new Till(list);
        order.addItem('Cafe Latte');
        order.addItem('Muffin Of The Day');
        till.calculateTax()
        expect(till.calculateDiscount()).toEqual('9.09')
    })

    it('cashier receives the payment and sees the change', ()=>{
        const order = new Order()
        const list = order.allList()
        const till = new Till(list);
        order.addItem('Cafe Latte');
        order.addItem('Muffin Of The Day');
        till.calculateTax()
        expect(till.calculateDiscount()).toEqual('9.09')
        expect(till.payment(10)).toEqual('0.91')
    })
})
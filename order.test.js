const Order = require('./order')

describe('Order', () => {
    it('cashier adds one item', () =>{
        const order = new Order();
        order.addItem('Tea');
        expect(order.allList()).toStrictEqual(['Tea'])
    })

    it('cashier adds two items', () =>{
        const order = new Order();
        order.addItem('Tea');
        order.addItem('Cortado');
        expect(order.allList()).toStrictEqual(['Tea', 'Cortado'])
    })
})
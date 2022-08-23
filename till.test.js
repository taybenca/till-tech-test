const Till = require('./till')

describe('Till', () => {
    it('cashier adds one item', () =>{
        const till = new Till();
        till.addItem('Tea');
        expect(till.allList()).toStrictEqual(['Tea'])
    })

    it('cashier adds two items', () =>{
        const till = new Till();
        till.addItem('Tea');
        till.addItem('Cortado');
        expect(till.allList()).toStrictEqual(['Tea', 'Cortado'])
    })

    it('cashier adds two items, calculate the total with tax', () =>{
        const till = new Till();
        till.addItem('Cappuccino');
        till.addItem('Choc Mudcake');
        expect(till.calculateTax()).toStrictEqual(11.1356)
    })

    it('customer buys more than $50 and gets 20% discount', ()=>{
        const till = new Till();
        till.addItem('Affogato');
        till.addItem('Tiramisu');
        till.addItem('Choc Mousse');
        till.addItem('Affogato');
        till.addItem('Cafe Latte');
        expect(till.calculateDiscount()).toEqual('46.89')
    })
    it('customer buys more than $50 and gets 20% discount, and buys a muffin gets 10% muffin discount', ()=>{
        const till = new Till();
        till.addItem('Affogato');
        till.addItem('Tiramisu');
        till.addItem('Choc Mousse');
        till.addItem('Affogato');
        till.addItem('Cafe Latte');
        till.addItem('Muffin Of The Day');
        expect(till.calculateDiscount()).toEqual('45.76')
    })

    it('customer spent less than 50%, buys a muffin, and gets 10% muffin discount', ()=>{
        const till = new Till();
        till.addItem('Cafe Latte');
        till.addItem('Muffin Of The Day');
        expect(till.calculateDiscount()).toEqual('9.09')
    })
})
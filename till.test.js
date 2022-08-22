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
        expect(till.calculator()).toStrictEqual('11.14')
    })
})
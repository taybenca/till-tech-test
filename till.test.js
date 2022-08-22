const Till = require('./till')

describe('Till', () => {
    it('cashier adds one item', () =>{
        const till = new Till();
        till.addItem('item');
        expect(till.allList()).toStrictEqual(['item'])
    })
    it('cashier adds two items', () =>{
        const till = new Till();
        till.addItem('item');
        till.addItem('coffee');
        expect(till.allList()).toStrictEqual(['item', 'coffee'])
    })
})
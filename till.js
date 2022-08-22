class Till {
    constructor(){
        this.list = []
    }
    addItem(item){
        this.list.push(item)
    }
    allList(){
        return this.list
    }
}

const till = new Till()
till.addItem("item")


module.exports = Till
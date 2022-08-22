# The problem

We want to sell tills to a local hipster coffee shop who are finally embracing the 21st century. 
We need a new till to replace their vintage machines - 
unfortunately, hipster staff are too cool to learn a new system, 
so we need you to build something that they will understand.

# Functions

constructor => items = []
findByName 
sumAllItems
calculateTheTaxes
printTheBill

# Tests

findByName("Tea", 2) => return "Tea": 3.65 * 2
findByName("Americano",1) => return 3.75
totalItems = sumAllItems => findByName("Tea", 2) + findByName("Americano",1)
calculateTheTaxes => 8.63% * totalItems
printTheBill
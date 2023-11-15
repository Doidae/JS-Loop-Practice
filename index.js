let newInventoryCarModels = ['S1', 'S1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]


let i = 0;
let typeS1Count = 0;
let z = 0;
let lorrieCount = 0;

while (i<newInventoryCarModels.length){
    console.log(newInventoryCarModels[i])
    console.log(newInventoryCarTypes[i])
    console.log(newInventoryYearBuilt[i])
    if (newInventoryCarModels[i] === 'S1'){
        typeS1Count++;
    }
    i++;   
}

console.log("Number of S1 Cars is:", typeS1Count)

for (let i =0; i < newInventoryCarModels.length; i++){
    console.log(newInventoryCarTypes[i])
    if (newInventoryCarTypes[i] === 'Lorrie'){
        lorrieCount++;
    }
}
console.log("Number of Lorries:",lorrieCount)
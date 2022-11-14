let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];


let [Hotcakes, ApplePie, EggMcMuffin, SausageMcMuffin, HotCoffee, HashBrown] = order;


console.log(`${Hotcakes.quantity} ${Hotcakes.itemName} ${Hotcakes.unitPrice}`);
console.log(`${ApplePie.quantity} ${ApplePie.itemName} ${ApplePie.unitPrice*2}`);
console.log(`${EggMcMuffin.quantity} ${EggMcMuffin.itemName} ${EggMcMuffin.unitPrice}`);
console.log(`${SausageMcMuffin.quantity} ${SausageMcMuffin.itemName} ${SausageMcMuffin.unitPrice}`);
console.log(`${HotCoffee.quantity} ${HotCoffee.itemName} ${HotCoffee.unitPrice*2}`);
console.log(`${HashBrown.quantity} ${HashBrown.itemName} ${HashBrown.unitPrice*4}`);
console.log(`${Hotcakes.unitPrice + (ApplePie.unitPrice*2) + EggMcMuffin.unitPrice + SausageMcMuffin.unitPrice + (HotCoffee.unitPrice*2) + (HashBrown.unitPrice*4)}`);
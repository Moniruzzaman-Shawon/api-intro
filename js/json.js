const user = {id:11, name: 'Amir', job: 'actor' };
// console.log (user);

// JSON
const stringified = JSON.stringify(user);
// console.log (stringified);
const shop = {
    name: 'Alia',
    address: 'Indira Road',
    profit: 15000,
    products: ['laptop','mobile','pepsi'],
    owner:{
        name: 'alia',
        profession: 'actor',
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
//convert again to the previous
const converted = JSON.parse(shopStringified);
console.log(converted);
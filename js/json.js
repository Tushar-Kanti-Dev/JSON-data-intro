// json java script object notation 
const studentName = { id: 01, name: 'Heblu', class: 10, schoolName: 'Omuk Tomuk', address: 'Dhaka' };
const jsonData = JSON.stringify(studentName);
// console.log(studentName);
// console.log(jsonData);
const conveter = JSON.parse(jsonData);
// console.log(conveter);

const shoping = {
    shopName: 'Beautiful Shoping Help',
    address: 'Dhaka Bangladesh',
    storeType: 'Eker vitor sob',
    product: ['shoe', 'T-shirt', 'Shirt', 'pant', 'Bags'],
    profit: 10000,
    expensive: true,
};
console.log(shoping.product);
const convetToJsonData = JSON.stringify(shoping);
console.log(convetToJsonData);
const convertJsonData = JSON.parse(convetToJsonData);
console.log(convertJsonData);
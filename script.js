"use strict";

// an array of numbers for testing purposes
let numbers = [75, 77, 63, 89];
// an array of strings for testing purposes
let strings = ["Detroit", "Grand Rapids", "Holland", "Oxford"];
// an array of objects for testing purposes
let objects = [
 {
   brand: "Apple",
   size: 15,
   price: 1600,
   touchscreen: false,
 },
 {
   brand: "Lenovo",
   size: 13,
   price: 1200,
   touchscreen: true,
 },
 {
   brand: "Dell",
   size: 13,
   price: 650,
   touchscreen: false,
 },
];


let sum = 0;
numbers.forEach((number)=>{
    sum += number;
});

console.log(sum);


const calcTotal = (arrayOfNumbers) => {
let sum = 0;
arrayOfNumbers.forEach((item) => {
    sum += item; 
});
return sum;
};

console.log(calcTotal(numbers));

console.log(calcTotal([1, 2, 3, 4]));

// Declare a function named filterTouchscreens
// ○ Parameter(s): array
// ○ Functionality: return a new array where every object has a touchscreen property of true.

const filterTouchscreens = (array) => {
    let newArray = array.filter((laptop)=>{
        return laptop.touchscreen === false;
    });
    return newArray;
};

console.log(filterTouchscreens(objects));



// Declare a function named findLaptopByPrice
// ○ Parameter(s): array, price
// ○ Functionality: return the first object from the provided array that has the specified price.

const findLaptopByPrice = (array, price) => {
    return array.find((item => {
        return item.price === price;
    }));
};

console.log(findLaptopByPrice(objects, 1600));


// Declare a function named myFindIndex
// ○ Parameter(s): array, brand, price
// ○ Functionality: return the index of the first object that has both the specified brand and price

const myFindIndex = (array, brand, price) => {
    return array.findIndex((item => {
        return item.price === price && item.brand === brand;
    }));
};

console.log(myFindIndex(objects, "Dell", 650));



// Declare a function named includesBrand
// ○ Parameter(s): array, brand
// ○ Functionality: use the some method to see if the specified brand is included in the provided array


const includesBrand = (array, brand) => {
    return array.some((item) => {
        return item.brand === brand;
    });
};

console.log(includesBrand(objects, "Dell"));


// Declare a function named calcSumV2
// ○ Parameter(s): array
// ○ Functionality: use the reduce method to calculate the sum of all the numbers in the given array

const calcSumV2 = (array) => {
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
};

console.log(calcSumV2(numbers));

const calcAverageLaptopCost = (anArrayOfLaptops) => {
    let total = anArrayOfLaptops.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
    },0);
    return total/anArrayOfLaptops.length;
};

console.log(calcAverageLaptopCost(objects));

// Declare a function named deleteByIndex
// ○ Parameter(s): array, index
// ○ Functionality: remove an item from an array at the specified index

const deleteByIndex = (array, index) => {
    array.splice(index, 1);
};

deleteByIndex(strings, 1);
console.log(strings);

const deleteByName = (array, name) => {
    let index = array.findIndex((item)=> {
        return item.brand === name;
    });
    deleteByIndex(array, index);
}

deleteByName(objects, "Apple");

console.log(objects);



// Declare a function named addString
// ○ Parameter(s): array, newString
// ○ Functionality: add a new string to the end of the array

const addLaptop = (array, brand, size, price, touchscreen) => {
    let newLaptop = {
        brand: brand,
        size: size,
        price: price,
        touchscreen: touchscreen
    };
    array.push(newLaptop);
};

//use push to put at the end of an array - use unshift if you want it placed at the beginning 

addLaptop(objects, "Apple", 15, 1600, false);

console.log(objects);


//arguments no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments); this doesn't work because there's no function keyword
    return a + b;
}

console.log(add(55, 1, 1001));

//this keyword is also not bound

const user = {
    name: 'Leslie Alldridge',
    cities: ['New Plymouth', 'Wellington'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

//challenge area 

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
        console.log(this.num);
    }
};

console.log(multiplier.multiply(2));
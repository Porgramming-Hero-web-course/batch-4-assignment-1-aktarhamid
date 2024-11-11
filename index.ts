

// problem 1
const sumArray = (arr: number[]): number => {
    let sum: number = 0;
    for (let i in arr) {
        sum = sum + arr[i]
    }
    return sum
}

console.log(sumArray([2, 4]))

// problem 2

const reomoveDuplicate = (arr: number[]): number[] => {
    const uniqueArray = []
    for (let i of arr) {
        if (uniqueArray.indexOf(i) === -1) {
            uniqueArray.push(i)
        }

    }
    return uniqueArray;

}

console.log(reomoveDuplicate([1, 2, 2, 3, 4, 4, 5]))

// problem 3

function countWordOccurrences(sentence: string, word: string): number {

    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();

    const words = lowerSentence.split(" ");
    return words.filter(w => w === lowerWord).length;
}

console.log(countWordOccurrences("I love typescript", "typescript")); // Sample Output: 1



// problem 4

type Shape = {
    shape: "rectangle" | "circle";
    width?: number;
    height?: number;
    radius?: number;
};

const circleArea = calculateShapeArea(shape: Shape): number => {
    return Math.PI * shape.radius ** 2;
}

const rectangleArea = calculateShapeArea(shape : Shape): number => {
    return shape.width * shape.height;
}


// problem 5

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

// problem 6


type Profile = {
    name: string;
    age: number;
    email: string;
}

function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
}

// Sample Input:
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));




// problem  7

class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge(): number {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());



// problem----> 8

function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every(key => key in obj);
}

// Sample Input:
const person1 = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person1, ["name", "age"])); // Sample Output: true
const myarray = [[["Khalid", "Ali", "Nabeel"]], [["Math", "Physics", "English"]], [["Karchi", "Lahore"]]];

const nestedArray = [...myarray[1][0][1]];


console.log(myarray);
console.log(nestedArray);



const Obj = {
    Cars: {
        Toyota: {
            modelOne: "Corolla 1300cc",
            modelTwo: "Aqua",
        },
        Kia: {
            modelOne: "Sportage",
            modelTwo: "Picanto",
        },
        Honda: {
            modelOne: "Civic",
            modelTwo: "Indus",
        }
    }
}

const secondObj = { ...Obj.Cars.Toyota };

console.log(Obj);
console.log(secondObj);
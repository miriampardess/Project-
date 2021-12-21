let NameList = [
    { id: 0, "name": '', "age": 0 },
    { id: 1, "name": 'Dan', "age": 3 },
    { id: 2, "name": "Dlex", "age": 4 },
    { id: 3, "name": "Norman", "age": 7 },
];
let listTav = [];
let listMinmAX = [];
let newListUqual = [];

//A
// 1
/**
 * This function goes over the local array I created
 and pulls out only the one whose character starts with the character we sent
 * @param {*} req 
 * @param {*} res 
 */
const getexaxtage = (req, res) => {
    db.inventory.find({ qty: { $eq: 20 } }).exec(function (err, results) {
        var count = results.length
    });
}
//B
const getAllPeopleStartcharacter = async (character) => {
    let str;
    let acronym;
    for (let index = 0; index < NameList.length; index++) {
        str = NameList[index].name;
        acronym = str.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '')
        if (acronym == character) {
            listTav[index] = NameList[index].name;
        }
    }
    return listTav;
}
//2
/**
 *This function receives max and min and goes through all the ages of the array 
   and checks who is in the middle of the min and max that the function received
 * @param {*} min 
 * @param {*} max 
 * @returns listMinmAX
 */
export const getAlllistMinMax = async (min, max) => {
    NameList.map((index) => {
        if (NameList[index].age > min && NameList[index].age < max) {
            listMinmAX[index] = NameList[index].name;
        }
        return listMinmAX;
    })
}
//3
export const editPerson = async (name, age) => {
    for (let index = 0; index < NameList.length; index++) {
        if (NameList[index].name == name) {
            NameList[index].age = age;
        }
    }
    return NameList;
}

//4
/**
 *This function receives an age and
goes through all the ages of the array and checks who exactly is the age of the age that the function received
And summarizes how many people there are at the age the function received
 * @param {*} age 
 * @returns 
 */
export const getexactAge = async (age) => {
    let countPersonAgeUqual;
    for (let index = 0; index < NameList.length; index++) {
        if (NameList[index].age == age) {
            newListUqual[index] = NameList[index].name;
            countPersonAgeUqual++;
        }
    }
    const data = {
        list: newListUqual,
        count: countPersonAgeUqual
    }
    return (data)
}

//5
/**
 * This function gets a name
 * And goes through the array and checks if there is no username then adds it to the array
 * @param {*} name 
 * @param {*} age 
 * @returns NameList
 */

const addNewPersonName = async (name, age) => {
    for (let index = 0; index < NameList.length; index++) {
        if (!NameList[index].name == name) {
            NameList.push({ "id": NameList.lengthׂׂ(), "name": name, "age": age });
        }
    }
    return NameList;
}




module.exports = { getAllPeopleStartcharacter, getAlllistMinMax, editPerson, getexactAge, addNewPersonName, getexaxtage }


const _ = require("lodash");
var users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female",
    },
    {
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male",
    },
    {
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female",
    },
];

function getUsers() {
    var output = "";
    for (i = 0; i < users.length; i++) {
        output += `${users[i].firstName} ${users[i].lastName} is ${users[i].age},  ${users[i].gender} \n`;
    }
    console.log(output);
    return output;
}

function findUser(lastName, gender) {
    try {
        var user = _.filter(
            users,
            _.matches({ lastName: lastName, gender: gender })
        );
        var iFindUser = `${user[0].firstName} ${user[0].lastName} is ${user[0].age}, ${user[0].gender}`;
        console.log(iFindUser);
        return iFindUser;
    } catch (error) {
        console.log(error);
        return "Cannot read property 'firstName' of undefined";
    }
}

getUsers();
findUser(iFindUser);

module.exports = findUser;

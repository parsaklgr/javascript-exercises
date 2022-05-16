const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if (Object.keys(oldest).length === 0) {
            return person;
        }
        let oldestBirth = oldest["yearOfBirth"];
        let oldestAge = 0;
        if ("yearOfDeath" in oldest) {
            oldestAge = oldest["yearOfDeath"] - oldestBirth;
        } else {
            let d = new Date();
            oldestAge = d.getUTCFullYear() - oldestBirth;
        }
        let personBirth = person["yearOfBirth"];
        let personAge = 0;
        if ("yearOfDeath" in person) {
            personAge = person["yearOfDeath"] - personBirth;
        } else {
            let d = new Date();
            personAge = d.getUTCFullYear() - personBirth;
        }
        if (personAge > oldestAge) {
            return person;
        } else {
            return oldest;
        }
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;

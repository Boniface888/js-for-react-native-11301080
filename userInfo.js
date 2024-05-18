// Task 3

let cntr = 1;

function createUserProfiles(names, namesModified) {
    const usrPrfls = [];

    for (let idx = 0; idx < names.length; idx++) {
        const usrPro = {
            originalName: names[idx],
            newName: namesModified[idx],
            id: cntr++
        };
        usrPrfls.push(usrPro);
    }

    return usrPrfls;
}

module.exports = {
    createUserProfiles
};

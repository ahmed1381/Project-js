let Check = function ChechName(name) {
    if (name.charAt(0) === name.charAt(0).toUpperCase()) {
        console.log(name)
    } else {
        console.log("Please type first letter toUppercase");
    }
};

console.log(Check("Ahmed"));
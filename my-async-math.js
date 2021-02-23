slowMath
    // Add together 6 and 2.
    .add(1, 1).then(num => {
        console.log(num);
        return slowMath.multiply(num, 2)
    // Wait on the result, log it, and then multiply the result by 2.
    }).then(num => {
        console.log(num);
        return slowMath.divide(num, 4)
    // Wait on the result, log it, and then divide the result by 4.
    }).then(num => {
        console.log(num);
        return slowMath.subtract(num, 3)
    // Wait on the result, log it, and then subtract 3 from the result.
    }).then(num => {
        console.log(num);
        return slowMath.add(num, 98)
    // Wait on the result, log it, and then add 98 to the result.
    }).then(num => {
        console.log(num);
        return slowMath.remainder(num, 2)
    // Wait on the result, log it, and then find the remainder from dividing the result by 2.
    }).then(num => {
        console.log(num);
        return slowMath.multiply(num, 50)
    // Wait on the result, log it, and then multiply the result by 50.
    }).then(num => {
        console.log(num);
        return slowMath.remainder(num, 40)
    // Wait on the result, log it, and then find the remainder from dividing the result by 40.
    }).then(num => {
        console.log(num);
        return slowMath.add(num, 32)
    // Wait on the result, log it, and then add 32 to the result.
    }).then(num => {
        console.log(`The final result is ${num}.`)
    // Wait on the result, and then log: The final result is ___, where you fill in the blank with the final result.
    }).catch(err => {
        console.log(err);
    });


// Add a .catch function to handle any errors that occur. Log the error to the console.
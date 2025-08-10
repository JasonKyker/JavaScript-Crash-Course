// Write a for-loop that loops through 1 to 20
// If the number is divisible by 3, print "Frontend"
// If the number is divisible by 5, print "Simplified"
// If the number is divisible by 3 and 5, print "Frontend Simplified"
// If the number is  *not* divisible by either 3 or 5, print the number


for (let i = 1; i <= 20; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} -> Frontend Simplified`)
    }
    else  if (i % 3 === 0) {
        console.log(`${i} -> Frontend`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} -> Simplified`)
    }
else {
    console.log(`${i} -> ${i}`)
}
}
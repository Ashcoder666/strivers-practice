

function reverseNumber(number){
    let rev = 0
    while(number>=1){
        rem = number%10
        rev = (rev*10)+rem
        // console.log(rev)
        number = Math.floor(number/10)

    }
    return rev
}

console.log(reverseNumber(1234))
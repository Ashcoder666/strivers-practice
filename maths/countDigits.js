

function cD(number) {
    digitCount= 0
    while(number >= 1){
      
        number /= 10
        digitCount++

    }
    return digitCount
}

console.log(cD(54353))
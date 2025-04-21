

function checkPalindrome(number){
    let temp = number
    let rev = 0
    while (temp >= 1){
        rem = temp %10
        rev = rev * 10 + rem
        temp = Math.floor(temp/10)
    }
    // console.log(t)
    if(number == rev){
        return "palindrome"
    }else{
        return "not palindrome"
    }
}

console.log(checkPalindrome(1233))
console.log(checkPalindrome(1221))
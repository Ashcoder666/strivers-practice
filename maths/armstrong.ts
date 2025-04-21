

function armstrongChecker(num:number):boolean{
    let temp = num
    let sum = 0
    while(temp >= 1){
      let  rem = temp%10 
      sum = sum + (rem*rem*rem)
      temp = Math.floor(temp/10)
    }

    if(num == sum ){
        return true
    }else{
        return false
    }
}

console.log(armstrongChecker(351))
function isPrime(num:number):boolean{
    if(num==1||num==2){
        return true
    }

    for(let i=2;i<Math.sqrt(num);i++){
        if (num % i == 0){
            return false
        }
    }

    return true
}

console.log(isPrime(23))
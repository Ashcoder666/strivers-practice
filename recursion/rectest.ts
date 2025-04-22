

function recursion(n:number,sum:number){
 

    // console.log(n,sum)

  
   if(n==0){
    console.log("im here")
    return sum
}
sum += n
   return recursion(n-1,sum)
    
}

console.log(recursion(5,0))

// parametrised way

// function way

function recursionDunctional(n:number):number{
    if(n<1){
        return 0;
    }

    return n + recursionDunctional(n-1)

}

console.log(recursionDunctional(5))


function gcd(num1:number,num2:number): number {
    let commonDCDs:number[]= []
   let num1gcds:number[] = findAllcommmonDivisors(num1)
   let num2gcds:number[] = findAllcommmonDivisors(num2)

   for(let i=0;i<num1gcds.length;i++){
    for(let j=0;j<num2gcds.length;j++){
        if(num1gcds[i]==num2gcds[j]){
            commonDCDs.push(num1gcds[i])
        }
    }
   }
   let max:number = 0
   for(let k=0;k<commonDCDs.length;k++){
    
        if(commonDCDs[k] > max){
            max = commonDCDs[k]
        }

       
   }
return max
}

function findAllcommmonDivisors(num:number):number[]{
    let resArray:number[] = []
    for(let i=1;i<=num;i++){
        if (num % i == 0){
            resArray.push(i)
        }
    }

    return resArray
}

console.log(gcd(15,20))





//1
function calculateDifference(a,b){
    return a-b;

}

console.log(calculateDifference(2,3));

//2
function isOdd(n){
    return n%2!=0;
}

console.log(isOdd(5));

//3
function findMin(...arr){
    let min=arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return console.log(min);

}
findMin(1,2,3,4,5,7,0);

//4
function filterEvenNumbers(...arr){
    return arr.filter(n=> n%2==0);

}

console.log(filterEvenNumbers(2,4,3,5,7,8,9));

//5
function sortArrayDescending(...arr){
    return arr.sort((a,b)=>(b-a));

}
console.log(sortArrayDescending(1,2,3,4,5,67,8,9,0));

//6
function lowercaseFirstLetter(text){
    const newText= text[0].toLowerCase()+ text.slice(1);
    return console.log(newText);
}
lowercaseFirstLetter("HELLO");

//7
function findAverage(...arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum/arr.length
}

console.log(findAverage(1,2,3,4,5));

//8
function isLeapYear(year){
    return (year%100!=0 && year%4==0) || year%400==0;
}
console.log(isLeapYear(2026));
console.log(isLeapYear(1900));
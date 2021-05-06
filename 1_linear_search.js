const array = [1,4,5,8,1,2,7,5,2,11];
let count =0;

const linearSearch = (arr,number)=>{
    for(let i=0;i<arr.length;i++){
        count++;
        if(arr[i]===number){
            console.log(arr[i]);
            console.log(count);
        }
    }
}

linearSearch(array,11);

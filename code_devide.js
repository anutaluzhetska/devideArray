const Arr = [7, 4, 5, 8, 9, 3, 2, 0, 64];
const middleIndex = Math.floor(Arr.length / 2);
const left = Arr.slice(0, middleIndex);
const right = Arr.slice (middleIndex, Arr.length);

function merge(arr1, arr2) {
    let result = [];
    result.push(arr2);
    result.push(arr1); 
    return result
}

const sort = merge(left, right);
console.log(sort)


function devide (arr1, arr2){
    let result1 = [];
    
    for(let j = 0; j < arr2.length; j++){
        result1.push(arr2[j]); 
    }

    for(let i = 0; i < arr1.length; i++){
        result1.push(arr1[i]); 
    }
    return result1
}
const devide1 = devide(left, right)
console.log(devide1)

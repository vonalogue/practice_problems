// Return the index where num should be inserted in accordance with arr's ascending numerical order after sorting. 
function getIndexToIns(arr, num) {
    let index = 0;
    arr.sort((h,j) => h-j);
    while (arr[index] < num) {
        index++;
    }
    return index;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));       // return 2
console.log(getIndexToIns([2, 5, 10], 15));         // return 3

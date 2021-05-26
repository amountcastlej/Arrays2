// Reverse Array
// Given a numerical array, reverse the order of values, in-place. 
//The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reverse
// function reverseArr(arr){
//     for (var x = 0; x < arr.length/2; x++){
//         var temp = arr[x]; 
//         arr[x] = arr[arr.length - x - 1];
//         arr[arr.length - x - 1] = temp;
//     }
//     return arr;
// }
// console.log(reverseArr([1,2,3,4]))

// Rotate 
// Implement rotateArr that accepts array and offset. Shift arr's values to the right by that amount. 
//Wrap around any values that shift off array's end to the other side, so that no data is lost. 
// function rotateArr(arr, shiftBy){
//     var temp = shiftBy
//     while(temp > 0){
//         if(shiftBy > 0){
//             var temp2 = arr[arr.length-1]
//             for(var i = arr.length-1; i>0; i--)
//                 arr[i] = arr[i-1];
//             arr[0] = temp2;
//         }
//         else{
//             var temp3 = arr[0]
//             for(var i =0; i < arr.length - 1; i++){
//                 arr[i] = arr[i + 1]
//             }
//             arr[arr.length -1]= temp3
//         }
//         temp--
//     console.log(rotateArr([8,1,7,2,3], 1))

//Filter Range
// Given an array and values min and max, retain only the array values between min and max
// Return the array you are given, with values in original order 
// No built in array functions
// function filterrange(arr, min, max){
//     for(var i = 0; i < arr.length; i++){
//         if(!(arr[i] > min && arr[i] < max))
//         arr[i] = 0
//     }
//     return arr
// }
// console.log(filterrange([2,7,3,10,13,6], 5, 11))

// Concat
// Create a standalone function that accepts two arrays
// Return a new array containing the first array's elements, followed by the 2nd array's elements
// Do not alter the original arrays
// function concatenate(arr1, arr2){
//     var newarr = [];
//     for(var i = 0; i < (arr1.length + arr2.length); i++){
//         if(i >= arr1.length){
//             newarr[newarr.length] = arr2[newarr.length - arr2.length]
//         }
//         else newarr[newarr.length] = arr1[i]
//     }
//     return newarr;
// }
// console.log(concatenate([3,6,1,8,10], [8,2,6,1,0]))

// Min to Front
// Given an array of comparable values, move the lowest element to array's front, 
//shifting backward any elements previously ahead of it
// array = [4, 2, 1, 3, 5];
// function mintoFront(arr){
//     var minimum = arr[0];
//     for (var x = 1; x < arr.length; x++){
//         var temp = minimum;
//         if(minimum>arr[x]){
//             minimum = arr[x];
//             arr[x] = temp;
//         }
//         arr[0] = minimum;
//     }
//     console.log(minimum)
//     return arr;
// }
// console.log(mintoFront(array));
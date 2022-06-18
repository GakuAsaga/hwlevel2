// bài tập 

//bài 1 

// function ReveseString(str) {
//     let arr = str.split('');
//     let reverseArr = arr.reverse();
//     let newString = reverseArr.join('');

//     return console.log(newString);
// };

// ReveseString(`abcdef`);

//bài 2

// let arr = [1, 2, 3, 5, 4, 2, 6, 4]

// function num2(arr) {
//     return console.log([...(new Set(arr))]);
// }
// num2(arr);

// bài 3 : viết một chương trình lấy phần tử xuất hiện nhiều nhát trong một mảng và số lần suất hiện của nó trong mảng :
//Input : [1,2,3,5,6,4,2,1,6,3,5,3]
//output: {value:3. count: 3}

function arrayCount(array) {
    array.sort();
    let max = [0, 0];
    let Result = {}
    let count = 1;
    for (let i = array.length - 1; i > 0; --i) {
        if (array[i] == array[i - 1]) ++count;
        else {

            if (max[1] < count) {
                max[0] = array[i];
                max[1] = count;
            }
            count = 1;
        }
    }
    Result.value = max[0]
    Result.count = max[1]
    console.log(Result);
}


let array = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];

arrayCount(array);

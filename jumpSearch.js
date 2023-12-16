function jumpSearch(arr, target) {
   let arraySize = arr.length;
   let blockSize = Math.floor(Math.sqrt(arraySize));
   let currentIndex = blockSize;
   let prevIndex = 0;
   while(arr[Math.min(currentIndex, arraySize) - 1] < target) {
    prevIndex = currentIndex;
    currentIndex+=blockSize;

    if (prevIndex >= arraySize) {
        return -1;
    }
   }

   for(let i=prevIndex;i<Math.min(currentIndex, arraySize);i++) {
    if (arr[i] === target) {
        return i;
    }
   }
   return -1;
}

const sortedArray = [1, 2, 5, 7, 10, 11, 12, 15, 19, 20, 25];
const targetElement = 110;

const result = jumpSearch(sortedArray, targetElement);

if (result !== -1) {
    console.log(`Izlanayotgan element-${targetElement} berilgan qatorning ${result}-chi indeksida topildi.`);
} else {
    console.log(`Izlanayotgan element-${targetElement} berilgan qatorda topilmadi.`);
}

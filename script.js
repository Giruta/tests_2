    //---------------------
    // УСЛОВНЫЕ ОПЕРАТОРЫ
    //---------------------

    //1.1 Если а – четное посчитать а*б, иначе а+б

const calculations = (a, b) => (a % 2 === 0) ? a * b : a + b;

calculations (33,2);

//1.2 Определить какой четверти принадлежит точка с координатами (х,у)

const getQuarter = (x, y) => {
    if (x === 0 && y === 0) {
        return '0';
    } else if (x > 0 && y > 0) {
        return '1';
    } else if (x < 0 && y > 0) {
        return '2';
    } else if (x < 0 && y < 0) {
        return '3';
    } else if (x > 0 && y < 0) {
        return '4';
    } else {
        return 'ось'
    }
}

getQuarter(345, -87);

//1.3 Найти суммы только положительных из трех чисел

const sumPositive = (k, l, m) => {
    let sum = 0;

    if (k >= 0) sum += k;
    if (l >= 0) sum += l;
    if (m >= 0) sum += m;

    return sum;
}

sumPositive(-3, 2, 10);

//1.4 Посчитать выражение макс(а*б*с, а+б+с)+3

const maxExpression = (a, b, c) => {
    let num1 = a * b * c;
    let num2 = a + b + c;

    return (num1 >= num2) ? num1 + 3 : num2 + 3;
}

maxExpression(2, 3, 4);

//1.5 Написать программу определения оценки студента по его рейтингу

const getMark = (rating) => {
    let mark;

    switch (true) {
        case rating >= 0 && rating <= 19:
            mark = 'F'; break;
        case rating >= 20 && rating <= 39:
            mark = 'E'; break;
        case rating >= 40 && rating <= 59:
            mark = 'D'; break;
        case rating >= 60 && rating <= 74:
            mark = 'C'; break;
        case rating >= 75 && rating <= 89:
            mark = 'B'; break;
        case rating >= 90 && rating <= 100:
            mark = 'A'; break;
        default:
            mark = 'not certified'; break;
    }
    return mark;
}

getMark(89);

//--------
// ЦИКЛЫ
//--------

//2.1 Найти сумму четных чисел и их количество в диапазоне от 1 до 99

const getParamsEvenNumbers = () => {
    let summa = 0; quantity = 0;

    for (let i = 1; i < 100; i++) {
        if (i % 2 === 0) {
            summa += i;
            quantity ++;
        }
    }
    return {summa, quantity};
}

getParamsEvenNumbers();

//2.2 Проверить простое ли число?

const isPrime = (n) => {
    let flag = false;
    let i = 2;
    const half = n/2;

    do {
        if (n % i === 0) { flag = true; }
        else  i++;
    } while (i <= half && !flag)

    flag ? console.log(`Число ${n} не является простым`):
        console.log(`Число ${n} является простым`);

    return flag;
}

isPrime(211);

//2.3 Найти корень натурального числа с точностью до целого
// (рассмотреть вариант последовательного подбора и метод бинарного поиска)

// 2.3.1 последовательный подбор

function sequentialSearch(value) {
    for (let i = 1; i < value/2; i++) {
        if ((i - 1) * (i - 1) < value && i * i > value) {
            return i - 1;
        }
    }
}

sequentialSearch(200);

// 2.3.2 бинарный поиск

function binarySearch (value) {
    let end = value;
    let start = 0;
    let flag = false;
    let middle;
    while (start <= end && !flag) {
        middle = Math.floor((end - start)/2);
        if ((start + middle) * (start + middle) <= value && (start + middle + 1) * (start + middle + 1) > value) {
            flag = true;
            console.log (`корень натурального числа ${value} с точностью до целого равен ${middle + start}`);
        } else if ((start + middle) * (start + middle) < value) {
            start = start + middle + 1;
        } else end = middle - 1;
    }
}

binarySearch(24);

// 2.4 Вычислить факториал числа n. n! = 1*2*…*n-1*n;!

const factorial = (n) => {
    let result = 1;
    while(n){
        result *= n--;
    }
    return result;
}

factorial(6);

// 2.5 Посчитать сумму цифр заданного числа

function sumNumbers(number) {
    let prop = number;
    let sum = 0;
    do {
        sum += prop % 10;
        prop = prop / 10 ^0;
    } while (prop >= 1);
    return sum;
}

sumNumbers(12345);

// 2.6  Вывести число, которое является зеркальным отображением
// последовательности цифр заданного числа, например,
// задано число 123, вывести 321.

function mirrorNumbers(number) {
    let prop = 0;
    while (number) {
        prop = prop * 10 + (number % 10);
        number = number / 10 ^0;
    }

    return prop;
}

mirrorNumbers(1234);

//---------------------
// ОДНОМЕРНЫЕ МАССИВЫ
//---------------------

const A = [2, 4, 5, 65, 34, 25, -5, 0, 4, 25, -5];
const B = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const C = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//3.1 Найти минимальный элемент массива

function minElementArray(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        min = (array[i] <= min) ? array[i] : min;
    }

    return min;
}

minElementArray(A);

//3.2 Найти максимальный элемент массива

function maxElementArray(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        max = (array[i] >= max) ? array[i] : max;
    }

    return max;
}

maxElementArray(A);

//3.3 Найти индекс минимального элемента массива

function indexMinElem(array) {
    let i = 0;
    let ind = [];

    let min = minElementArray(array);

    for (let item in array) {
        if(array[item] === min) {
            ind[i] = item;
            i++;
        }
    }

    return ind;
}

indexMinElem(A);

//3.4 Найти индекс максимального элемента массива

function indexMaxElem(array) {
    let i = 0;
    let ind = [];

    let max = maxElementArray(array);

    for (let item in array) {
        if(array[item] === max) {
            ind[i] = item;
            i++;
        }
    }

    return ind;
}

indexMaxElem(A);

//3.5 Посчитать сумму элементов массива с нечетными индексами

function sumOddIndex(array) {
    let sum = 0;
    for (let item in array) {
        if (item % 2 === 1) {
            sum += array[item];
        }
    }

    return sum;
}

sumOddIndex(A);

//3.6 Сделать реверс массива (массив в обратном направлении)

function reverseArray(array) {
    const n = array.length;
    let prop;

    for (let i = 0; i <= n/2^0; i++) {
        prop = array[i];
        array[i] = array[n-i-1];
        array[n-i-1] = prop;
    }
    return array;
}

reverseArray(A);

//3.7 Посчитать количество нечетных элементов массива

function numberOddElements(array) {
    let num = 0;

    for (let item in array) {
        if (array[item] % 2 === 1 || array[item] % 2 === -1) {
            num++;
        }
    }

    return num;
}

numberOddElements(A);

//3.8 Поменять местами первую и вторую половину массива,
// например, для массива 1 2 3 4, результат 3 4 1 2

function reverseArrayParts(array) {
    const n = array.length / 2 ^0;
    let prop;
    let m = array.length % 2 === 0 ? 0:1;
    for (let i = 0; i < n; i++) {
        prop = array[n+i+m];
        array[n+i+m] = array[i];
        array[i] = prop;
    }

    return array;
}

reverseArrayParts(B);
reverseArrayParts(C);

//3.9 Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

// Bubble

let bubbleSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let exchange = false;

        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                exchange = true;
            }
        }
        if (!exchange) break;
    }
    return arr;
};

bubbleSort(A);

// Select

let selectSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let  temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

selectSort(A);

//3.10 Отсортировать массив (Quick, Merge, Shell, Heap)

const D = [2, 34, -4, 0, 3, 4, 23, -456, 78, 4, 5, 10];

// Quick

let quickSort = (arr, start, end) => {

    if (start >= end) return arr;

    let left = start,
        right = end;
    let pivot = arr[parseInt((start+end)/2)]; //выбор стержня

    while(left <= right) { //основной цикл сортировки
        while (arr[left] < pivot) left++; //ищем слева первый больше стержня
        while (arr[right] > pivot) right--; //справа - первый меньше
        if (left > right) break; // если пересеклись - стоп, уже разбито на 3 части
        //меняем местами
        let buf = arr[left];
        arr[left] = arr[right];
        arr[right] = buf;
        left++; right--;
    }
    arr=quickSort(arr,start,right);
    arr=quickSort(arr,left,end);
    return arr;
}

quickSort(D, 0, D.length-1);

// Merge
// Shell
// Heap

//---------------------
//      ФУНКЦИИ
//---------------------

//4.1 Получить строковое название дня недели по номеру дня.

function getWeekDay(number) {
    const weekDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    let result;

    if (number >= 1 && number <=7) {
        result = weekDay[number-1];
    } else console.log('Введенное число не из промежутка целых чисел 1..7');

    return result;
}

getWeekDay(7);

//4.2 Найти расстояние между двумя точками в двухмерном декартовом пространстве.

function getDistaceBetweenPoints(x1, y1, x2, y2) {

    let distance = ((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1))**0.5;

    return distance;
}

getDistaceBetweenPoints(7, 1, 9, 5);

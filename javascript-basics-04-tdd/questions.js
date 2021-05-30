const stringSize = (text) => {
    return text.length
}
const replaceCharacterE = (text) => {
    return text.replace('e',' ');
}
const concatString = (text1, text2) => {
    return text1.concat(text2);
}
const showChar5 = (text) => {
    return text.charAt(4);
}
const showChar9 = (text) => {
    return text.substring(0, 9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return (typeof text == 'string'); 
}

const getExtension = (text) => {
    return text.split('.').pop();
}
const countSpaces = (text) => {
    return text.split(" ").length-1;
}
const InverseString = (text) => {
    const split = text.split("");
    const reverse = split.reverse();
    const join = reverse.join("");
    return join;
}

const power = (x, y) => {
    return Math.pow(x, y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    const reslt = array.map(Math.abs);
    return reslt;
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * (Math.pow(radius, 2)));
}
const hypothenuse    = (ab, ac) => {
    return Math.sqrt((ab**2)+(ac**2));
}
const BMI = (weight, height) => {
    const number = (weight / (height * height));
    const cal = number.toFixed(2);
    return parseFloat(cal) ;
}

const createLanguagesArray = () => {
    return ["Html","CSS","Java","PHP"];
}

const createNumbersArray = () => {
    return[0,1,2,3,4,5];
}

const replaceElement = (languages) => {
    languages[2] = 'Javascript';
    return languages;
}

const addElement = (languages) => {
    languages.push('Ruby');
    languages.push('Python');
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2,-1);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    var social_ar = social_arr.split(",");
    return social_ar;
}

const convertArrToStr = (languages) => {
    var convertarrTostr= languages.join(",");
    return convertarrTostr;
}

const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();
}
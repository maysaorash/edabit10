function isOdd(num) {
	return num % 2 !== 0;
}

function countTrue(arr) {
let result = 0;
    arr.forEach(element => {
        if(element === true){
            result += 1;
        }
    });
    return result;
}

function squareDigits(n) {
	 return Number(('' + n).split('').map(function (val) { return val * val;}).join(''));
}

function squareDigits(n) {
	return +[...String(n)].map(x => x*x).join('');
}

const squareDigits = n =>
 +n.toString().split('').map(x=>x*x).join('');

function squareDigits(n) {
	total="";
	n= n.toString()
	for(i=0;i<n.length;i++){
		total+=Math.pow(n[i],2)
	}
	return parseInt(total)
}


function makeRug(m, n, s){
	let arr = [];
	let str="";
	if(s==null) s="#";
	for(let i=0;i<m;i++){
		str="";
		for(let j=0;j<n;j++){
		str+=s;
		}
		arr.push(str);
	}
	return arr;
}

function makeRug(m, n, s="#"){
	return Array(m).fill(s.repeat(n));
}

function makeRug(m, n, s = "#"){
      let a = [];
      for (var i = 0; i < m; i++) a.push(s.repeat(n))
      return a;
}

function makeRug(m, n, s='#'){
	let arr=[]
	for(let i=1;i<=m;i++){
		arr.push(s.repeat(n))
	}
	return arr
}

function makeRug(m, n, s){
	return Array.from({length: m}, (x) =>s ? s.repeat(n) :'#'.repeat(n));
}


const isRepdigit = (num) => num < 0? false : num === 0? true: new Set([...num.toString()]).size ===1? true: false;

function isRepdigit(num) {
	return new Set('' + num).size === 1
}

const isRepdigit = num => new Set(''+num).size === 1;

function addOddToN(n) {
	return Math.pow((n+1)/2, 2);
}

const addOddToN = n => Math.ceil(n / 2) ** 2;

function addOddToN(n) {
	let a = 0;
	for (let i = 1; i <= n; i += 2) {
		a += i;
	}
	return a;
}

const addOddToN = n => ((n + 1) / 2) ** 2;

function addOddToN(n) {
	return Math.ceil(n/2) ** 2;
}


function firstPlace(road) {
	return road === '' ? 'No road available' : road.match(/[a-z]/ig) ? road.replace(/=/g,'').slice(-1) : 'No car available'
}

function firstPlace(s) {
	return s?s.replace(/=/g,'').slice(-1)||'No car available':'No road available'
}

function firstPlace(road) {
	return road.length === 0 ? 'No road available' : road.replace(/=/g, '').length === 0 ? 'No car available' : road.replace(/=/g, '')[road.replace(/=/g, '').length - 1]
}

function reverseWords(string) {
	return string.split(' ').reverse().join(' ');
}
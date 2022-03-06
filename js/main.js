// const color = 'niebieski';  //typ string
// let age
// const userName = "Klaudia" //camelCase

// console.log(age);

// console.log('Cześć, mam na imię ' + userName +' mam '+ age + ' lat, ' + 'mój ulubiony kolor to ' + color);

// age = 44;

// ---------------------------
// GRAWISY - pod Eskapem

// console.log(`Cześć mam na imię ${userName}, mam ${age} lat i mój ulubiony kolor to ${color}.`);

// const userName = 'Kamil'
// let userAge
// userAge = 38
// const favDish = 'Risotto'

// console.log(`Mam na imię ${userName}, mam ${userAge} lat i bardzo lubię ${favDish}.`)

// let sub = 8457411 % 2 //Sprawdzamy czy liczn\ba jest parzysta lub nie dzielimy na 2;
// console.log(`Wynik modulo ${sub}`)

// ---------------------------
// Operatory przypisania

// let x = 4
// let y = 8

// x = x + y
// console.log(x)

// x += y // zapis skrócony x+y jak powyżej.
// console.log(x)

// x -= y
// console.log(x)

// x = x * y // x */y
// console.log(x)
// x = x / y
// console.log(x)
// x = x % y
// console.log(x)
// ----------------------------------
// OPERATORY PORÓWNANIA
// === Operator porównania + sprawdza typ danych;

// let x = 2
// let y = '10'
// let z = 9

// if (x <= z) {
// 	console.log('OK')
// } else {
// 	console.log('NOK')
// }
// ------------------------------
// OPERATORY LOGICZNE

// && =i / oraz
// || - lub
// !-negacja

// if (5 > 4 || 2 > 3) {
// 	console.log('OK')
// } else {
// 	console.log('NOK')
// }
// ---------------------------

// INSTRUKCJE WARUNKOWE - IF

// const passLength = 10

// if (passLength > 10) {
// 	console.log('Masz bardzo silne hasło')
// } else if (passLength > 5) {
// 	console.log('Masz silne hasło')
// } else { (passLength <= 5)
// 	console.log('Masz  słabiutkie hasło')
// }

// ----------------------- TABLICE
// Kontenery na treść;
// Możemy pracowac metodami - patrz MDN - dużo możliwości.

// const colors = ['red', 'green', 'blue'];

// colors.push('gold');

// console.log(colors);
// console.log(colors[3]);

// ----------------------------------
// PĘTLA FOR - Fajnie współpracuja z tablicami

// const fruits = ['apple', 'bananasy', 'peach', 'plums',"lemon",'123', 'pizza'];

// for ( let i=0; i < fruits.length; i++) {
// console.log(fruits[i]);
// }

// console.log(fruits.length);
// // console.log(fruits[0]);

// -------------------------------
// FUNKCJE

// function addNumbers(milk, choco) {
// 	console.log(milk + choco)
// }
// addNumbers(5, 9)

// function test() {
// 	console.log('Cześć')
// }

// test()

// ----------------------------
// // POBIERANIE ELEMENTÓW;

// const h1 = document.querySelector('h1') //pierwsza h1
// console.log(h1);

// const p = document.querySelector('p') //pierwszy p
// console.log(p);

// const btn = document.querySelector('#btn') //id btn
// console.log(btn);

// const list = document.querySelectorAll('li'); // selektor all
// console.log(list);
// console.log(list[2]);

// ------------------------------------
// ADD EVENT LISTENER

// const btnSend = document.querySelector('#btn1');
// const btnDownload = document.querySelector('.btn2')

// function clickBtnSend() {
// console.log('Kliknięto przycisk wyślij');
// }

// function clickBtnDownload(){
//     console.log(2 + 2);
// }

// btnSend.addEventListener('click', clickBtnSend);
// btnDownload.addEventListener('click', clickBtnDownload);

// ZMIENNA.addEventListener('click', FUNKCJA);
// --------------------------------
// const buttonRed = document.querySelector('#btn1')
// const buttonBlue = document.querySelector('.btn2')
// const remColor = document.querySelector('.remove-color')

// const divCol = document.querySelector('.color')

// function redColor() {
// 	divCol.classList.add('red')
//     divCol.classList.remove('blue')
//     // divCol.classList.toggle('red');
// }

// function blueColor() {
//     divCol.classList.add('blue')
//     divCol.classList.remove('red')

//     // divCol.classList.toggle('blue');
// }

// function deleteColor() {
//     divCol.classList.remove('red')
//     divCol.classList.remove('blue')
// }

// buttonRed.addEventListener('click', redColor);
// buttonBlue.addEventListener('click', blueColor);
// remColor.addEventListener('click', deleteColor);
// ---------------------------------

// ZADANIE JS -PROJ 75 KURS CZ.II

// const buttonArrow = document.querySelector('.arrow')
// const divI = document.querySelector('.item1')
// const picRotate = document.querySelector('.fas')

// function addedShow() {
// 	divI.classList.toggle('show')
// 	picRotate.classList.toggle('fas1')

// 	if (divI.classList.contains('show')) {
// 		picRotate.style.transform = 'rotate(180deg)'

// 	} else {
// 		picRotate.style.transform = 'rotate(0)'
// 	}
// }

// buttonArrow.addEventListener('click', addedShow)
// ----------------------------------------
// Zadanko na konic JS z czesci drugiej.

// const btnSizeUp = document.querySelector('.size-up')
// const btnSizeDown = document.querySelector('.size-down')
// const btnChangeColor = document.querySelector('.color')
// const p = document.querySelector('p')

// let fontSize = 20

// function biggerText() {
//     fontSize += 5;
// 	p.style.fontSize = fontSize + 'px'
// }

// function smallerText () {
//     fontSize -= 5;
// p.style.fontSize = fontSize + 'px'
// }

// function colorText () {

// p.style.color = 'royalblue';

// }


// btnSizeUp.addEventListener('click',biggerText);
// btnSizeDown.addEventListener('click',smallerText);
// btnChangeColor.addEventListener('click',colorText);



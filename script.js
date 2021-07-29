const switchClrAll = document.querySelector('.switch-color-btn-all');
const switchClrBtnFirst = document.querySelector('.switch-color-btn-first');
const switchClrBtnSecond = document.querySelector('.switch-color-btn-second');
const switchClrBtnThird = document.querySelector('.switch-color-btn-third');


const clrNameFirst = document.querySelector('.color-name-first');
const clrNameSecond = document.querySelector('.color-name-second');
const clrNameThird = document.querySelector('.color-name-third');

const colFirst = document.querySelector('.col-first');
const colSecond = document.querySelector('.col-second');
const colThird = document.querySelector('.col-third');

const addBtn = $('.btn-add');
const removeBtn = $('.btn-remove');
const maxArea = 7;
const minArea = 2;
const areaParent = $('.area-Parent');

switchClrAll.addEventListener('click', createRandomColorAll);
switchClrBtnFirst.addEventListener('click', createRandomColorFirst);
switchClrBtnSecond.addEventListener('click', createRandomColorSecond);
switchClrBtnThird.addEventListener('click', createRandomColorThird);

addBtn.click(addArea);
removeBtn.click(removeArea);

function createHex() {
    let hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let a = 0; a < 6; a++) {
        let randomnumber = Math.floor(Math.random() * (hexNumbers.length - 0) + 0)
        hexColor += hexNumbers[randomnumber];
    }

    return hexColor;
}


function createRandomColorFirst() {

    let hex = createHex();
    colFirst.style.backgroundColor = hex;
    clrNameFirst.style.color = hex;
    clrNameFirst.textContent = `${hex}`;
}
function createRandomColorSecond() {

    let hex = createHex();
    colSecond.style.backgroundColor = hex;
    clrNameSecond.style.color = hex;
    clrNameSecond.textContent = `${hex}`;
}
function createRandomColorThird() {

    let hex = createHex();
    colThird.style.backgroundColor = hex;
    clrNameThird.style.color = hex;
    clrNameThird.textContent = `${hex}`;
}
function createRandomColorAll() {

    createRandomColorFirst();
    createRandomColorSecond();
    createRandomColorThird();

}

function addArea() {
    console.log(areaParent[0].children);
}
function removeArea() {

}
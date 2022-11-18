//parentElement
var itemList=document.querySelector('#items');
console.log(itemList.parentNode.style.backgroundColor='grey');
// console.log(itemList.parentElement.parentElement)


//children
console.log(itemList.children[1].style.backgroundColor='yellow' );

//firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello';

//lastChild
console.log(itemList.lastChild);

//lastelementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello';

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);


//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='yellow';


//createElement
var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';

//setAtribute
newDiv.setAttribute('title','hi div');

var newDivText=document.createTextNode('Hello world');

//apendchild
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);











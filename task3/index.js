console.dir(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title); 

console.log(document.doctype);

console.log(document.body);
console.log(document.all[10])//deprecated

document.all[10].textContent='Hello';//not recomended


var headerTitle=document.getElementById('header-title');
headerTitle.textContent='Hi Kaise ho';
headerTitle.innerText="GOOD Morning";

headerTitle.innerHTML='<h3>Hello there</h3>'

headerTitle.style.borderBottom="solid 3px black";

//get elementsnyclassName

var items=document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent='hello 2';
items[1].innerHTML='<strong>ADD ITEM</strong>'
 items[3].style.backgroundColor='green';



for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor='grey';
}

 
// query selector



var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';

var thirdItem=document.querySelector('.list-group-item:nth-child(3) ');
thirdItem.style.visibility='hidden';





//  querySelectorALL

 

 var item=document.querySelectorAll('li');
 item[1].style.color='green'



var oddItems=document.querySelectorAll('li:nth-child(odd)');


for(var i=0;i<oddItems.length;i++)
{
    oddItems[i].style.backgroundColor='green';
}






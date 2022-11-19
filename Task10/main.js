// localStorage.setItem('name','Ritik')
// localStorage.removeItem('name')  


// //session and local are same
// sessionStorage.setItem('name','luv')
// console.log(sessionStorage.getItem('name'));
// sessionStorage.setItem('name','Ritik');
// sessionStorage.removeItem('name');



const femail=document.querySelector('#email')

const fname=document.querySelector('#name')




document.querySelector('#my-form').addEventListener('submit',handleClick);

function handleClick(e)
{
    e.preventDefault();
   
    

    localStorage.setItem('email',femail.value);
    localStorage.setItem('name',fname.value);
    

}


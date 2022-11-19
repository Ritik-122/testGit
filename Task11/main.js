const femail=document.querySelector('#email')

const fname=document.querySelector('#name')




document.querySelector('#my-form').addEventListener('submit',handleClick);

function handleClick(e)
{
    e.preventDefault();
   
    let user_obj={

        pName:fname.value,
        pEmail:femail.value
    }
    let serialized_form=JSON.stringify(user_obj);

    localStorage.setItem('UserDetails',serialized_form);
   
    

}


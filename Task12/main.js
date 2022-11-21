var subm=document.getElementById('my-form');

var users=document.getElementById('listOfPeople');


subm.addEventListener('submit',handleSubmit);

function handleSubmit(e){
    e.preventDefault();

    let obj_users={
        Name:e.target.fname.value,
        Email:e.target.email.value
    }
     
   var edit_button=document.createElement('button');
   edit_button.appendChild(document.createTextNode('EDIT'));

   var del_button=document.createElement('button');
   del_button.appendChild(document.createTextNode('DELETE'));

    var newUser=document.createElement('li');

    newUser.appendChild(document.createTextNode(e.target.fname.value+" "+e.target.email.value));

    newUser.appendChild(edit_button);
    newUser.appendChild(del_button);
    users.appendChild(newUser);





let changing_users=JSON.stringify(obj_users);

    localStorage.setItem('UserDetails'+e.target.email.value,changing_users);
    
    


}
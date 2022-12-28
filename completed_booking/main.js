var subm=document.getElementById('my-form');

var users=document.getElementById('listOfPeople');

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/443ad9cbb7da487db22d0fd7396a288d/appointment')
    .then(res=>{
        for (var i=0;i<res.data.length;i++)
        {
             showUserOnscreen(res.data[i])
        }
    })
    .catch(err=>console.log(err))

})


subm.addEventListener('submit',handleSubmit);

function handleSubmit(e){
    e.preventDefault();

    let obj_users={
        fname:e.target.fname.value,
        lname:e.target.lname.value,
        email:e.target.email.value,
        phonenumber:e.target.phonenumber.value
    }
  
 axios.post('https://crudcrud.com/api/443ad9cbb7da487db22d0fd7396a288d/appointment',obj_users)
   .then(res=>console.log(res))
   .catch(err=>console.log(err))

   showUserOnscreen(obj_users)

}

function showUserOnscreen(user){
   

    childNode=`<li id=${user.email}>${user.fname}-${user.lname}-${user.email}-${user.phonenumber}
                <button onclick=deleteUser('${user.email}')>DELETE</button>
                <button onclick=editUser('${user.email}','${user.fname}','${user.lname}','${user.phonenumber}')>EDIT</button> </li> `
    
    users.innerHTML=users.innerHTML+childNode
    // document.getElementById('fname').value=''
    // document.getElementById('lname').value=''
    // document.getElementById('email').value=''
    // document.getElementById('phonenumber').value=''
                                                                             
}

function deleteUser(d){
    let c=''
    axios.get('https://crudcrud.com/api/443ad9cbb7da487db22d0fd7396a288d/appointment')
    .then(res=>{
       for (var i=0;i<res.data.length;i++)
        {
             if (d===res.data[i].email)
             {
                c+=(res.data[i]._id);
                console.log(c);
             }
        }
        axios.delete('https://crudcrud.com/api/443ad9cbb7da487db22d0fd7396a288d/appointment/'+c)
       .then(res=>console.log(res))
       .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
    elementToremoved=document.getElementById(`${d}`)
    users.removeChild(elementToremoved)
}

function editUser(m,f,l,p){


    document.getElementById('fname').value=f
    document.getElementById('lname').value=l
    document.getElementById('email').value=m
    document.getElementById('phonenumber').value=p

    deleteUser(m);



}
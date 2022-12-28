var subm=document.getElementById('my-form');

var users=document.getElementById('listOfPeople');

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/9bb290745ddc45ef987f4d1ac5cbf995/appointment')
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
  showUserOnscreen(obj_users)
 axios.post('https://crudcrud.com/api/9bb290745ddc45ef987f4d1ac5cbf995/appointment',obj_users)
   .then(res=>console.log(res))
   .catch(err=>console.log(err))

}

function showUserOnscreen(user){

    childNode=`<li id=${user.email}>${user.fname}-${user.lname}-${user.email}-${user.phonenumber}
                <button onclick=deleteUser('${user.email}')>DELETE</button>
                <button onclick=editUser('${user.email}','${user.name}','${user.phonenumber}')>EDIT</button> </li> `
    
    users.innerHTML=users.innerHTML+childNode
                                                                             
}
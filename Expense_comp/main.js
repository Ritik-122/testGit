var subm=document.getElementById('my-form');

var users=document.getElementById('listOfPeople');

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/d74a7337497040258d87786eb2f31d0d/expenses')
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
        amount:e.target.amount.value,
        desc:e.target.desc.value,
        category:e.target.category.value
        
    }
  
 axios.post('https://crudcrud.com/api/d74a7337497040258d87786eb2f31d0d/expenses',obj_users)
   .then(res=>console.log(res))
   .catch(err=>console.log(err))

   showUserOnscreen(obj_users)
   document.getElementById('amount').value=''
    document.getElementById('desc').value=''
    document.getElementById('category').value=""


}

function showUserOnscreen(user){
   

    childNode=`<li id=${user.amount+user.category}><strong>Amount</strong> is: ${user.amount} || <strong>Category</strong> is: ${user.category} || <strong>Description</strong> is: ${user.desc}
                <button onclick=deleteUser('${user.amount+user.category}')>DELETE</button>
                <button onclick=editUser('${user.category}','${user.amount}','${user.desc}')>EDIT</button> </li> `
    
    users.innerHTML=users.innerHTML+childNode
   
                                                                             
}

function deleteUser(f){

     let d=""
    axios.get('https://crudcrud.com/api/d74a7337497040258d87786eb2f31d0d/expenses')
    .then(res=>{
        for (var i=0;i<res.data.length;i++)
        {
             k=res.data[i].amount+res.data[i].category
             if(k===f)
             {
               d+=res.data[i]._id
             }
        }

        
        axios.delete('https://crudcrud.com/api/d74a7337497040258d87786eb2f31d0d/expenses/'+d)
       .then(res=>console.log(res))
       .catch(err=>console.log(err))

    })
 elementToremoved=document.getElementById(f)
    users.removeChild(elementToremoved)
}

function editUser(cat,amt,de){


    document.getElementById('amount').value=amt
    document.getElementById('desc').value=de
    document.getElementById('category').value=cat
    

    deleteUser(amt+cat);



}
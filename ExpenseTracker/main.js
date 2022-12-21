button=document.getElementById('btn')
listOfPeople=document.getElementById('list')


button.addEventListener('click',function(){
   

amount=document.getElementById('amount').value
des=document.getElementById('desc').value
cat=document.getElementById('category').value



user_obj={

    amount:amount,
    description:des,
    category:cat
}
let v=JSON.stringify(user_obj)
let k=`${amount}`
localStorage.setItem(k,v)




const childHTML = `<li id=${amount} ><strong>Amount is</strong>  : ${amount} <strong>Description is </strong>: ${des}  <strong>Category is</strong> : ${cat}
                            <button onclick=deleteUser('${amount}')> Delete User </button>
                            <button onclick=editUserDetails('${amount}','${des}','${cat}')>Edit User </button>
                         </li>`

listOfPeople.innerHTML+=childHTML

})

function deleteUser(id){

    listOfPeople.removeChild(document.getElementById(""+id))
    if(localStorage.getItem(id)!=null)
    {
        localStorage.removeItem(id)
    }
}

function editUserDetails(amt,des,cat){

document.getElementById('amount').value=amt
document.getElementById('desc').value=des
document.getElementById('category').value=cat

deleteUser(amt)

}


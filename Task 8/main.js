var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//form submit events

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);



function addItem(e)
{
    e.preventDefault();
   
    var newItem=document.getElementById('item').value;

    //create new li element
    var li=document.createElement('li');
    li.className='list-group-item';

    //adding text from input values

    li.appendChild(document.createTextNode(newItem));

    //create delete button element
    var dlt=document.createElement('button');
    dlt.className='btn btn-danger btn-sm float-right delete';

    dlt.appendChild(document.createTextNode('X'));

    //create a edit button
    var edit=document.createElement('button');
    edit.className='btn btn-danger btn-sm float-right delete';

    edit.appendChild(document.createTextNode('edit'));

    li.appendChild(edit);
    li.appendChild(dlt);


    itemList.appendChild(li);
    

}


function removeItem(e)
{
    if(e.target.classList.contains('delete')){
            if(confirm('Are you sure?')){
                var li=e.target.parentElement;
                itemList.removeChild(li);
            }            

    }else{

    }
}
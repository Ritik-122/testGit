var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

//form submit events

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);



function addItem(e)
{
    e.preventDefault();
   
    var newItem=document.getElementById('item').value;

    var description=document.getElementById('description').value;


    //create new li element
    var li=document.createElement('li');
    li.className='list-group-item';



    //adding text from input values

    li.appendChild(document.createTextNode( newItem));
    li.appendChild(document.createTextNode(" "+description ));

    //create delete button element
    var dlt=document.createElement('button');
    dlt.className='btn btn-danger btn-sm float-right delete';

    dlt.appendChild(document.createTextNode(' X '));

    //create a edit button
    var edit=document.createElement('button');
    edit.className='btn btn-primary  float-right  ';

    edit.appendChild(document.createTextNode('EDIT'));

   
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

}
}

//filter Items

function filterItems(e){
    var text=e.target.value.toLowerCase();

var items=itemList.getElementsByTagName('li');


 Array.from(items).forEach(function(item){
  var itemName=item.firstChild;
  var des=item.childNodes[1];
  

  if(itemName.textContent.toLowerCase().indexOf(text)!=-1|| des.textContent.toLowerCase().indexOf(text)!=-1){
   item.style.display='block';
  }else{
    item.style.display='none';
  }
 });
}
const Posts=[
    {
        title: "Post1",
        body:"this is post1",
        created_At:new Date().getTime()
        

    },
    {
        title: "Post2",
        body:"this is post2",
        created_At:new Date().getTime()
    }
]

let inputId=0;
function getPosts(){
    clearInterval(inputId)
   inputId=setInterval(()=>{

    
        let output=""    
         Posts.forEach((post)=>{
             output+=`<li>${post.title} ,${Math.floor(new Date().getTime()-post.created_At)/1000} seconds ago</li>`
         })
         document.body.innerHTML=(output)
     
         
   },1000)

    
    
}



function create3Posts(post){
       return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            Posts.push({ ...post,created_At:new Date().getTime()})
            const error=false;
            if(!error){
                resolve()
            }else{
                reject("Error:Something Wrong")
            }
        },2000)
    })
}

function deletePost(){

    return new Promise((resolve, reject) => {

        setTimeout(()=>{
          
            
                       if(Posts.length>0)
                       {
                        Posts.pop()
                           resolve();
                       }else{
                        reject('No elements in an array')

                       }
             },1000)

    })
     
}






create3Posts({title:"post3",body:"i am post 3"})
.then(()=>{
    getPosts();//3
    deletePost().then(()=>{
        getPosts();//2
        deletePost().then(()=>{
            getPosts();//1
            deletePost().then(()=>{
                getPosts();//0
                deletePost().then(()=>{
                    deletePost()

                }).catch(err=>console.log(err))
            }).catch(err=>console.log(err))
        }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
})
.catch(err=>console.log(err))


// create3Posts({title:"post4",body:"i am post 4"})
// .then(()=>{
//     getPosts();
//     deletePost().then(()=>{
//         getPosts()
//     }).catch(err=>console.log(err))
// })
// .catch(err=>console.log(err))





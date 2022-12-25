console.log("Person1: show tickets")
console.log("Person2: show tickets")

// const promiseWifeBringTicket= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket')
        
//     }, 3000);
// });

// const getPopcorn=promiseWifeBringTicket.then((t)=>{
//     console.log("wife: I have tickets");
//     console.log("husband: we should go in");
//     console.log("wife: i need popcorn");
//    return new Promise((resolve, reject) => {
//     resolve(`${t} popcorn`)
    
//    })
// })
// const getButter=getPopcorn.then((t)=>{
    
//     console.log("husband: we should go in");
//     console.log("wife: i need butter on popcorn");
//    return new Promise((resolve, reject) => {
//     resolve(`${t} butter`)
// })
// })
// getButter.then((t)=>{
//     console.log(t)
// })
const preMovie=async()=> {

    const promiseWifeBringTicket= new Promise((resolve, reject) => {
           setTimeout(() => resolve('ticket'), 3000);
         });
   
        const getPopcorn= new Promise((resolve, reject)=> resolve(`popcorn`))
        const addButter=new Promise((resolve, reject) => resolve(`butter`))
        const getColdDrink=new Promise((resolve,reject)=>resolve('colddrink'))
        let ticket=await promiseWifeBringTicket;

        console.log(`wife: I have ${ticket}`);
        console.log("husband: we should go in");
        console.log("wife: i need popcorn");

        let popcorn=await getPopcorn;
                           

        console.log(`husband: i got the ${popcorn}`);
        console.log("husband: we should go in");
       console.log("wife: i need butter on popcorn");
       

       let butter =await addButter

       console.log(`husband: i get ${butter} `);
       console.log('wife: i need Cold drink');

       let coldDrink=await getColdDrink

       console.log(`husband: i get${coldDrink}`);
       console.log('husband:now can we go to movie');
       console.log('wife: Yes we are already late');






         return ticket;


};

preMovie().then((m)=>console.log(`person3: show ${m}`));

console.log("Person4: show tickets");
console.log("Person5: show tickets");

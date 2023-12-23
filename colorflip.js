// const colors=['green','red','blue','orange'];

// const span=document.querySelector(".color");

// const btn= document.querySelector(".btn");
// btn.addEventListener("click",function(){
//     const randNumber= getRandomNumber();

//     console.log(randNumber);

//     const clr= document.body.style.backgroundColor=colors[randNumber];
//     span.textContent= clr;


// });

// function getRandomNumber(){
//     return Math.floor(Math.random() * colors.length);
// }

//Asynchronous
//promise
//3 states: pending,fullfiled,rejected


const user= fetch("https://jsonplaceholder.typicode.com/users").then(response=>{

return response.json()
}).then(user=>{

    console.log(user)
})

console.log(user);



























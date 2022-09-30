console.log("prompt js")

const showAlert = ()=>{
    const num = Math.random()*100;
    console.log(num)
    if (num<5){

        alert(" ki obostha");
    }
    
}

const askSomething =()=>{
    const decision = confirm("are you coming to picnic?");
    console.log(decision);
    if (decision===true){
        console.log("bkash deo 500");
    }
    else{
        console.log("dur e giya mor")
    }
}

const getUserInfo=()=>{
   const name =  prompt("tell us your name");
   console.log(name);
   if (!!name){
    console.log("welcome to the board", name);
   }
}
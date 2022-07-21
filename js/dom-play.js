//alert("Hello, World");


// let actors = document.querySelectorAll(".moana");

// console.log(actors);

// for (let i = 0; i < actors.length; i++) {
//     actors[i].style.backgroundColor = "yellow";
//    }

// document.querySelector(".moana").style.backgroundColor = "yellow";

function myAlert(){
    alert("I'm clicked");
 }

let spans = document.querySelectorAll("#play span");

console.log(spans);

for(const mySpan of spans){
    mySpan.addEventListener("click", function(ev){
        highlightActor(mySpan.dataset.actor); //hardwired 'actor'
    }); //myAlert is an identity of the function above
    //alert(mySpan.dataset.actor);
}

function highlightActor(actor){
    for(const mySpan of spans){
        if(actor == mySpan.dataset.actor){//current actor, highlight
            mySpan.style.backgroundColor = 'pink';
            mySpan.style.color = 'white';
            mySpan.style.fontWeight = 'bolder'
            mySpan.style.fontSize = '20px';
        }else{//not current actor, remove highlight
            mySpan.style.backgroundColor = 'white';
            mySpan.style.color = 'black';
            mySpan.style.fontWeight = 'normal'
            mySpan.style.fontSize = '13px';
        }

    }
}

//toggle function
function highlight(el){

    if(el.style.backgroundColor == "pink"){
        el.style.backgroundColor='white';
    }else{
        el.style.backgroundColor='pink';
    }
    
 }


 

 //#594100
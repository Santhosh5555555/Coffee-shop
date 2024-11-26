let btnClick = document.querySelector(".btn-click");
let p = document.querySelector(".p");
let click = true;
    
  btnClick.addEventListener("click", ()=>{       
        if(click){
        btnClick.innerText ="btn clicked";
        p.innerText ="btn clicked";
        click = false;
        }
        else{
            btnClick.innerText ="btn not clicked";
            p.innerText ="btn not clicked";
            click = true;
        }
    })
    
    

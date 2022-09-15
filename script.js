const more = document.querySelector("#more");

more.addEventListener ('click', (event) => {
    if( more.innerHTML === "More +") 
        more.innerHTML = "More -";
    else more.innerHTML = "More +";


    document.querySelector(".menu-header-bottom").classList.toggle('close');
  });
// Elementos Globais;

const btnReadMore = document.querySelectorAll('#btnReadMore');

// funcoes

btnReadMore.forEach((element) => {
    element.addEventListener("click", (event) => {
      const elementoClicado = event.target;
      const containerRead = elementoClicado.nextElementSibling;
      const imgDropdown = elementoClicado.querySelector('#imgDrop');
      const divprojects = elementoClicado.parentNode.parentNode;
      
      
      
        
      divprojects.classList.toggle('active');
      containerRead.classList.toggle('active');
      if(containerRead.classList.contains('active')){
        imgDropdown.style.rotate = "180deg"
       }else{
         imgDropdown.style.rotate = "0deg"
      }  
    });
  });

 
      
// https://jasonplaceholder.typicode/posts

//promise = Promessa  

/*

function clicou() {
   
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then((response) => {
     return response.json();
   })
   .then((json) => {
      alert(`titulo do primeiro posts ${json[0].title}`)
   })
   .catch( (error) =>{
    alert('deu problema na requisição')
   })
   .finally( ()=>{
    alert('opa cabou tudo')
   } )
  
  
}

function inserir() {
    fetch('https://jsonplaceholder.typicode.com/posts', 
    {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Titulo de teste',
        body: 'Corpo de teste',
        userId: 2
      })
    }
    )
    .then((response)=> {
      return response.json();
    })
    .then((json) => {
      console.log(json)
    })
}



document.querySelector('#botao').addEventListener('click', clicou);

document.querySelector('#Inserir').addEventListener('click', inserir );*/











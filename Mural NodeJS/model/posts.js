module.exports= {

     posts: [
        {id: "qualquer coisa",
        title: "teste do mural",
        description: "descrição teste"},
    
        {id: "1",
        title: "teste do mural2",
        description: "descrição teste2"},
    
    ],

    
   getAll() {
    return this.posts;
   },


   newPost(title, description){
    this.posts.push({id:generateID(), title, description});
   },

   deletePost(id){

    let elemento = this.posts.find(posts => posts.id === id);
    if (elemento){
       
       let indice = this.posts.indexOf(elemento);
       this.posts.splice(indice);

       console.log("apagou"+ elemento)
    }else{
        console.log("id não encontrado")
    }
      
        
     
   }




}

function generateID(){
    return Math.random().toString(36).substring(2,9);
}
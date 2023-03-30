const setbanco = (banco) => {
    localStorage.setItem('bd-mario', banco);
}

const getbanco = () => {
  return  JSON.parse(localStorage.getItem('bd-mario')) ?? [];
   
};

const bancotemp = (nome, moedas, estrelas, tempo, pontuacao ) => {

    let banco = getbanco();

    let dados = {
        nomejogador: nome,
        moedasjogador: moedas,
        estrelasjogador: estrelas, 
        tempojogador: tempo,
        pontuacaojogador: pontuacao
    };

    banco.unshift(dados);

    setbanco(JSON.stringify(banco));

};

export {setbanco, getbanco, bancotemp};
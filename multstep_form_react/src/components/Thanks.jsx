import react from 'react';
import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css"

const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill/>,
    neutral: <BsFillEmojiNeutralFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    very_satisfied: <BsFillEmojiHeartEyesFill/>,
}

const Thanks = ({data}) =>{
    return(
        <div className='thanks-container'>
            <h2>Falta Pouco...</h2>
            <p>A sua Opnião é muito importante, em breve você recebera um cupom de 10% de desconto para sua proxima compra.</p>
            <p>Para concluir a avaliação clique nno botão enviar abaixo.</p>
            <h3>Aqui esta o resumo da sua avaliação {data.name}:</h3>
            <p className="review-data">
            <span>Satisfação com o produto:</span>
            {emojiData[data.review]}
            </p>
            <p className="review-data">
            <span>Comentario:</span>
            {data.comment}
            </p>
        </div>


    )
}


export default Thanks;
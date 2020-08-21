import React from 'react'

import quotationMark from '../assets/imgs/quotationMark.png'

const Testimonials = ({ personImg, name, occupation }) => {
  return (
    <div className="Testimonial">
      <img src={quotationMark} alt="" srcSet="" id="Testimonial_quotationMark" />
      <div className="Testimonial_text_wrapper">
        <p className="Testimonial_text">Juntar dinheiro nunca foi uma tarefa fácil para mim, mas com dicas
        simples e começando aos poucos, eu consegui. Hoje em dia me sinto
        confiante em saber que, caso eu precise de dinheiro extra,
           isso não será um problema.</p>
        <img src={personImg} alt="" srcSet="" id="Testimonial_people" />
        <p className="Testimonial_name">{name}</p>
        <p className="Testimonial_ocuppation">{occupation}</p>
      </div>
    </div>
  )
}

export default Testimonials

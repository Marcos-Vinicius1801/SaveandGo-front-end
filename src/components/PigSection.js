import React from 'react'

import pig from '../assets/imgs/pig.png'

const PigSection = () => {
  return (
    <div className="PigSection">
      <img src={pig} alt="" srcSet="" id="pig" />
      <div className="PigSection_text-wrapper">
        <h1 className="PigSection_title">Guardar dinheiro é <span>possível</span> para todos nós</h1>
        <p className="PigSection_text">A chegada do COVID-19 trouxe momentos difíceis
        para todos nós, mas você já parou para pensar
        sobre as oportunidades que podemos usufruir de tudo isso?
        Pensando sobre seu dinheiro, essa pode ser uma hora propícia
        para começar a poupar.
      </p>
      </div>
    </div>
  )
}

export default PigSection

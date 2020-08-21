import React from 'react'
import axios from 'axios';

import useForm from '../components/CustomHooks/useForm';

import Button from '../components/Button';
import Input from '../components/Input';
import ebook from '../assets/imgs/ebook.png';

const CalltoAction = () => {

  const name = useForm('name');
  const email = useForm('email');

  function saveLead(event) {
    axios.post(`https://saveandgo-landingpage.firebaseio.com/Leads.json`, { name, email })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (name.validate() && email.validate()) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  return (
    <div className="CallToAction">

      <h1 className="CallToAction_title">Nós da <span>save&GO</span>, vamos te ajudar a poupar</h1>
      <p className="CallToAction_text">Confira nossas dicas no E-Book e comece a
         sentir o conforto e a empolgação de<br /> estar
         a um passo da realização dos seus sonhos</p>
      <div className="CallToAction_wrapper">
        <img src={ebook} alt="" srcSet="" id="wrapper_ebook" />
        <form className="form" onSubmit={handleSubmit}>
          <Input
            type="text"
            id="name"
            label="Nome Completo"
            htmlFor="name"
            placeholder="Nome"
            {...name}
          />
          <Input
            type="email"
            id="email"
            label="E-mail"
            htmlFor="email"
            placeholder="email@email.com"
            {...email}
          />

          <Button
            className="CallToAction_button"
            text="Quero dicas"
            textAlign="center"
            />
        </form>
      </div>
    </div>
  )
}

export default CalltoAction

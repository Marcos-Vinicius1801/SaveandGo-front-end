import React from "react";
import axios from "axios";

import useForm from "../components/CustomHooks/useForm";

import Button from "../components/Button";
import Input from "../components/Input";


const Form = () => {
  const name = useForm("name");
  const email = useForm("email");

  function saveLead() {
  
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'}
   
     axios.post('http://192.168.0.105:3333/create-leads', {
        
        name,
        email,
        
     })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }
  function sendEmail(){
    axios 
      .get('http://192.168.0.105:3333/sendEmail',{ 
        name,
        email,
      }).then((res) => {
        console.log(res);
        console.log(res.data);
      });
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
        text="Enviar e-Book no e-mail"
        height="55px"
        width="200px"
        textAlign="center"
        className="form_button"
        onClick={saveLead, sendEmail}
        
      />
    </form>
  );
};

export default Form;
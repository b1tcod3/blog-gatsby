import React from "react";
import Alert from "./alert";


export default class FormContact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mvowwlwe"
        method="POST"
        className="mx-auto md:w-1/2"
      >

      <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="first-name"
          >
            Correo
          </label>

          <input
            className="w-full mb-6 form-input"
            id="email"
            placeholder="you@mail.com"
            type="text"
            name="_replyto"
          />
      <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="first-name"
          >
            Nombre
          </label>

          <input
            className="w-full mb-6 form-input"
            id="first-name"
            placeholder="Bill"
            type="text"
            name="first-name"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="last-name"
          >
           Apellido
          </label>

          <input
            className="w-full mb-6 form-input"
            id="last-name" 
            name="last-name"
            placeholder="Murray"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="message"
          >
            Mensaje
          </label>

          <textarea
            className="w-full mb-6 form-textarea"
            id="message"
            name="message"
            placeholder="Dí Algo..."
            rows="8"
          />
          {status === "SUCCESS" ? <Alert title="Gracias" type="success" message="Mensaje Enviado"/>: <button 
          className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600"
          type="submit"> Enviar </button>}

          {status === "ERROR" && <Alert title="Error!" type="danger" message="Mensaje no Enviado"/>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
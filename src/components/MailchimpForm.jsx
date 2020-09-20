import addToMailchimp from "gatsby-plugin-mailchimp"
import React from "react"
import Alert from "./elements/alert";

export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: null,msg:"OK" }
  }
  _handleSubmit = async e => {
    e.preventDefault()

    const result = await addToMailchimp(this.state.email).catch(e => {
      console.log('That did not go well.')
      this.setState({result: 'error' , msg:e})
   })

    this.setState({result: result.result , msg:result.msg})
  }
handleChange = event => {
    this.setState({ email: event.target.value })
  }
render() {
  
    return (
      <form onSubmit={this._handleSubmit}>
        <input
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          variant="outlined"
          onChange={this.handleChange}
          placeholder="you@email.com"
          className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />
        <button
          label="Submit"
          type="submit"
          className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
        >
          Subcribeme
        </button>
        {this.state.result === "error"
        ? <Alert title="Error" type="danger" message={`${this.state.msg}. Intentar de Nuevo`}/>:
        this.state.result === null
        ?"": <Alert title="Exito!" type="success" message={this.state.msg}/>
      }
      </form>
    )
  }
}
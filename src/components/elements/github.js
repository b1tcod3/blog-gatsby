import PropTypes from "prop-types";
import React from "react";

export default class Github extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        github: []
      }
  }

  componentDidMount() {

        fetch('https://api.github.com/users/'+this.props.github)
        .then(res => res.json())
        .then((data) => {
          this.setState({ github: data })
        })
        .catch(console.log)
      }

  render() {

  const {github} = this.state;
        return (
          <div >

  <div className="bg-white sm:max-w-full max-w-md rounded overflow-hidden shadow-lg">
    <div className="text-center p-6  border-b">
      <img className="h-24 w-24 rounded-full mx-auto" src={github.avatar_url} alt={github.name} />
      
      <p className="pt-2 text-lg font-semibold">
        {github.name}
      </p>
      <p className="text-sm text-gray-600">
        {github.email}
      </p>
      <div className="mt-5">
        <a href={github.url} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700">Visit</a>
      </div>
    </div>
    <div className="border-b">
        
      <a href={github.html_url} className="px-6 py-3 hover:bg-gray-200 flex">
        <div className="w-8 h-8 rounded-full text-center align-middle text-lg">
          <img className="w-6 h-6 rounded-full mx-auto" src="https://img.icons8.com/material/24/000000/test-folder.png" />
          </div>
        <div className="pl-3">
          <p className="text-sm font-semibold text-gray-700">
           {github.public_repos} Repositorios
          </p>
        </div>
      </a>
    </div>
  </div>
</div>
        );
      }

}

Github.propTypes = {
  
  github: PropTypes.node.isRequired
};
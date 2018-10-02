import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './media.css';


class Media extends React.Component {
 constructor(props) {
   super(props);
    this.state = {
     input: '',
     items: [],
     total: 0
  };
   this.handleInputChange = this.handleInputChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   //this.handleClick = this.handleClick.bind(this);
}
   handleInputChange = (event) => {
    this.setState({input: event.target.value})
   }
   handleSubmit(event) {
    //  event.preventDefault();
     axios.get(`https://api.github.com/search/repositories?q=${this.state.input}`)
       .then(res => {
        console.log(res)
        console.log(res.data)
       }
      ).catch(err => {
       alert('error')
       console.log(err)
    });
  }
  render() {
     let itemsDOM = this.state.items.map(items => {
       <li key={items.name}>
          {items.fullName}
       </li>
     });
     return(
         <div className="App">
           <div className='form'>
              <input  value={this.state.input}
                      onChange={this.handleInputChange}/>
              <button className= "button"
                onClick = {this.handleSubmit}>
                Search
              </button>
          </div>
          <div className="results">
             <h5>Total: {this.state.total}</h5>
             <ul>
               {itemsDOM}
             </ul>
          </div>
        </div>
      )
    }
}
export default Media;

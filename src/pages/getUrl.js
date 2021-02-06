import React, { Component} from 'react'
import { encode, decode } from 'url-safe-base64'
var qs = require('qs')



class Welcome extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { url_code: null };
  }

  componentDidMount(prevProps) {
    let req_vals = JSON.stringify(qs.parse(window.location.href.split('?')[1]))
    console.log("Here:")
    console.log(req_vals)
    const url_c = encode(Buffer.from(req_vals).toString('base64'))
    this.setState({
      url_code: url_c
    })
  }

  render() {
    
    const val_link = "http://valentine.publicvm.com?key=" + this.state.url_code

    return (
      <div className='link-container'>
        <h3>This is your link (you can also preview clicking on it):</h3>
        <a sx={{textDecoration: `underline !important`}}href={val_link}>COPY THIS LINK</a>
        <h3>or in text form</h3>
        <p>{val_link}</p>
      </div>
        );
    }
}

export default Welcome

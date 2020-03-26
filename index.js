import React from 'react'
import {render} from 'react-dom';

import style from './scss/style.scss';


class App extends React.Component{
  state={
  }
  render(){
    return(
      <React.Fragment>
      hello world!
      </React.Fragment>
    )
  }
}

render(
  <App/>
  ,
  document.getElementById('widget')
)

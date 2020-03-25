import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import router from '@/router/router'

import Header from '@/components/header'
import Login from '@/components/login'

class App extends Component {
  constructor() {
    super()
    this.state = {
      login: true
    }
  }
  loginStatus = (value)=>{
    // console.log(value)
    this.setState({
      login:value
    })
    // if(value){
    //   this.props.history.push()
    // }
  }
  render() {
    const {login} = this.state
    return (
      <div id="home">
        <Router>
          {login?(
          <div>
            <Header></Header>
            <section className="body">
            <div className="main">
              {
                router.map((router, index) => {
                    return <Route exact={router.exact} key={index} path={router.path}
                      render={
                        props => (
                          <router.componentName {...props} routes={router.routes || []} />
                        )
                      }
                    />
                  
                })
              }
            </div>
          </section>
          </div>
          ): (<Login loginStatus={this.loginStatus}></Login>)}
        </Router>
      </div>
    )
  }
}
export default App;

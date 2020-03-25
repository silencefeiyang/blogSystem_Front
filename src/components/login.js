import React, { Component } from 'react'
import {httpServer,urls} from '@/http/http'
import {withRouter} from 'react-router-dom'
import { message } from 'antd';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    getUsername = (ev) => {
        this.setState({
            username: ev.target.value
        })
    }
    getPassword = (ev) => {
        this.setState({
            password:ev.target.value
        })
    }
    signIn = () => {
        const {username,password} = this.state
        const url = urls.login
        httpServer('POST',url,{username,password}).then(res=>{
            if(res.errno === 0){
                this.props.loginStatus(true)
                this.props.history.push({pathname:'/list'})
            }else{
                message.error(res.message)
            }
        })
    }
    render() {
        const { username, password } = this.state
        return (
            <div className="login">
                <form className="login-tab">
                    <span>用户名:</span>
                    <input placeholder="请输入用户名" value={username} onChange={this.getUsername}></input>
                </form>
                <form className="login-tab">
                    <span>密码:</span>
                    <input placeholder="请输入密码" value={password} onChange={this.getPassword}></input>
                </form>
                <button onClick={this.signIn}>登录</button>
            </div>
        )
    }
}
export default withRouter(Login)
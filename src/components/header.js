import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    routeHandle = (route)=>{
        this.props.history.push(route)
    }
    render() { 
        return ( 
            <div className="header">
            <h1 className="title">潇潇的博客</h1>
            <div className="manege">
                <span onClick={()=>{this.routeHandle('/addBlog')}}>新增</span>
                <span onClick={()=>{this.routeHandle('/manage')}}>管理</span>
                <span onClick={()=>{this.routeHandle('/list')}}>返回列表</span>
            </div>
        </div>
         );
    }
}
 
export default withRouter(Header);
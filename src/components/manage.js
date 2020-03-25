import React, { Component } from 'react';
class Manage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="manege">
                <div className="manege-title">管理列表</div>
                <ul className="list">
                    <li className="item">
                        <span>标题一</span>
                        <button>删除</button>
                    </li>
                    <li className="item">
                        <span>标题一</span>
                        <button>删除</button>
                    </li>
                </ul>
            </div>
         );
    }
}
 
export default Manage;
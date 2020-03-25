import React, { Component } from 'react';
class AddBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="add">
                <h2>添加博客</h2>
                <section className="add-module">
                    <div className="title">
                        <span>标题</span>
                        <input></input>
                    </div>
                    <div className="title">
                        <span>内容</span>
                        <textarea></textarea>
                    </div>
                    <button>提交</button>
                </section>
            </div>
         );
    }
}
 
export default AddBlog;
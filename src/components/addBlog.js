import React, { Component } from 'react';
class AddBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h2>添加博客</h2>
                <textarea></textarea>
            </div>
         );
    }
}
 
export default AddBlog;
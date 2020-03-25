import React, { Component } from 'react';
import ListItem from '@/components/listItem'
import {httpServer, urls} from '@/http/http'
class Manege extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         }
    }
    componentDidMount(){
        const author = 'lisi'
        const url = `${urls.getList}?author=${author}`
        httpServer('GET',url).then(res=>{
            if(res.data.length){
                this.setState({
                    list:res.data
                })
            }
        })
    }
    render() { 
        const {list} = this.state
        return (
        <div>
            {
                list.map(item=>{
                    return (
                        <ListItem key={item.id} title={item.title} author={item.author} content={item.content} time={item.createtime}></ListItem>
                    )
                })
            }
        </div> );
    }
}
 
export default Manege;
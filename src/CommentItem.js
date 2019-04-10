import React,{Component} from 'react';
import PropTypes from 'prop-types';
//import divclass from './TodoItem.css';
let backAndTextColor = {

    color:'red',
    fontSize:15
};
class TodoItem extends Component{

    constructor(props){

        console.log('tttttttttt'+props)
        super(props);
        this.handlerClick=this.handlerClick.bind(this);
    }
    //父组件
    render(){
        const{content,test}=this.props;
        return (
            
            //接收父组件传递过来的值，用来显示评论
            <div> <p style={backAndTextColor}>{content}</p>
              {/*绑定一个按钮用来删除评论*/}
            <p><a href="javascript:void(0)" onClick={this.handlerClick}>删除</a></p></div>
            )
    }
    //删除函数
    handlerClick(){
        //直接解构获取deleteItem和Index
        const {deleteItem,index}=this.props;
        //调用父组件的删除，index为父组件传递过来的，deleteItem也是父组件传递过来的，指向了父组件的删除方法
       deleteItem(index);
        
    }
}

TodoItem.propTypes={
 //指定content为string
 content: PropTypes.string,

 deleteItem: PropTypes.func,

 index: PropTypes.number

}


export   default TodoItem;
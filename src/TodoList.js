import React,{Component} from 'react';
import CommentItem from './CommentItem'
import input from './style.css'
import {textareaStyell,ulStyle} from './textareaStyell.css'
class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            inputvalue:'',
            list:[]
        };
        this.handlerInput=this.handlerInput.bind(this);
        this.handlerdelete=this.handlerdelete.bind(this);
    }

    handlerChange(e){

        this.setState({
            inputvalue:e.target.value
        })
    
    }

    handlerInput(e){

        if(this.state.inputvalue !==null&&this.state.inputvalue.length>0){
           
        //通过解构的方式拿到当的评论并且倒序排列
        //[...this.state.list].reverse();
        //将新的评论放在第一条
       //let newList=[this.state.inputvalue,...this.state.list];
        //通过setState给数组重新赋值为倒序后的结果    
        //this.setState((preState)=>{
            //通过解构的方式拿到当的评论并且倒序排列
        //    preState.list.reverse();
            //将新的评论放在第一条
        //    preState.list=[this.state.inputvalue,...preState.list];
         //   return preState.list;
        //})
        
        this.setState((preState)=>{
            [...this.state.list].reverse();
            let newList=[this.state.inputvalue,...this.state.list];
            preState.list=newList;
            return preState.list;
        })

    
    }else{
        alert("评论内容不能为空")
    }

    }
    //删除评论的函数，参数为
    handlerdelete(index){
        //通过解构获取当前的数组

        this.setState((preState)=>{
            const list=preState.list;
            list.splice(index,1);
           
            return list;
        })

    }

    render(){
        const {value}=this.state;
        return (
        <div className={"textareaStyell"}>
            <textarea    value={value}
                onChange={this.handlerChange.bind(this)}>
            </textarea>
            <br/>
                <button onClick={this.handlerInput}>发表评论</button>

                <ul className={"ulStyle"}>
                {
                    this.state.list.map((item,index)=>{
                        return (
                            //将item和index通过传递给ToDoItem子组件
                            <div key={item}> <CommentItem  content={item} index={index}
                            //将父组件的删除函数传递给ToDoItem，并且命名为deleteItem
                             deleteItem={this.handlerdelete}
                            />
                           
                        </div>
                            
                            )
                    })
                }
                </ul>
            </div>
            )
    }
}
export default TodoList;
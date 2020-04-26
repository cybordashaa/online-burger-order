import React,{Component} from 'react';
import { MyCoolButton } from '../MyCoolButton';

export class Comment extends Component{

    constructor(){
        super();

        this.state = {

            publisher: '',
            comment : ''
        };
    }
    

    bichih = (e) =>{
      
        this.setState({
            comment: e.target.value
        });
        
    }

    render(props){
        return (
            <div>
                <div>
                <span>{this.state.comment}</span>
                </div>
        <div>Author: {this.props.author}</div>
                <textarea onChange={this.bichih}></textarea>
                <MyCoolButton
                   comment={this.state.comment
                   } text="comment publish"/>
            </div>
        );
    }
}
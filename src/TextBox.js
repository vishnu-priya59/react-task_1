import React , {Component} from 'react';
class TextBox extends Component{
    constructor(){
        super();
        this.state={
            count:""
        };
    }
    handleChange = event=>{
        this.setState({
            count:event.target.value.split(' ').length     
        });
    }
    render(){
        return(
            <div>
                <textarea className='rounded' onChange={this.handleChange} id="inputBox"></textarea>
                <br />
                <br />
                <p className="text-start" id="wc">Word Count: {this.state.count}</p>
            </div>
        )
    }
}
export default TextBox;
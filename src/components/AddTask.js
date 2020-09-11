import React from 'react';
import './AddTask.css'

class AddTask extends React.Component{
    minDate = new Date().toISOString().slice(0,10)

    state = {
        text: '',
        checked: false,
        date: this.minDate
    }

    handleDate = (event) => {
        this.setState({
            date: event.target.value
        })
    }

    handleText = e =>{
        this.setState({
            text: e.target.value
        })
    }

    handleCheckbox = e => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleClick = () => {
        const {text,checked,date} = this.state
        if(text.length>2){
        const add = this.props.add(text,date,checked)
        if(add) {
            this.setState({
                text: '',
                checked: false,
                date: this.minDate
            })
        }        
    }
    }

    render(){
        let maxDate = this.minDate.slice(0,4) * 1 + 1;
        maxDate = maxDate + "-12-31"; //2020-12-31
    return ( 
        <div className='form'>
            <input type="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.handleText}/>
            <input type="checkbox" checked={this.state.checked} id="importat" onChange={this.handleCheckbox}/> 
            <label htmlFor="important">Priorytet</label> <br/>
            <label htmlFor="important">Do kiedy zrobić </label>
            <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate}/> <br/>
            <button className='add' onClick={this.handleClick}>Dodaj</button>
            <hr/>
        </div>
     );
    }
}
 
export default AddTask;
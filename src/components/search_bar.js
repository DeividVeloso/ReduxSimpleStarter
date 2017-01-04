import React from 'react';

class SearchBar extends React.Component{

    constructor(props){
        //chama construtor do component
        super(props);

        this.state = { term: ''};
    }

    render(){
        //Usando arrow function(arg) =>(executa) a funcao
       return (
        <div>
            <input 
                value={this.state.term} 
                onChange={(event) => this.setState({term: event.target.value})}/>
       </div>
       )
    }
}

export default SearchBar; 
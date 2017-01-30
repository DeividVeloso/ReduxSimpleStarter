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
        <div className="search-bar">
            <input
                value={this.state.term}
                onChange={(event) => this.onInputChange(event.target.value)}/>
       </div>
       )
    }

    onInputChange(term){
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
}

export default SearchBar;

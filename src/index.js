import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyB5AaqtXQOxHAHRrKgw2SgCDMDlzHs3V70';

//Component PAI(parent)
class App extends Component {
    constructor(props){
        super(props);

        //State vem do super, aqui estamos declarando um array de videos
        this.state = { videos : [] };

        //ACESSANDO A API do YOUTUBE - REQUEST {key: API_KEY, term: 'surfboards'}
        //Primeiro parametro um objeto javascript, com chave da API e Termo da pesquisa
        //Segundo parametro funcao de call back que retornara o resultado do Youtube
        YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
            this.setState({videos : data});
        });

    }
    render(){
        //Componente Filho (children)
        //Passando propriedade de pai(APP) para filho (prop) videos
        return ( 
                <div>
                    <SearchBar />
                    <VideoList videos = {this.state.videos}/>
                </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));

// AIzaSyB5AaqtXQOxHAHRrKgw2SgCDMDlzHs3V70
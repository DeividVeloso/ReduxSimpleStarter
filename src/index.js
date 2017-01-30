import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyB5AaqtXQOxHAHRrKgw2SgCDMDlzHs3V70';

//Component PAI(parent)
class App extends Component {
    constructor(props){
        super(props);

        //State vem do super, aqui estamos declarando um array de videos
        this.state = {
          videos : [],
          selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term){
      //ACESSANDO A API do YOUTUBE - REQUEST {key: API_KEY, term: 'surfboards'}
      //Primeiro parametro um objeto javascript, com chave da API e Termo da pesquisa
      //Segundo parametro funcao de call back que retornara o resultado do Youtube
      YTSearch({key: API_KEY, term: term}, (data) => {
          this.setState(
            {
              videos : data,
              selectedVideo : data[0]
            }
          );
      });
    }

    render(){
        //Componente Filho (children)
        //Passando propriedade de pai(APP) para filho (prop) videos
        console.log(this.state.videos[0]);
        return (
                <div>
                    <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList
                      onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                      videos={this.state.videos}/>
                </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));

// AIzaSyB5AaqtXQOxHAHRrKgw2SgCDMDlzHs3V70

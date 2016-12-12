import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB5AaqtXQOxHAHRrKgw2SgCDMDlzHs3V70';


const App = function(){
 return ( 
        <div>
            <SearchBar />
        </div>
        )
}

ReactDOM.render(<App/>, document.querySelector('.container'));

// AIzaSyB5AaqtXQOxHAHRrKgw2SgCDMDlzHs3V70
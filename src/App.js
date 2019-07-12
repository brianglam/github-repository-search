import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import {store} from './index.js'
import QueryTextBox from './Components/QueryTextBox'
import SearchButton from './Components/SearchButton'
import SearchResult from './Components/SearchResult'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
    return (
            <Provider store={store}>
                <div className="App">
                    <BrowserRouter>
                        <QueryTextBox />
                        <SearchButton />
                        <Route  path="/query" render={props => <SearchResult {...props}/>}/>
                    </BrowserRouter>
                </div>
            </Provider>
    );
}

export default App;
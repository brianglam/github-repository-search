import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import {store} from './index.js'
import QueryTextBox from './Components/QueryTextBox'
import StarsTextBox from './Components/StarsTextBox'
import UserTextBox from './Components/UserTextBox'
import OrgTextBox from './Components/OrgTextBox'
import LicenseDropDown from './Components/LicenseDropDown'
import IncludeForkedCheckBox from './Components/IncludeForkedCheckBox'

import SearchButton from './Components/SearchButton'
import SearchResult from './Components/SearchResult'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
    return (
            <Provider store={store}>
                <div className="App">
                    <BrowserRouter>
                        <div className="query-container">
                            <div className="query-title">Query</div>
                            <QueryTextBox />
                        </div>

                        <div>Options</div>
                        
                        <div className="stars-container">
                            <div className="stars-title">Stars</div>
                            <StarsTextBox />
                        </div>

                        <div className="user-container">
                            <div className="user-title">User</div>
                            <UserTextBox />
                        </div>

                        <div className="org-container">
                            <div className="org-title">Organization</div>
                            <OrgTextBox />
                        </div>

                        <div className="license-container">
                            <div className="license-title">License</div>
                            <LicenseDropDown />
                        </div>

                        <div className="include-forked-container">
                            <div className="include-forked-title">Include Forked</div>
                            <IncludeForkedCheckBox />
                        </div>

                        <SearchButton />
                        <Route  path="/query" render={props => <SearchResult {...props}/>}/>
                    </BrowserRouter>
                </div>
            </Provider>
    );
}

export default App;
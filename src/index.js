import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import {UPDATE_QUERY_FIELD} from './actions'

let queryText=""
let searchParams=decodeURIComponent(window.location.search)

if (searchParams) {
    console.log("inside index.js: window.location.search: " + searchParams)
    //split the paramaters following "query?" into their key value pairs "queryText=hello+world"
    const queryParamList = searchParams.slice(1).split("&")
    //split each key value pair into ['queryText', 'hello+world']
    queryParamList.forEach(item => {
        const itemSplit=item.split("=")
        const key = itemSplit[0]
        const val = itemSplit[1]
        if (key==="queryText") {
            queryText=val
        }
    })
}

const initialState = {
    queryText: queryText
}

const reducer = (state=initialState, action) => {
    // console.log('reducer', state, action)

    switch (action.type) {
        case UPDATE_QUERY_FIELD:
            return { ...state,
                queryText: action.payload
            }
        default:
            return state
    }
}

export const store = createStore(reducer)

ReactDOM.render(<App />, document.getElementById('root'));


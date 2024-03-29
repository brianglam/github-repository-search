import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, compose, applyMiddleware } from 'redux'
import {UPDATE_QUERY_FIELD, UPDATE_STARS_FIELD, UPDATE_USER_FIELD, UPDATE_ORG_FIELD, UPDATE_LICENSE_FIELD, UPDATE_INCLUDE_FORKED_FIELD, UPDATE_INPUT_WARNINGS, FETCH_REPOS_START, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAILURE, FETCH_REPOS_SERVER_ERROR} from './actions'
import thunk from 'redux-thunk'

let queryText=""
let stars=""
let user=""
let org=""
let license=""
let includeForked=false
let searchParams=decodeURIComponent(window.location.search)

if (searchParams) {
    //split the paramaters following "query?" into their key value pairs "queryText=hello+world"
    const queryParamList = searchParams.slice(1).split("&")
    //split each key value pair into ['queryText', 'hello+world']
    queryParamList.forEach(item => {
        const itemSplit=item.split("=")
        const key = itemSplit[0]
        const val = itemSplit[1]

        if (key==="queryText") {
            queryText=val
        } else if (key==="stars") {
            stars=val
        } else if (key==="user") {
            user=val
        } else if (key==="org") {
            org=val
        } else if (key==="license") {
            license=val
        } else if (key==="includeForked") {
            includeForked=val==="true"
        }
    })
}

const initialState = {
    queryText: queryText,
    stars: stars,
    user: user,
    org: org,
    license: license,
    includeForked: includeForked,
    inputWarnings: {
        queryWarning: "",
        starWarning: "",
    },
    repos: {},
    error: "",
    loading: false
}

const reducer = (state=initialState, action) => {

    switch (action.type) {
        case UPDATE_QUERY_FIELD:
            return { ...state,
                queryText: action.payload
            }
        case UPDATE_STARS_FIELD:
            return { ...state,
                stars: action.payload
            }
        case UPDATE_USER_FIELD:
            return { ...state,
                user: action.payload
            }
        case UPDATE_ORG_FIELD:
            return { ...state,
                org: action.payload
            }
        case UPDATE_LICENSE_FIELD:
            return { ...state,
                license: action.payload
            }
        case UPDATE_INCLUDE_FORKED_FIELD:
            return {...state,
                includeForked: action.payload
            }
        case UPDATE_INPUT_WARNINGS:
            return {...state,
                inputWarnings: action.payload
            }
        case FETCH_REPOS_START:
            return {...state,
                loading: true
            }
        case FETCH_REPOS_SUCCESS:
            return {...state,
                loading: false,
                repos: action.payload
            }
        case FETCH_REPOS_FAILURE:
            return {...state,
                loading: false,
                error: action.payload
            }
        case FETCH_REPOS_SERVER_ERROR:
            return {...state,
                loading:false,
                error: action.payload
            }
        default:
            return state
    }
}

const enhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)

export const store = createStore(reducer, enhancers)

ReactDOM.render(<App />, document.getElementById('root'));


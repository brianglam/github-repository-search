import {store} from './index'

export const UPDATE_QUERY_FIELD = "UPDATE_QUERY_FIELD";
export const UPDATE_STARS_FIELD = "UPDATE_STARS_FIELD";
export const UPDATE_USER_FIELD = "UPDATE_USER_FIELD";
export const UPDATE_ORG_FIELD = "UPDATE_ORG_FIELD";
export const UPDATE_LICENSE_FIELD = "UPDATE_LICENSE_FIELD";
export const UPDATE_INCLUDE_FORKED_FIELD = "UPDATE_INCLUDE_FORKED_FIELD";
export const UPDATE_INPUT_WARNINGS = "UPDATE_INPUT_WARNINGS"
export const FETCH_REPOS_START = "FETCH_REPOS_START"
export const FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCCESS"
export const FETCH_REPOS_FAILURE = "FETCH_REPOS_FAILURE"
export const FETCH_REPOS_SERVER_ERROR = "FETCH_REPOS_SERVER_ERROR"

export const updateQueryField= (text) => {
    return {
        type: UPDATE_QUERY_FIELD,
        payload: text
    }
}

export const updateStarsField= (text) => {
    return {
        type: UPDATE_STARS_FIELD,
        payload: text
    }
}

export const updateUserField= (text) => {
    return {
        type: UPDATE_USER_FIELD,
        payload: text
    }
}

export const updateOrgField= (text) => {
    return {
        type: UPDATE_ORG_FIELD,
        payload: text
    }
}

export const updateLicenseField= (text) => {
    return {
        type: UPDATE_LICENSE_FIELD,
        payload: text
    }
}


export const updateIncludeForkedField= (text) => {
    return {
        type: UPDATE_INCLUDE_FORKED_FIELD,
        payload: text
    }
}


export const updateInputWarnings= (text) => {
    return {
        type: UPDATE_INPUT_WARNINGS,
        payload: text
    }
}

export const fetchReposStart = ()=> {
    return {
        type: FETCH_REPOS_START
    }
}

export const fetchReposSuccess = repos => {
    return {
        type: FETCH_REPOS_SUCCESS,
        payload: repos
    }
}

export const fetchReposFailure = error => {
    return {
        type: FETCH_REPOS_FAILURE,
        payload: error
    }
}

export const fetchReposServerError = status => {
    return {
        type: FETCH_REPOS_SERVER_ERROR,
        payload: status
    }
}

const buildURL = () => {
    const state = store.getState()
    let url = "https://api.github.com/search/repositories?q=" + encodeURIComponent(state.queryText.split(" ").join("+"))
    if (state.stars.length) {
        url += "+stars:" + encodeURIComponent(state.stars)
    }
    if (state.user.length) {
        url += "+user:" + encodeURIComponent(state.user)
    }

    if (state.org.length) {
        url += "+org:" + encodeURIComponent(state.org)
    }

    if (state.license.length) {
        url += "+license:" + encodeURIComponent(state.license)
    }

    if (state.includeForked) {
        url += "+fork:true"
    }
    console.log(url)
    return url

}

export const fetchRepos = () => {
    return dispatch => {
        dispatch(fetchReposServerError(""))
        dispatch(fetchReposStart())
        fetch(buildURL())
            .then(
                response => {
                    console.log(response.status)
                if (response.status === 200) {
                    response.json().then(json => {dispatch(fetchReposSuccess(json.items))})
                } else {
                    dispatch(fetchReposServerError(response.status))
                }},
                error => dispatch(fetchReposFailure(error))
            )
        
    }
}
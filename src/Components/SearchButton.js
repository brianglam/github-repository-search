import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {validateData} from './../ValidateData'

const SearchButton = props => {
    const handleClick = () => {
        if (validateData()) {
            let url="/query?queryText=" + encodeURIComponent(props.queryText)
            if (props.stars.length) {
                url += "&stars=" + encodeURIComponent(props.stars)
            }
            if (props.user.length) {
                url += "&user=" + encodeURIComponent(props.user)
            }
            if (props.org.length) {
                url += "&org=" + encodeURIComponent(props.org)
            }
            if (props.license.length) {
                url += "&license=" + encodeURIComponent(props.license)
            }
            if (props.includeForked) {
                url += "&includeForked=true"
            }
            console.log("routing with: " + url)
            props.history.push(url)
        }

    }

    return (
        <button className="search-button" disabled={props.loading} onClick={handleClick}>SEARCH</button>
    )
}

const mapStateToProps = state => {
    return {
        queryText: state.queryText,
        stars: state.stars,
        user: state.user,
        org: state.org,
        license: state.license,
        includeForked: state.includeForked,
        loading: state.loading
    }
}

export default withRouter(connect(mapStateToProps)(SearchButton))
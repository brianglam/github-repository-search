import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

const SearchButton = props => {
    const getQueryParams = () => {
        //make async fetch call
        console.log("routing with: " + props.queryText)
        const url="/query?queryText=" + encodeURIComponent(props.queryText)

        props.history.push(url)

    }

    return (
        <button onClick={getQueryParams}>Search</button>
    )
}

const mapStateToProps = state => {
    return {
        queryText: state.queryText
    }
}

export default withRouter(connect(mapStateToProps)(SearchButton))
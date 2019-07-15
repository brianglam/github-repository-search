import React, {useEffect} from 'react'
import { fetchRepos } from '../actions';
import {connect} from 'react-redux' 

const SearchResult = props => {
    
    useEffect(()=> {
        props.dispatch(fetchRepos())
    }, [props.location.search])

    const { loading, repos, error } = props;

    if (loading) {
        return (<div>loading</div>)
    }

    if (error) {
        return (<div>Your search resulted in an error with status {error}. Please try again later.</div>)
    }
    
    if (repos.length) {
        return (
            <>
                <div>Search Results:</div>
                {repos.map((item, index)=> <div key={index}>{item.name}</div>)}
            </>
            )

    }

    return (<div>No results</div>)
}

const mapStateToProps = state => {
    return {
        repos: state.repos,
        error: state.error,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(SearchResult)
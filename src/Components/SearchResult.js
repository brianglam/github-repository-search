import React, {useEffect} from 'react'

const SearchResult = props => {
    useEffect(()=> {
        console.log("do async task with params: " + props.location.search)
    })

    return (<div>Search Results:</div>)
}

export default SearchResult
import React, {useEffect} from 'react'

const SearchResult = props => {
    useEffect(()=> {
        console.log("do async task with query text: " + props.location.search)
    })

    return (<div>Search Results:</div>)
}

export default SearchResult
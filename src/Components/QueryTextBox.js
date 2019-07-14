import React from 'react'
import {connect} from 'react-redux'
import {updateQueryField} from './../actions'

const QueryTextBox = (props) => {

    const handleInputTextChange = (event)=>{
        props.dispatch(updateQueryField(event.target.value))
    }

    return (<input className="query-input" value={props.queryText} onChange={handleInputTextChange}></input>)
}

const mapStateToProps = (state) => {
    return {
        queryText: state.queryText
    }
}

export default connect(mapStateToProps)(QueryTextBox)
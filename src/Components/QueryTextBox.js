import React from 'react'
import {connect} from 'react-redux'
import {updateQueryField} from './../actions'
import {validateData} from './../ValidateData'

const QueryTextBox = (props) => {

    const handleInputTextChange = (event)=>{
        props.dispatch(updateQueryField(event.target.value))
    }

    return (<input disabled={props.loading} className="query-input" placeholder="hello world" onBlur={validateData} value={props.queryText} onChange={handleInputTextChange}></input>)
}

const mapStateToProps = (state) => {
    return {
        queryText: state.queryText,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(QueryTextBox)
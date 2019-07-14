import React from 'react'
import {connect} from 'react-redux'

const QueryWarning = (props)=> {
    return (
        <div>{props.queryWarning}</div>
    )
}

const mapStateToProps = (state) => {
    return {
        queryWarning: state.inputWarnings.queryWarning
    }
}

export default connect(mapStateToProps)(QueryWarning)
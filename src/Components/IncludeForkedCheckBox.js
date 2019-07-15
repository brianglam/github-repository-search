import React from 'react'
import {connect} from 'react-redux'
import {updateIncludeForkedField} from './../actions'

const IncludeForkedCheckBox = (props) => {

    const handleInputChange = (event)=>{
        props.dispatch(updateIncludeForkedField(event.target.checked))
    }

    return (
        <input disabled={props.loading} defaultChecked={props.includeForked} onClick={handleInputChange} type="checkbox"></input>
    )
}

const mapStateToProps = (state) => {
    return {
        includeForked: state.includeForked,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(IncludeForkedCheckBox)
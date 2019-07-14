import React from 'react'
import {connect} from 'react-redux'
import {updateIncludeForkedField} from './../actions'

const IncludeForkedCheckBox = (props) => {

    const handleInputChange = (event)=>{
        props.dispatch(updateIncludeForkedField(event.target.checked))
    }

    return (
        <input defaultChecked={props.includeForked} onClick={handleInputChange} type="checkbox"></input>
    )
}

const mapStateToProps = (state) => {
    return {
        includeForked: state.includeForked
    }
}

export default connect(mapStateToProps)(IncludeForkedCheckBox)
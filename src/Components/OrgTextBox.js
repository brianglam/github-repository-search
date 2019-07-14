import React from 'react'
import {connect} from 'react-redux'
import {updateOrgField} from './../actions'

const OrgTextBox = (props) => {

    const handleInputTextChange = (event)=>{
        props.dispatch(updateOrgField(event.target.value))
    }

    return (
        <div>
            <input value={props.org} onChange={handleInputTextChange}></input>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        org: state.org
    }
}

export default connect(mapStateToProps)(OrgTextBox)
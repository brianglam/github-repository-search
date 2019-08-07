import React from 'react'
import {connect} from 'react-redux'
import {updateUserField} from './../actions'

const UserTextBox = (props) => {

    const handleInputTextChange = (event)=>{
        props.dispatch(updateUserField(event.target.value))
    }

    return (
        <div>
            <input disabled={props.loading} placeholder="tech-lead" value={props.user} onChange={handleInputTextChange}></input>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(UserTextBox)
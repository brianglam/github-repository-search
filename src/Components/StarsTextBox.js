import React from 'react'
import {connect} from 'react-redux'
import {updateStarsField} from './../actions'
import {validateData} from './../ValidateData'

const StarsTextBox = (props) => {

    const handleInputTextChange = (event)=>{
        props.dispatch(updateStarsField(event.target.value))
    }

    return (
        <div>
            <input disabled={props.loading} onBlur={validateData} value={props.stars} onChange={handleInputTextChange}></input>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        stars: state.stars,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(StarsTextBox)
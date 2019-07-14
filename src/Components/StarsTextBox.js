import React from 'react'
import {connect} from 'react-redux'
import {updateStarsField} from './../actions'

const StarsTextBox = (props) => {

    const handleInputTextChange = (event)=>{
        props.dispatch(updateStarsField(parseInt(event.target.value)))
    }

    return (
        <div>
            <input value={props.stars} onChange={handleInputTextChange}></input>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        stars: state.stars
    }
}

export default connect(mapStateToProps)(StarsTextBox)
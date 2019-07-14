import React from 'react'
import {connect} from 'react-redux'

const StarWarning = (props)=> {
    return (
        <div>{props.starWarning}</div>
    )
}

const mapStateToProps = (state) => {
    return {
        starWarning: state.inputWarnings.starWarning
    }
}

export default connect(mapStateToProps)(StarWarning)
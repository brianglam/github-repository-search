import React from 'react'
import {connect} from 'react-redux'
import {updateLicenseField} from './../actions'

const LicenseDropDown = (props) => {

    const handleInputChange = (event)=>{
        props.dispatch(updateLicenseField(event.target.value))
    }

    return (
        <select disabled={props.loading} value={props.license} onChange={handleInputChange}>
            <option value="">-</option>
            <option value="mit">MIT</option>
            <option value="apache-2.0">Apache</option>
            <option value="unlicense">The Unlicense</option>
            <option value="mpl-2.0">Mozilla Public License 2.0</option>
            <option value="ms-pl">Microsoft Public License</option>
            <option value="isc">ISC</option>
            <option value="cc">Creative Commons license family	</option>
        </select>
    )
}

const mapStateToProps = (state) => {
    return {
        license: state.license,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(LicenseDropDown)
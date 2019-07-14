export const UPDATE_QUERY_FIELD = "UPDATE_QUERY_FIELD";
export const UPDATE_STARS_FIELD = "UPDATE_STARS_FIELD";
export const UPDATE_USER_FIELD = "UPDATE_USER_FIELD";
export const UPDATE_ORG_FIELD = "UPDATE_ORG_FIELD";
export const UPDATE_LICENSE_FIELD = "UPDATE_LICENSE_FIELD";
export const UPDATE_INCLUDE_FORKED_FIELD = "UPDATE_INCLUDE_FORKED_FIELD";



export const updateQueryField= (text) => {
    return {
        type: UPDATE_QUERY_FIELD,
        payload: text
    }
}

export const updateStarsField= (text) => {
    return {
        type: UPDATE_STARS_FIELD,
        payload: text
    }
}

export const updateUserField= (text) => {
    return {
        type: UPDATE_USER_FIELD,
        payload: text
    }
}

export const updateOrgField= (text) => {
    return {
        type: UPDATE_ORG_FIELD,
        payload: text
    }
}

export const updateLicenseField= (text) => {
    return {
        type: UPDATE_LICENSE_FIELD,
        payload: text
    }
}


export const updateIncludeForkedField= (text) => {
    return {
        type: UPDATE_INCLUDE_FORKED_FIELD,
        payload: text
    }
}
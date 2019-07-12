export const UPDATE_QUERY_FIELD = "UPDATE_QUERY_FIELD";

export const updateQueryField= (text) => {
    return {
        type: UPDATE_QUERY_FIELD,
        payload: text
    }
}
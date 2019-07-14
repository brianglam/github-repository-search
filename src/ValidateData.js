import {store} from "./index"
import {updateInputWarnings} from "./actions"

export const validateData = ()=> {
    const response = validateDataHelper(store.getState())
    const containsWarnings = response[0]
    const warnings = response[1]
    store.dispatch(updateInputWarnings(warnings))
    return !containsWarnings
}

export const validateDataHelper = (curStore)=> {
    var warnings={queryWarning: "", starWarning: ""}

    //validate textBox input not empty
    if (!curStore.queryText.length) {
        warnings["queryWarning"] = "ⓧmust not be empty"
    } 

    //validate stars input
    const stars = curStore.stars
    if (stars.length) {
        let isRange = false;
        //check if stars is a range using < > >= <=
        if (stars[0].match(/[<>]/) && (stars.length > 1)) {
            if (stars[1].match("=") && stars.slice(2).match(/^\d+$/)) {
                isRange = true
            } else if (stars.slice(1).match(/^\d+$/)) {
                isRange = true
            }
        //check if stars is a range using ".."
        } else if (stars.includes("..")) { 
            const index = stars.indexOf("..")
            const before = stars.slice(0, index)
            const after = stars.slice(index+2)
            if (before.match(/^\d+$/) && after.match(/^\d+$/) && before <= after) {
                isRange = true
            }
        }
        //if stars is not a range and also doesn't contain only numbers, set warning
        if (!isRange && !stars.match(/^\d+$/)) {
            warnings["starWarning"] = "ⓧmust be exact number or range"
        }  
    }

    //search through warnings values to see if we added warnings
    let containsWarnings = false;
    Object.values(warnings).forEach(item => {
        if (item.length) {
            containsWarnings = true
        }
    })

    return [containsWarnings, warnings]
}


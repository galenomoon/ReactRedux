
//Action Creator
export function changeMinValue(newValue){
    //Returning an Action
    return {
        //Mandatory to use type 
        type: 'VALUE_MIN_CHANGED',
        payload: newValue
    }
}
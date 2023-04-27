export const clientInputsData = (type, inputData) => {
    return (dispatch) => {
        dispatch({
            type: type,
            payload: inputData
        })
    }
}
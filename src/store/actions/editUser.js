export const EDIT_USER ='EDIT_USER'

const edit_user = (data) => {
    // fetch('https://reqres.in/api/users')
    // .then(res => res.json())
    // .then(res => dispatch({type:UPDATE_USER,payload:res.data}))
    console.log('editdata', data)
    return (
        {type:EDIT_USER  , payload: data}
    )
}

export default edit_user
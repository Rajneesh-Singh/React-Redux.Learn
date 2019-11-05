const personReducer = (state={}, {type,payload}) =>{
   

 switch(type){

       case 'UPDATE_NAME':
       return {name:payload}

        default:
        return state

   }
}
   export default personReducer
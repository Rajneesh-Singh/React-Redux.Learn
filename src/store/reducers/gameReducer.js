 
// const reducer = (state , actions) =>{
   
const gameReducer = (state={},{type,game}) =>{

switch(type){
      case 'UPDATE_GAME':
        return {game:game}

       default: 
       return state
  }

}
    


export default gameReducer






    // if(type === 'UPDATE_GAME'){
    //         return {game:game}
    //     }
    //      return state
    // }
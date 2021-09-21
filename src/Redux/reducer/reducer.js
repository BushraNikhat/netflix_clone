const InitialState={}

export const detailReducer=(state=InitialState,action)=>{
    switch (action.type) {
        case "detail": 
        return {...action.payload}
            
    
        default: return state
        
    }

}
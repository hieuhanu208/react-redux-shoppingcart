const cartReducer = (state=[] ,action ) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload]
     case 'REMOVE':
     const matchIndex = state.indexOf(action.payload)
      return state.filter((item,index) => {
        return index !== matchIndex
      })
  
    default:
     return state;
  }
}

export default cartReducer;
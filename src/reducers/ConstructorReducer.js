export default  (state=[ ], action) => {
  switch (action.type){
      case 'FETCH_CONSTRUCTORS': return action.payload
      default: return(state)
  }
}

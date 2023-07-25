const initialState = {
    title: 'Initial Title',
  };
    const titleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_TITLE':
        return {
          ...state,
          title: 'New Title',
        };
      case 'WITH_PARAMS':
        return {
          ...state,
          title: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default titleReducer;



  



  
  
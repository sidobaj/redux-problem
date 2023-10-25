const initialState = {
  count: 0,
  data: null,
};

const counterReducer = (state = initialState, action: any) => {
  console.log("action", action, state);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "ADDITEM":
      console.log("state", state.data);
      //   const data = state.data.filter((dt, index) => dt.name !== "");
      //   console.log("data", data);
      return {
        ...state,
        data: state.data ? [...state.data, action.payload] : [action.payload],
      };
    default:
      return state;
  }
};

export default counterReducer;

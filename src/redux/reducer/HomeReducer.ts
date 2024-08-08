const initialState = {
  count: 0,
};
interface ActionProps {
  type: string;
}
interface StateProps {
  count: number;
}

const reducer = (state: StateProps = initialState, action: ActionProps) => {
  switch (action.type) {
    case "ADD_NUMBER":
      return {
        ...state,
        count: state.count + 5,
      };
    case "SUBSTRACT_NUMBER":
      return {
        ...state,
        count: state.count - 5,
      };
    default:
      return state;
  }
};

export default reducer;

const INITIAL_STATE = { step: 1, number: 0 };
const typesActions = {
  INC: 'INC',
  DEC: 'DEC',
  STEP_CHANGED: "STEP_CHANGED",
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case typesActions.INC:
      return { ...state, number: state.number + state.step }
    case typesActions.DEC:
      return { ...state, number: state.number - state.step }
    case typesActions.STEP_CHANGED:
      return { ...state, step: +action.payload }
    default:
      return state;
  }
}
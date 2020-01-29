export function stepChanged(e) {
  return { 
    type: 'STEP_CHANGED',
    payload: e.target.value 
  };
}
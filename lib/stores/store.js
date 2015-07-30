


export function errorHandler(state, action) {
  return {...state, error: action.payload};
}

export function elementHandler(state, action) {
  return {
    next: (state, action) => ({
      ...state,
      error: null,
      data: {...action.payload}}),
    throw: errorHandler
  };
}

export function collectionHandler(state, action) {
  return {
    next: (state, action) => ({
      ...state,
      error: null,
      data: {...action.payload}}),
    throw: errorHandler
  };
}

export function initialCollection(data = {items: []}) {
  return {error: null, data};
}

export function initialElement(data = {}) {
  return {error: null, data};
}

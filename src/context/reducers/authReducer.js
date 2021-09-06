const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HELO':
      return {};

    default:
      return state;
  }
};

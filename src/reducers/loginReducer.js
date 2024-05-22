function loaderReducer(state, action) {
  switch (action.type) {
    case 'SHOW_LOADER':
      return { loading: true };
    case 'HIDE_LOADER':
      return { loading: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default loaderReducer;

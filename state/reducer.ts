export const reducer = (state, action) => {
  const { isDeleting, typed, currentIndex } = state;

  switch (action.type) {
    case "REMOVE_CHARACTER":
      return {
        ...state,
        speed: 3000,
        isDeleting: true,
      };
    case "SETUP":
      return {
        ...state,
        speed: 600,
        isDeleting: false,
      };
    case "RESET_LIST":
      return {
        ...state,
        currentIndex: 0,
      };
    case "NEXT_WORD":
      return {
        ...state,
        currentIndex: currentIndex + 1,
      };
    case "CONSTRUCT_WORD":
      const {
        payload: { currentWord },
      } = action;

      if (isDeleting) {
        return {
          ...state,
          speed: 75,
          typed: currentWord.substring(0, typed.length - 1),
        };
      } else {
        return {
          ...state,
          speed: 125,
          typed: currentWord.substring(0, typed.length + 1),
        };
      }
    default:
      return {
        ...state,
      };
  }
};

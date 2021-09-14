const INITIALSTATE = {
  users: []
};
const usersReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'UPDATE_USER':
      const editUsers = state.users.map((u) => {
        if (u.index === action.payload.index) {
          return Object.assign({}, u, {
            ...action.payload,
          });
        }
        return u;
      });
      return {
        ...state,
        users: editUsers,
      };
    case 'DELETE_USER':
      const removeUser = state.users.filter(
        (user) => action.payload !== user.key
      );
      return {
        ...state,
        users: removeUser,
      };
    default:
      return state;
  }
};

export default usersReducer;

import { SIDEBAR_OPEN, SIDEBAR_CLOSE, ActionTypes } from '../_utils/actions';

type Action = {
  type: ActionTypes;
  // payload?: any;
};

interface State {
  isSidebarOpen: boolean;
}

const global_reducer = (state: State, action: Action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return {
        ...state,
        isSidebarOpen: true,
      };
    case SIDEBAR_CLOSE:
      return {
        ...state,
        isSidebarOpen: false,
      };
    default:
      return state;
  }
};

export default global_reducer;

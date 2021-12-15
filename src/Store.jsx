import React, {createContext, useContext, useReducer} from "react";

export const SET_SHOULD_SHOW_SUBSCRIBE = 'SET_SHOULD_SHOW_SUBSCRIBE';
export const SET_LOGIN = 'SET_LOGIN'

export const LOCAL_STORAGE_KEY_USER_IS_SUBSCRIBED = 'user-is-subscribed'
export const LOCAL_STORAGE_KEY_ACCESS_TOKEN = 'github-access-token'
export const LOCAL_STORAGE_KEY_USERNAME = 'github-username'
export const LOCAL_STORAGE_KEY_GITHUB_PERMISSION = 'github-permission'


const Reducer = (state, action) => {
  switch (action.type) {
    case SET_SHOULD_SHOW_SUBSCRIBE:
      return {
        ...state,
        shouldShowSubscribe: action.payload
      };
    case SET_LOGIN:
        return {
          ...state,
          gitHubAuthToken: action.payload.accessToken,
          gitHubUsername: action.payload.username,
          gitHubPermission: action.payload.permission,
        }
    default:
      return state;
  }
};

function getFromLocalStorage(key) {
  const initial = localStorage.getItem(key, "null")
  if (initial == "null") {
    return null
  }
  return initial
}

const initialState = {
  shouldShowSubscribe: getFromLocalStorage(LOCAL_STORAGE_KEY_USER_IS_SUBSCRIBED),
  gitHubAuthToken: getFromLocalStorage(LOCAL_STORAGE_KEY_ACCESS_TOKEN),
  gitHubUsername: getFromLocalStorage(LOCAL_STORAGE_KEY_USERNAME),
  gitHubPermission: getFromLocalStorage(LOCAL_STORAGE_KEY_GITHUB_PERMISSION)
};

export const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
};


export const useStore = () => {
  const [state, dispatch] = useContext(Context)
  return {state, dispatch}
}


export const Context = createContext(initialState)

export const getShouldShowSubscribe = state => state.shouldShowSubscribe
export const getGitHubAuthToken = state => state.gitHubAuthToken
export const getGitHubUsername = state => state.gitHubUsername
export const getGitHubPermission = state => state.gitHubPermission
export const getIsAuthenticated = state => !!getGitHubUsername(state)
import {AuthorsState, InitialAuthorsState} from "./authors.state";
import {AuthorsActionTypes, AuthorsAction} from "./authors.action";
import {Authors} from "../../common/interfaces/authors.interface";


export function authorsReducer(
  state = InitialAuthorsState,
  action: AuthorsAction): AuthorsState {
  console.log(`Reducer: action ${action.type}`);
  switch (action.type) {
    case AuthorsActionTypes.ADD_AUTHOR: {
      console.log(`ADD_AUTHOR action has been handled`);
      console.log(state.data.some(item => item.id === action.payload.id));
       if (!state.data.some(item => item.id === action.payload.id)) {
        const data = [...state.data, action.payload];
        return {...state, data}
      } else {
         return {...state}
       }
    }
    case AuthorsActionTypes.REMOVE_AUTHOR: {
      console.log(`REMOVE_AUTHOR action has been handled`);
      let index: number = state.data.findIndex(item => item.id === action.payload.id);
      const data = [...state.data.slice(0, index), ...state.data.slice(++index)];
      console.log(data);
      return {...state, data};
    }
    case AuthorsActionTypes.LOAD_AUTHORS: {
      console.log(`LOAD_AUTHORS action has been handled`);
      // const data: Authors[] = action.payload;
      return {...state};
    }

    case AuthorsActionTypes.LOAD_AUTHORS_ERROR: {
      console.log(`LOAD_AUTHORS_ERROR action has been handled with ${action.payload}`);
      return state;
    }

    case AuthorsActionTypes.LOAD_AUTHORS_SUCCESS: {
      console.log(`LOAD_AUTHORS_SUCCESS action has been handled`);
      const data: Authors[] = action.payload;
      return {...state, data};
    }

    default: {
      console.log(`UNKNOWN action has been handled`);
      return state;
    }
  }
}

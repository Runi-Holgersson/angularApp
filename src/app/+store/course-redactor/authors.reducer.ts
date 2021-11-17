import {AuthorsState, InitialAuthorsState} from "./authors.state";
import {AuthorsActionTypes, AuthorsAction} from "./authors.action";
import {Authors} from "../../common/interfaces/authors.interface";
import {AuthorsService} from "../../course-redactor/authors-input/authors.service";

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
      return {...state};
    }
    case AuthorsActionTypes.SET_AUTHORS: {
      console.log(`SET_AUTHOR action has been handled`);
      const data: Authors[] = action.payload;
      return {...state, data};
    }

    default: {
      console.log(`UNKNOWN action has been handled`);
      return state;
    }
  }
}

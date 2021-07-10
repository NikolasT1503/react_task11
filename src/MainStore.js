import { combineReducers, createStore } from "redux";

export const ACTION_CHANGE_FAM = "ACTION_CHANGE_FAM";
export const ACTION_CHANGE_IM = "ACTION_CHANGE_IM";
export const ACTION_CHANGE_OT = "ACTION_CHANGE_OT";

const initialState = {
  fam: 'Иванов',
  im: 'Иван',
}

const newState ={
  [ACTION_CHANGE_FAM]: (state,payload) => ({...state, fam: payload}),
  [ACTION_CHANGE_IM]: (state,payload) => ({...state, im: payload}),
  [ACTION_CHANGE_OT]: (state,payload) => ({...state, ot: payload})
}

const fiReducer = (state = initialState, {type, payload}) => {
  return newState[type] ? newState[type](state, payload) : state;
/*   switch(action.type){ //выше альтернативный вариант этой записи
    case ACTION_CHANGE_FAM: return {...state, fam: action.payload}
    case ACTION_CHANGE_IM: return {...state, im: action.payload}
    case ACTION_CHANGE_OT: return {...state, ot: action.payload}
    default: return state
  }
 */
}
const famReducer = (state = {fam: 'Иванов'}, {type, payload}) => {
    switch(type){ //выше альтернативный вариант этой записи
     case ACTION_CHANGE_FAM: return {...state, fam: payload}
     default: return state
   }
 }
const imReducer = (state = {im: 'Иван'}, {type, payload}) => {
    switch(type){ //выше альтернативный вариант этой записи
     case ACTION_CHANGE_IM: return {...state, im: payload}
     default: return state
   }
 }

const otReducer = (state = {ot: 'Иванович'}, {type, payload}) => {
   switch(type){ //выше альтернативный вариант этой записи
    case ACTION_CHANGE_OT: return {...state, ot: payload}
    default: return state
  }
}

const rootReducer = combineReducers({
    famReducer: famReducer, 
    imReducer: imReducer, 
    otReducer: otReducer, 
})

export const store = createStore(rootReducer);



//---end redux
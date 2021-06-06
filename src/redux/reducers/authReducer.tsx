import { CommonAction } from '../../interfaces/login.interface'
import types from '../types/types'

const initialState = {
  uid: 0,
  name: ''
}

const authReducer = (state: typeof initialState = initialState, action:CommonAction) => {

  switch (action.type) {
    case types.login:
        return {
          uid: action.payload!.uid,
          name: action.payload!.name
        }
    case types.register: 
        return {
          uid: action.payload?.uid,
          name: action.payload?.name
        }
    case types.logout:
      console.log('hello aqui')
        return {}
    default:
      return state;
  }
}

export default authReducer;
import { combineReducers } from 'redux'
import { GetDataReducer, GrandLodgeReducer, MemberDataReducer, RecogReducer} from './ProductReducer';

const RootReducer =combineReducers({
  GetProductReducerkey:GetDataReducer,
  MemberDataReducerKey:MemberDataReducer,
  RecogReducerKey:RecogReducer,
  GrandLodgeReducerKey:GrandLodgeReducer,
});


export default RootReducer;
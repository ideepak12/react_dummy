import * as types from './ActionTypes';

export function receiveStuff(json) {
  return {type: types.LOGIN, stuff: json.details};
}

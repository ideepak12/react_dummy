import { LOGIN } from '../actions/ActionTypes';

const InitialState = {
  users: [
    {
      name: 'deepak',
      password: '123456'
    },
    {
      name: 'yadav',
      password: '123456'
    },
    {
      name: 'deep',
      password: '123456'
    }
  ]
}

export default function users(state = InitialState.users, action) {
  switch (action.type) {
    case LOGIN:
      console.log('LOGIN Action')
      return action;
    default:
      return state;
  }
}

import { CounterAction } from '../actions/actions';
import { CounterState } from '../interfaces/interfaces';

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case 'reset':
      return {
        count: 0,
        previous: 0,
        changes: 0,
      };

    case 'increaseBy':
      return {
        count: state.count + action.payload.value,
        previous: state.count,
        changes: state.changes + 1,
      };

    default:
      return state;
  }
};

import { useReducer } from 'react';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';
import * as actions from './actions/actions';

const INITIAL_STATE: CounterState = {
  count: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => dispatch(actions.doReset());
  const handleIncreaseBy = (value: number) => {
    return dispatch(actions.doIncreaseBy(value));
  };
  return (
    <>
      <h1>Reducer Component</h1>
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <h3>Counter: {state.count}</h3>
        <h3>Previous: {state.previous}</h3>
        <h3>Changes: {state.changes}</h3>
      </div>
      {/*<pre>{JSON.stringify(state, null, 2)}</pre>*/}
      <br />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <button onClick={() => handleIncreaseBy(1)}>imcrement + 1</button>
        <button onClick={() => handleIncreaseBy(5)}>increment + 5</button>
        <button onClick={() => handleIncreaseBy(10)}>increment + 10</button>
        <button onClick={handleReset}> Reset </button>
      </div>
    </>
  );
};

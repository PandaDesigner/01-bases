import { useReducer } from 'react';

interface CounterState {
  count: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  count: 0,
  previous: 0,
  changes: 0,
};
type CounterAction =
  | { type: 'increaseBy'; payload: { value: number } }
  | { type: 'reset' };

const counterReducer = (
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

export const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => dispatch({ type: 'reset' });
  const handleIncreaseBy = (value: number) => {
    return dispatch({ type: 'increaseBy', payload: { value } });
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

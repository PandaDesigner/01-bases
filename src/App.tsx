//import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';
import { CounterReducerComponent } from './counter-reducer/CounterReducerComponent';
//import { CounterReducerComponent } from './bases/CounterReducerComponent';

const App = () => {
  return (
    <>
      <h1>React</h1>
      <hr />
      <CounterBy initialValue={0} />
      <br />
      <hr />
      <CounterEffect initialValue={0} />
      <hr />
      <CounterHook initialValue={5} />
      <hr />
      <CounterReducerComponent />
    </>
  );
};

export default App;

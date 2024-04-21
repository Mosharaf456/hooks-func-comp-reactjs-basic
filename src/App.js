// import logo from './logo.svg';
import './App.css';
import React, { useReducer } from 'react';
import Counter from './components/Counter/Counter';
import IncrementDecrement from './components/Counter/IncrementDecrement';
import HookCounterObject from './components/Counter/HookCounterObject';
import HookCounterArray from './components/Counter/HookCounterArray';
import CounterEffectOne from './components/CounterUseEffect/CounterEffectOne';
import HookMouse from './components/CounterUseEffect/HookMouse';
import MouseContainer from './components/CounterUseEffect/MouseContainer';
import IntervalHookCounter from './components/CounterUseEffect/IntervalHookCounter';
import DataFetching from './components/FetchData/DataFetching';
import DataFetchingTwo from './components/FetchData/DataFecthcingTwo';
import TriggerEffectBtnClick from './components/FetchData/TriggerEffectBtnClick';
import ComponentC from './components/HookContextApi/ComponentC';
import Counter1 from './components/HookUseReducer/Counter1';
import CounterTwo from './components/HookUseReducer/CounterTwo';
import CounterThree from './components/HookUseReducer/CounterThree';
import AComponentReduce from './components/HookUseReducer/AComponentReduce';
import BComponentReduce from './components/HookUseReducer/BComponentReduce';
import CComponentReduce from './components/HookUseReducer/CComponentReduce';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  // Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
  // Hooks are functions that let you “hook into” React state and lifecycle features from function components.
  // Hooks don’t work inside classes — they let you use React without classes.
  // Why use Hooks?
  // 1.this keyword is not required in functional components.
  // bind not required in functional components.

  // Hooks are backwards-compatible, which means they don’t contain any breaking changes.
  // Hooks are completely opt-in, there is no need to rewrite existing code.
  // Hooks are reusable, and can be shared among components.
  // Hooks are more readable and easier to understand.
  // Hooks are more maintainable and testable.
  // Hooks are more flexible and can be used in more places.
  // Hooks are more powerful and can be used in more scenarios.
  // Hooks are more consistent and can be used in more scenarios.
  
  //2. statefull logic can be shared between components in a better way then HOC or renders props.
  // without changing the component hierarchy. Reuse better than HOC and render props.
  // 3. Complex components can be broken down into smaller components. But class component can not be broken down into smaller components.
  // Datafecthing, data manipulation, event handling, and other side effects can be separated from the component logic.

  // Your app can mix classes and function components. Hooks do not contain any breaking changes, and they are completely opt-in.
  
  // state hook allows you to use state within functional components.
  return (
    <div className="App">
      <h1>React App for Hooks Learn</h1>

      {/* useState */}
      {/* <Counter />
      <br />
      <IncrementDecrement />
      <br />
      <br />
      <HookCounterObject  />
      <br />
      <br />
      <HookCounterArray /> */}

      {/* useEffect */}
      {/* <br /> */}
      {/* <br /> */}
      {/* <CounterEffectOne /> */}

      {/* <br /> */}
      {/* <HookMouse /> */}

      {/* componentWillUnmount */}
      {/* <br />
      <MouseContainer /> */}
      
      {/* <br />
      <IntervalHookCounter someProp='Hello'/> */}
      
      {/* <br /> */}
      {/* <DataFetching /> */}
      {/* <DataFetchingTwo /> */}
      {/* <TriggerEffectBtnClick /> */}

      {/* Context API */}
      {/* <UserContext.Provider value={'Mosharaf Hossain'}>
        <ChannelContext.Provider value={'BTL'}>
            <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* useReducer */}
      <br />
      <br />
      {/* <Counter1 /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}

      {/* Global state mangement with reduce */}
      
      <CountContext.Provider value={{ countState: count , countDispatch: dispatch }}>
        <h1>Count : {count}</h1>
        <AComponentReduce />
        <br />
        <BComponentReduce />
        <br />
        <CComponentReduce />
      </CountContext.Provider>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import IncrementDecrement from './components/counter/IncrementDecrement';
import HookCounterObject from './components/counter/HookCounterObject';
import HookCounterArray from './components/counter/HookCounterArray';

function App() {
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

      <Counter />
      <br />
      <IncrementDecrement />
      <br />
      <br />
      <HookCounterObject  />
      <br />
      <br />
      <HookCounterArray />
    </div>
  );
}

export default App;

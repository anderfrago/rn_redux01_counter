import * as React from "react";

import { Provider as ReduxProvider } from "react-redux";

import Counter from './features/CounterScreen'
import configureStore from "./redux/configureStore";

const store = configureStore();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Counter
        // value={store.getState()}
        // onIncrement={() => store.dispatch({ type: "INCREMENT" })}
        // onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      />
    </ReduxProvider>

  );
}

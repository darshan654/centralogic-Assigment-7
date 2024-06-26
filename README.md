# can see the legacy code in legacy.jsx it was similar to useReeducer


# install via
npm install @reduxjs/toolkit react-redux

# configureStore    
sets up a well-configured Redux store with a single function call, including combining reducers, adding the thunk middleware, and setting up the Redux DevTools integration. It also is easier to configure than createStore, because it takes named options parameters.

# createSlice 
lets you write reducers that use the Immer library to enable writing immutable updates using "mutating" JS syntax like state.value = 123, with no spreads needed. It also automatically generates action creator functions for each reducer, and generates action type strings internally based on your reducer's names. Finally, it works great with TypeScript.


# why to switch 
Even for existing applications, we recommend at least switching out createStore for configureStore as the dev-mode middleware will also help you catch accidental mutation and serializability errors in existing code bases. We also want to encourage you to switch the reducers you are using most (and any ones you write in the future) over to createSlice - the code will be shorter and easier to understand, and the safety improvements will save you time and effort going forward.
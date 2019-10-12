1. What problem does the context API help solve?

	Helps solve the problem of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

	Actions are points of our app that will need to change state and they also send data to our store. reducers set the data to our state for specific actions. store is where ALL of our state is being held. The only place its being held which is why its the SSOF.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state allows any component to access our state.

component state is local and we must pass the state via props to the children.



1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

thunk allows u to right actions that returns functions. It allows us to dispatch if certain conditions are met.

1. What is your favorite state management system you've learned and this sprint? Please explain why!


I like redux for its ability to pass state where we need it. But context api seems to do roughly the same thing but alot more simple. I understand redux comes with alot more than just handling state though. So I guess redux for its power.
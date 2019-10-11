# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a library that helps developers make appliactions with reusable components and state management.

1. What does it mean to think in react?

To think in terms of functional components where an application can be broken into smaller compartments of functionality.

1. Describe state.

State stores property values of a component and can be watched for changes using useEffect.

1. Describe props.

Props are the data properties passed from parent to child components that make components dynamic. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are when state is changed and there may be unintended results of that change like hitting an API repeatedly. Sync the effect with the second parameter in useEffect. An empty array will cause the state to be updated once.

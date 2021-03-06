# Fundamentals

If new state depends on prev state use this.setState((state) => ...)

# Component lifecycle (state hooks)

1. Mount
  - constructor
  - componentWillMount
  - render
  - componentDidMount

2. Update (after first render)
  - componentWillReceiveProps(nextProps)
  - shouldComponentUpdate (nextProps, nextState)
  - componentWillUpdate (nextProps, nextState)
  - render
  - componentDidUpdate (nextProps, nextState)

3. Unmount
  - componentWillUnmount

x: - componentDidCatch() // for catching errors from another state hooks

## How to update
 
- If you want to mutate state in state-hook don't forget to check if (this.props.myProp !== prevProps.myProp) !!

# Animation

## ReactCSSTransitionGroup

All childs must have id even if there is only one child.


## React.Children

- this.props.children - any type;
- if we want to change children before render: React.Children.map(this.props.children, child => ....)


## Hock

High ordered component. A function that gets component (class or functional component) and return new component (also class or fc)

It can: 
- realize fetching data logic (show spinner or a component). In fact it is a component proxy
- realize error handling (show placeholder if error occurred or a component)

## Hooks

- const [state, setState] = useState(initialState)
- useContext(MyContext) 
- useEffect(callback) - aka lifecycle methods. 
    --useEffect(clb) # called always
    --useEffect(clb, []) # called only when mounted
    --useEffect(clb, [...values...]) # called when values changed (aka componentDidUpdate)
    
Understanding: 
- hooks use closure and must be called at top level (to safe the correct invocation order) 
- and must be callsed only in React functions (every React.Component create it's own state[] and deps_[], react saves current React.Component and dispath hooks calls to it's state[] and deps_[])
- you can't use hooks in classes
see: https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/

# Redux

- reducer - pure function (1. result depends only on params 2. It doesn't change anything (arguments, environment))
- connect from 'react-redux' - usual HoC, that creates new component, which wrap ours and give store from Context

- applyMiddleware - concrete store enhancer. All middlewares are special cases of store enhancers. 

# Unsortered

{} in JSX means that it should interpreted like jsx/javascript

- Why it's a bad practise to use array index in array of react components?
 
 Because array index is unstable and after rerender you can get incorrect match of virtual and dom component


 - What is one dimensional data flow?

 It when some parent component has state entity. His childs don't have this state entity, they always get it from props (data flows from high level components to lower).    
 
 Full cycle: 
 1. parent sends to a child his state entity with a callback as props
 2. user fires event
 3. callback (parent callback or wrapper) handles event and change parents state
 4. react rerenders childs with new props

 - JSX ignores null
 
 - React.Fragment creates instant wrapper





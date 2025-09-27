1. What is JSX, and why is it used?
---
-> Answer :   
JSX is stand for JavaScript XML. It is a type of syntax that use in react js and looks like HTML. It make easier to target elements and update there inner value and even conditionally make them available or not in the page. Unless it there will need getElementById or others to select the element and innerHTML to update their value, which is so complicated in large scale.

2. What is the difference between State and Props?
---
-> Answer :   
- **State** is used for storing data or managing state inside a component. **props** is a way to pass data from parent to children component.
- **State** is mutable or can be change. **props** is immutable, like read-only.
    
3. What is the useState hook, and how does it work?
---
-> Answer :   
**useState** is a type of react hook that is used for managing state or storing data inside a react component.   
It has a veriable to store the state or data, a function to update the state or data and finally it takes the initial value of the veriable. Thus, **useState** hook works.

4. How can you share state between components in React?
---
-> Answer :   
 - By **lifting up** - In this process we declare a function and pass it as props to the children if it needs update from child.
 - By **parent state** - In these way the both component need to be the child of same parent, the state is declear in the parent and pass to the child as props.   
5. How is event handling done in React?
---
-> Answer :   
React event handling is little bit different from javaScript's. The event handler function are written in camelCase like "onClick". We don't call it directly, instead call it by wraping it into a arrow function. Finally, instead of passing function as string, we pass as function reference in JSX syntax.
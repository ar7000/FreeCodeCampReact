Working through React via FreeCodeCamp resources and copying passed code to Git repo as I go through each task. Documenting below anything new I learn.

- Learned to create simple JSX element. Example:
```
const JSX = <h1>Title</h1>
```
Assigned to a variable and rendered as an HTML element.

- Learned to create complex JSX element. Example:
```
const JSX =
    <div>
    
        <h1>Heading</h1>
        <h3>Sub-heading</h3>
        <p>Paragraph</p>

    </div>
```
Assigned to a variable and rendered as an HTML element. Variable cannot contain multiple elements unless they are contained in one parent element (i.e. a div element as above).

- Learned to render HTML elemenbts to the DOM. This is done with ReactDOM.render(elementName, targetNode). Example:

```
const JSX = (
    <div>
        <h1>Title</h1>
        <h3>Sub-Title</h3>
        <p>Body text </p>
    </div>
);

ReactDOM.render(JSX, document.getElementById('targetElement'))
```

Would render the div containing the h1, h3 and p on the HTML page in the location of the element with id 'targetElement'.

- Learned to write a React component from scratch by defining ES6 class which extends React.Component. Example:

```
class MyComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>My First React Component!</h1>
            </div>
        )
    }
}
```

Must include a render method, inside which is a return statement as above.

    - Component itself can then be rendered to the DOM:
    ```
    ReactDOM.render(<MyComponent />, document.getElementById('targetElement'))
    ```

    Note that, unlike rendering HTML elements assigned to variables, React components when used as parameters must be passed with HTML tags.

- Learned to pass props to a stateless functional component. These can then be accessed when rendering the component within other components (i.e. React Components). Example:

```
const AllAboutMe = (props) => {
    return(
        <div>
        <h2>My name is {props.name}</h2>
        <h4>I am {props.mood}</h4>
        </div>
    )
}

class MyComponent extends React.Component{
    render(){
        return(
            <div>
            <h1>A little about me...</h1>
            <AllAboutMe name="Ash Robinson" mood="Happy"/>
            </div>
        )
    }
}

ReactDOM.render(<MyComponent />, document.getElementById('top-section'))
```

Would render the headings 'My name is Ash Robinson' and 'I am happy' to the element with id top-section.

    - Can apply default props:
    ```
    AllAboutMe.defaultProps = {name:"John Doe", mood:"Anonymous"};
    ```
    Now if AllAboutMe were rendered and no props specified, we'd expect to see the headings 'My name is John Doe' and 'I am anonymous' rendered to the element with id top-section.

    - Can require a specific type of prop:
    ```
    AllAboutMe.propTypes = {name: PropTypes.string.isRequired}
    ```
    Would throw error if name was not given as a string.

    - When passing props to an ES6 class rather than a functional component, this. must be used. Example:

    ```
    class AllAboutMe extends React.Component{
        constructor(props) {
            super(props);
        }
        render(){
            return(
                <div>
                <h2>My name is {this.props.name}</h2>
                <h4>I am {this.props.mood}</h4>
                </div>
                )
        }
    }
    ```

- Learned how to declare state on a component, assign data to the state and then call that data within the component. Example:

```
class MyComponent extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          name:"Ash Robinson",
          age: "thirty"
      }
  }
  render(){
      return(
          <div>
              <h3>My name is {this.state.name}.</h3>
              <p>I am {this.state.age} years old.</p>
          </div>
      )
  }
};
```

Will render "My name is Ash Robinson." as a h3 element, followed by "I am thirty years old." as a p element.

    - State information can also be called with variables, written as Javascript directly. These must be declared after the render method:
    ```
    class MyComponent extends React.Component {
        
        constructor(props){
            super(props);
            this.state = {
            name:"Ash Robinson",
            age: "thirty"
            }
        }

        render(){
            const name = this.state.name;
            const age = this.state.age;
            return(
                <div>
                    <h3>My name is {name}.</h3>
                    <p>I am {age} years old.</p>
                </div>
            )
        }
    };
    ```

- Learned to alter state values with setState and bind the 'this' keyword to the a class in order that it may be used in class methods. Prevents method from returning undefined. Example:
```
class MyComponent extends React.Component {
        
        constructor(props){
            super(props);
            this.state = {
            name:"Ash Robinson",
            age: "thirty"
            }
            this.oneYearOlder = this.oneYearOlder.bind(this);
        }
        oneYearOlder(){
            this.setState({
                age:"thirty-one"
            });
        }

        render(){
            const name = this.state.name;
            const age = this.state.age;
            return(
                <div>
                    <h3>My name is {name}.</h3>
                    <p>I am {age} years old.</p>
                    <button onClick={this.oneYearOlder}>Add a year...</button>
                </div>
            )
        }
    };
```

On clicking the button the p element will change to "I am thirty-one years old."

- Learned to toggle an element between the booleans true and false by using state. Done by passing an anonymous function to setState. Example:

```
class MyComponent extends React.Component {
  constructor(props){
        super(props)
        this.state = {
            display: false
        }
        this.clickFunc = this.clickFunc.bind(this);
    }

    clickFunc(){
      this.setState(currentState => ({
        display: !currentState.display
      }))
    }

    render(){
        if(this.state.display){
            return(
            <div>
                <h1>Current status:</h1>
                <h3>I am true.</h3>
                <button onClick={this.clickFunc}>Make it false</button>
            </div>
        ) } else {
            return(
            <div>
                <h1>Current status:</h1>
                <h3>I am false.</h3>
                <button onClick={this.clickFunc}>Make it true</button>
            </div>
        )
        }
        }
};
```
Will flip between the two different return values indicated above by calling setState via the clickFunc method. The setState within clickFunc also has its own anonymous function which takes the current state, including all its key value pairs, as an argument, then re-assigns the display value by telling it to not (!) be the value held within currentState. In other words false becomes true and vice-versa.

- Learned how to pass state and methods from a parent to child components. Example:

```
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    name:"Bob Ross",
    likes:["painting", "animals", "trees"]
  }
}

render() {
  return (
    <div>
    <Introduction name={this.state.name} likes={this.state.likes}/>
    </div>
  );
  }
};

class Introduction extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const name = this.props.name;
    const likes = this.props.likes;
    return (
      <div>
        <h3>My name is {name},</h3>
        <p>and I like {likes.slice(0,likes.length-1).join(', ')} and {likes.slice(likes.length-1)}.</p>
      </div>
    );
  }
};
```

Will now render an h3 element contiang the text "My name is Bob Ross," and a p element containing "and I like painting, animals and trees".

    - Can also pass methods to children in the same way. For example to add a click action when calling a parent's method on a child component we say:
    ```
    <button onClick={this.props.clickAction} />
    ```
    Then pass the method as a prop in the parent component:
    ```
    <ChildComponent clickAction={this.clickMethod} />
    ```
    This example assumes clickMethod has been declared as a method on the parent component.

- Learned to use Life Cycle Method componentWillMount. Is declared on a component and is called prior to initial render. Useful when wanting to handle confuguration or declare state. Example:
```
class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        censoredMode: false
    }
  }

  componentWillMount(){
      if(this.props.age < 18){
          this.setState({censoredMode:true})
      }
  }

  if(this.state.censoredMode === true){
      render(){
          <h2>Nothing to see here...</h2>
      }
  } else {
      render(){
          <h2>Step inside...</h2>
          <button>Enter</button>
      }
  }

};
```

The above example uses componentWillMount() to verify user's age and render a h2 containing "Nothing to see here..." if they are under 18.

- Learned to use componentDidMount Life Cycle method. This is useful when needing to access elements of a component that are not accessible prior to initial render. Example:

```
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke:"Why did the chicken cross the road?"
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                joke:"To get to the other side!"
            });
        }, 5000);
    }
    render() {
        return (
            <div>
                <h1>{this.state.joke}</h1>
            </div>
        );
    }
};  
```

The above will render the joke question, then after 5 seconds will automatically change the string into the answer.

- Learned basics of styloing directly within react.
    - Can be declared inline, similarly to HTML. Example:
    ```
    class MyComponent extends React.Component {
        
        constructor(props) {
            super(props);
        }

        render(){

            return(
                <div style={{color:"red",fontSize:50}}>
                This is a styled sentence.
                </div>
            )
        
        }
    };  
    ```

    - Can also be declared as an object assigned to a variable and called by enclosing variable name in braces (meaning it will be ready as JS, not JSX):
    ```
    class MyComponent extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
            textColor:"green"
            }
        }
        
        render(){
        
            const textStyles = {color:"red", fontSize:50}
            
            return(
                <div style={textStyles}>
                This is a styled sentence.
                </div>
            )
        
        }
    };
    ```
    - Syntax varies from classic CSS. Many values need to be passed as strings. Numbers are by default treated as a pixel value. For any other CSS size types quotes must be used, i.e. {fontSize:"50%"}.
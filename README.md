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

Would render the div containing the <h1>, <h3> and <p> on the HTML page in the location of the element with id 'targetElement'.

- Learned to write a React component from scratch buy defining ES6 class which extends React.Component. Example:

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


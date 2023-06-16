const rootElement = document.getElementById("root");

// react library
// createElement

// React.createElement args

// 1. type of element / tagName
// 2. properties/attributes of that element
// 3. children

// use className instead of class in react

// const h1Element = React.createElement(
//     "h1",
//     {
//         className: "heading",
//     },
//     "First React Application"
// );

// jsx

// const h1Element = <h1 className="heading">Heading</h1>;

// react components are javascript functions

// function declaration, function express, arrow function

// IMPORTANT RULE : component / function's first letter should always capital.

// first react component
function H1Element() {
    return <h1 className="heading">MY Heading</h1>;
}

// ReactDOM.createRoot(rootElement).render(<H1Element> </H1Element>);
ReactDOM.createRoot(rootElement).render(<H1Element />);

// console.log(h1Element);

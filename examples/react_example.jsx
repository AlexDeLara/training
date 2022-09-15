const JSX = (<div>
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
    <p>Paragraph Three</p>
</div>); {/* Assign a div to a constant */}

{/* To render elements into the DOM */}
ReactDOM.render(componentToRender, targetNode)
ReactDOM.render(JSX, document.getElementById("challenge-node"));

{/* To define classes JSX uses the reserved word className instear of class */}
{/* Attributes and events become camelCase. Example: onClick, onChange,  */}

const JSX1 = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
);

{/* Components */}
const DemoComponent = function() { {/* Must start with a capital letter */}
    return (
      <div className='customClass' /> /* Must return null o JSX */
    );
};
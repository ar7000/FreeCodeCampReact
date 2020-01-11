const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
];

function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map(x => <li key={"framework" + frontEndFrameworks.indexOf(x)}>{x}</li>);
    return (
        <div>
            <h1>Popular Front End JavaScript Frameworks</h1>
            <ul>
                {renderFrameworks}
            </ul>
        </div>
    );
};  
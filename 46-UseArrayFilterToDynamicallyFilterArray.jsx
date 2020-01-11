class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    username: 'Jeff',
                    online: true
                },
                {
                    username: 'Alan',
                    online: false
                },
                {
                    username: 'Mary',
                    online: true
                },
                {
                    username: 'Jim',
                    online: false
                },
                {
                    username: 'Sara',
                    online: true
                },
                {
                    username: 'Laura',
                    online: true
                }
            ]
        }
    }
    render() {
        const usersOnline = this.state.users.filter(x => x.online);
        const renderOnline = usersOnline.map(x => <li key={"user" + usersOnline.indexOf(x)}>{x.username}</li>)
        return (
            <div>
                <h1>Current Online Users:</h1>
                <ul>
                    {renderOnline}
                </ul>
            </div>
        );
    }
};  
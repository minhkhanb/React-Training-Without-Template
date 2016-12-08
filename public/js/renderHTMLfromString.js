var Note = React.createClass({
    render: function () {
        return (
            <p>{this.props.children}</p>
        );
    }
});

var List = React.createClass({
    getInitialState: function () {
        return {
            notes: [
                "Hello",
                "Hi",
                "NodeJS"
            ]
        };
    },
    addMore: function () {
        this.state.notes.push("NodeJS", "ReactJS");
        this.setState(this.state);
    },
    render: function () {
        return (
            <div>
                <button onClick={this.addMore}>Add More</button>
                {
                    this.state.notes.map(function (note, index) {
                        return (
                            <Note key={index}>{note}</Note>
                        );
                    })
                }
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <List/>
    </div>,
    document.getElementById('root')
);
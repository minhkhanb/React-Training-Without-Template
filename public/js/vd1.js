var Com = React.createClass({
    getInitialState: function() {
        return {
            num: 0
        };
    },
    addNumber: function() {
        this.state.num = this.state.num + 1;
        this.setState(this.state);
    },
    render: function() {
        return(
            <button onClick={this.addNumber}>Hello {this.state.num}</button>
        );
    }
});

ReactDOM.render(
    <Com />,
    document.getElementById('root')
);
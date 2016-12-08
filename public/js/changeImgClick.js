var Album = React.createClass({
    getInitialState: function () {
        return {
            hinh: 1
        };
    },
    goNext: function () {
        if (this.state.hinh != 4) {
            this.state.hinh = this.state.hinh + 1;
        }
        else {
            this.state.hinh = 4;
        }
        this.setState(this.state);
    },
    goBack: function () {
        if (this.state.hinh != 1) {
            this.state.hinh = this.state.hinh - 1;
        }
        else {
            this.state.hinh = 1;
        }
        this.setState(this.state);
    },
    render: function () {
        return (
            <div className="album">
                <h1>Album</h1>
                <div>
                    <img src={"images/" + this.state.hinh + '.jpg'}/>
                </div>
                <div>
                    <button onClick={this.goNext}>Next</button>
                    <button onClick={this.goBack}>Go Back</button>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Album />,
    document.getElementById('root')
);
var Note = React.createClass({
    render: function () {
        return (
            <div>
                <p>{this.props.children}</p>
                <img src={this.props.src} />
            </div>
        );
    }
});

var List = React.createClass({
    getInitialState: function () {
        return {
            notes: [
                {
                    srcHinh: "images/2.jpg",
                    content: "hello"
                },
                {
                    srcHinh: "images/3.jpg",
                    content: "hi"
                },
                {
                    srcHinh: "images/4.jpg",
                    content: "nodejs"
                }
            ]
        };
    },
    addMore: function () {
        this.state.notes.unshift({              //them vao dau mang,
            srcHinh: "images/4.jpg",
            content: "ReactJS"
        });
        this.setState(this.state);
    },
    render: function () {
        return (
            <div>
                <button onClick={this.addMore}>Add More</button>
                {
                    this.state.notes.map(function (note, index) {
                        return (
                            <Note key={index} src={note.srcHinh}>{note.content}</Note>
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
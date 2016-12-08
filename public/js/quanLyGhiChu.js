function addNote() {
    ReactDOM.render(
        <Input/>,
        document.getElementById('add-note')
    );
}

var list;

var Note = React.createClass({
    getInitialState: function () {
        return {
            onEdit: false
        };
    },
    deleteNote: function () {
        $.post("/delete", {idDelete: this.props.id}, function (data) {
            list.state.notes = data;
            list.setState(list.state);
        });
    },
    editNote: function () {
        this.state.onEdit = true;
        this.setState(this.state);
    },
    saveNote: function () {
        var note = this;
        $.post("/updateData", {idEdit: this.props.id, content: this.refs.txtEdit.value}, function (data) {
            list.state.notes = data;
            list.setState(list.state);
            note.state.onEdit = false;
            note.setState(note.state);
        });
    },
    cancelNote: function () {
        this.state.onEdit = false;
        this.setState(this.state);
    },
    render: function () {
        if (this.state.onEdit) {
            return (
                <div className="note">
                    <input defaultValue={this.props.children} ref="txtEdit"/>
                    <button onClick={this.saveNote}>Save</button>
                    <button onClick={this.cancelNote}>Cancel</button>
                </div>
            );
        }
        else {
            return (
                <div className="note">
                    <p>{this.props.children}</p>
                    <button onClick={this.deleteNote}>Delete</button>
                    <button onClick={this.editNote}>Edit</button>
                </div>
            );
        }
    }
});

var List = React.createClass({
    getInitialState: function () {
        list = this;
        return {
            notes: []
        }
    },
    render: function () {
        return (
            <div className="list-note">
                <div id="add-note"></div>
                <button onClick={addNote}>Show Add Note</button>
                {
                    this.state.notes.map(function (note, index) {
                        return (
                            <Note key={index} id={index}>{note}</Note>
                        );
                    })
                }
            </div>
        );
    },
    componentDidMount: function () {
        var that = this;
        $.post("/getNotes", function (data) {
            that.state.notes = data;
            that.setState(that.state);
        });
    }
});

var Input = React.createClass({
    addNoteToList: function () {
        //list.state.notes = list.state.notes.concat(this.refs.txt.value);        //data tinh
        $.post("/addData", {note: this.refs.txt.value}, function (data) {            //save data to server
            list.state.notes = data;
            list.setState(list.state);
        });
        list.setState(list.state);
        ReactDOM.unmountComponentAtNode(document.getElementById('add-note'));           //Remove Dom element at Node
    },
    render: function () {
        return (
            <div>
                <input type="text" ref="txt" placeholder="Enter your note!"/>
                <button onClick={this.addNoteToList}>Add Note</button>
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
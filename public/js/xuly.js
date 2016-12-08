//global function
function getName(name) {
    console.log('Name', name);
}

// khai bao component
var Home = React.createClass({              //{}: trang thai | props special as inner html
    getInitialState: function () {
        return {
            numOfStudent: this.props.student
        };
    },
    getInfo: function () {
        console.log('show info -->', this.props.children);
    },
    showName: function () {                 //khong optimize khi su dung gian tiep
        getName(this.props.name);
    },
    addStudent: function () {
        this.state.numOfStudent = parseInt(this.state.numOfStudent) + 1;
        this.setState(this.state);
    },
    render: function () {
        return (
            <div>
                <h1 className="yellow"> {this.props.name}</h1>
                <div>Student: {this.state.numOfStudent}</div>
                <p>{this.props.children}</p>
                <button onClick={this.getInfo}>Show</button>
                <button onClick={this.showName}>Show Name</button>
                <button onClick={() => {getName(this.props.name)}}>Show Name Optimze</button>
                <button onClick={() => {var str= this.props.name + ' ' + this.props.children; getName(str)}}>Show Name
                    Add String Optimze
                </button>
                <div>
                    <button onClick={this.addStudent}>Register</button>
                </div>
                <Course />
            </div>
        );
    }
});

var Input = React.createClass({
    showText: function() {
        var text = this.refs.txt.value;
        var _select = this.refs.dropdown.value;
        console.log(text);
        console.log(_select);
    },
    render: function () {
        return(
            <div>
                <select ref="dropdown">
                    <option value="first">First</option>
                    <option value="second">Second</option>
                    <option value="third">Third</option>
                </select>
                <input type="text" ref="txt" />
                <button onClick={this.showText}>Show Text</button>
            </div>
        );
    }
});

var Course = React.createClass({
    render: function () {
        return (
            <h3>Khoa hoc lap trinh ReactJs</h3>
        );
    }
});

ReactDOM.render(
    <div>
        <Input/>
        <Home name="ReactJS" student="10">Subject --> React</Home>
        <Home name="NodeJS" student="20">Subject --> NodeJS</Home>
    </div>
    ,
    document.getElementById("root")
);

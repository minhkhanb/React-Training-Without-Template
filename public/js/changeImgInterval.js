var Image = React.createClass({
    getInitialState: function () {
        return {
            hinh: 1
        };
    },
    changeImage: function () {
        console.log(this.state.hinh, this.state.hinh % 4);
        this.state.hinh = (this.state.hinh % 4) + 1;
        this.setState(this.state);
    },
    render: function () {
        return (
            <img src={"images/" + this.state.hinh + ".jpg"}/>
        );
    },
    componentDidMount:function() {              // fire sau khi render xong
        setInterval(this.changeImage, 1000);
    }
});

ReactDOM.render(
    <Image />,
    document.getElementById('root')
);
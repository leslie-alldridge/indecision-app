class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['thing 1', 'thing 2', 'thing 3'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options}/>
                <AddOption options={options}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handleClick() {
        alert("clicked");
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    removeAll(){
        alert("removed");
    }
    render(){
        return (
            <div>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
                <Option />
                <button onClick={this.removeAll}>Remove All</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind;
    }

    onFormSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option) {
            this.props.options.push(option);
            e.target.elements.option.value = '';
            render();
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
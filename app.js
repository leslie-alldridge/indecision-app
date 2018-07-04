class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: props.options
        };
    }
    
    handlePick () {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
    }

    handleAddOption(option) {
        if (!option){
            return 'Enter a valid value';
        } else if (this.state.options.indexOf(option) > -1 ){
            return 'This option already exists';
        }
        this.setState((prevState) => { options: prevState.options.concat([option])});
    }

    handleDeleteOptions() {
        this.setState(() => { options: [] });
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => {
            options: prevState.options.filter((option) => optionToRemove !== option
            );
        });
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle = {this.subtitle}/>
                <Action hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick} />
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

Header.defaultProps = {
    title:'Indecision'
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return(
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What should I do?
            </button>
        </div>
    );
};

// class Action extends React.Component {
//     render(){
//         return(
//             <div>
//                 <button 
//                 onClick={props.handlePick}
//                 disabled={!props.hasOptions}
//                 >
//                 What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>
            Remove All
            </button>
        {
            props.options.map((option) => 
            <Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={props.handleAddOption}
            />)
        }
        </div>
    );
}

// class Options extends React.Component {
//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             {
//                 this.props.options.map((option) => <Option key={option} optionText={option} />)
//             }
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}>
            remove
            </button>
        </div>
    );
}
//
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      };
    }

    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => { error }); }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name} </p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
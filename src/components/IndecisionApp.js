import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './option-modal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
      };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }
    
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handleClearSelected = () => {
        this.setState(() =>({ selectedOption: undefined } ));

    }
    
    
    handlePick = (selectedOption) => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        })); 
    };
      
    handleAddOption = (option) => {
        if (!option) {
          return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
          return 'This option already exists';
        }
    
        this.setState((prevState) => ({
          options: prevState.options.concat(option)
        }));
    }  
    
    componentDidMount = () => {
        try {
            //check local storage for items and parse to new array
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options){
            this.setState(() => ({options}));
            }
        } catch (e) {
            //Do nothing at all
        }    
    }
    
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    
    componentWillUnmount(){
        console.log("unmounted");
    }
    
    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <div className="container">
            <Action
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
            />
            <div className="widget">
            <Options
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
                handleAddOption={this.handleAddOption}
            />
            </div>
            </div>
            <OptionModal 
                selectedOption={this.state.selectedOption}
                handleClearSelected={this.handleClearSelected}
            />
        </div>
      );
    }
}

export default IndecisionApp;
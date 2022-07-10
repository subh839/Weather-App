import React from "react";
import "./App.css";
import WheelPicker from 'react-wheelpicker';
import Weather from "./components/Weather";
class App extends React.Component {
  constructor(){
      super()
      this.state = {
          pickerOpen: false,
          data: ["Clear Sky", "Cloudy", "Thunder", "Storm", "Bright", "Nothing"],
          defaultSelection: 3,
          selection: "Clear Sky",
      }
  }


  render(){
    return (
        <React.Fragment>
           <div className="App">
      <Weather />
      <div className="selected" onClick={() => this.setState({ pickerOpen: !this.state.pickerOpen})}> 
          {this.state.selection}
        </div>
        {this.state.pickerOpen &&
            <div className="demo-container">
            <WheelPicker
                animation="wheel"
                data={this.state.data}
                height={40}
                parentHeight={250}
                fontSize={13}
                defaultSelection={this.state.defaultSelection}
                padding={20}
                updateSelection={selectedIndex => this.setState({ selection: this.state.data[selectedIndex], 
                  defaultSelection: selectedIndex })}
                scrollerId="scroll-select-subject"
            />
            </div>
  }
    </div>

        </React.Fragment>
    )
}
}
export default App;

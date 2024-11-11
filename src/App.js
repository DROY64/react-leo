import './App.css';

import React from 'react';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      myString: '',
      myColor: 'red',
      addStar: 0
    };
    this.getNumbers();
  }
  
  getNumbers() {
    for (var i = 0; i < 10; i++) {
      this.state.myString = this.state.myString + "*";
    }
  }

  changeColor() {
    if (this.state.myColor === "red") {
      this.setState({ myColor: 'green' });
    } else {
      this.setState({ myColor: 'red' });
    }
  }

  addStar() {
    this.setState(prevState => ({
      starsCount: prevState.starsCount + 1,
      myString: prevState.myString + '*' 
    }));
  }

  render() {
    return (
      <div className={"App " + this.state.myColor}>
        {this.state.myString}
        <br />
        <button onClick={() => this.changeColor()}>Change Color</button>
        <br />
        <button onClick={() => this.addStar()}>Add Star</button>
      </div>
    );
  }
}

export default App;

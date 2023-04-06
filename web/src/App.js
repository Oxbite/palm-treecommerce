import './App.css';
import Index from './components/index'
import Home from './components/homePage'
import Nav from './components/nav';
import React from 'react';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:4000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res}));
}

componentWillMount() {
    this.callAPI();
}

// function App() {
render(){
  console.log(this.state.apiResponse);
  const far = this.state.apiResponse;
  // const obj = JSON.parse('this.state.apiResponse');
  return (
    <div className="App">
      <Nav />
      <div className='navPage' />
      <Index />
      <Home />
      {/* <p>{data.message}</p> */}
      <p>{this.state.apiResponse}</p>
      <p>{far.message}</p>

    </div>
  );
}
}
export default App;

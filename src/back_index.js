import React from 'react';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import './App.css';
import Left from './Left.js';
import Right from './Right.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      index: ''
    }
    this.handleHover = this.handleHover.bind(this); 
    this.handleHoverRemove = this.handleHoverRemove.bind(this); 
  }

  handleHover(index){
    this.setState({index : index});
  }
  
  handleHoverRemove(){
    this.setState({index : ''});
  }

  render(){
    const cellStyle = { minWidth: 200, padding: '.5em 1em', textAlign: 'left', borderLeft: '1px solid white', borderBottom: '1px solid white'};
  return (
    <div >
      <ScrollSync>
  <div style={{ display: 'flex', position: 'relative', height: 300 }}>
  <table style={{ minWidth: 200, borderCollapse: 'collapse' }}>
      <thead style={{ display: 'block', minWidth: 200, overflow: 'auto', color: 'white', background: 'grey' }}>
        <tr>
        <th style={cellStyle}>Name</th>
        </tr>
      </thead>
    <ScrollSyncPane>
      <tbody style={{ display: 'block', minWidth: 200, height: 200, overflowY: 'auto', background: 'lightblue' }}>
        <Left index={this.state.index} handleHoverRemove={this.handleHoverRemove} handleHover={this.handleHover} style={{ height: 1000}}
        onmouse={this.handleHover}/>
      </tbody>
    </ScrollSyncPane>
    </table>

    <table  style={{ minWidth: 200, borderCollapse: 'collapse' }}>
      <thead style={{ display: 'block', minWidth: 200, overflow: 'auto', color: 'white', background: 'grey' }}>
        <tr>
        <th style={cellStyle}>Age</th>
        </tr>
      </thead>
    <ScrollSyncPane>
      <tbody style={{ display: 'block', minWidth: 200, height: 200, overflowY: 'auto', background: 'lightblue' }}>
      <Right handleHoverRemove={this.handleHoverRemove} handleHover={this.handleHover} index={this.state.index} style={{ height: 1000 }}/>
      </tbody>
    </ScrollSyncPane>
    </table>

  </div>
</ScrollSync>
    </div>
  );
}
}

export default App;

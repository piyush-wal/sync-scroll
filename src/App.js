import React from 'react';
import './App.css';
import Left from './Left.js';
import Right from './Right.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: ''
    }

    this.leftRef = React.createRef();
    this.rightRef = React.createRef()
    this.handleHover = this.handleHover.bind(this);
    this.handleHoverRemove = this.handleHoverRemove.bind(this);
    this.syncScroll = this.syncScroll.bind(this);
  }

  syncScroll(id) {
    if (id === "leftId") {
      this.rightRef.current.scrollTop = this.leftRef.current.scrollTop
    } else {
      this.leftRef.current.scrollTop = this.rightRef.current.scrollTop
    }
  }

  handleHover(index) {
    this.setState({ index: index });
  }

  handleHoverRemove() {
    this.setState({ index: '' });
  }

  render() {
    const cellStyle = { minWidth: 200, padding: '.5em 1em', textAlign: 'left', borderLeft: '1px solid white', borderBottom: '1px solid white' };
    return (
      <div style={{ display: 'flex', position: 'relative', height: 300 }}>
        <table>
          <thead>
            <tr>
              <th style={cellStyle}>Name</th>
            </tr>
          </thead>

          <tbody id="leftId" ref={this.leftRef} onScroll={() => { this.syncScroll("leftId") }} style={{ display: 'block', minWidth: 200, height: 200, overflowY: 'auto', background: 'lightblue' }}>
            <Left index={this.state.index} handleHoverRemove={this.handleHoverRemove} handleHover={this.handleHover} />
          </tbody>

        </table>
        <table>
          <thead>
            <tr>
              <th style={cellStyle}>Age</th>
            </tr>
          </thead>
          <tbody id="rightId" ref={this.rightRef} onScroll={() => { this.syncScroll("rightId") }} style={{ display: 'block', minWidth: 200, height: 200, overflowY: 'auto', background: 'lightblue' }}>
            <Right handleHoverRemove={this.handleHoverRemove} handleHover={this.handleHover} index={this.state.index} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

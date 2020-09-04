import React from 'react';
import './App.css';
import Left from './Left.js';
import Right from './Right.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: '',
      rightRef : [],
      leftRef : []
    }

    this.leftRef = React.createRef();
    this.rightRef = React.createRef()
    this.handleHover = this.handleHover.bind(this);
    this.handleHoverRemove = this.handleHoverRemove.bind(this);
    this.syncScroll = this.syncScroll.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  setRef(ref,id)
  {
    if(id==='leftId')
    {
      this.state.leftRef.push(ref)
    }
    else{
      this.state.rightRef.push(ref)
    }
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
            <Left index={this.state.index} 
            leftRef={this.state.leftRef}
            rightRef={this.state.rightRef}
            setRef={this.setRef} />
          </tbody>

        </table>
        <table>
          <thead>
            <tr>
              <th style={cellStyle}>Age</th>
            </tr>
          </thead>
          <tbody id="rightId" ref={this.rightRef} onScroll={() => { this.syncScroll("rightId") }} style={{ display: 'block', minWidth: 200, height: 200, overflowY: 'auto', background: 'lightblue' }}>
            <Right
            leftRef={this.state.leftRef}
            rightRef={this.state.rightRef}
            setRef={this.setRef} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import { Button ,Menu, ActivityIndicator, NavBar} from 'antd-mobile';
import styles from './ss.module.css';
;


const data = [
  {
    value: '1',
    label: 'Food',
  }, {
    value: '2',
    label: 'Supermarket',
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
  },
];

function App() {
  console.log(styles);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="box">
        <Player>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player>
        <Button style={{width:'100px'}}>Start</Button>
        <p className={styles.ss}>999999999</p>
        </div>
      </header>
      <div className="ss"></div>
      <div>
          <NavBar
            leftContent="Menu"
            mode="light"
            
            className="single-top-nav-bar"
          >
            OneLevel menu
          </NavBar>
        </div>
    </div>
  );
}

export default App;

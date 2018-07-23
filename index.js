import React from 'react';
import ReactDOM from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');

const helloWordl = <h1>Hello World!</h1>;
ReactDOM.render(<Media type="video" title="Why learn to React?" author="VictorOrozco" image="./images/covers/bitcoin.jpg" />, app)
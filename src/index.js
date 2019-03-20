import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './state-drills/Accordion';
import sections from './sectionIndex';
import './index.css';


ReactDOM.render(<Accordion sections = {sections} />, document.getElementById('root'));
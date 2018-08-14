import * as React from 'react';
import { render as ReactDomRender } from 'react-dom';
import Demo from './demo';

let bootstrapNode = document.createElement('div');
ReactDomRender(<Demo />, bootstrapNode);
document.body.appendChild(bootstrapNode);
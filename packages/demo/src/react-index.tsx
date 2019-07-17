import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactTemplateEditor } from './react-template-editor';

const variables = [{ id: 1, name: '昵称' }];

const placeholders = [
  {
    type: 'variable',
    matchRegexp: /^\{\{(\d)+\}\}/,
    className: 'cm-keyword',
    text(value) {
      const variable = variables.find(item => String(item.id) === value);
      return variable ? variable.name : 'Unknown Variable';
    }
  }
];

ReactDOM.render(<ReactTemplateEditor value='' placeholders={placeholders} />, document.getElementById('editor'));

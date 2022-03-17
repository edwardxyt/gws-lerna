import './index.less';
import '../modulea/lib/modulea.min.css';

import _ from 'lodash';
import React from 'react';
import * as ReactDOM from 'react-dom';

import MA from '../modulea/index';
import { MB, year } from '../moduleb/index';

let a = _.chunk(['a', 'b', 'c', 'd'], 2);
console.log(a, year);

const Root: React.FC<any> = props => {
    const { name = 'xia' } = props;
    return (
        <div>
            <p>app {name}</p>
            <MB></MB>
            <MA></MA>
        </div>
    );
};
ReactDOM.render(<Root />, document.getElementById('main'));

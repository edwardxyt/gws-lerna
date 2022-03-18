import './index.less';
import '@edwardxyt/modulea/lib/modulea.min.css';

import _ from 'lodash';
import MA from 'packages/modulea/index';
import { MB } from 'packages/moduleb/index';
import React from 'react';
import * as ReactDOM from 'react-dom';

let a = _.chunk(['a', 'b', 'c', 'd'], 2);
console.log(a);

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

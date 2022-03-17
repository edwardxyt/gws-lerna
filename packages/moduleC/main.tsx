import { MB, year } from '@edwardxyt/moduleb';
import _ from 'lodash';
import React from 'react';
import * as ReactDOM from 'react-dom';

let a = _.chunk(['a', 'b', 'c', 'd'], 2);
console.log(a, year);

const Root: React.FC<any> = props => {
    const { name = 'xia' } = props;
    return (
        <div>
            <p>app {name}</p>
            <MB></MB>
        </div>
    );
};
ReactDOM.render(<Root />, document.getElementById('main'));

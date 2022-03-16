import _ from 'lodash'
// import year from "@edwardxyt/moduleb";
import React, { useState } from 'react';
import { Button } from 'antd';
import './index.less';

var a = _.chunk(['a', 'b', 'c', 'd'], 2);
console.log(a)

const App: React.FC<any> = (props) => {
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <Button type="primary" onClick={() => setCount(count + 1)}>Click me</Button>
        </div>
    );
}

export default App;
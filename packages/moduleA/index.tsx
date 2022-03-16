import _ from 'lodash'
// import year from "@edwardxyt/moduleb";
import React, { useState, useEffect } from 'react';

interface IProps {
    name: string
}

const App: React.FC<IProps> = (props) => {
    const {name} = props;
    const [count, setCount] = useState<number>(0)

    useEffect(
        () => {
            let a = _.chunk(['a', 'b', 'c', 'd'], 2);
            console.log(a)
        },
        []
    );
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me {{name}}
            </button>
        </div>
    );
}

export default App;
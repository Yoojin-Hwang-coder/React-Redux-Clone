import React from 'react';

function Counter(props) {
  const onChange = (e) => {
    props.onSetDiff(parseInt(e.target.value, 10));
  };
  console.log(props);
  return (
    <div>
      <h1>숫자 :{props.number}</h1>
      <div>
        <input type='number' value={props.diff} onChange={onChange} />
      </div>
      <button onClick={props.onIncrease}>+</button>
      <button onClick={props.onDecrease}>-</button>
    </div>
  );
}

export default Counter;

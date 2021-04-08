import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
  const user = useSelector((state) => state.counter);
  console.log(user);

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));
  return (
    <Counter
      number={user.number}
      diff={user.diff}
      onDecrease={onDecrease}
      onIncrease={onIncrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;

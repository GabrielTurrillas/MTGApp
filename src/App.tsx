import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from './state/store';
import { getAllSets } from './state/action-creators';

const App: React.FC = () => {

  const dispatch = useDispatch()
  const sets = useSelector((state: RootStore) => state.setsReducer.sets);

  useEffect(() => {
    dispatch(getAllSets())
  }, [dispatch])

  return (
    <div className="App">
      {sets?.sets.map(set => {
        return <p key={set.code}>{set.name} {set.code}</p>
      })}
      {console.log(sets)}
    </div>
  );
}

export default App;

//Limited Edition Alpha LEA

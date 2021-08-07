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
        return <p>{set.name}</p>
      })}
    </div>
  );
}

export default App;

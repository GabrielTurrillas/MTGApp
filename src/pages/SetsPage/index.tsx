import React from 'react'
import { useSelector } from 'react-redux';
import { RootStore } from '../../state/store';



const SetsPage: React.FC = () => {
  const sets = useSelector((state: RootStore) => state.setsReducer.sets);
  return (
    <div>

    </div>
  )
}

export default SetsPage

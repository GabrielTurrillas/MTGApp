import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

import { RootStore } from '../../state/store';
import { getAllSets } from '../../state/action-creators'


const SetsPage: React.FC = () => {
  const dispatch = useDispatch()
  const sets = useSelector((state: RootStore) => state.setsReducer.sets);

  useEffect(() => {
    dispatch(getAllSets());
  }, [dispatch])

  return (
    <ul>
      {sets?.sets?.map(set => {
        return <li key={set.code}>
          <Link
            to={{
              pathname: '/cardsSet',
              state: {
                code: set.code,
                page: 1
              }
            }}
          >
            {set.name} {set.code}
          </Link>
        </li>
      })}
    </ul>
  )
}

export default SetsPage

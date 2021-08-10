import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

import { RootStore } from '../../state/store';
import { getAllSets } from '../../state/action-creators'
import { SingleSetType } from '../../state/actions';


const SetsPage: React.FC = () => {
  const dispatch = useDispatch()
  const sets = useSelector((state: RootStore) => state.setsReducer.sets);

  useEffect(() => {
    dispatch(getAllSets());
  }, [dispatch])

  type liType = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>

  const checkIfCore = (set: SingleSetType): liType | void => {
    if (set.type === 'core' || set.type === 'expansion') {
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
    }
  }

  return (
    <ul>
      {sets?.sets?.map(set => {
        console.log(set)
        return checkIfCore(set)
      })}
    </ul>
  )
}

export default SetsPage

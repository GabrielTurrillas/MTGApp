import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';

import { RootStore } from '../../state/store';
import { getAllSets } from '../../state/action-creators';
import { SingleSetType } from '../../state/actions';
import SetContainer from '../../components/SetContainer';

const SetsPage: React.FC = () => {
  const dispatch = useDispatch();
  const sets = useSelector((state: RootStore) => state.setsReducer.sets);

  useEffect(() => {
    dispatch(getAllSets());
  }, [dispatch]);

  type liType = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

  const checkIfCore = (set: SingleSetType): liType | void => {
    if (set.type === 'core' || set.type === 'expansion') {
      return <SetContainer set={set} />
    };
  };

  return (
    <Gallery>
      {sets?.sets?.map(set => {
        console.log(set)
        return checkIfCore(set)
      })}
    </Gallery>
  )
}

export default SetsPage;

const Gallery = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-rows: 5rem;
  grid-template-columns:repeat(auto-fill, minmax(10rem, 1fr));
`



import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import { BounceLoader } from 'react-spinners';
import { css } from '@emotion/core'

import { RootStore } from '../../state/store';
import { getAllSets } from '../../state/action-creators';
import { SingleSetType } from '../../state/actions';
import SetContainer from '../../components/SetContainer';

const SetsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { sets, loading } = useSelector((state: RootStore) => state.setsReducer);



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
    <Container>
      <TitleWrapper>
        <Title>Magic Sets</Title>
      </TitleWrapper>
      {loading ?
        <BounceLoader loading css={loaderCss} size={400} /> :
        <Gallery>
          {sets?.sets?.map(set => {
            console.log(set)
            return checkIfCore(set)
          })}
        </Gallery>
      }
    </Container>
  )
}

export default SetsPage;

const loaderCss = css`
  justify-self:center;
  margin-top:8rem;
`

const TitleWrapper = styled.div`
  display:flex;
  justify-content:center;
  padding:2rem;
`

const Container = styled.div`
  display: grid;
  text-align:center;
  
  padding: 0 15rem;
  padding-bottom: 7rem;
  @media (max-width: 1300px){
    padding:0rem 0rem;
  }
`

const Title = styled.h1`
  text-align:center;
  padding:2rem 0;
  border-radius:5px;
  width:25rem;
  box-shadow: 0 8px 8px 4px lightblue;
`

const Gallery = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-rows: 5rem;
  grid-template-columns:repeat(auto-fill, minmax(10rem, 1fr));
`



import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SingleSetType } from '../../state/actions'

interface SetContainerI {
  set: SingleSetType
}

const SetContainer: React.FC<SetContainerI> = ({
  set
}) => {
  return (
    <Container key={set.code}>
      <SetLink
        to={{
          pathname: '/cardsSet',
          state: {
            code: set.code,
            setName: set.name,
            page: 1
          }
        }}
      >
        {set.name}
      </SetLink>
    </Container>
  )
}

export default SetContainer

const Container = styled.div`
  border-radius:10px;
  box-shadow: 0 8px 8px 4px lightblue;
  `

const SetLink = styled(Link)`
  display:flex;
  text-decoration:none;
  color:black;
  justify-content:center;
  align-items:center;
  text-align: center;
  height:100%;
  width:100%;
`
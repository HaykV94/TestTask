import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 1345px;
    height: fit-content;
`
const Card = styled.div`
    width: 1345px;
    height: 544px;
    margin-bottom:  60px;
    border-radius: 24px;
    border: 1px solid black 
`

const arr: number[] = [1,2,3,4,5,6,7,8,9]

function Cards() {
  return (
    <Container>
        {arr.map( el => {
            return <Card>{el}</Card>
        })}
    </Container>
  )
}

export default Cards
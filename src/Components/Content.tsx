import React from 'react'
import styled from 'styled-components'
import ContentHeader from './ContentHeader'
import Cards from './Cards'

const Container = styled.div`
  height: 100%;
  width: 1345px;
  margin: 64px 99px;
`

function Content() {
  return (
    <Container>
        <ContentHeader></ContentHeader>
        <Cards></Cards>
    </Container>
  )
}

export default Content
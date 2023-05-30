import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 1345px;
height: fit-content;
margin: 64px 0 61.61px 0;
`

const Text = styled.text`
    font-size: 48px;
`

function ContentHeader() {
  return (
    <Container>
        <Text>Courses</Text>
    </Container>
  )
}

export default ContentHeader
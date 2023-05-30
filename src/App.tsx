import styled, { css } from 'styled-components'
import SideBar from "./Components/SideBar"
import Content from './Components/Content';

const Container = styled.div`
  display: flex;
  flex-direction: raw;
  height: 100%;
  width: 100%;
  background: #FFF4EE; 
  margin: 0px !important;
  padding: 0px !important
`

function App() {
  return (
    <Container>
      <SideBar></SideBar>
      <Content></Content>
    </Container>
  );
}

export default App;

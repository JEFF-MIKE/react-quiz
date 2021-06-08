import styled from 'styled-components';
import { colors } from '../colors';

export const GameOverWrapper = styled.div`
flex: 1;
display: flex;
max-width: 900px;
min-height: 400px;
max-height: 500px;
justify-content: center;
font-family: 'Work Sans', sans-serif;
border: 5px solid black;

.inner-div {
  width: 100%;
  background: ${colors.main_color};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 10%;
}

p {
}

button {

}
  background: #a6494f;
  color: #FFFFFF;
`
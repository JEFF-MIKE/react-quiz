import styled from 'styled-components';
import { colors } from '../colors';

export const GameOverWrapper = styled.div`
flex: 1;
display: flex;
max-width: 900px;
max-height: 600px;
min-height: 570px;
justify-content: center;
font-family: 'Work Sans', sans-serif;
border: 5px solid black;

.inner-div {
  width: 100%;
  background: ${colors.main_color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px 10%;
}
  background: #a6494f;
  color: #FFFFFF;
`
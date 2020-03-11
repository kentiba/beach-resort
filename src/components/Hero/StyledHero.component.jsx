import styled from "styled-components";
import defaultImage from "../../images/defaultBcg.jpeg";

const StyledHero = styled.header`
  min-height: 90vh;
  background: url(${props => (props.image ? props.image : defaultImage)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;

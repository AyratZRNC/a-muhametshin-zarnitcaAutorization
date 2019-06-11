import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Wrapper = styled.div`
  position: relative;
  margin: 50px auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

function MainContent() {
  return (
    <Wrapper>
      <Typography variant="h2" gutterBottom>
        Главная
      </Typography>
    </Wrapper>
  );
}
export default MainContent;

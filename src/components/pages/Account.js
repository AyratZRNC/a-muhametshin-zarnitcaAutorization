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

function Account() {
  return (
    <Wrapper>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </Typography>
    </Wrapper>
  );
}
export default Account;

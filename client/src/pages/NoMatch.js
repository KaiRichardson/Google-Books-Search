import React from "react";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Main from "../components/Main";

function NoMatch() {
  return (
    <div>
      <Nav
        status={"404"}
        score={0}
        topScore={0}
      />
      <Header />
      <Main>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Main>
    </div>
  );
}

export default NoMatch;

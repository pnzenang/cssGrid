import { Link } from "react-router-dom";

import { styled } from "styled-components";
import Hero from "../pages/Hero";

const Navbar = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/hero">Hero</Link>
        </li>
        <li>
          <Link to="/card">Cards</Link>
        </li>
        <li>
          <Link to="/tile">Tiles</Link>
        </li>
        <li>
          <Link to="/layout">Layout</Link>
        </li>
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: var(--darkGrey);
  padding: 0 2rem;
  li {
    list-style: none;
  }
  a {
    text-transform: capitalize;
    display: block;
    padding: 1rem 0;
    color: var(--primaryColor);
    letter-spacing: var(--mainSpacing);
    transition: var(--mainTransition);
  }
  a:hover {
    color: var(--mainBlack);
  }
  @media screen and (min-width: 992px) {
    ul {
      max-width: 1170px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
    a {
      text-align: center;
    }
  }
`;
export default Navbar;

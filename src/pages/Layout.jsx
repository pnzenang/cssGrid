import { Link } from "react-router-dom";
import { styled } from "styled-components";
import {
  FaTwitter,
  FaFacebook,
  FaSquarespace,
  FaLinkedin,
} from "react-icons/fa";
const Layout = () => {
  return (
    <Wrapper>
      {/* header */}
      <main className="main">
        <header className="header">
          <h2>grid makes layout easy</h2>
        </header>
        <nav className="navbar">
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
        </nav>
        <section className="content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            molestias laborum repudiandae corrupti beatae quia accusantium
            vitae. Voluptatibus cupiditate a neque inventore aspernatur officiis
            perferendis, maxime tempore natus ut quo nesciunt accusantium
            eligendi magni exercitationem odit? Vitae alias earum cupiditate
            incidunt sed, ipsam laborum itaque odio et quas ab vero, adipisci
            totam fuga facilis amet modi nisi magnam blanditiis, fugiat maiores
            pariatur! Eligendi error dolores quis culpa? Voluptate aspernatur
            tempora reiciendis. Vero, corporis nobis. Laudantium.
          </p>
        </section>
        <section className="sidebar">
          <FaTwitter />
          <FaFacebook />
          <FaSquarespace />
          <FaLinkedin />
        </section>
        <div className="footer">
          <p>copyright &copy; all right reserved</p>
        </div>
      </main>
      <Link to="/" className="btn">
        Back to Home page
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .main {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto auto;
  }
  .header {
    background: var(--primaryColor);
    color: var(--mainWhite);
    text-align: center;
    padding: 0.5rem 0;
  }
  .navbar {
    background: var(--darkGrey);
  }
  .navbar li {
    list-style-type: none;
  }
  .navbar a {
    padding: 1rem;
    display: inline-block;
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
    font-size: 1.2rem;
    color: var(--mainBlack);
    transition: var(--mainTransition);
  }
  .navbar a:hover {
    color: var(--mainWhite);
  }
  .content {
    padding: 2rem;
  }
  .content p {
    font-size: 1rem;
  }
  .sidebar {
    background: var(--primaryColor);
    padding: 1rem 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    font-size: 2rem;
  }
  .footer {
    background: var(--mainBlack);
    color: var(--mainWhite);
    text-align: center;
    padding: 1rem 0;
  }
  .footer p {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 768px) {
    .navbar ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-items: center;
    }
  }
  @media screen and (min-width: 992px) {
    .main {
      grid-template-columns: 200px 1fr auto;
      grid-template-rows: auto 1fr auto;
      /* position: absolute; */
    }
    .header {
      grid-column: 1 / span 3;
      grid-row: 1 / span 1;
      position: sticky;
    }
    .navbar ul {
      grid-template-columns: 1fr;
      align-items: center;
      min-height: 100%;
    }
    .sidebar {
      grid-template-columns: 1fr;
      align-items: center;
      min-height: 100%;
      padding: 0.5rem;
      background: var(--darkGrey);
    }
    .footer {
      grid-column: 1 / span 3;
    }

    /* .main {
      grid-template-columns: [start] 200px[col-1-end] 1fr[col-2-end] 50px[end];
      grid-template-rows: [start] auto [row-1-end] 1fr[row-2-end] auto [end];
    }
    .header {
      grid-column: start/end;
      grid-row: start/row-1-end;
    } */
    /* .navbar {
      grid-column: start/col-1-end;
      grid-row: row-1-end/row-2-end;
    }
    .content {
      grid-column: col-1-end/col-2-end;
      grid-row: row-1-end/row-2-end;
    }
    .sidebar {
      grid-column: col-2-end/end;
      grid-row: row-1-end/row-2-end;
    }
    .footer {
      grid-column: start/end;
      grid-row: row-2-end/end;
    } */
  }
`;
export default Layout;

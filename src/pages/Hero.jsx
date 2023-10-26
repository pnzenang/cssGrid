import { styled } from "styled-components";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/image-2.jpeg";
const Hero = () => {
  return (
    <Wrapper>
      <header className="hero-header">
        <div className="hero-banner">
          <h1>welcome to grid</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum
            quis aspernatur deleniti accusantium magnam fugiat, delectus modi
            iusto, saepe similique nemo? Fuga, quidem repudiandae! Alias
            delectus illo in at?
          </p>
        </div>
      </header>
      <Link to="/" className="btn">
        Back to Home page
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .hero-header {
    min-height: 100vh;
    background: var(--primaryColor);
    color: var(--mainWhite);
    display: grid;
    justify-content: center;
    align-items: center;
  }
  .hero-banner {
    /* background: blue; */
    /* text-align: center; */
  }
  .hero-banner p {
    width: 80%;
    max-width: 560px;
    font-size: 1rem;
  }
  @media screen and (max-width: 600px) {
    .hero-banner {
      padding: 0 3rem;
    }
  }
  @media screen and (min-width: 768px) {
    .hero-header {
      background: linear-gradient(rgba(241, 80, 37, 0.75), rgba(0, 0, 0, 0.75)),
        url(${backgroundImage}) center/cover fixed no-repeat;
    }
  }
`;
export default Hero;

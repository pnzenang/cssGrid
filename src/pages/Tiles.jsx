import { Link } from "react-router-dom";
import { styled } from "styled-components";
import image1 from "../assets/images/image-1.jpeg";
import image2 from "../assets/images/image-2.jpeg";
import image3 from "../assets/images/image-3.jpeg";
import image4 from "../assets/images/image-4.jpeg";
import image5 from "../assets/images/image-1.jpeg";
import image6 from "../assets/images/image-2.jpeg";
import image7 from "../assets/images/image-3.jpeg";
import image8 from "../assets/images/image-4.jpeg";
import image9 from "../assets/images/image-1.jpeg";

const Tiles = () => {
  return (
    <Wrapper>
      <div className="title">
        <h1>tiles layout</h1>
      </div>
      <div className="tiles-center">
        <div className="tile tile-1">
          <img src={image1} alt="" />
        </div>
        <div className="tile tile-2">
          <img src={image2} alt="" />
        </div>
        <div className="tile tile-3">
          <img src={image3} alt="" />
        </div>
        <div className="tile tile-4">
          <img src={image4} alt="" />
        </div>
        <div className="tile tile-5">
          <img src={image5} alt="" />
        </div>
        <div className="tile-6">
          <img src={image6} alt="" />
        </div>
        <div className="tile tile-7">
          <img src={image7} alt="" />
        </div>
        <div className="tile tile-8">
          <img src={image8} alt="" />
        </div>
        <div className="tile tile-9">
          <img src={image9} alt="" />
        </div>
      </div>
      <Link to="/" className="btn">
        Back to Home page
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 4rem 0;
  .title {
    text-align: center;
  }
  img {
    height: 100%;
    object-fit: cover;
  }
  .tiles-center {
    width: 90vw;
    max-width: 1170px;
    margin: 2rem auto;
    display: grid;
    grid-row-gap: 2rem;
  }
  @media screen and (min-width: 768px) {
    .tiles-center {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .tiles-center {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 2rem;
    }
  }
  @media screen and (min-width: 1170px) {
    .tiles-center {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(5, 200px);
      grid-template-areas:
        "a a a b"
        "a a a c"
        "d d d d"
        "e f f f"
        "e g h i";
    }

    .tile-1 {
      grid-area: a;
    }
    .tile-2 {
      grid-area: b;
    }
    .tile-3 {
      grid-area: c;
    }
    .tile-4 {
      grid-area: d;
    }
    .tile-5 {
      grid-area: e;
    }
    .tile-6 {
      grid-area: f;
    }
    .tile-7 {
      grid-area: g;
    }
    .tile-8 {
      grid-area: h;
    }
    .tile-9 {
      grid-area: i;
    }
  }
`;
export default Tiles;

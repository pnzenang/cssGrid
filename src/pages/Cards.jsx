import { Link } from "react-router-dom";
import { styled } from "styled-components";
import SingleCard from "../components/SingleCard";
import cardData from "../utils/cardData";

const Cards = () => {
  return (
    <Wrapper>
      <div className="title">
        <h1>three column layout</h1>
      </div>
      <div className="cards-center">
        {cardData.map((data) => {
          const { id, cardImage, cardTitle, cardText } = data;
          return (
            <SingleCard
              key={id}
              image={cardImage}
              title={cardTitle}
              text={cardText}
            ></SingleCard>
          );
        })}
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
  .cards-center {
    width: 80vw;
    max-width: 1170px;
    margin: 2rem auto;
  }
  @media screen and (min-width: 768px) {
    .cards-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2rem;
    }
  }
  @media screen and (min-width: 1170px) {
    .cards-center {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 2rem;
    }
  }
`;
export default Cards;

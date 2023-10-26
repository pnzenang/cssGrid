import { styled } from "styled-components";
import {
  FaTwitter,
  FaFacebook,
  FaSquarespace,
  FaLinkedin,
} from "react-icons/fa";

styled;
const SingleCard = ({ image, title, text }) => {
  return (
    <Wrapper>
      <img src={image} alt="" />
      <div className="card-info">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="card-footer">
        <FaTwitter />
        <FaFacebook />
        <FaSquarespace />
        <FaLinkedin />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  border: 1px solid var(--darkGrey);
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;

  .card-info {
    padding: 1rem;
  }
  .card-footer {
    background: var(--darkGrey);
    padding: 0.5rem 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    color: var(--primaryColor);
  }
`;
export default SingleCard;

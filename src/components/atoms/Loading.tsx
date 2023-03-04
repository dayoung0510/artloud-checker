import styled, { keyframes } from "styled-components";

const Opacity = keyframes`
  from {opacity: 0.5;}
  to {opacity: 1;}
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(
    45deg,
    #01c9971c,
    #008ada16,
    #d701b015,
    #d3b3011a
  );
`;

const Text = styled.div`
  animation: ${Opacity} 0.4s infinite alternate;
  font-size: 7vw;
  font-weight: 900;
  mix-blend-mode: screen;
  color: transparent;
  font-style: italic;

  -webkit-text-stroke: 1px rgba(black, 0.5);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #ffffffd9;
  text-shadow: 8px 8px #e227027b, 20px 20px #000000;

  @media screen and (max-width: 500px) {
    font-size: 10vw;
  }
`;

const Block = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
`;

const Subtitle = styled.div`
  color: #ccc;
  -webkit-text-stroke: 0.5px black;
  font-style: italic;
  font-size: 0.8rem;
  position: fixed;
  bottom: 12.5vh;
  text-align: center;

  div {
    line-height: 1.4;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.4rem;
    -webkit-text-stroke: none;
  }
`;

const Loading = () => {
  return (
    <Container>
      <Block />
      <div>
        <Text>LOADING...</Text>
      </div>

      <Subtitle>
        <div>if my action do not change,</div>
        <div>then words become meaningless.</div>
      </Subtitle>

      <Block style={{ top: "auto", bottom: 0 }} />
    </Container>
  );
};

export default Loading;

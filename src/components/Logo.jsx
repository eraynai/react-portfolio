import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 273px;
  @media only screen and (max-width: 768px) {
    width: 100px;
  }
`;

const ElliRaynai = styled.h1`
  letter-spacing: 12.4px;
  text-transform: uppercase;
  font-size: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const WavyLine = styled.div`
  height: 10px;
  background: linear-gradient(
      45deg,
      transparent 7px,
      #001f3f 7px,
      #ddf4ff 8px,
      transparent 8px
    ),
    linear-gradient(
        135deg,
        transparent 7px,
        #001f3f 7px,
        #ddf4ff 8px,
        transparent 8px
      )
      10px 0;
  background-size: 20px 10px;
`;

const Elli = styled.span`
  font-weight: 700; // Bold
  text-shadow: 3px 1px 0px rgba(192, 192, 192, 0.3);
`;

const Raynai = styled.span`
  font-weight: 400; // Regular
  text-shadow: 3px 1px 0px rgba(192, 192, 192, 0.3);
`;

const ShopifyDeveloper = styled.h2`
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 3px 1px 0px rgba(192, 192, 192, 0.3);
  font-size: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <ElliRaynai>
        <Elli>Elli</Elli> <Raynai>Raynai</Raynai>
      </ElliRaynai>
      <WavyLine></WavyLine>
      <ShopifyDeveloper>Full Stack Developer</ShopifyDeveloper>
    </LogoContainer>
  );
};
export default Logo;

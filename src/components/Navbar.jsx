import styled from "styled-components";
import Logo from "./Logo";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    padding: 10px 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 26vw;
  @media only screen and (max-width: 1023px) {
    gap: 6vw;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.li`
  font-size: 20px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background: #da4ea2;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  margin-left: 5rem;
`;

const Icons = styled.div``;

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <Section>
      <Container>
        <Links>
          <Logo />
          <List>
            <ListItem>Home</ListItem>
            <ListItem onClick={() => scrollToSection("aboutSection")}>
              About
            </ListItem>
            <ListItem onClick={() => scrollToSection("workSection")}>
              Work
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Button onClick={() => scrollToSection("contactSection")}>
            Hire Me
          </Button>
        </Icons>
      </Container>
    </Section>
  );
};
export default Navbar;

import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state, actions }) => {
  const onChange = event => {
    if(event.target.value !== '') {
      actions.router.setUrl('?s=' + event.target.value)
    }
  }; 
  
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>Winfield Eats</Title>
        </StyledLink>
        <Search onChange={onChange} />
        <Description>Eating Wins in Winfield</Description>
        <MobileMenu />
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Search = styled.input`
  width: 33%; 
`; 

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  color: #0f0; 
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

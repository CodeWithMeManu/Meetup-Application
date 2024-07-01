import { NotFoundContainer, NotFoundHeading, NotFoundPara, Img } from "./style";

const NotFound = () => (
  <NotFoundContainer>
    <Img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page not Found</NotFoundHeading>
    <NotFoundPara>
      We are Sorry, the page you registered could not be found.
    </NotFoundPara>
  </NotFoundContainer>
);
export default NotFound;

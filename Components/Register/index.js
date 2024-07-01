import Header from "../Header";

import RegisterContext from "../Context/RegisterContext";

import {
  RegisterContainer,
  RegisterImg,
  Form,
  RegisterHeading,
  InputContainer,
  Label,
  Input,
  Select,
  RegisterButton,
  ErrorMsg,
} from "./style";

const topicList = [
  {
    id: "ARTS_AND_CULTURE",
    displayText: "carrer and Business",
  },
  {
    id: "CAREER_AND-BUSINESS",
    displayText: "carrer and Business",
  },
  {
    id: "EDUCATION_AND_LEARNING",
    displayText: "education and learning",
  },
  {
    id: "FASHION_AND_BEAUTY",
    displayText: "fashion and Learning",
  },
  {
    id: "GAMES",
    displayText: "games",
  },
];
const Register = (props) => {
  <RegisterContext.Consumer>
    {(value) => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value;

      const submitRegistration = (event) => {
        event.preventDefault();

        if (name !== "" && topic !== "") {
          const { history } = props;
          history.replace("/");
          registerName();
        } else {
          updateError();
        }
      };

      const onChangeName = (event) => {
        changeName(event.target.value);
      };
      const onChangeTopic = (event) => {
        changeTopic(event.target.value);
      };

      return (
        <div>
          <Header />
          <RegisterContainer>
            <RegisterImg
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <Form onSubmit={submitRegistration}>
              <RegisterHeading>Let us Join</RegisterHeading>
              <InputContainer>
                <Label html for="name">
                  Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  type="text"
                  onChange={onChangeName}
                  placeholder="your Name"
                />
              </InputContainer>
              <InputContainer>
                <Label html for="topic">
                  Topics
                </Label>
                <Select
                  id="topic"
                  value={topic}
                  type="text"
                  onChange={onChangeTopic}
                >
                  {topicList.map((each) => (
                    <option value={each.id} key={each.id}>
                      {each.displayText}
                    </option>
                  ))}
                </Select>
              </InputContainer>
              <RegisterButton type="submit">Register Now</RegisterButton>
              {showError === true ? (
                <ErrorMsg>Please enter your name</ErrorMsg>
              ) : (
                ""
              )}
            </Form>
          </RegisterContainer>
        </div>
      );
    }}
  </RegisterContext.Consumer>;
};

export default Register;

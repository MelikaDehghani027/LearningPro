import React, {Component} from 'react';
import './semantic/dist/semantic.rtl.min.css';
import {Button, Form, Checkbox, Label} from 'semantic-ui-react';
import styled from 'styled-components';
import Login from "./Components/Forms/Login";
import Panel from "./Components/Forms/Panel";
import RelatedQuizzes from "./Components/IntroductionQuiz/RelatedQuizzes";
import HelpComps from "./Components/IntroductionQuiz/HelpComps";
import Register from "./Components/Forms/Register";
//import "./Components/Login_Page/index.html"

const CustomButton = styled(Button)`
&&& {
  color: #126bff;
  padding: 20px;
  margin: 200px;
}
`;



{/*<Login>*/}
    {/*<label> فرم ورود </label>*/}
    {/*<input id="email" placeholder='ایمل خود را تایپ کنید...' /><br/>*/}
    {/*<input id="pass"  placeholder='رمز خود را تایپ کنید...' />*/}
{/*</Login>*/}


class App extends Component {

    render() {
        return (
         <Login/>

    )
    }
}
export default App;

import React, {Component} from 'react';
import {Button, Container, Form, FormField, Segment, Label, Input, Grid, Icon, Flag, Dropdown} from "semantic-ui-react";
import styled from 'styled-components';
import Checkbox from "antd/es/checkbox/Checkbox";
import Panel from './Panel'
//import ReactFlagsSelect from 'react-flags-select';
//
// //import css module
// import 'react-flags-select/css/react-flags-select.css';
//
// //OR import sass module
// import 'react-flags-select/scss/react-flags-select.scss';
//

const CustomForm = styled(Form)`
 &&& { 
 .ui.labeled.input:not([class*="corner labeled"]) .label:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
 .ui.labeled.input:not([class*="corner labeled"]) .label:first-child + input {
    border-radius: 5px;
    border:1px solid #F0F1F1 ;
}
.ui.labeled.input:not([class*="corner labeled"]) .label:first-child + input {
padding-right: 40px !important;
}

   width: 300px;
   padding-top: 40px;
   padding-left: 20px;
   padding-right: 20px;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   box-shadow: 1px 0px 14px 8px #F0F1F1;
   text-align: center;
   padding-block-end: 90px;
    .cardTitle{
    color:  rgb(111, 112, 113);
    font-weight: normal;
    }
    
    button{
    position: absolute;
    z-index: 1;
    //top: 30px;
    bottom:-30px;
    }
    
    .formText{
    font-size: 10px;
    a{
    padding-right: 20px;
    padding-left: 20px;
    color: #c3c5c6;
    }
    }
    
    .FormInput .input input{
      border: 1px solid #F0F1F1 !important;
    }
    
    .FormInput{
     .ui.input.pass{
      width: 100px !important;
      
    }
    display: flex;
    
    align-items: center;
    
    justify-content: center;
    
    position: inherit;
    .input{
    input:focus::placeholder {
     color: transparent;
    }
    margin-top: 20px;
    bordr:1px solid !important;
    width: 200px;
    .label{
     display: flex;
     justify-content: center;
     align-items: center;
     width: 30px;
     color: black !important;
     height: 3.5em !important;;
     right: 0px;
     z-index: 100 !important;
     top:0 !important;
     background-color:#F1F1F2;
      
    }
    }
    
    .label{
    position: absolute;
    background: white;
    border: 1px solid #f1f1f2;
    display: flex;
    text-align:center;
    justify-content: center;
    align-items: center;
    width: -moz-max-content;
    border-radius: 5px;
    background-color: white;
    z-index: 100;
    top: .5em;
    height:2.5em;
    }
    
    }
    .td-input{
      margin-top:20px;
      margin-right:-252px;
 // justify-content: right;
//   align-items: first;
      }
    
     }`

const data = {
    email: 'ee',
    pass: 'pp',
};


class Register extends Component {
    constructor(props) {
        super(props)
    }

    static nn() {
        return (
            <Panel/>
        )

    }

    // handleClick = () => {
    //     var e = document.getElementById("email").value;
    //     var p = document.getElementById("pass").value;
    //     if (data.email === e && data.pass === p) {
    //         // document.getElementById("demo").innerHTML = e + "     " +p;
    //         // document.getElementById("root").appendChild(Panel);
    //
    //         return (
    //             document.getElementById("root").innerHTML = Login.nn()
    //             //console.log("kbdcb")
    //         )
    //     }
    // };

    render() {

        return (
            <Container>
                <CustomForm>
                    {this.props.children}
                    <input type="checkbox"/>
                    <p id="demo"/>
                    <Button type='submit' >
                        <a href="./Login.js">ورود</a>
                    </Button>
                </CustomForm>

            </Container>
        )
    }
}

export default Register;


import {Component} from "react";
import {Button} from "semantic-ui-react";
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
&&& {


.card{
    flex-direction: row;
    box-shadow: 0px 0px 25px -5px grey;
    margin-bottom:20px;
    margin-top:30px;
}

.card-style{
position: relative;
    height:335px;
    width:450px;
    background-color:#F1F1F2;
    padding:10px;
}

.card-text{
    padding :10px;
    display: flex;
    color:#52544E;
    font-size:12px;
}
.card-exam{
    display: inline-block;
    height:15 px;
    width:230px;
    background-color:#F1F1F2;
    border-radius:5px;
    box-shadow: 0px 0px 28px -3px rgba(166,171,173,1);
    text-align: right;
    margin-right:30px;
    margin-bottom:30px;
    padding:20px;
}
 .cardWrapper2 {
    //grid-column-gap:400px;
    //grid-template-columns: 150px 150px 150px;
    //grid-row-gap: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around ;
  }
}

`;

class SingleCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainContainer>

                <div className="card">
                    <div className="card-style">
                        <div className="card-text">
                            <div className="cardWrapper2">
                            <div className="card-exam">
                                <p> توضیحات آیتم</p>
                            </div>
                            <div className="card-exam">
                                <p> توضیحات آیتم</p>
                            </div>
                            <div className="card-exam">
                                <p> توضیحات آیتم</p>
                            </div>

                            </div>
                    </div>
                </div>
                </div>
            </MainContainer>
        )
    }
}

export default SingleCard
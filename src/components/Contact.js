import React, { Component } from "react";
import styled from "styled-components";
import { Section } from "./../Common/StyledComponents";

import bg from "../images/bg-3.jpg";

class Contact extends Component {
  render() {
    return (
      <Section className={this.props.className}>
        <div className="content">
          <div className="header">
            <p className="title">Contact</p>
            <p className="desc">
              Nunc diam leo, fringilla vulputate elit lobortis, consectetur
              vestibulum quam. Sed id felis ligula. In euismod libero at magna
              dapibus, in rutrum velit lacinia. Etiam a mi quis arcu varius
              condimentum.
            </p>
          </div>

          <form className="form">
            <div className="input-col-1">
              <input placeholder="Name" />
              <input placeholder="Email" />
              <input placeholder="Subject" />
            </div>
            <div className="input-col-2">
              <textarea
                className="input-message"
                placeholder="Your message here..."
              />
              <div className="action-container">
                <a className="action-button">Send</a>
              </div>
            </div>
          </form>
        </div>
      </Section>
    );
  }
}

export default styled(Contact)`
  background: url(${bg});
  display: flex;
  justify-content: center;
  align-items: center;

  & .content {
    width: 60vw;
    box-sizing: border-box;
  }

  & .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: white;

    & .title {
      text-shadow: 2px 2px gray;
      font-size: 40px;
      margin-bottom: 10px;
    }

    & .desc {
      padding: 20px 30px;
      font-size: 16px;
    }
  }

  & .form {
    display: flex;
    justify-content: space-between;
    justify-content: stretch;
    width: 100%;
    box-sizing: border-box;
  }

  & .form input,
  .form textarea,
  p.desc {
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 4px;
    border-style: none;
    background: rgba(242, 242, 242, 0.4);
    color: rgba(0, 0, 0, 0.6);
  }

  & input::placeholder,
  textarea::placeholder {
    color: rgba(0, 0, 0, 0.9);
  }

  & .input-col-1 {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  & .input-col-2 {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: 20px;
  }


  textarea {
    flex: 1;
    width: 100%;
  }

  .action-container {
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  .action-button {
    cursor: pointer;
    position: absolute;
    display: inline-block;
    color: white;
    border-radius: 10px;
    border: 2px solid white;
    background: black;
    padding: 10px 30px;
  }
`;

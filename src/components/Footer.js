import React, { Component } from "react";

import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="section1">
          <h1>Use it free!</h1>
          <p class="qoute">
            “Conquer is free Bootstrap template from templatemo website. No
            backlink is required to use this layout.”
          </p>
        </div>
        <hr />
        <p className="copyright">
          Copyright © 2084 Your Company Name | Design: <a href="http://www.templatemo.com/">template mo</a> 
        </p>
      </div>
    );
  }
}

export default styled(Footer)`
  padding: 20px;
  color: #666;

  .section1 {
    margin: auto;
    width: 40vw;

    h1 {
      font-size: 34px;
      font-weight: 400;
    }

    & p,
    h1 {
      margin-bottom: 30px;
      font-style: italic;
      line-height: 2;
    }
  }

  p.qoute {
    color: #999;
  }

  hr {
    margin: 20px auto 20px auto;
    border-top: 1px solid #eee;
  }

  .section1 {
    margin-bottom: 40px;
  }

  .copyright {
    font-size: 12px;
    padding: 10px;
  }
`;

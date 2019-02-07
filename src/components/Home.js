import styled from 'styled-components';
import React from 'react';
import bg from '../images/bg-1.jpg';
import { Section } from '../Common/StyledComponents';

const Home = (({ className, title, desc }) => (
    <Section className={className} >
        <p className="title">{title}</p>
        <p className="description">{desc}</p>
    </Section>
));


export default styled(Home)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  background: url(${bg});
  background-repeat:no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100vw 100vh;

  color: white;

  & .title{
    text-transform: uppercase;
    font-size: 70px;
    text-shadow: 2px 2px black;
    margin-bottom: 10px;
  }

  & .description {
    font-size: 25px;
  }
`

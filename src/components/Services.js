import React from 'react';
import styled from 'styled-components';
import { Section } from '../Common/StyledComponents';
import bg from '../images/bg-2.jpg';
import Card from '../Common/Card';
import one from '../images/4-1.jpg';
import two from '../images/4-2.jpg';
import three from '../images/4-3.jpg';
import four from '../images/4-4.jpg';

const Services = (props) => (
    <Section className={props.className}>
        <div className="header">
            <p className="title">Our Services</p>
            <p className="desc">Nunc diam leo, fringilla vulputate elit lobortis, consectetur vestibulum quam. Sed id
    felis ligula. In euismod libero at magna dapibus, in rutrum velit lacinia.
Etiam a mi quis arcu varius condimentum.</p>
        </div>
        <div className="services">
        <Card
                image={one}
                title="Two Column Left Side"
                titlePosition="center"
                desc="Ut ac odio scelerisque ante ornare commodo. 
                Sed faucibus dui libero, in tincidunt purus pretium quis. Fusce posuere egestas enim eu viverra."
                actionText="Read More"
                actionPosition="center"
                onActionClick={()=>alert('Clicked')}
            />
            <Card
                image={two}

                title="Two Column Left Side"
                titlePosition="center"
                desc="Ut ac odio scelerisque ante ornare commodo. 
                Sed faucibus dui libero, in tincidunt purus pretium quis. Fusce posuere egestas enim eu viverra."
                actionText="Read More"
                actionPosition="center"
                onActionClick={()=>alert('Clicked')}
            />
            <Card
                image={three}

                title="Two Column Left Side"
                titlePosition="center"
                desc="Ut ac odio scelerisque ante ornare commodo. 
                Sed faucibus dui libero, in tincidunt purus pretium quis. Fusce posuere egestas enim eu viverra."
                actionText="Read More"
                actionPosition="center"
                onActionClick={()=>alert('Clicked')}
            />
            <Card
                image={four}

                title="Two Column Left Side"
                titlePosition="center"
                desc="Ut ac odio scelerisque ante ornare commodo. 
                Sed faucibus dui libero, in tincidunt purus pretium quis. Fusce posuere egestas enim eu viverra."
                actionText="Read More"
                actionPosition="center"
                onActionClick={()=>alert('Clicked')}
            />
        </div>
    </Section>
)


export default styled(Services)`
    background: url(${bg});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    & .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        line-height: 1.8;
        color: white;
        text-shadow: 2px 2px gray;

        & .title {
            font-size: 40px;
            margin-bottom: 10px;
        }

        & .desc {
            width: 50vw;
            font-size: 18px;
        }
    }

    & .services {
        background: white;
        display: flex;
        padding: 40px 80px;
        
    }
`;
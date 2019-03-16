import React from 'react';
import styled from 'styled-components';
import { Section } from '../Common/StyledComponents';
import bg from '../images/bg-2.jpg';
import Card from '../Common/Card';
import one from '../images/4-1.jpg';
import two from '../images/4-2.jpg';
import three from '../images/4-3.jpg';
import four from '../images/4-4.jpg';
import five from '../images/4-5.jpg';

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
                style={{width:"21.5%",textAlign: "center",color: "#757575"}}
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
                style={{width:"21.5%",textAlign: "center",color: "#757575"}}
            />
            <Card
                image={three}
                title="Two Column Left Side"
                titlePosition="center"
                desc="Ut ac odio scelerisque ante ornare commodo. 
                Sed faucibus dui libero, in tincidunt purus pretium quis. Fusce posuere egestas enim eu viverra."
                style={{width:"21.5%",textAlign: "center",color: "#757575"}}
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
                style={{width:"21.5%",textAlign: "center",color: "#757575"}}
            />
              <Card
                image={five}
                title="One Big Column"
                titlePosition="center"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget eros maximus, ut cursus sem euismod. Donec iaculis tristique odio at consectetur. Nullam dignissim varius suscipit. Sed in leo sit amet velit finibus pretium. Vivamus dictum nisi ac fermentum interdum. Vestibulum vel mauris at erat mattis accumsan et ac lorem. Cras non venenatis orci, sed tincidunt massa. Duis nisl lectus, auctor eu sodales at, dignissim eu orci. Sed vitae venenatis magna, in blandit metus. Praesent volutpat cursus rhoncus. Aenean arcu diam, suscipit ac neque in, sollicitudin convallis orci.

                Fusce eu porta massa, sed tincidunt turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus a urna tellus. Integer pharetra vitae nisi et lacinia. Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque quis, maximus eget nisi."
                actionText="Read More"
                actionPosition="left"
                onActionClick={()=>alert('Clicked')}
                style={{width:"100%",textAlign: "left",color: "#757575"}}
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

        & .title {
            text-shadow: 2px 2px gray;
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
        flex-wrap: wrap;
        padding: 40px 80px;
        
    }
`;
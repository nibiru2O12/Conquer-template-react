import React from 'react';
import styled from 'styled-components';
import { Section } from '../Common/StyledComponents';
import Card from '../Common/Card';
import one from '../images/1-1.jpg'
import two from '../images/1-2.jpg'
import three from '../images/1-3.jpg'
import four from '../images/2-1.jpg'
import five from '../images/2-2.jpg'

const About = ({className}) => (
    <Section className={className}>
       <div className="section1">
       <Card
            image={one}
            title="Bootstrap v3.3.6"
            desc="Morbi sagittis justo a velit placerat ullamcorper quis 
                quis velit. Sed convallis at risus ullamcorper auctor. 
                Praesent quis velit neque. Quisque semper porta nisi 
                vitae suscipit. Duis lectus magna, ornare ac scelerisque."
            actionText="Button Green"
            onActionClick={()=>alert('Clicked')}
            actionType="primary"
        />
        <Card
            image={two}
            title="Responsive Design"
            desc="Morbi sagittis justo a velit placerat ullamcorper quis 
                quis velit. Sed convallis at risus ullamcorper auctor. 
                Praesent quis velit neque. Quisque semper porta nisi 
                vitae suscipit. Duis lectus magna, ornare ac scelerisque."
            actionText="Button Green"
            onActionClick={()=>alert('Clicked')}
            actionType="secondary"
        />
        <Card
            image={three}
            title="Parallax Layout"
            desc="Morbi sagittis justo a velit placerat ullamcorper quis 
                quis velit. Sed convallis at risus ullamcorper auctor. 
                Praesent quis velit neque. Quisque semper porta nisi 
                vitae suscipit. Duis lectus magna, ornare ac scelerisque."
            actionText="Button Green"
            onActionClick={()=>alert('Clicked')}
            actionType="danger"
        />
        
       </div>

       <div className="section2"> 
       <Card
                image={four}
                title="Two Column Left Side"
                titlePosition="center"
                desc="MLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget 
                eros maximus, ut cursus sem euismod. Donec iaculis tristique odio at consectetur. 
                Nullam dignissim varius suscipit. Sed in leo sit amet velit finibus pretium.

                Vestibulum vel mauris at erat mattis accumsan et ac lorem. Cras non venenatis orci, 
                sed tincidunt massa. Duis nisl lectus, auctor eu sodales at, dignissim eu orci. 
                Sed vitae venenatis magna, in blandit metus."
                style={{width:"46.66%",textAlign: "center",color: "#757575"}}
            />
            <Card
                image={five}
                title="Two Column Left Side"
                titlePosition="center"
                desc="MLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget 
                eros maximus, ut cursus sem euismod. Donec iaculis tristique odio at consectetur. 
                Nullam dignissim varius suscipit. Sed in leo sit amet velit finibus pretium.

                Vestibulum vel mauris at erat mattis accumsan et ac lorem. Cras non venenatis orci, 
                sed tincidunt massa. Duis nisl lectus, auctor eu sodales at, dignissim eu orci. 
                Sed vitae venenatis magna, in blandit metus."
                actionText="Read More"
                actionPosition="right"
                onActionClick={()=>alert('Clicked')}
                style={{width:"46.66%",textAlign: "center",color: "#757575"}}
            />
       </div>
    </Section>
);


export default styled(About)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 90vw;
    margin: auto;

    & .section1{
        display: flex;
        justify-content: center;
        flex-direction: row;
        
        /* wrap on small devices */
        /* flex-wrap: wrap;  */
    }


    & .section2{
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        flex-wrap:wrap;
    }

    `;
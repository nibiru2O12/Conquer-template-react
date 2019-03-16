import React, { Component } from 'react'
import styled from 'styled-components';
import { Section } from './../Common/StyledComponents';

import bg from '../images/4-4.jpg';


class Contact extends Component{
    render(){
        return( 
            <Section>
                <div className="header">
            <p className="title">Our Services</p>
                    <p className="desc">Nunc diam leo, fringilla vulputate elit lobortis, consectetur vestibulum quam. Sed id
                    felis ligula. In euismod libero at magna dapibus, in rutrum velit lacinia.
                Etiam a mi quis arcu varius condimentum.</p>
                </div>

            </Section>
        )
    }
}

export default styled(Contact)`
    background: url(${bg});
`;
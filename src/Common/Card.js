import React from 'react';
import styled from 'styled-components';

const Card = ({ 
        className, 
        title, desc, 
        actionText, 
        onActionClick, 
        image, 
        actionType,
        style,
        titlePosition,
        actionPosition
     }) => (
    <div className={className} style={style}>
        {image && <img src={image} />}
        <div className="content">
            <h3>{title}</h3>
            <p>{desc}</p>
            {actionText && <a href="" onClick={onActionClick}>{actionText}</a>}
        </div>
    </div>
)

const Styled = styled(Card)`    
    width: 30%;
    box-sizing: border-box;
    line-height: 1.5;
    background: #F2F2F2;
    margin: 20px;

    & img {
        width: 100%;
    }

    & .content{
        padding: 25px;
        text-align: left;
        font-size: 16px;
        & h3{
            margin-bottom: 10px;
            text-align: ${({titlePosition})=>titlePosition};
            ${(props)=>{
                switch(props.actionType){
                    case "primary":
                        return `color: green`;
                    case "secondary":
                        return `color: blue`
                    case "danger":
                        return `color: red`;
                    default:
                        return `color: gray`
                }
            }}; 
        }

        a {
            display: block;
            text-decoration: none;
            margin: ${({actionPosition})=>{
                switch(actionPosition){
                    case "left":
                        return `30px auto 0 auto;`;
                    case "right":
                        return `30px 0 auto auto;`;
                    default:
                        return `30px auto auto auto;`;
                }
            }}
            width: 150px;
            text-align: center;
            padding: 10px 15px;
            text-align: center;
            ${(props)=>{
                switch(props.actionType){
                    case "primary":
                        return `background: green`;
                    case "secondary":
                        return `background: blue`
                    case "danger":
                        return `background: red`;
                    default:
                        return `background: gray`
                }
            }}; 
            color: white;
            border-radius: 5px;
        }
    }
`;

export default Styled;

import React from 'react';
import styled from 'styled-components';

const theme = {
    primary: "#1565C0",
    secondary: "#2E7D32",
    danger: "#c62828",
    warning: "#FF6F00",
    default: "#546E7A"
}

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
            text-align: ${({ titlePosition }) => titlePosition};
            ${(props) => {
        switch (props.actionType) {
            case "primary":
                return `color: ${theme.primary}`;
            case "secondary":
                return `color: ${theme.secondary}`
            case "danger":
                return `color: ${theme.danger}`;
            default:
                return `color: ${theme.default}`
        }
    }}; 
        }

        a {
            display: block;
            text-decoration: none;
            margin: ${({ actionPosition }) => {
                switch (actionPosition) {
                    case "left":
                        return `30px auto 0 auto;`;
                    case "right":
                        return `30px 0 auto auto;`;
                    default:
                        return `30px auto auto auto;`;
                }
            }};
            color: white;
            width: 150px;
            text-align: center;
            padding: 10px 15px;
            text-align: center;
            ${(props) => {
                switch (props.actionType) {
                    case "primary":
                        return `background: ${theme.primary}`;
                    case "secondary":
                        return `background: ${theme.secondary}`
                    case "danger":
                        return `background: ${theme.danger}`;
                    default:
                        return `background: white; color: ${theme.default}; border: 1px solid ${theme.default}`
                }
            }}; 
            border-radius: 5px;
        }
        & a:hover{
            background: #E0E0E0;
        }
    }
`;

export default Styled;

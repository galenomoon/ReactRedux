import React from "react";
import "./Card.css";

export default (props) => {
    const cardStyle = {
        backgroundColor: props.color || "#F00",
        borderColor: props.color || "#F00",
    };
    return (
        <div className="card" style={cardStyle}>
            <div className="header" style={cardStyle}>
                <span className="title">
                    {props.title}
                </span>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
};

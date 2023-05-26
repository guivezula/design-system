import React from "react";
import "./Card.scss";
import { Shape } from "../Shape/Shape";
import { Header } from "../Header/Header";
import { Subtitle } from "../Subtitle/Subtitle";
import { Paragraph } from "../Paragraph/Paragraph";
import { Button } from "../Button/Button";

export interface CardProps {
  heading: string;
  subtitle: string;
  paragraph: string;
  buttonLabel: string;
}

export const Card = ({
  heading,
  subtitle,
  paragraph,
  buttonLabel,
}: CardProps) => {
  return (
    <Shape>
        <div className="spacing-heading">
            <Header content={heading} />
        </div>
        <div className="spacing-subtitle">
            <Subtitle content={subtitle} />
        </div>
        <div className="spacing-paragraph">
            <Paragraph content={paragraph} />
        </div>
        <Button label={buttonLabel} />
    </Shape>
  );
};

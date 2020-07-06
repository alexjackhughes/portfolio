import React from "react";

export interface Icon {
  icon: string;
  heading: string;
  title: string;
  color: string;
}

interface Props {
  blurb: Icon;
}

const Blurb: React.FC<Props> = ({ blurb: { icon, color, heading, title } }) => (
  <div className="level-item has-text-centered has-transparency-animation">
    <div>
      <span className={`icon fad ${icon} fa-3x is-large ${color}`} />
      <h2 className="title has-text-grey has-margin-top-medium">{title}</h2>
      <p className="heading has-text-grey">{heading}</p>
    </div>
  </div>
);

export default Blurb;

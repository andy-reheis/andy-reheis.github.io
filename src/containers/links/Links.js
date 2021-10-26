import React from "react";
import "./Links.css";
import LinkCard from "../../components/links/LinkCard";
import { linksSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Links() {
  // Currently I dont want to show this section
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="links">
      <div className="link-header">
        <h1 className="link-header-title">{linksSection.title}</h1>
        <p className="subTitle link-header-subtitle">{linksSection.subtitle}</p>
        <div className="link-cards-div">
          {linksSection.links.map(link => {
            return (
              <LinkCard
                linkDetails={{
                  title: link.title,
                  subtitle: link.subtitle,
                  slides_url: link.slides_url,
                  event_url: link.event_url,
                  image: link.image,
                  buttonName: link.buttonName
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
    </Fade>
  );
}

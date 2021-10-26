import React from "react";
import "./LinkCard.css";

export default function LinkCard({linkDetails}) {
  return (
    <div>
      <div class="container">
        <div class="rectangle">
          <div class="diagonal-fill"></div>
          <div class="link-card-title">{linkDetails.title}</div>
          <p className="link-card-subtitle">{linkDetails.subtitle}</p>

          <div className="card-footer-button-div">
            <a href={linkDetails.slides_url} target="_" class="link-button">
              {linkDetails.buttonName}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

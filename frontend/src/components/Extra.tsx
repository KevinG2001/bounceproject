import React from "react";
import Styles from "../styles/card.module.css";

interface Country {
  startOfweek: string;
  fifa: string;
  languages: Record<string, string>;
  // Define other properties if available
}

interface ExtraProps {
  data: Country[];
}

const Extra: React.FC<ExtraProps> = (props) => {
  const { data } = props;

  return (
    <>
      <div className={Styles.innerContainer}>
        <div className={Styles.cardTitle}>Extra</div>
        {data.map((country: Country, index: number) => (
          <div key={index}>
            <div>Start of week: {country.startOfweek || "N/A"}</div>
            <div>FIFA: {country.fifa || "N/A"}</div>
            <div>
              Languages:
              {Object.entries(country.languages || {}).map(
                ([code, languageName]) => (
                  <span key={code}>
                    <div>{languageName}</div>
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Extra;

import Styles from "../styles/card.module.css";

const Extra = (props: any) => {
  const { data } = props;

  return (
    <>
      <div className={Styles.innerContainer}>
        <div className={Styles.cardTitle}>Extra</div>
        {data.map((country: any, index: number) => (
          <div key={index}>
            <div>Start of week: {country.startOfweek}</div>
            <div>FIFA: {country.fifa}</div>
            <div>
              Languages:
              {Object.entries(country.languages).map(([code, languageName]) => (
                <span key={code}>
                  <div>{languageName}</div>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Extra;

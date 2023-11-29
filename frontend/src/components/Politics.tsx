import Styles from "../styles/card.module.css";

const Politics = (props: any) => {
  const { data } = props;

  const displayBoolean = (value: any) => {
    return value ? "Yes" : "No";
  };
  return (
    <>
      <div className={Styles.innerContainer}>
        <div className={Styles.cardTitle}>Politics</div>
        {data.map((country: any) => (
          <>
            <div>
              Country Independant: {displayBoolean(country.independent)}
            </div>
            <div>UN Member: {displayBoolean(country.unMember)}</div>
          </>
        ))}
      </div>
    </>
  );
};

export default Politics;

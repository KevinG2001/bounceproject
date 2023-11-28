const Extra = (props: any) => {
  const { data } = props;

  return (
    <>
      <div>
        <h1>Extra</h1>
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

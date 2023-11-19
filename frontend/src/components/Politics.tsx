import React from "react";

const Politics = (props: any) => {
  const { data } = props;

  const displayBoolean = (value: any) => {
    return value ? "Yes" : "No";
  };
  return (
    <>
      <div>
        <h1>Politics</h1>
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

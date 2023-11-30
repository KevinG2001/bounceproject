// types.ts

// types.ts

export interface Country {
  idd: {
    suffixes: string;
    // Other properties related to idd if available
  };
  name: {
    common: string;
    // Other properties related to name if available
  };
  flags: {
    png: string;
    // Other properties related to flags if available
  };
  startOfweek: string; // Example property
  fifa: string; // Example property
  languages: Record<string, string>; // Example property
  capital: string;
  continents: string;
  latlng: number[];
  borders: string[];
}

export interface CountryInfoProps {
  countryInfo: Country[];
}

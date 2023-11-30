export interface Country {
  idd: {
    suffixes: string;
  };
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  startOfweek: string;
  fifa: string;
  languages: Record<string, string>;
  capital: string;
  continents: string;
  latlng: number[];
  borders: string[];
  id: number;
}

export interface CountryInfoProps {
  countryInfo: Country[];
}

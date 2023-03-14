import { useState } from "react";
import { YMaps, Map, Placemark  , FullscreenControl} from "react-yandex-maps";

enum Option {
  Restaurant = "rest",
  Manufacturer = "manuf",
}

type Location = [number, number];

interface Business {
  name: string;
  location: Location;
}

const RESTAURANTS: Business[] = [
  {
    name: "Sariq Bola",
    location: [41.344821, 69.204804],
  },
  {
    name: "Nihol",
    location: [39.904349, 66.257890],
  },
  {
    name: "Khan Ahmad",
    location: [32.719379, 70.757196],
  },
  {
    name: "Appex Pizza",
    location: [41.367812, 69.285348],
  },
  {
    name : "Sashlik uz" , 
    location : [39.674932, 66.971930]
  } , 
  {
    name : "Karadeniz" , 
    location : [41.272833, 69.240262]
  }
];

const MANUFACTURERS: Business[] = [
  {
    name: "Siyob Ferma",
    location: [39.628172, 67.071268],
  },
  {
    name: "Shashlik UZ",
    location: [39.660551, 66.946468],
  },
  {
    name: "Agro Bravo",
    location: [39.648688, 66.923692],
  },
  
];

const Loc = () => {
  const [selectedOption, setSelectedOption] = useState<Option>(
    Option.Restaurant
  );
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(
    null
  );

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value as Option);
  };

  const handleBusinessClick = (business: Business) => {
    setSelectedBusiness(business);
  };

  const businesses =
    selectedOption === Option.Restaurant ? RESTAURANTS : MANUFACTURERS;

  return (
    <div>
      <label>
        Select an option:
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value={Option.Restaurant}>Restaurants</option>
          <option value={Option.Manufacturer}>Manufacturers</option>
        </select>
      </label>

      <YMaps>
        <Map
          state={{ center: [41.344821, 69.204804], zoom: 10 }}
          width="100%"
          height="400px"
        >
          <FullscreenControl
            options={{
              float: "right",
            }}
          />

          {businesses.map((business) => (
            <Placemark
              key={business.name}
              geometry={business.location}
              options={{ iconColor: "#ff0000" }}
              onClick={() => handleBusinessClick(business)}
            />
          ))}

          {selectedBusiness && (
            <Placemark
              geometry={selectedBusiness.location}
              options={{ iconColor: "#0000ff" , zoom:15 }}
            />
          )}
        </Map>
      </YMaps>

      {selectedBusiness && <div>{selectedBusiness.name}</div>}
    </div>
  );
};
export default Loc;

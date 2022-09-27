import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList() {
  return (
    <div>
      {countries.map((element) => {
        return (
          <div key={element.alpha2Code}>
            <Link to={`${element.alpha2Code}`}>{element.name.common}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;

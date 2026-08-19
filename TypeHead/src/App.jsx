import { useState } from "react";
import "./App.css";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cote dIvoire",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
]


function App() {
  const [input, setInput] = useState("");
  const [selected , setSelected] = useState(-1);


  
  
  const suggestion = countries.filter((country) => country.toLowerCase().startsWith(input.toLowerCase())).slice(0, 5);
  suggestion.sort();
  console.log(suggestion);
  
  const handleSuggstionClick = (country) =>{
      setInput(country);
      setSelected(-1);
  }

  const handleOnChange= (e) => {
      setInput(e.target.value);
      setSelected(-1);
  }

  const handleOnKey = (e) => {
    if(!suggestion.length || !input) return;

    if(e.key ==="ArrowDown"){
      e.preventDefault()
      
        setSelected((prev) => (
          prev === -1 ? 0 : (prev + 1) % suggestion.length 
        ))
    }
    if(e.key ==="ArrowUp"){
      e.preventDefault()
      
        setSelected((prev) => (
          prev <= 0 ? suggestion.length-1 : (prev - 1) 
        ))
    }

    if(e.key === "Enter"){
        if(selected !== -1){
          setInput(suggestion[selected]);
          setSelected(-1);
        }
    }

    if(e.key === "Escape"){
      setSelected(-1);
    }
  }

  return (
    <div className="w-full h-screen bg-gray-950 text-white">
      <div className="border-b p-3 flex justify-center">
        TypeHead (offline)
      </div>

      <div className="w-full flex justify-center">
        <div className="relative w-100 mt-10">
          <input
            type="search"
            value={input}
            onChange={(e) => handleOnChange(e)}
            onKeyDown={handleOnKey}
            className="border w-full rounded-lg p-2 pr-10"
            placeholder="Enter Country Name"
          />

          {input && suggestion.length > 0 && (
            <div className="absolute w-full border">
                <div>{suggestion.map(((country , index) => (
                  <div 
                  onClick={() => handleSuggstionClick(country)}
                  className={`border p-2 te ${selected === index ? "bg-gray-700" : "bg-gray-900"}`}>{country}</div>
                )))}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown"; // hook for replaceing manually created selects

const SearchParams = () => {
  // const location = "Seattle, WA";
  const [location, setLocation] = useState("Seattle, WA");
  // const [animal, setAnimal] = useState("dog");
  // const [breed, setBreed] = useState("dog");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    // pet.breeds("dog").then(console.log, console.error);
    setBreeds([]);
    setBreed("");// If i change the type of animal, breed must reset

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
        const breedStrings = apiBreeds.map(({ name }) => name); // desestructured
        setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]); // only run when these things change and not in every render, for making it run once []

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown /> {/* hook */}
        <BreedDropdown /> {/* hook */}
        {/* 
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            disabled={breeds.length === 0}
          >
              <option>All</option>
              {breeds.map(breedString => <option key={breedString}>{breedString}</option>)}
          </select>
        </label>
         */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

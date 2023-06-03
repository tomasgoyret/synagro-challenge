"use client";
import Card from "./components/card";

const fetchPokemons = (
  url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
) => {
  return fetch(url).then((res) => res.json());
};

const Home = async () => {
  let allPokemons = await fetchPokemons();

  return (
    <>
      <div className="flex justify-evenly flex-wrap gap-12 w-full p-10">
        {allPokemons?.results?.map((pokemon, index) => (
          <div key={index}>
            <Card name={pokemon.name} index={index} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

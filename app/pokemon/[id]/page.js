import ProgressBar from "@/app/components/progresbar";
import Image from "next/image";

const fetchPokemon = async (id) => {
  setTimeout(() => {}, 5000);
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
    res.json()
  );
};

const Pokemon = async ({ params }) => {
  const pokemon = await fetchPokemon(params.id);

  const pokemonDetails = {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.other["official-artwork"].front_default,
    index: pokemon.id,
    attack: pokemon.stats[1].base_stat,
    defense: pokemon.stats[2].base_stat,
    hp: pokemon.stats[0].base_stat,
    speed: pokemon.stats[5].base_stat,
    types: pokemon.types.map((type) => type.type.name),
  };

  const pokeIndex = ("000" + pokemonDetails.id).slice(-3);

  const name =
    pokemonDetails.name[0].toUpperCase() + pokemonDetails.name.slice(1);

  return (
    <div className="mx-auto pt-4">
      <div className="flex justify-center items-center gap-3 text-6xl">
        <h1 className="font-semi mb-4">{name}</h1>
        <p className="text-gray-500 mb-2">#{pokeIndex}</p>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="md:w-1/2">
          <Image
            src={pokemonDetails.image}
            alt={pokemonDetails.name}
            width={300}
            height={300}
            className="w-full w-[500px] h-[500px] mb-4"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="flex flex-col mb-4">
            <div className="flex flex-row gap-4 items-center">
              <p className="text-5xl font-bold">Types: </p>
              <div className="flex flex-row gap-4">
                {pokemonDetails.types.map((type, index) => (
                  <p
                    key={index}
                    className={`text-white text-4xl text-center bg-orange-800 rounded-xl px-4 py-1`}
                  >
                    {type}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-4 pr-8 max-w-md">
            <h2 className="text-5xl font-bold mb-2">Stats</h2>
            <p className="mb-1">Attack: {pokemonDetails.attack}</p>
            <ProgressBar value={pokemonDetails.attack} max={100} />
            <p className="mb-1">Defense: {pokemonDetails.defense}</p>
            <ProgressBar value={pokemonDetails.defense} max={100} />
            <p className="mb-1">HP: {pokemonDetails.hp}</p>
            <ProgressBar value={pokemonDetails.hp} max={100} />
            <p className="mb-1">Speed: {pokemonDetails.speed}</p>
            <ProgressBar value={pokemonDetails.speed} max={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;

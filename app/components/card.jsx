import Link from "next/link";
import Image from "next/image";

const Card = ({ name, index }) => {
  const pokeIndex = ("000" + (index + 1)).slice(-3);

  return (
    <Link href={`/pokemon/${index + 1}`}>
      <div className="bg-slate-800 rounded p-5 flex flex-col justify-center items-center ">
        <span className="text-[20px] text-slate-500 top-0 right-3 font-bold">
          #{pokeIndex}
        </span>
        <Image
          alt={name}
          width={150}
          height={150}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            index + 1
          }.png`}
        />
        <span className="uppercase font-semibold tracking-wider text-amber-400 text-[20px]">
          {name}
        </span>
      </div>
    </Link>
  );
};

export default Card;

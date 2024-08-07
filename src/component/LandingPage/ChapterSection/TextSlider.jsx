import React, { useState } from "react";

const slidesData = [
  {
    title: "Shadows of Jade: Blood Oaths",
    description:
      "In the gritty underbelly of the neon-lit metropolis of Hong Long, a city that breathes with secrets, Shadows of Jade, a notorious Triad faction, weaves a tale of power, betrayal, and blood-drenched loyalty. In the heart of the sprawling urban landscape, where the narrow alleys echo with whispers and the towering skyscrapers cast shadows over the forgotten, the Triads rule with an iron fist cloaked in silk.",
  },
  {
    title: "The Origin of Shadows",
    description:
      "The roots of Shadows of Jade trace back to the dark alleyways of Kowloon, where a group of disillusioned individuals sought strength in unity. Formed centuries ago, the Triad swore allegiance to the ancient code of brotherhood and respect—concepts that now blend seamlessly with a world of high-tech crime and mystical rituals. Led by the enigmatic Dragonmaster, the Shadows of Jade quickly rose to prominence, their influence spreading like an infectious disease through the veins of the city.",
  },
  {
    title: "Rituals and Blood Bonds",
    description:
      "The Triad's power is not merely economic or political; it's deeply spiritual. The Dragonmaster, a figure shrouded in mystery, conducts secret ceremonies in hidden temples where ancient rites mingle with modern innovation. Blood oaths are sworn in the glow of neon lights, binding members to a life of unwavering loyalty. The sacred tattoos etched onto their skin not only mark their allegiance but also channel mystical energies that are said to protect and empower the chosen.",
  },
  {
    title: "The Jade Lotus",
    description:
      "At the heart of Shadows of Jade lies the Jade Lotus, a mythical artifact said to harbor the souls of the Triad's most revered leaders. Guarded with utmost secrecy, the Lotus is both a symbol of divine power and a weapon of unparalleled destruction. Legends speak of a chosen one destined to wield the Lotus and reshape the fate of the Triad, a destiny that many covet and few survive.",
  },
  {
    title: "The Dark Allure of Vice",
    description:
      "Shadows of Jade extends its influence across the city's veins—gambling dens, opium dens, and cybernetic black markets. The seductive call of power and wealth lures even the most virtuous into the darkness. Those who resist often find themselves entangled in a web of deceit, their lives hanging by the thread of the Jade Lotus.",
  },
  {
    title: "Rivalry and Betrayal",
    description:
      "In the ruthless world of Shadows of Jade, alliances are forged in the crucible of necessity and shattered at the whim of ambition. Rival factions, each vying for dominance, engage in covert warfare, leaving the city streets stained with the blood of those who dared to defy. Betrayal is not just a possibility; it's an inevitability, as trust is a commodity traded as freely as any other..",
  },
  {
    title: "The Enigmatic Dragonmaster",
    description:
      "The true identity of the Dragonmaster remains a closely guarded secret, known only to a select few. Rumors suggest an immortal being, one who has walked the streets of Hong Long for centuries, manipulating the threads of destiny with an iron grip. Some believe the Dragonmaster is a myth, a symbol created to instill fear and obedience among the ranks, while others claim to have witnessed their arcane powers firsthand.",
  },
  {
    title: "The Conclusion",
    description:
      "As players navigate the treacherous world of Shadows of Jade, they will grapple with moral ambiguity, confront the ghosts of their own past, and make choices that echo through the corridors of power. In a city where every shadow conceals a threat and every ally may be a dagger waiting to strike, survival depends not only on skill but on mastering the art of navigating the razor's edge between honor and betrayal. The Shadows of Jade are unforgiving, but those who dare to dance within them may discover untold power and, perhaps, the key to unlocking the mysteries of the Jade Lotus",
  },
];

const TextSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slidesData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-full p-4 rounded-md">
        <h2 className="text-3xl md:text-4xl xl:text-5xl mb-4 text-shadow-lg text-[#a93939] font-bold text-center">
          {slidesData[currentSlide].title}
        </h2>
        <p className="text-[#e68585]   text-justify text-xl xl:text-2xl">
          {slidesData[currentSlide].description}
        </p>
      </div>
      <div className="flex justify-between w-full sm:w-[80%] sm:mx-auto sm:px-0 px-5 ">
        {currentSlide > 0 && (
          <button
            onClick={handlePrev}
            className="bg-red-600 mt-5 text-xl font-bold rounded-xl hover:bg-gray-200 duration-300 border overflow-hidden border-red-700 hover:border-white"
          >
            <h2 className="bg-red-950 p-3 px-5 text-red-700 ml-5 hover:text-white duration-300">
              Back
            </h2>
          </button>
        )}
        {currentSlide < slidesData.length - 1 ? (
          <button
            onClick={handleNext}
            className="bg-red-600 mt-5 text-base sm:text-xl font-bold rounded-xl hover:bg-gray-200 duration-300 border overflow-hidden border-red-700 hover:border-white"
          >
            <h2 className="bg-red-950 p-3 px-5 text-red-700 ml-5 hover:text-white duration-300">
              See next Chapter
            </h2>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default TextSlider;

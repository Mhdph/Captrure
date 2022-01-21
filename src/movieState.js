import athlate from "./img/athlete-small.png";
import theracer from "./img/theracer-small.png";
import goodtimes from "./img/goodtimes-small.png";
import athlate2 from "./img/athlete2.png";
import theracer2 from "./img/the-racer2.jpg";
import goodtimes2 from "./img/good-times2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlate",
      mainimg: athlate,
      secondaryimg: athlate2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truely A Master Piece",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, ea.",
        },
        {
          title: "Fresh look",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, ea.",
        },
        {
          title: "it's Ok",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, ea.",
        },
      ],
    },
    {
      title: "The Racer",
      mainimg: theracer,
      secondaryimg: theracer2,
      url: "/work/the-racer",
      awards: [
        {
          title: "Truely A Master Piece",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, ea.",
        },
      ],
    },
    {
      title: "Goodtimes",
      mainimg: goodtimes,
      secondaryimg: goodtimes2,
      url: "/work/good-times",
      awards: [
        {
          title: "Truely A Master Piece",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, ea.",
        },
      ],
    },
  ];
};

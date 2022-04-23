//images
import deleManDeleTo from "./asset/musicImage/download.jpg";
import cheraToChangi from "./asset/musicImage/chera-to-jangi.jpg";
import dasteManNist from "./asset/musicImage/daste-man-nist.jpg";
import deli from "./asset/musicImage/deli (1).jpg";
import doosetDaram from "./asset/musicImage/Mehdi-Ahmadvand-Dooset-Daram.jpg";
import behetGholMidam from "./asset/musicImage/behet ghol midam.jpg";

//songs
import dasteManNistSong from "./music/Shadmehr Aghili - Daste Man Nist.mp3";
import cheraToChangiSong from "./music/Shadmehr Aghili - Chera Too Jangi.mp3";
import deleManDeleToSong from "./music/Morteza Pashaei _ Dele Man Dele To (320).mp3";
import deliSong from "./music/Deli (Ft Sadegh).mp3";
import behetGholMidamSong from "./music/Mohsen Yeganeh - Behet Ghol Midam (320).mp3";
import doosetDaramSong from "./music/Mehdi Ahmadvand - Dooset Daram (320).mp3";

export const songs = [
  {
    title: "Dele Man Dele To",
    artist: "Morteza Pashaei",
    image_src: deleManDeleTo,
    song: deleManDeleToSong,
  },
  {
    title: "Behet Ghol Midam",
    artist: "Mohsen Yegane",
    image_src: behetGholMidam,
    src: behetGholMidamSong,
  },
  {
    title: "Chera to jangi",
    artist: "shadmehr",
    image: cheraToChangi,
    song: cheraToChangiSong,
  },
  {
    title: "Deli",
    artist: "Shayea ft Sadegh",
    image_src: deli,
    src: deliSong,
  },
  {
    title: "Dooset Daram",
    artist: "Madi ahmadvand",
    image_src: doosetDaram,
    src: doosetDaramSong,
  },
  {
    title: "Daste man nist",
    artist: "shadmehr",
    image: dasteManNist,
    song: dasteManNistSong,
  },
];

export type Category = {
  value: string;
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  subcategories?: Subcategory[];
};
export type Subcategory = {
  value: string;
  id: string;
  title: string;
  description?: string;
  imageSrc?: string;
  // Add any additional properties needed for subcategories
};


export const categories: Category[] = [
  {
    value: "racunalnistvo",
    id: "racunalnistvo",
    imageSrc: "/images/note.png",
    title: "Računalništvo",
    description:
      "Ta kategorija zajema vse vrste računalnikov ter njihovo pripadajočo periferno opremo in komponente.",
    subcategories: [
      {
        id: "prenosni",
        value: "prenosni",
        title: "Prenosni računalniki",
        description: "A variety of laptops...",
      },
      {
        id: "namizni",
        value: "namizni",
        title: "Namizni računalniki",
        description: "A variety of laptops...",
      },
      {
        id: "tablice",
        value: "tablice",
        title: "Tablice & dodatki",
        description: "A variety of laptops...",
      },
      {
        id: "monitorji",
        value: "monitorji",
        title: "Monitorji",
        description: "A variety of laptops...",
      },
      {
        id: "tiskalniki",
        value: "tiskalniki",
        title: "Tiskalniki in 3D tiskalniki",
        description: "A variety of laptops...",
      },
      {
        id: "ereader",
        value: "ereader",
        title: "E-bralniki in Grafične tablice",
        description: "A variety of laptops...",
      },
      {
        id: "racdodatki",
        value: "racdodatki",
        title: "Računalniški dodatki",
        description: "A variety of laptops...",
      },
      {
        id: "komponente",
        value: "komponente",
        title: "Računalniške komponente",
        description: "A variety of laptops...",
      },
    ],
  },
  {
    value: "telefonija",
    id: "telefonija",
    imageSrc: "/images/phon.png",
    title: "Telefonija",
    description:
      "V kategoriji telefonija najdemo mobilne naprave, ter pripadajočo dodatno opremo, ki obsega polnilce, ovitke in slušalke.",
  },

  {
    value: "televizija",
    id: "televizija",
    imageSrc: "/images/tv2.png",
    title: "Televizija in video",
    description:
      "Kategorija TV in Video vključuje raznolike televizorje, od pametnih do visokoločljivostnih modelov, pa tudi naprave za predvajanje in snemanje.",
  },
  {
    value: "audio",
    id: "audio",
    imageSrc: "/images/headphones1.png",
    title: "Audio in glasbila",
    description:
      "Kategorija TV in Video vključuje raznolike televizorje, od pametnih do visokoločljivostnih modelov, pa tudi naprave za predvajanje in snemanje.",
  },
  {
    value: "gaming",
    id: "gaming",
    imageSrc: "/images/gaming.png",
    title: "Gaming in VR",
    description:
      "Kategorija TV in Video vključuje raznolike televizorje, od pametnih do visokoločljivostnih modelov, pa tudi naprave za predvajanje in snemanje.",
  },
  {
    value: "photo",
    id: "photo",
    imageSrc: "/images/camera.png",
    title: "Foto & Kamere & Droni",
    description:
      "Kategorija TV in Video vključuje raznolike televizorje, od pametnih do visokoločljivostnih modelov, pa tudi naprave za predvajanje in snemanje.",
  },
  {
    value: "home",
    id: "home",
    imageSrc: "/images/was.png",
    title: "Bela tehnika",
    description:
      "Kategorija TV in Video vključuje raznolike televizorje, od pametnih do visokoločljivostnih modelov, pa tudi naprave za predvajanje in snemanje.",
  },
  // Add more categories as needed
];

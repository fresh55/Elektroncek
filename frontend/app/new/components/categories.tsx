export type Category = {
  value: string;
  id: string;
  imageSrc?: string;
  title: string;
  description: string;
  subcategories?: Category[]; // Subcategories are also of type Category
};

export const categories: Category[] = [
  {
    value: "Računalništvo",
    id: "racunalnistvo",
    imageSrc: "/images/nzxt.png",
    title: "Računalništvo",
    description:
      "Ta kategorija zajema vse vrste računalnikov ter njihovo pripadajočo periferno opremo in komponente.",
    subcategories: [
      {
        id: "prenosni",
        value: "Prenosni računalniki",
        title: "Prenosni računalniki",
        imageSrc: "/images/prenosnik1.png",
        description: "A variety of laptops...",
      },
      {
        id: "namizni",
        value: "namizni",
        title: "Namizni računalniki",
        imageSrc: "/images/nzxt.png",
        description: "A variety of laptops...",
      },
      {
        id: "tablice",
        value: "tablice",
        title: "Tablice & dodatki",
        imageSrc: "/images/tablica.png",
        description: "A variety of laptops...",
      },
      {
        id: "monitorji",
        value: "monitorji",
        title: "Monitorji",
        imageSrc: "/images/monitor.png",
        description: "A variety of laptops...",
      },
      {
        id: "tiskalniki",
        value: "tiskalniki",
        title: "Tiskalniki in 3D tiskalniki",
        imageSrc: "/images/printer2.png",
        description: "A variety of laptops...",
      },
      {
        id: "ereader",
        value: "ereader",
        title: "E-bralniki in Grafične tablice",
        imageSrc: "/images/graphic1.png",
        description: "A variety of laptops...",
      },
      {
        id: "racdodatki",
        value: "racdodatki",
        title: "Računalniški dodatki",
        imageSrc: "/images/keyboard.png",
        description: "A variety of laptops...",
      },
      {
        id: "komponente",
        value: "komponente",
        title: "Računalniške komponente",
        imageSrc: "/images/gpu.png",
        description: "A variety of laptops...",
      },
    ],
  },
  {
    value: "telefonija",
    id: "telefonija",
    imageSrc: "/images/phone3.png",
    title: "Telefonija",
    description:
      "V kategoriji telefonija najdemo mobilne naprave, ter pripadajočo dodatno opremo, ki obsega polnilce, ovitke in slušalke.",
      subcategories: [
        {
          id: "prenosni",
          value: "prenosni",
          title: "Prenosni računalniki",
          description: "A variety of laptops...",
          subcategories: [{
            id: "prenosni123",
            value: "prenosni123",
            title: "Prenosni računalniki1",
            description: "A variety of laptops..."},
            {
              id: "prenosni1234",
              value: "prenosni1234",
              title: "Prenosni računalniki2",
              description: "A variety of laptops..."}
          ],
        },
      ],
  },

  {
    value: "televizija",
    id: "televizija",
    imageSrc: "/images/tvsamsung.png",
    title: "Televizija in video",
    description:
      "Kategorija TV in Video vključuje raznolike televizorje, od pametnih do visokoločljivostnih modelov, pa tudi naprave za predvajanje in snemanje.",
  },
  {
    value: "audio",
    id: "audio",
    imageSrc: "/images/headphones3.png",
    title: "Audio in glasbila",
    description:
      "Kategorija TV in Video vključuje raznolike televizorje, od pametnih do visokoločljivostnih modelov, pa tudi naprave za predvajanje in snemanje.",
  },
  {
    value: "gaming",
    id: "gaming",
    imageSrc: "/images/ps5.png",
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

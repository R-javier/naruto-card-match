const cartas = [
  {
    name: "Naruto uzumaki",
    img: "./assets/NarutoB.jpg",
    desc: "Es un shinobi de Konohagakure del clan Uzumaki y protagonista epónimo de la franquicia Naruto. Desde su nacimiento, se convirtió en el jinchūriki de la Nueve colas, Es un joven shinobi alegre, hiperactivo, de voluntad fuerte.",
    score: 0,
  },
  {
    name: "Sakura Haruno",
    img: "./assets/SakuraC.png",
    desc: "Es una kunoichi y chūnin de Konoha. ella también es una miembro del Equipo Kakashi, junto con Naruto y Sai, anteriormente con Sasuke, y teniendo Kakashi como el jōnin-sensei del equipo.",
    score: 1,
  },
  {
    name: "Sasuke Uchiha",
    img: "./assets/SasukeD.png",
    desc: "Es miembro del clan Uchiha, que era una familia hábil de ninjas de Hidden Leaf Village. Tu objetivo inicial es vengar la destrucción de tu clan, matando a su hermano Itachi Uchiha, quien asesinó a casi todos sin ayuda.",
    score: 2,
  },
  {
    name: "Itachi Uchiha",
    img: "./assets/itachi2.jpg",
    desc: "Es el hermano mayor de Sasuke y es responsable de muerte de todos los miembros de su clan, salvando solo a Sasuke. Durante gran parte de la serie, es tratado como un ninja renegado.",
    score: 3,
  },
  {
    name: "Minato Uzumaki",
    img: "./assets/minato.jpg",
    desc: "Conocido como el Rayo Amarillo de Konoha, fue un shinobi legendario que se convirtió en el Cuarto Hokage. Murió sacrificando su vida durante el Ataque de las Nueve Colas a Konoha.",
    score: 4,
  },
  {
    name: "Kakashi Hatake",
    img: "./assets/kakashi.jpg",
    desc: "Es un shinobi de Konohagakure. Recibió un Sharingan de su ex compañero de equipo Obito Uchiha cuando era más joven, lo que lo hizo conocido como Kakashi the Copy Ninja y Kakashi the Sharingan.",
    score: 5,
  },
  {
    name: "Tsunade",
    img: "./assets/TsunadeS.jpg",
    desc: "Es famosa por ser la kunoichi más fuerte del mundo y su ninja médico más grande. Finalmente, la persuaden para que regrese a Konoha y asuma el manto del Quinto Hokage.",
    score: 6,
  },
  {
    name: "Tenten",
    img: "./assets/Tenten.jpg",
    desc: "Es un personaje que se especializa en herramientas y armas ninja, es poco lo que sabemos sobre su clan y sus antecedentes.",
    score: 7,
  },
  {
    name: "Jiraiya",
    img: "./assets/JiraiyaS.png",
    desc: "Es uno de los Tres Sannin legendarios que se conoce en todo el mundo ninja. Jiraiya es el maestro de muchos personajes del universo de Naruto, incluidos Naruto y el cuarto Hokage. Es un pervertido de renombre y autor de muchos libros para adultos.",
    score: 8,
  },
  {
    name: "Hinata",
    img: "./assets/HinataD.jpg",
    desc: "Es una kunoichi de Konohagakure. Hinata perseveró y, especialmente a partir de su observación de Naruto Uzumaki, Hinata encontró un ejemplo a seguir.buscó volverse lo suficientemente fuerte como para cambiarse a sí misma.",
    score: 9,
  },
  {
    name: "Rock Lee",
    img: "./assets/LeeC.jpg",
    desc: "Es un shinobi del clan Lee de Konohagakure y miembro del Team Guy. A diferencia de la mayoría de los shinobi, carecía de las habilidades necesarias para usar ninjutsu o genjutsu.",
    score: 10,
  },
  {
    name: "Might Guy",
    img: "./assets/GaiA.jpg",
    desc: "Es un jōnin de Konohagakure. Guy, un maestro del taijutsu, lidera y transmite su sabiduría a los miembros del Equipo Guy. ",
    score: 11,
  },
  {
    name: "Shikamaru Nara",
    img: "./assets/ShikamaruB.jpg",
    desc: "Es un shinobi del clan Nara de Konohagakure. Aunque perezoso por naturaleza, Shikamaru tiene un intelecto poco común que le permite prevalecer en el combate. Estratega.",
    score: 12,
  },
  {
    name: "Choji Akimichi",
    img: "./assets/ChojiD.png",
    desc: "Es miembro del Clan Akimichi de Konohagakure. Aunque es sensible a su peso, Chōji está dedicado a sus amigos, especialmente en el Equipo Asuma. ",
    score: 13,
  },
  {
    name: "Ino Yamanaka",
    img: "./assets/InoD.jpg",
    desc: "Es una kunoichi del clan Yamanaka de Konohagakure. Ella y sus compañeros del Equipo Asuma son el trío Ino-Shika-Chō de su generación.",
    score: 14,
  },
  {
    name: "Sai",
    img: "./assets/Sai.png",
    desc: " Sai estaba condicionado para eliminar todas las emociones y, como tal, tenía dificultades para conectarse con los demás. Cuando se agrega al Equipo Kakashi",
    score: 15,
  },
  {
    name: "Neji",
    img: "./assets/neji.jpeg",
    desc: "Miembro del clan Konohagakure, no importa cuán hábil se volviera, siempre estaría al servicio de la casa principal de los Hyūga, un hecho que lo convenció de que el destino estaba predeterminado. ",
    score: 16,
  },
  {
    name: "Shino",
    img: "./assets/Shino.jpg",
    desc: "Es un shinobi del clan Aburame de Konohagakure. Tranquilo, y en ocasiones desagradable para algunos, Shino utiliza las técnicas basadas en insectos de su clan en el Equipo Kurenai.",
    score: 17,
  },
  {
    name: "Kiba",
    img: "./assets/KibaD.png",
    desc: "Es miembro del clan Inuzuka de Konohagakure y miembro del Equipo Kurenai. A pesar de su actitud testaruda y, en ocasiones, egoísta, Kiba es leal a sus camaradas.",
    score: 18,
  },
  {
    name: "Asuma",
    img: "./assets/AsumaA.jpg",
    desc: "Un ninja muy tranquilo y fuerte, que siempre disfruta de una buena fumada. Sale con Kurenai, un fuerte usuario de Genjutsu.",
    score: 19,
  },
  {
    name: "Ebisu-sensei",
    img: "./assets/EbisuC.jpg",
    desc: "Ebisu) es un jōnin tokubetsu de Konohagakure que se especializa en entrenar ninjas de élite. También se desempeñó como líder del Equipo Ebisu, que estaba formado por Konohamaru Sarutobi, Udon y Moegi.",
    score: 20,
  },
  {
    name: "Hiruzen Sarutobi",
    img: "./assets/Hiruzen.png",
    desc: " Era el Tercer Hokage originario del clan Sarutobi de Konohagakure. Formó parte del Equipo Tobirama junto a Homura Mitokado y Koharu Utatane bajo el liderazgo del Segundo Hokage.",
    score: 21,
  },
  {
    name: "Iiruka",
    img: "./assets/IrukaC.jpg",
    desc: "es un personaje que vemos una vez al año. Originalmente, es el único adulto que conocemos por primera vez que se preocupa por Naruto, mientras que todos los demás en el pueblo lo desprecian.",
    score: 22,
  },
  {
    name: "Kabuto",
    img: "./assets/KabutoA.png",
    desc: "Pasó la mayor parte de su vida como espía, sus talentos naturales en la recopilación de inteligencia y la medicina atrajeron la atención de Orochimaru cuando era más joven, quien convirtió a Kabuto en su mano derecha.",
    score: 23,
  },
  {
    name: "Kimimaro",
    img: "./assets/KimimaroA.png",
    desc: "Fue el único sobreviviente del clan Kaguya. Al dedicar su vida a Orochimaru, se convirtió en el líder de los anteriormente llamados Sound Five.",
    score: 24,
  },
  {
    name: "Kisame",
    img: "./assets/kisame.jpg",
    desc: "Es un luchador agresivo y solo se detiene cuando Itachi se lo dice. Esta es la primera vez que conocemos a los miembros de Akatsuki y es cuando escuchamos por primera vez sobre sus verdaderas intenciones de capturar a Naruto y al resto de las bestias con cola.",
    score: 25,
  },
  {
    name: "konohamaru sarutobi",
    img: "./assets/konohamaru.png",
    desc: "Es un shinobi del clan Sarutobi de Konohagakure. Después de convertirse más tarde en jōnin, se convierte en el líder de su propio equipo genin, fan de Naruto.",
    score: 26,
  },
  {
    name: "kurenai",
    img: "./assets/KurenaiA.jpg",
    desc: "Es el líder del Equipo 8, un hábil usuario de genjutsu, particularmente hábil con las ilusiones que involucran plantas.",
    score: 27,
  },
  {
    name: "Orochimaru",
    img: "./assets/OrochimaruS.jpg",
    desc: "Es uno de los ninjas legendarios de Sannin y uno de los principales villanos de la serie Naruto. Orochimaru fue una vez miembro de Akatsuki.",
    score: 28,
  },
  {
    name: "Temari",
    img: "./assets/TemariC.jpg",
    desc: "Ella es la hermana mayor de Gaara y Kankuro, y es muy hábil en el uso de un gran abanico como arma para ataques de largo alcance.",
    score: 29,
  },
  {
    name: "Kankuro",
    img: "./assets/kankuroC.png",
    desc: "Un ninja de The HIdden Sand Village. Es el hermano mayor de Gaara y un experto en técnicas de marionetas ninja.",
    score: 30,
  },
  {
    name: "Pakkun",
    img: "./assets/Pakkun1.png",
    desc: "A pesar de su linda apariencia, su voz es profunda y áspera, A pesar de su comportamiento perezoso, se muestra que Pakkun es un ninken ferozmente orgulloso y decidido.",
    score: 31,
  },
  {
    name: "Yahiko",
    img: "./assets/Yahiko.png",
    desc: "Junto a sus compañeros huérfanos de guerra, Nagato y Konan, fundó y dirigió Akatsuki en un intento por lograr la paz.",
    score: 32,
  },
  {
    name: "Deidara",
    img: "./assets/deidara69.jpg",
    desc: "Deidara tiene una habilidad única, usa sus manos donde sus palmas poseen bocas que cuando alimentan un cierto explosivo de arcilla pueden crear un pájaro volador o muchas arañas pequeñas.",
    score: 33,
  },
  {
    name: "Tonton",
    img: "./assets/Tonton.png",
    desc: "Tonton es el cerdo ninja de Tsunade, a menudo al cuidado de Shizune, es un cerdo mascota muy devoto y obediente.",
    score: 34,
  },
  {
    name: "Hidan",
    img: "./assets/Hidan.jpg",
    desc: "Es el compañero inmortal, malhablado y sadomasoquista de Kakuzu y un ex ninja de Yugakure, la Aldea Oculta en Agua Hirviendo.",
    score: 35,
  },
  {
    name: "Gabunta",
    img: "./assets/Gamabunta.png",
    desc: "Gamabunta es un sapo gruñón, testarudo y muy apático. Fue convocado por el señor cuarto Hokage, sensei Jiraiya y por Naruto, Es uno de los animales de invocación más grandes de la serie.",
    score: 36,
  },
  {
    name: "Obito",
    img: "./assets/obito_uchiha.png",
    desc: "También se conoce con el nombre de Tobi. Es un antiguo alumno del cuarto Hokage, Minato. Es responsable del Ataque de las Nueve Colas en Konoha, así como de la masacre del clan Uchiha, arruinando las vidas de Naruto y Sasuke.",
    score: 37,
  },
];

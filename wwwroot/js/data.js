const plantasNativasPeru = [
  {
    id: 1,
    nombre: "Papa",
    origen: "Andes peruanos",
    especie: "Solanum tuberosum",
    altura_maxima: "1 m",
    notas: "Tubérculo fundamental en la gastronomía mundial, con miles de variedades nativas en Perú. Es una fuente principal de carbohidratos.",
    imagen: "https://www.herbazest.com/imgs/0/a/c/451775/papa.jpg"
  },
  {
    id: 2,
    nombre: "Quinua",
    origen: "Altiplano andino",
    especie: "Chenopodium quinoa",
    altura_maxima: "2 m",
    notas: "Pseudocereal de alto valor nutritivo, considerado un superalimento por su contenido completo de aminoácidos esenciales.",
    imagen: "https://img.chemie.de/Portal/News/685e543f49d75_mdn67M3S4.png?tr=w-1232,h-616,cm-extract,x-0,y-199:n-news_teaser"
  },
  {
    id: 3,
    nombre: "Maca",
    origen: "Andes centrales (Junín)",
    especie: "Lepidium meyenii",
    altura_maxima: "0.2 m",
    notas: "Raíz andina conocida por sus propiedades energizantes y nutritivas. Crece a altitudes extremas, entre 3800 y 4500 msnm.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8L2fqckfCb-1E1HsKTizTAEOUsKd9tAUMA&s"
  },
  {
    id: 4,
    nombre: "Uña de Gato",
    origen: "Selva amazónica peruana",
    especie: "Uncaria tomentosa",
    altura_maxima: "30 m (liana)",
    notas: "Planta trepadora utilizada en la medicina tradicional por sus potentes propiedades antiinflamatorias.",
    imagen: "https://fitoterapiacampos.com/wp-content/uploads/2022/06/unaga.jpg"
  },
  {
    id: 5,
    nombre: "Maíz Morado",
    origen: "Valles interandinos",
    especie: "Zea mays L.",
    altura_maxima: "3 m",
    notas: "Variedad de maíz con un grano de color morado intenso, utilizado para preparar la chicha morada. Rico en antioxidantes.",
    imagen: "https://peru.info/archivos/publicacion/167-imagen-121522582020.jpg"
  },
  {
    id: 6,
    nombre: "Kiwicha",
    origen: "Andes peruanos",
    especie: "Amaranthus caudatus",
    altura_maxima: "2.5 m",
    notas: "También conocida como amaranto, es un grano de alto valor proteico, rico en lisina, un aminoácido esencial.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEZ7McjQEIc9MqZjxw4TlYiXJwzI9kMRRpg&s"
  },
  {
    id: 7,
    nombre: "Camu Camu",
    origen: "Amazonía peruana",
    especie: "Myrciaria dubia",
    altura_maxima: "5 m",
    notas: "Fruto que posee el mayor contenido de Vitamina C del planeta. Crece en las riberas de los ríos amazónicos.",
    imagen: "https://www.agraria.pe/imgs/a/lx/exportaciones-peruanas-de-camu-camu-alcanzaron-record-en-202-23887.jpg"
  },
  {
    id: 8,
    nombre: "Yacón",
    origen: "Valles andinos cálidos",
    especie: "Smallanthus sonchifolius",
    altura_maxima: "2 m",
    notas: "Raíz de sabor dulce y textura crujiente, conocida por su bajo contenido calórico y sus prebióticos (inulina).",
    imagen: "https://peru.info/archivos/publicacion/149-imagen-153748652020.jpg"
  },
  {
    id: 9,
    nombre: "Aguaymanto",
    origen: "Valles interandinos",
    especie: "Physalis peruviana",
    altura_maxima: "1 m",
    notas: "Fruto agridulce envuelto en un cáliz, rico en antioxidantes, vitaminas A y C. Conocido también como 'golden berry'.",
    imagen: "https://portal.andina.pe/EDPfotografia3/Thumbnail/2018/04/16/000497155W.jpg"
  },
  {
    id: 10,
    nombre: "Lúcuma",
    origen: "Valles interandinos peruanos",
    especie: "Pouteria lucuma",
    altura_maxima: "15 m",
    notas: "Fruta apodada 'el oro de los Incas', usada en postres por su pulpa cremosa y sabor único, similar al caramelo.",
    imagen: "https://s1.elespanol.com/2020/10/26/ciencia/nutricion/fruta-frutas-superalimentos_531209049_163611377_1706x1280.jpg"
  },
  {
    id: 11,
    nombre: "Sacha Inchi",
    origen: "Amazonía peruana",
    especie: "Plukenetia volubilis",
    altura_maxima: "2 m (planta)",
    notas: "Semilla conocida como el 'maní del Inca', excepcionalmente rica en ácidos grasos Omega 3, 6 y 9.",
    imagen: "https://www.consumoteca.pe/wp-content/uploads/Sacha-inchi-de-Peru-Peru-info.jpg"
  },
  {
    id: 12,
    nombre: "Chirimoya",
    origen: "Andes del norte de Perú",
    especie: "Annona cherimola",
    altura_maxima: "9 m",
    notas: "Fruta de pulpa blanca, dulce y jugosa, considerada una de las frutas más finas del mundo por su sabor complejo.",
    imagen: "https://image.tuasaude.com/media/article/bv/jm/chirimoya_62830.jpg"
  },
  {
    id: 13,
    nombre: "Olluco",
    origen: "Andes",
    especie: "Ullucus tuberosus",
    altura_maxima: "0.5 m",
    notas: "Tubérculo de colores vivos y textura mucilaginosa, segundo en popularidad en los Andes después de la papa.",
    imagen: "https://peru.info/archivos/publicacion/141-imagen-1431491572020.jpg"
  },
  {
    id: 14,
    nombre: "Cañihua",
    origen: "Altiplano andino",
    especie: "Chenopodium pallidicaule",
    altura_maxima: "0.6 m",
    notas: "Grano andino pariente de la quinua, altamente resistente a las heladas. Rico en proteínas y flavonoides.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbYG7uu7AwZ6GcPClQfBs1OxZn1pCqBrkDQ&s"
  },
  {
    id: 15,
    nombre: "Tara",
    origen: "Valles secos interandinos",
    especie: "Caesalpinia spinosa",
    altura_maxima: "5 m",
    notas: "Arbusto cuyas vainas son una fuente rica en taninos, usados en la industria del cuero y la farmacéutica.",
    imagen: "https://agraria.pe/imgs/a/lx/peru-cuenta-con-aproximadamente-10-mil-hectareas-de-tara-29803.jpg"
  },
  {
    id: 16,
    nombre: "Muña",
    origen: "Sierra peruana",
    especie: "Minthostachys mollis",
    altura_maxima: "1.2 m",
    notas: "Planta aromática usada tradicionalmente como infusión para aliviar el mal de altura y problemas digestivos.",
    imagen: "https://sites.peru.info/DesktopModules/BB_LA_Superfood_Home/Images/Mu%C3%B1a/hierbas-mu%C3%B1a-detalle.jpg"
  },
  {
    id: 17,
    nombre: "Pacay",
    origen: "Amazonía y valles costeros",
    especie: "Inga feuilleei",
    altura_maxima: "18 m",
    notas: "Árbol cuya vaina contiene una pulpa blanca y algodonosa de sabor dulce, muy popular entre los niños.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKfKwu801HlkrnDsGu-lai93YDp9JupUr3A&s"
  },
  {
    id: 18,
    nombre: "Oca",
    origen: "Andes centrales",
    especie: "Oxalis tuberosa",
    altura_maxima: "0.4 m",
    notas: "Tubérculo de sabores que van desde el dulce hasta el amargo, con una amplia variedad de colores y formas.",
    imagen: "https://consejonutricional.com/wp-content/uploads/2014/08/oxalis_tuberosa.jpg?w=500"
  },
  {
    id: 19,
    nombre: "Granadilla",
    origen: "Estribaciones andinas",
    especie: "Passiflora ligularis",
    altura_maxima: "5 m (trepadora)",
    notas: "Fruta de la pasión de cáscara dura y anaranjada, con una pulpa gelatinosa, dulce y aromática.",
    imagen: "https://peru.info/archivos/publicacion/142-imagen-182132332020.jpg"
  },
  {
    id: 20,
    nombre: "Cacao",
    origen: "Cuenca amazónica",
    especie: "Theobroma cacao",
    altura_maxima: "8 m",
    notas: "El cacao chuncho de Perú es una de las variedades más finas del mundo, base para el chocolate de alta calidad.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_EHlJod26ZzxV8Jp7Ia-96qDg_RSwhNQFg&s"
  },
  {
    id: 21,
    nombre: "Mashua",
    origen: "Andes (1,000-4,000 msnm)",
    especie: "Tropaeolum tuberosum",
    altura_maxima: "1 m (planta)",
    notas: "Tubérculo conocido por su sabor picante en crudo, que se vuelve suave al cocinarse. Se le atribuyen propiedades medicinales.",
    imagen: "https://usil-blog.s3.amazonaws.com/PROD/blog/image/mashua.jpg"
  },
  {
    id: 22,
    nombre: "Ají Charapita",
    origen: "Selva peruana",
    especie: "Capsicum frutescens",
    altura_maxima: "0.8 m",
    notas: "Pequeño ají amarillo muy aromático y picante, esencial en la cocina amazónica. Considerado uno de los más caros del mundo.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYn44EHnO7RpaOPvlIsO9SFpb8mCpXo8Dzg&s"
  },
  {
    id: 23,
    nombre: "Pallar",
    origen: "Costa norte y central",
    especie: "Phaseolus lunatus",
    altura_maxima: "4 m (trepadora)",
    notas: "Legumbre grande y aplanada, base de la gastronomía de Ica. Domesticada en Perú hace miles de años.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5aLKg2jpOTBLZebd7YDuX-260MmGuRQj3Hw&s"
  },
  {
    id: 24,
    nombre: "Árbol de la Quina",
    origen: "Bosques de neblina andinos",
    especie: "Cinchona officinalis",
    altura_maxima: "15 m",
    notas: "Árbol nacional de Perú, presente en el escudo. Su corteza es la fuente natural de la quinina, usada para tratar la malaria.",
    imagen: "https://i0.wp.com/www.actualidadambiental.pe/wp-content/uploads/2017/07/ficus-andina-700x498.jpg?resize=700%2C498"
  },
  {
    id: 25,
    nombre: "Cantuta",
    origen: "Valles andinos de Perú y Bolivia",
    especie: "Cantua buxifolia",
    altura_maxima: "3 m",
    notas: "Flor nacional de Perú, considerada la 'Flor Sagrada de los Incas'. Sus flores tienen forma de campana y colores intensos.",
    imagen: "https://i0.wp.com/www.actualidadambiental.pe/wp-content/uploads/2025/02/Flor-del-Inca.jpg?fit=640%2C455&ssl=1"
  },
  {
    id: 26,
    nombre: "Chanca Piedra",
    origen: "Amazonía",
    especie: "Phyllanthus niruri",
    altura_maxima: "0.7 m",
    notas: "Hierba silvestre famosa en la medicina tradicional por su supuesta capacidad para disolver los cálculos renales y biliares.",
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/PHVQISSUPFDCLDHTEWCIK43A4Y.jpg"
  },
  {
    id: 27,
    nombre: "Zapallo Loche",
    origen: "Costa norte (Lambayeque)",
    especie: "Cucurbita moschata",
    altura_maxima: "0.5 m (rastrera)",
    notas: "Calabaza con Denominación de Origen, muy apreciada en la gastronomía norteña por su aroma y sabor distintivos.",
    imagen: "https://portal.andina.pe/EDPfotografia3/Thumbnail/2021/03/23/000759798W.jpg"
  },
  {
    id: 28,
    nombre: "Pijuayo",
    origen: "Amazonía",
    especie: "Bactris gasipaes",
    altura_maxima: "20 m",
    notas: "Fruto de una palmera, rico en carbohidratos y grasas. Se consume cocido y es un alimento básico para muchas comunidades amazónicas.",
    imagen: "https://www.agraria.pe/imgs/a/lx/aprueban-norma-tecnica-para-impulsar-requisitos-de-calidad-d-22473.jpg"
  },
  {
    id: 29,
    nombre: "Puya de Raimondi",
    origen: "Zonas altoandinas",
    especie: "Puya raimondii",
    altura_maxima: "12 m (inflorescencia)",
    notas: "La inflorescencia más grande del mundo. Florece una sola vez en su vida después de varias décadas (hasta 100 años) y luego muere.",
    imagen: "https://blog.viajesmachupicchu.travel/wp-content/uploads/2024/11/puya-raimondi_1.jpg"
  },
  {
    id: 30,
    nombre: "Paico",
    origen: "América tropical",
    especie: "Dysphania ambrosioides",
    altura_maxima: "1.2 m",
    notas: "Hierba aromática usada como condimento y como planta medicinal, especialmente por sus propiedades antiparasitarias.",
    imagen: "https://herbario.istmas.edu.ec/wp-content/uploads/2022/05/PAICO.jpg"
  },
  {
    id: 31,
    nombre: "Copaiba",
    origen: "Amazonía",
    especie: "Copaifera officinalis",
    altura_maxima: "30 m",
    notas: "Árbol del cual se extrae un aceite o resina con potentes propiedades cicatrizantes y antiinflamatorias.",
    imagen: "https://media.istockphoto.com/id/2151952401/es/foto/%C3%A1rbol-de-copaiba-lleno-de-semillas-en-el-campo.jpg?s=612x612&w=0&k=20&c=EKVykYdSCJIIWprgtQ6A2e5wesMFqKDmIwfqUYYtvqg="
  },
  {
    id: 32,
    nombre: "Sangre de Grado",
    origen: "Amazonía",
    especie: "Croton lechleri",
    altura_maxima: "20 m",
    notas: "La savia roja de este árbol es un potente cicatrizante natural, usado tópicamente para cortes y heridas.",
    imagen: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/13E3F/production/_110317418_sangre.jpg.webp"
  },
  {
    id: 33,
    nombre: "Hierba Luisa",
    origen: "Sudamérica",
    especie: "Aloysia citrodora",
    altura_maxima: "3 m",
    notas: "Arbusto con un intenso aroma a limón, muy popular en Perú para preparar infusiones digestivas y relajantes.",
    imagen: "https://inaturalist-open-data.s3.amazonaws.com/photos/61513592/large.jpg"
  },
  {
    id: 34,
    nombre: "Hercampuri",
    origen: "Sierra peruana",
    especie: "Gentianella alborosea",
    altura_maxima: "0.15 m",
    notas: "Planta pequeña y amarga, utilizada en la medicina tradicional como desintoxicante y para reducir el colesterol.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkAgBeuIN-NL7xaK7yNGCwzft-uW4pGnXBsA&s"
  },
  {
    id: 35,
    nombre: "Tumbo",
    origen: "Valles interandinos",
    especie: "Passiflora mollissima",
    altura_maxima: "6 m (trepadora)",
    notas: "Fruta alargada, pariente del maracuyá, de sabor ácido. Ideal para jugos, postres y cócteles.",
    imagen: "https://blog.viajesmachupicchu.travel/wp-content/uploads/2024/11/tumbo_portada-1170x550.jpg"
  },
  {
    id: 36,
    nombre: "Pepino Dulce",
    origen: "Región andina",
    especie: "Solanum muricatum",
    altura_maxima: "1 m",
    notas: "Fruta jugosa y refrescante, de sabor similar a un melón dulce. Se consume fresca, en jugos o ensaladas.",
    imagen: "https://www.infobae.com/new-resizer/5xv0yuLA7MYsDWUXkow-FkhPqSc=/arc-anglerfish-arc2-prod-infobae/public/3DMTLSCW6NDWXPEXFMYOEE2ML4.jpg"
  },
  {
    id: 37,
    nombre: "Queñua",
    origen: "Zonas altoandinas (3,000-5,000 msnm)",
    especie: "Polylepis",
    altura_maxima: "15 m",
    notas: "Árbol que crece a mayor altitud en el mundo. Su corteza rojiza se desprende en láminas para protegerlo del frío.",
    imagen: "https://www.rumbosdelperu.com/wp-content/uploads/2020/12/Quenua_07.jpg"
  },
  {
    id: 38,
    nombre: "Coca",
    origen: "Estribaciones andino-amazónicas",
    especie: "Erythroxylum coca",
    altura_maxima: "2.5 m",
    notas: "Planta sagrada en la cultura andina, usada para el chacchado (masticado) para mitigar el hambre, la sed y el cansancio.",
    imagen: "https://www.peru.travel/Contenido/General/Imagen/es/616/1.1/hoja-de-coca.jpg"
  },
  {
    id: 39,
    nombre: "Achiote",
    origen: "Amazonía",
    especie: "Bixa orellana",
    altura_maxima: "10 m",
    notas: "De sus semillas se extrae un colorante natural rojo-amarillo, usado como condimento y tinte en la gastronomía.",
    imagen: "https://image.tuasaude.com/media/article/dx/no/achiote_71288.jpg"
  },
  {
    id: 40,
    nombre: "Molle",
    origen: "Valles interandinos",
    especie: "Schinus molle",
    altura_maxima: "15 m",
    notas: "Árbol muy resistente a la sequía, cuyas bayas rosadas se usan para hacer chicha y como un sustituto de la pimienta.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupM2t-9yO26Osb8rRE-rPXa1-XNX_BY8Tmg&s"
  },
  {
    id: 41,
    nombre: "Guayaba",
    origen: "América tropical",
    especie: "Psidium guajava",
    altura_maxima: "10 m",
    notas: "Fruta muy aromática y rica en vitamina C, nativa de América y muy extendida en la costa y selva de Perú.",
    imagen: "https://mejorconsalud.as.com/wp-content/uploads/2013/09/iStock-1224636159-1200x800.jpg"
  },
  {
    id: 42,
    nombre: "Algodón Nativo",
    origen: "Costa norte de Perú",
    especie: "Gossypium barbadense",
    altura_maxima: "3 m",
    notas: "Perú es centro de origen de este algodón de fibra extralarga, que crece naturalmente en colores como pardo y lila.",
    imagen: "https://portal.andina.pe/EDPfotografia3/Thumbnail/2020/04/27/000671378W.jpg"
  },
  {
    id: 43,
    nombre: "Copal",
    origen: "Amazonía",
    especie: "Dacryodes peruviana",
    altura_maxima: "25 m",
    notas: "Árbol cuya resina aromática se usa como incienso en ceremonias y también como repelente de insectos.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSt6k_EU0nE5azwL7ZT76_WaaRHoA_qlT1Rg&s"
  },
  {
    id: 44,
    nombre: "Huingán",
    origen: "Lomas costeras y sierra baja",
    especie: "Schinus polygama",
    altura_maxima: "4 m",
    notas: "Arbusto resinoso de frutos oscuros, pariente del molle, adaptado a climas áridos y semiáridos.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQFlBdFEp39bxChkx4I41o6DbNPWL6gpvAQ&s"
  },
  {
    id: 45,
    nombre: "Ayahuasca",
    origen: "Cuenca amazónica",
    especie: "Banisteriopsis caapi",
    altura_maxima: "30 m (liana)",
    notas: "Liana sagrada y componente principal de la bebida del mismo nombre, utilizada en la medicina tradicional amazónica.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Ayahuasca_and_chacruna_cocinando.jpg/250px-Ayahuasca_and_chacruna_cocinando.jpg"
  },
  {
    id: 46,
    nombre: "Flor de Amancaes",
    origen: "Lomas de la costa central (Lima)",
    especie: "Ismene amancaes",
    altura_maxima: "0.5 m",
    notas: "Flor emblemática de la ciudad de Lima, que florece una vez al año durante el invierno húmedo de las lomas.",
    imagen: "https://www.kukyflor.com/blog/wp-content/uploads/2015/01/flor-de-amancae-amancay-pachamac-Peru-Lima.jpg"
  },
  {
    id: 47,
    nombre: "Carrizo",
    origen: "Riberas de ríos costeros",
    especie: "Arundo donax",
    altura_maxima: "6 m",
    notas: "Planta similar al bambú, utilizada desde tiempos prehispánicos para construir techos, paredes (quincha) e instrumentos musicales.",
    imagen: "https://www.picturethisai.com/wiki-image/1080/153968560354361367.jpeg"
  },
  {
    id: 48,
    nombre: "Huarango",
    origen: "Bosques secos de la costa",
    especie: "Prosopis pallida",
    altura_maxima: "18 m",
    notas: "Árbol clave del ecosistema desértico, extremadamente resistente a la sequía gracias a sus profundas raíces.",
    imagen: "https://static.wixstatic.com/media/ec29c6_658ed52cf8394d628fe01dd961565811~mv2.png/v1/fill/w_1804,h_1287,al_c,q_95,enc_avif,quality_auto/ec29c6_658ed52cf8394d628fe01dd961565811~mv2.png"
  },
  {
    id: 49,
    nombre: "Chachacomo",
    origen: "Valles andinos",
    especie: "Escallonia resinosa",
    altura_maxima: "10 m",
    notas: "Árbol cuya madera es muy dura y apreciada para fabricar herramientas agrícolas y en la construcción.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT31gZQOCw8FVviZUlLc32niobIlJTiS4fKlw&s"
  },
  {
    id: 50,
    nombre: "Yareta",
    origen: "Ecosistemas de puna (sobre 4,000 msnm)",
    especie: "Azorella compacta",
    altura_maxima: "1 m (cojín)",
    notas: "Planta de crecimiento extremadamente lento que forma cojines duros y compactos. Puede vivir miles de años.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJem34Sj0ufMeRioqo5lvE2IynoGn2ikuCcQ&s"
  }
];  
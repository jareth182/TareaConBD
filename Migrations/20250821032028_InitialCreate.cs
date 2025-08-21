using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SimulaciónBD.Migrations 
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Plantas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nombre = table.Column<string>(type: "TEXT", nullable: false),
                    Origen = table.Column<string>(type: "TEXT", nullable: false),
                    Especie = table.Column<string>(type: "TEXT", nullable: false),
                    AlturaMaxima = table.Column<string>(type: "TEXT", nullable: false),
                    Notas = table.Column<string>(type: "TEXT", nullable: false),
                    Imagen = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Plantas", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Plantas",
                columns: new[] { "Id", "Nombre", "Origen", "Especie", "AlturaMaxima", "Notas", "Imagen" },
                values: new object[,]
                {
                    { 1, "Papa", "Andes peruanos", "Solanum tuberosum", "1 m", "Tubérculo fundamental en la gastronomía mundial, con miles de variedades nativas en Perú. Es una fuente principal de carbohidratos.", "https://www.herbazest.com/imgs/0/a/c/451775/papa.jpg" },
                    { 2, "Quinua", "Altiplano andino", "Chenopodium quinoa", "2 m", "Pseudocereal de alto valor nutritivo, considerado un superalimento por su contenido completo de aminoácidos esenciales.", "https://img.chemie.de/Portal/News/685e543f49d75_mdn67M3S4.png?tr=w-1232,h-616,cm-extract,x-0,y-199:n-news_teaser" },
                    { 3, "Maca", "Andes centrales (Junín)", "Lepidium meyenii", "0.2 m", "Raíz andina conocida por sus propiedades energizantes y nutritivas. Crece a altitudes extremas, entre 3800 y 4500 msnm.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8L2fqckfCb-1E1HsKTizTAEOUsKd9tAUMA&s" },
                    { 4, "Uña de Gato", "Selva amazónica peruana", "Uncaria tomentosa", "30 m (liana)", "Planta trepadora utilizada en la medicina tradicional por sus potentes propiedades antiinflamatorias.", "https://fitoterapiacampos.com/wp-content/uploads/2022/06/unaga.jpg" },
                    { 5, "Maíz Morado", "Valles interandinos", "Zea mays L.", "3 m", "Variedad de maíz con un grano de color morado intenso, utilizado para preparar la chicha morada. Rico en antioxidantes.", "https://peru.info/archivos/publicacion/167-imagen-121522582020.jpg" },
                    { 6, "Kiwicha", "Andes peruanos", "Amaranthus caudatus", "2.5 m", "También conocida como amaranto, es un grano de alto valor proteico, rico en lisina, un aminoácido esencial.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEZ7McjQEIc9MqZjxw4TlYiXJwzI9kMRRpg&s" },
                    { 7, "Camu Camu", "Amazonía peruana", "Myrciaria dubia", "5 m", "Fruto que posee el mayor contenido de Vitamina C del planeta. Crece en las riberas de los ríos amazónicos.", "https://www.agraria.pe/imgs/a/lx/exportaciones-peruanas-de-camu-camu-alcanzaron-record-en-202-23887.jpg" },
                    { 8, "Yacón", "Valles andinos cálidos", "Smallanthus sonchifolius", "2 m", "Raíz de sabor dulce y textura crujiente, conocida por su bajo contenido calórico y sus prebióticos (inulina).", "https://peru.info/archivos/publicacion/149-imagen-153748652020.jpg" },
                    { 9, "Aguaymanto", "Valles interandinos", "Physalis peruviana", "1 m", "Fruto agridulce envuelto en un cáliz, rico en antioxidantes, vitaminas A y C. Conocido también como 'golden berry'.", "https://portal.andina.pe/EDPfotografia3/Thumbnail/2018/04/16/000497155W.jpg" },
                    { 10, "Lúcuma", "Valles interandinos peruanos", "Pouteria lucuma", "15 m", "Fruta apodada 'el oro de los Incas', usada en postres por su pulpa cremosa y sabor único, similar al caramelo.", "https://s1.elespanol.com/2020/10/26/ciencia/nutricion/fruta-frutas-superalimentos_531209049_163611377_1706x1280.jpg" },
                    { 11, "Sacha Inchi", "Amazonía peruana", "Plukenetia volubilis", "2 m (planta)", "Semilla conocida como el 'maní del Inca', excepcionalmente rica en ácidos grasos Omega 3, 6 y 9.", "https://www.consumoteca.pe/wp-content/uploads/Sacha-inchi-de-Peru-Peru-info.jpg" },
                    { 12, "Chirimoya", "Andes del norte de Perú", "Annona cherimola", "9 m", "Fruta de pulpa blanca, dulce y jugosa, considerada una de las frutas más finas del mundo por su sabor complejo.", "https://image.tuasaude.com/media/article/bv/jm/chirimoya_62830.jpg" },
                    { 13, "Olluco", "Andes", "Ullucus tuberosus", "0.5 m", "Tubérculo de colores vivos y textura mucilaginosa, segundo en popularidad en los Andes después de la papa.", "https://peru.info/archivos/publicacion/141-imagen-1431491572020.jpg" },
                    { 14, "Cañihua", "Altiplano andino", "Chenopodium pallidicaule", "0.6 m", "Grano andino pariente de la quinua, altamente resistente a las heladas. Rico en proteínas y flavonoides.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbYG7uu7AwZ6GcPClQfBs1OxZn1pCqBrkDQ&s" },
                    { 15, "Tara", "Valles secos interandinos", "Caesalpinia spinosa", "5 m", "Arbusto cuyas vainas son una fuente rica en taninos, usados en la industria del cuero y la farmacéutica.", "https://agraria.pe/imgs/a/lx/peru-cuenta-con-aproximadamente-10-mil-hectareas-de-tara-29803.jpg" },
                    { 16, "Muña", "Sierra peruana", "Minthostachys mollis", "1.2 m", "Planta aromática usada tradicionalmente como infusión para aliviar el mal de altura y problemas digestivos.", "https://sites.peru.info/DesktopModules/BB_LA_Superfood_Home/Images/Mu%C3%B1a/hierbas-mu%C3%B1a-detalle.jpg" },
                    { 17, "Pacay", "Amazonía y valles costeros", "Inga feuilleei", "18 m", "Árbol cuya vaina contiene una pulpa blanca y algodonosa de sabor dulce, muy popular entre los niños.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKfKwu801HlkrnDsGu-lai93YDp9JupUr3A&s" },
                    { 18, "Oca", "Andes centrales", "Oxalis tuberosa", "0.4 m", "Tubérculo de sabores que van desde el dulce hasta el amargo, con una amplia variedad de colores y formas.", "https://consejonutricional.com/wp-content/uploads/2014/08/oxalis_tuberosa.jpg?w=500" },
                    { 19, "Granadilla", "Estribaciones andinas", "Passiflora ligularis", "5 m (trepadora)", "Fruta de la pasión de cáscara dura y anaranjada, con una pulpa gelatinosa, dulce y aromática.", "https://peru.info/archivos/publicacion/142-imagen-182132332020.jpg" },
                    { 20, "Cacao", "Cuenca amazónica", "Theobroma cacao", "8 m", "El cacao chuncho de Perú es una de las variedades más finas del mundo, base para el chocolate de alta calidad.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_EHlJod26ZzxV8Jp7Ia-96qDg_RSwhNQFg&s" },
                    { 21, "Mashua", "Andes (1,000-4,000 msnm)", "Tropaeolum tuberosum", "1 m (planta)", "Tubérculo conocido por su sabor picante en crudo, que se vuelve suave al cocinarse. Se le atribuyen propiedades medicinales.", "https://usil-blog.s3.amazonaws.com/PROD/blog/image/mashua.jpg" },
                    { 22, "Ají Charapita", "Selva peruana", "Capsicum frutescens", "0.8 m", "Pequeño ají amarillo muy aromático y picante, esencial en la cocina amazónica. Considerado uno de los más caros del mundo.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYn44EHnO7RpaOPvlIsO9SFpb8mCpXo8Dzg&s" },
                    { 23, "Pallar", "Costa norte y central", "Phaseolus lunatus", "4 m (trepadora)", "Legumbre grande y aplanada, base de la gastronomía de Ica. Domesticada en Perú hace miles de años.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5aLKg2jpOTBLZebd7YDuX-260MmGuRQj3Hw&s" },
                    { 24, "Árbol de la Quina", "Bosques de neblina andinos", "Cinchona officinalis", "15 m", "Árbol nacional de Perú, presente en el escudo. Su corteza es la fuente natural de la quinina, usada para tratar la malaria.", "https://i0.wp.com/www.actualidadambiental.pe/wp-content/uploads/2017/07/ficus-andina-700x498.jpg?resize=700%2C498" },
                    { 25, "Cantuta", "Valles andinos de Perú y Bolivia", "Cantua buxifolia", "3 m", "Flor nacional de Perú, considerada la 'Flor Sagrada de los Incas'. Sus flores tienen forma de campana y colores intensos.", "https://i0.wp.com/www.actualidadambiental.pe/wp-content/uploads/2025/02/Flor-del-Inca.jpg?fit=640%2C455&ssl=1" },
                    { 26, "Chanca Piedra", "Amazonía", "Phyllanthus niruri", "0.7 m", "Hierba silvestre famosa en la medicina tradicional por su supuesta capacidad para disolver los cálculos renales y biliares.", "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/PHVQISSUPFDCLDHTEWCIK43A4Y.jpg" },
                    { 27, "Zapallo Loche", "Costa norte (Lambayeque)", "Cucurbita moschata", "0.5 m (rastrera)", "Calabaza con Denominación de Origen, muy apreciada en la gastronomía norteña por su aroma y sabor distintivos.", "https://portal.andina.pe/EDPfotografia3/Thumbnail/2021/03/23/000759798W.jpg" },
                    { 28, "Pijuayo", "Amazonía", "Bactris gasipaes", "20 m", "Fruto de una palmera, rico en carbohidratos y grasas. Se consume cocido y es un alimento básico para muchas comunidades amazónicas.", "https://www.agraria.pe/imgs/a/lx/aprueban-norma-tecnica-para-impulsar-requisitos-de-calidad-d-22473.jpg" },
                    { 29, "Puya de Raimondi", "Zonas altoandinas", "Puya raimondii", "12 m (inflorescencia)", "La inflorescencia más grande del mundo. Florece una sola vez en su vida después de varias décadas (hasta 100 años) y luego muere.", "https://blog.viajesmachupicchu.travel/wp-content/uploads/2024/11/puya-raimondi_1.jpg" },
                    { 30, "Paico", "América tropical", "Dysphania ambrosioides", "1.2 m", "Hierba aromática usada como condimento y como planta medicinal, especialmente por sus propiedades antiparasitarias.", "https://herbario.istmas.edu.ec/wp-content/uploads/2022/05/PAICO.jpg" },
                    { 31, "Copaiba", "Amazonía", "Copaifera officinalis", "30 m", "Árbol del cual se extrae un aceite o resina con potentes propiedades cicatrizantes y antiinflamatorias.", "https://media.istockphoto.com/id/2151952401/es/foto/%C3%A1rbol-de-copaiba-lleno-de-semillas-en-el-campo.jpg?s=612x612&w=0&k=20&c=EKVykYdSCJIIWprgtQ6A2e5wesMFqKDmIwfqUYYtvqg=" },
                    { 32, "Sangre de Grado", "Amazonía", "Croton lechleri", "20 m", "La savia roja de este árbol es un potente cicatrizante natural, usado tópicamente para cortes y heridas.", "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/13E3F/production/_110317418_sangre.jpg.webp" },
                    { 33, "Hierba Luisa", "Sudamérica", "Aloysia citrodora", "3 m", "Arbusto con un intenso aroma a limón, muy popular en Perú para preparar infusiones digestivas y relajantes.", "https://inaturalist-open-data.s3.amazonaws.com/photos/61513592/large.jpg" },
                    { 34, "Hercampuri", "Sierra peruana", "Gentianella alborosea", "0.15 m", "Planta pequeña y amarga, utilizada en la medicina tradicional como desintoxicante y para reducir el colesterol.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkAgBeuIN-NL7xaK7yNGCwzft-uW4pGnXBsA&s" },
                    { 35, "Tumbo", "Valles interandinos", "Passiflora mollissima", "6 m (trepadora)", "Fruta alargada, pariente del maracuyá, de sabor ácido. Ideal para jugos, postres y cócteles.", "https://blog.viajesmachupicchu.travel/wp-content/uploads/2024/11/tumbo_portada-1170x550.jpg" },
                    { 36, "Pepino Dulce", "Región andina", "Solanum muricatum", "1 m", "Fruta jugosa y refrescante, de sabor similar a un melón dulce. Se consume fresca, en jugos o ensaladas.", "https://www.infobae.com/new-resizer/5xv0yuLA7MYsDWUXkow-FkhPqSc=/arc-anglerfish-arc2-prod-infobae/public/3DMTLSCW6NDWXPEXFMYOEE2ML4.jpg" },
                    { 37, "Queñua", "Zonas altoandinas (3,000-5,000 msnm)", "Polylepis", "15 m", "Árbol que crece a mayor altitud en el mundo. Su corteza rojiza se desprende en láminas para protegerlo del frío.", "https://www.rumbosdelperu.com/wp-content/uploads/2020/12/Quenua_07.jpg" },
                    { 38, "Coca", "Estribaciones andino-amazónicas", "Erythroxylum coca", "2.5 m", "Planta sagrada en la cultura andina, usada para el chacchado (masticado) para mitigar el hambre, la sed y el cansancio.", "https://www.peru.travel/Contenido/General/Imagen/es/616/1.1/hoja-de-coca.jpg" },
                    { 39, "Achiote", "Amazonía", "Bixa orellana", "10 m", "De sus semillas se extrae un colorante natural rojo-amarillo, usado como condimento y tinte en la gastronomía.", "https://image.tuasaude.com/media/article/dx/no/achiote_71288.jpg" },
                    { 40, "Molle", "Valles interandinos", "Schinus molle", "15 m", "Árbol muy resistente a la sequía, cuyas bayas rosadas se usan para hacer chicha y como un sustituto de la pimienta.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupM2t-9yO26Osb8rRE-rPXa1-XNX_BY8Tmg&s" },
                    { 41, "Guayaba", "América tropical", "Psidium guajava", "10 m", "Fruta muy aromática y rica en vitamina C, nativa de América y muy extendida en la costa y selva de Perú.", "https://mejorconsalud.as.com/wp-content/uploads/2013/09/iStock-1224636159-1200x800.jpg" },
                    { 42, "Algodón Nativo", "Costa norte de Perú", "Gossypium barbadense", "3 m", "Perú es centro de origen de este algodón de fibra extralarga, que crece naturalmente en colores como pardo y lila.", "https://portal.andina.pe/EDPfotografia3/Thumbnail/2020/04/27/000671378W.jpg" },
                    { 43, "Copal", "Amazonía", "Dacryodes peruviana", "25 m", "Árbol cuya resina aromática se usa como incienso en ceremonias y también como repelente de insectos.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSt6k_EU0nE5azwL7ZT76_WaaRHoA_qlT1Rg&s" },
                    { 44, "Huingán", "Lomas costeras y sierra baja", "Schinus polygama", "4 m", "Arbusto resinoso de frutos oscuros, pariente del molle, adaptado a climas áridos y semiáridos.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQFlBdFEp39bxChkx4I41o6DbNPWL6gpvAQ&s" },
                    { 45, "Ayahuasca", "Cuenca amazónica", "Banisteriopsis caapi", "30 m (liana)", "Liana sagrada y componente principal de la bebida del mismo nombre, utilizada en la medicina tradicional amazónica.", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Ayahuasca_and_chacruna_cocinando.jpg/250px-Ayahuasca_and_chacruna_cocinando.jpg" },
                    { 46, "Flor de Amancaes", "Lomas de la costa central (Lima)", "Ismene amancaes", "0.5 m", "Flor emblemática de la ciudad de Lima, que florece una vez al año durante el invierno húmedo de las lomas.", "https://www.kukyflor.com/blog/wp-content/uploads/2015/01/flor-de-amancae-amancay-pachamac-Peru-Lima.jpg" },
                    { 47, "Carrizo", "Riberas de ríos costeros", "Arundo donax", "6 m", "Planta similar al bambú, utilizada desde tiempos prehispánicos para construir techos, paredes (quincha) e instrumentos musicales.", "https://www.picturethisai.com/wiki-image/1080/153968560354361367.jpeg" },
                    { 48, "Huarango", "Bosques secos de la costa", "Prosopis pallida", "18 m", "Árbol clave del ecosistema desértico, extremadamente resistente a la sequía gracias a sus profundas raíces.", "https://static.wixstatic.com/media/ec29c6_658ed52cf8394d628fe01dd961565811~mv2.png/v1/fill/w_1804,h_1287,al_c,q_95,enc_avif,quality_auto/ec29c6_658ed52cf8394d628fe01dd961565811~mv2.png" },
                    { 49, "Chachacomo", "Valles andinos", "Escallonia resinosa", "10 m", "Árbol cuya madera es muy dura y apreciada para fabricar herramientas agrícolas y en la construcción.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT31gZQOCw8FVviZUlLc32niobIlJTiS4fKlw&s" },
                    { 50, "Yareta", "Ecosistemas de puna (sobre 4,000 msnm)", "Azorella compacta", "1 m (cojín)", "Planta de crecimiento extremadamente lento que forma cojines duros y compactos. Puede vivir miles de años.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJem34Sj0ufMeRioqo5lvE2IynoGn2ikuCcQ&s" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Plantas");
        }
    }
}
<template>
  <section class="section" id="animals">
    <p class="section-subtitle">
      <img
        src="../assets/images/subtitle-img-green.png"
        width="32"
        height="7"
        alt="wavy line"
      />
      <span>Familias de animales</span>
    </p>

    <div class="families-container">
      <div
        class="family"
        v-for="(family, index) in families"
        v-bind:key="index"
      >
        <div class="img-container">
          <img :src="family.img" class="family-img" alt="" />
        </div>
        <div class="card-container">
          <div class="title">{{ family.name }}</div>
          <div class="line"></div>
          <div class="info">{{ family.description }}</div>
          <div class="info">
            <span class="blue">Hábitat:</span>
            {{ family.habitat }}
          </div>
          <div class="info">
            <span class="orange">Peligro de extinción:</span>
            {{ family.extinction }}
          </div>
          <div class="btn-container">
            <button
              class="btn btn-secondary"
              @click="goFamilyDetail($router, family.name, family.animals)"
            >
              Ver familia
              <ion-icon class="padding" name="heart-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
function goFamilyDetail(router, name, animals) {
  localStorage.setItem("selectedFamily", JSON.stringify({ name, animals }));

  router.push({
    path: `/familia/${name}`,
  });
}

const families = [
  {
    name: "Águilas",
    img: "/families/aguilas.jpg",
    description:
      "Majestuosas aves rapaces diurnas con picos y garras afiladas, vista excepcional y vuelo potente.",
    habitat: "Bosques, montañas, praderas y zonas áridas.",
    extinction:
      "Algunas especies están en peligro por la caza y la pérdida de hábitat.",
    animals: [
      { name: "Aguila esteparia", scientific: "Aquila nipalensis" },
      { name: "Ratonero cola roja", scientific: "Buteo jamaicensis" },
      { name: "Águila imperial", scientific: "Aquila adalberti" },
      { name: "Halcón harris", scientific: "Parabuteo unicinctus" },
      { name: "Águila calzada", scientific: "Hieraaetus pennatus" },
      { name: "Aguilucho lagunero", scientific: "Circus aeruginosus" },
      { name: "Milano negro", scientific: "Milvus migrans" },
      { name: "Ratonero común", scientific: "Buteo buteo" },
    ],
  },
  {
    name: "Anátidas",
    img: "/families/anatidas.jpg",
    description:
      "Aves acuáticas con patas palmeadas para nadar. Poseen un pico ancho y plano para filtrar agua y alimentarse",
    habitat: "Lagos, ríos, estanques, humedales y zonas costeras.",
    extinction:
      "Algunas especies amenazadas por la pérdida de hábitat, la caza y la contaminación.",
    animals: [
      { name: "Tarro blanco", scientific: "Tadorna tadorna" },
      { name: "Pato peposaca", scientific: "Netta peposaca" },
      { name: "Pato colorado", scientific: "Netta rufina" },
      { name: "Barnacla cuellirroja", scientific: "Branta ruficollis" },
      { name: "Oca domestica", scientific: "Anser domesticus" },
      { name: "Barnacla nene", scientific: "Branta sandvicensis" },
      { name: "Barnacla cariblanca", scientific: "Branta leucopsis" },
      { name: "Dendrocygna viuda", scientific: "Dendrocygna viudata" },
      { name: "Cisne blanco", scientific: "Cygnus olor" },
      { name: "Tarro canelo", scientific: "Tadoma ferruginea" },
      { name: "Rabudo bahamas", scientific: "Anas bahamensis" },
      { name: "Serreta coronada", scientific: "Lophodytes cucullatus" },
      { name: "Ganso emperador", scientific: "Chen canagica" },
      { name: "Ganso magallanes", scientific: "Chloephaga picta" },
      { name: "Ansar indico", scientific: "Anser indicus" },
      { name: "Ganso cereopsis", scientific: "Cereopsis novaehollandiae" },
      { name: "Cisne negro", scientific: "Cygnus atratus" },
      { name: "Cisne cuello negro", scientific: "Cygnus melancoryphus" },
      { name: "Rabudo de Europa", scientific: "Anas acuta" },
      { name: "Tarro del cabo", scientific: "Tadorna cana" },
      { name: "Cerceta de collar", scientific: "Callonetta leucophrys" },
      { name: "Cerceta cinabrio", scientific: "Anas cyanoptera" },
      { name: "Cerceta versicolor", scientific: "Anas versicolor" },
      { name: "Cerceta baikal", scientific: "Anas formosa" },
      { name: "Cerceta de alfanjes", scientific: "Anas falcata" },
      { name: "Serreta chica", scientific: "Mergellus albellus" },
      { name: "Dendrocygna de Java", scientific: "Dendrocygna javaica" },
      { name: "Porrón moñudo", scientific: "Aythya fulicula" },
      { name: "Ansar común", scientific: "Anser anser" },
      { name: "Ganso chino", scientific: "Ansar cygnoides" },
      { name: "Corredor indio", scientific: "Anas platyrhynchos" },
      { name: "Pato mandarin", scientific: "Aix galericulata" },
      { name: "Silbón americano", scientific: "Mareca americana" },
      { name: "Silbón de chile", scientific: "Anas sibilatrix" },
      { name: "Silbón europeo", scientific: "Mareca penelope" },
      { name: "Ganso andino", scientific: "Chloephaga melanoptera" },
      { name: "Pato carolina", scientific: "Aix sponsa" },
      { name: "Barnacla de hawai", scientific: "Branta sandvicensis" },
    ],
  },
  {
    name: "Avefrías",
    img: "/families/avefrias.jpg",
    description:
      "Aves zancudas. Se alimentan de insectos, gusanos y crustáceos.",
    habitat: "Praderas, campos agrícolas y zonas húmedas.",
    extinction:
      "Algunas especies amenazadas por la pérdida de hábitat y el uso de pesticidas.",
    animals: [{ name: "Avefria militar", scientific: "Vanellus miles" }],
  },
  {
    name: "Búhos",
    img: "/families/buhos.jpg",
    description:
      "Aves rapaces nocturnas con ojos grandes y sensibles a la luz. Poseen un oído muy fino y un vuelo silencioso.",
    habitat: "Bosques, montañas, desiertos y praderas.",
    extinction:
      "Algunas especies amenazadas por la pérdida de hábitat, la caza y la superstición.",
    animals: [
      { name: "Búho bengali", scientific: "Bubo bengalensis" },
      { name: "Autillo cariblanco", scientific: "Ptilopsis leucotis" },
      { name: "Buho real", scientific: "Bubo bubo" },
      { name: "Buho lechoso", scientific: "Bubo lacteus" },
      { name: "Búho real siberiano", scientific: "Bubo bubo siberiano" },
      { name: "Búho americano", scientific: "Bubo virginianus" },
      { name: "Búho barrado", scientific: "Pulsatrix melanota" },
      { name: "Lechuzón de anteojos", scientific: "Pusatrix perspicillata" },
      { name: "Carabo común", scientific: "Strix aluco" },
      { name: "Lechuza común", scientific: "Tyto alba" },
      { name: "Cárabo lapón", scientific: "Strix nebulosa" },
      { name: "Mochuelo", scientific: " Athene noctua" },
      { name: "Buho nival", scientific: "Nyctea scandiacus" },
    ],
  },
  {
    name: "Buitres",
    img: "/families/buitres.jpg",
    description:
      "Aves carroñeras de gran tamaño y un fuerte sentido del olfato. Juegan un papel importante en el ecosistema al limpiar los restos de animales muertos.",
    habitat: "Montañas, praderas y zonas áridas.",
    extinction:
      "Algunas especies amenazadas por la ingestión de plomo de animales cazados o la pérdida de hábitat.",
    animals: [{ name: "Buitre leonado", scientific: "Gyps fulvus" }],
  },
  {
    name: "Cigüeñelas y Avocetas",
    img: "/families/avocetas.jpg",
    description:
      "Aves zancudas con pico largo y fino. Se alimentan de pequeños peces, crustáceos e insectos.",
    habitat: "Zonas húmedas, lagunas, salinas y estuarios.",
    extinction:
      "Algunas especies amenazadas por la pérdida de hábitat y la contaminación.",
    animals: [
      { name: "Avoceta", scientific: "Recurvirostra avosetta" },
      { name: "Cigúeñela", scientific: "Himantopus himantopus" },
    ],
  },
  {
    name: "Faisanes",
    img: "/families/faisanes.jpg",
    description:
      "Aves de tamaño mediano con plumaje colorido. Los machos son más coloridos que las hembras.",
    habitat: "Bosques, montañas y praderas.",
    extinction:
      "Algunas especies amenazadas por la caza, la pérdida de hábitat y el comercio ilegal de mascotas.",
    animals: [
      { name: "Faisán monal", scientific: "Lophpohorus impejanus" },
      { name: "Tragopan satyr", scientific: "Tragopan satyra" },
      { name: "Tragopan temminck", scientific: "Tragopan temminckii" },
      { name: "Faisán lady", scientific: "Chrysolophus amherstiae" },
      { name: "Faisán plateado", scientific: "Lophura nycthemera" },
      { name: "Faisán swinhoe", scientific: "Lophura swinhoii" },
      { name: "Faisán venerado", scientific: "Syrmaticus reevesii" },
      { name: "Faisán hume", scientific: "Syrmaticus humiae" },
      { name: "Faisán vietnam", scientific: "Lophura edwardsi hatinhensis" },
      { name: "Faisán noble de borneo", scientific: "Lophura ignita" },
      { name: "Faisán germain", scientific: "Polyplectron germaini" },
      { name: "Faisán prelado", scientific: "Lophura diardi" },
      { name: "Faisán orejudo marrón", scientific: "Crossoptilon man" },
      { name: "Faisán vieillot", scientific: "Lophura rufa" },
      { name: "Faisán Koklas", scientific: "Pucrasia macrolopha" },
      { name: "Faisán orejudo azul", scientific: " Crossoptilon auritum" },
      { name: "Faisán Elliot", scientific: "Syrmaticus ellioti" },
      { name: "Faisán Palawan", scientific: "Polyplectron napoleonis" },
      { name: "Faisán dorado (5000)", scientific: "Chrysolophus pictus" },
      { name: "Faisán chinquis", scientific: "Polyplectron bicalcaratum" },
      {
        name: "Faisán orejudo blanco",
        scientific: " Crossoptilum auritum drouyni",
      },
      { name: "Faisán vietnam", scientific: "Lophura edwardsi hatinhensis" },
    ],
  },
  {
    name: "Flamencos",
    img: "/families/flamencos.jpg",
    description:
      "Aves acuáticas de gran tamaño con patas largas y pico curvado. Su plumaje es rosado o rojo debido a los pigmentos que obtienen de su dieta.",
    habitat: "Lagos salobres y lagunas saladas",
    extinction:
      "Algunas especies amenazadas por la pérdida de hábitat y la extracción de agua.",
    animals: [{ name: "Flamenco comun", scientific: "Phoenicopterus ruber" }],
  },
  {
    name: "Gallos",
    img: "/families/gallos.jpg",
    description:
      "Aves de tamaño mediano con plumaje colorido. Las hembras son más pequeñas y menos coloridas que los machos.",
    habitat: "Zonas rurales y urbanas en todo el mundo.",
    extinction: "",
    animals: [{ name: "Sedosa japonesa", scientific: "Gallus gallus dom." }],
  },
  {
    name: "Garzas",
    img: "/families/garzas.jpg",
    description: "Aves zancudas de tamaño mediano con pico largo y afilado.",
    habitat: "Zonas húmedas, lagunas, ríos y manglares.",
    extinction:
      "Algunas especies amenazadas por la pérdida de hábitat y la contaminación.",
    animals: [
      { name: "Espátula común", scientific: "Platalea leucorodia" },
      { name: "Garcilla bueyera", scientific: "Bulbucus ibis" },
    ],
  },
  {
    name: "Ibis",
    img: "/families/ibis.jpg",
    description:
      "Aves acuáticas de tamaño mediano con pico largo y curvado. Su plumaje suele ser negro, blanco o rojo.",
    habitat: "Zonas húmedas, lagunas, salinas y estuarios.",
    extinction:
      "Algunas especies amenazadas por la caza, la pérdida de su hábitat y el uso de pesticidas.",
    animals: [
      { name: "Ibis blanco", scientific: "Eudocimus albus" },
      { name: "Ibis rojo", scientific: "Eudocimus ruber" },
    ],
  },
  {
    name: "Loros",
    img: "/families/loros.jpg",
    description:
      "Aves de tamaño variable con plumaje colorido y pico curvado. Poseen gran inteligencia y capacidad de imitar sonidos.",
    habitat: "Bosques tropicales y subtropicales en todo el mundo.",
    extinction:
      "Algunas especies están amenazadas por la pérdida de hábitat y el comercio ilegal de mascotas.",
    animals: [
      { name: "Inseparable fischer", scientific: "Agapornis fischeri" },
      { name: "Yaco de cola roja", scientific: "Psittacus erithacu" },
      {
        name: "Loro ecléctico",
        scientific: "Eclectus roratus",
        img: "/animals/loro-eclectico.jpg",
        description:
          "Presenta un dimorfismo sexual pronunciado. Los machos tienen el pico color coral, un plumaje verde con plumas rojas y azules al nivel de las alas y de la cola. Las hembras tienen el pico negro, un plumaje rojo a nivel de la cabeza y de la cola, azul a nivel de pecho y de la nuca. Viven en parejas y pequeños grupos. Las bandadas se reúnen para comer fruta madura y pasar la noche en los árboles.",
        biology: { feeding: "Frutos secos, frutas, bayas", size: "38-43cm", reproduction: "2-4 huevos" },
        habitat: "Bosques de tierras bajas y en regiones más abiertas con árboles altos.",
        distribution_area: "Islas Salomón, Nueva Guinea, nordeste de Australia y Las Molucas",
        conservation_status: "",
      },
      { name: "Amazona frentiazul", scientific: "Amazona aestiva" },
      { name: "Lorito senegales", scientific: "Poicephalus senegalus" },
      { name: "Amazona alinaranja", scientific: "Amazona amazonica" },
      { name: "Guacamayo azul/ama.", scientific: "Ara ararauna" },
      { name: "Cacatua ninfa", scientific: "Nymphicus hollandicus" },
      { name: "Cacatúa blanca", scientific: "Cacatua alba" },
    ],
  },
  {
    name: "Ostrero",
    img: "/families/ostrero.jpg",
    description:
      "Aves zancudas de tamaño mediano con pico largo, fuerte y recto. Se alimentan principalmente de moluscos.",
    habitat: "Costas rocosas, playas arenosas y manglares en todo el mundo.",
    extinction:
      "Algunas especies están en peligro de extinción debido a la pérdida de hábitat, la contaminación y la sobreexplotación de moluscos.",
    animals: [{ name: "Ostrero común", scientific: "Haematopus ostralegus" }],
  },
  {
    name: "Pavos",
    img: "/families/pavos.jpg",
    description:
      "Aves de tamaño mediano a grande con plumaje colorido. Los machos son más grandes y coloridos que las hembras.",
    habitat: "Bosques, praderas y zonas rurales.",
    extinction:
      "Algunas especies están en peligro de extinción debido a la pérdida de hábitat y la caza.",
    animals: [
      { name: "Pavón copete de piedra", scientific: "Pauxi pauxi" },
      { name: "Pavo real común", scientific: "Pavo cristatus" },
      { name: "Pavo real ala negra", scientific: "Pavo cristatus" },
      {
        name: "Pavo real verde de java",
        scientific: "Pavo multicus imperator",
      },
      { name: "Pavo real blanco", scientific: "Pavo cristatus" },
    ],
  },
  {
    name: "Perdices y Codornices",
    img: "/families/codornices.jpg",
    description:
      "Aves terrestres de tamaño pequeño a mediano. Las perdices son más grandes y robustas que las codornices.",
    habitat: "Praderas, bosques abiertos y matorrales en todo el mundo.",
    extinction:
      "Algunas especies están en peligro de extinción debido a la pérdida de hábitat, la intensificación agrícola y la caza.",
    animals: [
      { name: "Perdíz pardilla", scientific: "Perdix perdix" },
      { name: "Codorniz común", scientific: "Coturnix coturnix" },
      { name: "Codorniz china", scientific: "Excalfactoria chinensis" },
    ],
  },
  {
    name: "Ratites",
    img: "/families/ratites.jpg",
    description:
      "Aves no voladoras de gran tamaño. Poseen alas vestigiales y patas fuertes.",
    habitat: "Sabanas, praderas y zonas semiáridas.",
    extinction:
      "Varias especies extintas, como el moa de Nueva Zelanda. El kiwi de Nueva Zelanda está en peligro de extinción.",
    animals: [
      { name: "Avestruz africana", scientific: "Sthrutio camelus" },
      { name: "Casuario común", scientific: "Casuarius casuarius" },
      { name: "Emu", scientific: "Dromaius novaehollandiae" },
      { name: "Ñandu", scientific: "" },
    ],
  },
  {
    name: "Tórtolas",
    img: "/families/tortolas.jpg",
    description: "Aves pequeñas y esbeltas con plumaje marrón o gris.",
    habitat: "Bosques, praderas, zonas urbanas y jardines en todo el mundo.",
    extinction:
      "Algunas especies en peligro de extinción debido a la pérdida de hábitat y la caza.",
    animals: [{ name: "Tortola diamante", scientific: "Geopelia cuneata" }],
  },
  {
    name: "Turacos",
    img: "/families/turacos.jpg",
    description:
      "Aves africanas de tamaño mediano con plumaje colorido. Poseen un pico fuerte y un copete eréctil.",
    habitat: "Bosques tropicales y subtropicales.",
    extinction:
      "Algunas especies están en peligro de extinción debido a la pérdida de hábitat y la caza.",
    animals: [
      { name: "Turaco crestiblanco", scientific: "Tauraco leucolophus" },
      { name: "Turaco violáceo", scientific: "Musophaga violacea" },
      { name: "Turaco mejilla blanca", scientific: "Turaco leucotis" },
    ],
  },
  {
    name: "Urugallo",
    img: "/families/urogallos.jpg",
    description:
      "Aves de gran tamaño que habitan en bosques boreales. Poseen un plumaje críptico y presentan dimorfismo sexual.",
    habitat: "Bosques boreales de coníferas en Eurasia y Norteamérica.",
    extinction:
      "Especies vulnerables debido a la pérdida de hábitat, la caza y la depredación.",
    animals: [{ name: "Urogallo", scientific: "Tetrao urugallus" }],
  },
];
</script>

<style scoped>
.section-subtitle {
  margin-left: 0.5em;
  padding-bottom: 2em;
}
.families-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  font-family: "Roboto", sans-serif;
}
.family {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45vw;
  min-width: 400px;
  color: #fff;
  margin-block: 2em;
  position: relative;
  padding-inline-end: 120px;
  padding-block-end: 120px;
}
.card-container {
  width: 75%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  padding: 1em;
  bottom: 0;
  right: 0;
  opacity: 0.92;
  height: 350px;
  border-radius: 4px;
  box-shadow: var(--card-shadow);
}
.title {
  font-size: var(--fs-5);
  color: #262626;
  font-weight: var(--fw-700);
}
.line {
  min-height: 4px;
  width: 100%;
  background-color: var(--pistachio);
  border-radius: 18px;
  margin-bottom: 0.3em;
}
.info {
  font-size: var(--fs-10);
  color: #787878;
  display: flex;
  flex-wrap: wrap;
  padding-block: 0.3em;
}
.info > span {
  margin-right: 0.5em;
  font-weight: var(--fw-500);
}
.orange {
  color: var(--bright-yellow-crayola);
}
.blue {
  color: #64c9bb;
}

.btn-container {
  width: 100%;
  padding-block: 0.5em;
}

.img-container {
  height: 400px;
  min-width: 400px;
}

.family-img {
  object-fit: cover;
  object-position: top;
  height: 100%;
  width: 100%;
}
</style>

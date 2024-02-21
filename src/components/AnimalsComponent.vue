<template>
  <section class="section animals" id="animals">
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
        @click="goFamilyDetail($router, family.name, family.animals)"
      >
        <div class="img-container">
          <img :src="family.img" class="family-img" alt="" />
        </div>
        <div class="card-title">{{ family.name }}</div>

        <ion-icon name="expand-outline"></ion-icon>
      </div>
    </div>
  </section>
</template>

<script setup>
function goFamilyDetail(router, name, animals) {
  console.log("jeje");
  localStorage.setItem("selectedFamily", JSON.stringify({ name, animals }));

  router.push({
    path: `/familia/${name}`,
  });
}

const families = [
  {
    name: "ÁGUILAS",
    img: "/families/aguilas.jpg",
    animals: [
      { name: "Aguila esteparia", scientific: "Aquila nipalensis" },
      { name: "Ratonero cola roja", scientific: "Buteo jamaicensis" },
      { name: "Águila imperial", scientific: "Aquila adalberti" },
      { name: "Halcón harris", scientific: "Parabuteo unicinctus" },
      { name: "Águila calzada", scientific: "Hieraaetus pennatus" },
      { name: "Halcón harris", scientific: "Parabuteo unicinctus" },
      { name: "Aguilucho lagunero", scientific: "Circus aeruginosus" },
      { name: "Milano negro", scientific: "Milvus migrans" },
      { name: "Ratonero común", scientific: "Buteo buteo" },
    ],
  },
  {
    name: "ANÁTIDAS",
    img: "/families/anatidas.jpg",
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
    name: "AVEFRÍAS",
    img: "/families/avefrias.jpg",
    animals: [{ name: "Avefria militar", scientific: "Vanellus miles" }],
  },
  {
    name: "BÚHOS",
    img: "/families/buhos.jpg",
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
    name: "BUITRES",
    img: "/families/buitres.jpg",
    animals: [{ name: "Buitre leonado", scientific: "Gyps fulvus" }],
  },
  {
    name: "CIGÜEÑUELAS Y AVOCETAS",
    img: "/families/avocetas.jpg",
    animals: [
      { name: "Avoceta", scientific: "Recurvirostra avosetta" },
      { name: "Cigúeñela", scientific: "Himantopus himantopus" },
    ],
  },
  {
    name: "FAISANES",
    img: "/families/faisanes.jpg",
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
    name: "FLAMENCOS",
    img: "/families/flamencos.jpg",
    animals: [{ name: "Flamenco comun", scientific: "Phoenicopterus ruber" }],
  },
  {
    name: "GALLOS",
    img: "/families/gallos.jpg",
    animals: [{ name: "Sedosa japonesa", scientific: "Gallus gallus dom." }],
  },
  {
    name: "GARZAS",
    img: "/families/garzas.jpg",
    animals: [
      { name: "Espátula común", scientific: "Platalea leucorodia" },
      { name: "Garcilla bueyera", scientific: "Bulbucus ibis" },
    ],
  },
  {
    name: "IBIS",
    img: "/families/ibis.jpg",
    animals: [
      { name: "Ibis blanco", scientific: "Eudocimus albus" },
      { name: "Ibis rojo", scientific: "Eudocimus ruber" },
    ],
  },
  {
    name: "LOROS",
    img: "/families/loros.jpg",
    animals: [
      { name: "Inseparable fischer", scientific: "Agapornis fischeri" },
      { name: "Yaco de cola roja", scientific: "Psittacus erithacu" },
      { name: "Loro ecléctico", scientific: "Eclectus roratus" },
      { name: "Amazona frentiazul", scientific: "Amazona aestiva" },
      { name: "Lorito senegales", scientific: "Poicephalus senegalus" },
      { name: "Amazona alinaranja", scientific: "Amazona amazonica" },
      { name: "Guacamayo azul/ama.", scientific: "Ara ararauna" },
      { name: "Cacatua ninfa", scientific: "Nymphicus hollandicus" },
      { name: "Cacatúa blanca", scientific: "Cacatua alba" },
    ],
  },
  {
    name: "OSTRERO",
    img: "/families/ostrero.jpg",
    animals: [{ name: "Ostrero común", scientific: "Haematopus ostralegus" }],
  },
  {
    name: "PAVOS",
    img: "/families/pavos.jpg",
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
    name: "PERDICES Y CODORNICES",
    img: "/families/codornices.jpg",
    animals: [
      { name: "Perdíz pardilla", scientific: "Perdix perdix" },
      { name: "Codorniz común", scientific: "Coturnix coturnix" },
      { name: "Codorniz china", scientific: "Excalfactoria chinensis" },
    ],
  },
  {
    name: "RATITES",
    img: "/families/ratites.jpg",
    animals: [
      { name: "Avestruz africana", scientific: "Sthrutio camelus" },
      { name: "Casuario común", scientific: "Casuarius casuarius" },
      { name: "Emu", scientific: "Dromaius novaehollandiae" },
      { name: "Ñandu", scientific: "" },
    ],
  },
  {
    name: "TÓRTOLAS",
    img: "/families/tortolas.jpg",
    animals: [{ name: "Tortola diamante", scientific: "Geopelia cuneata" }],
  },
  {
    name: "TURACOS",
    img: "/families/turacos.jpg",
    animals: [
      { name: "Turaco crestiblanco", scientific: "Tauraco leucolophus" },
      { name: "Turaco violáceo", scientific: "Musophaga violacea" },
      { name: "Turaco mejilla blanca", scientific: "Turaco leucotis" },
    ],
  },
  {
    name: "URUGALLO",
    img: "/families/urogallos.jpg",
    animals: [{ name: "Urogallo", scientific: "Tetrao urugallus" }],
  },
];
</script>

<style scoped>
.animals {
  padding: 8em 3em;
}

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
  width: 28vw;
  min-width: 400px;
  background-color: #212121;
  color: #fff;
  margin-block: 2em;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
}
.family {
  transition: var(--transition-2);
}

.family:is(:hover, :focus) > .img-container > img {
  opacity: 0.5;
}
.family:is(:hover, :focus) {
  transform: scale(1.05);
}

.family > ion-icon {
  color: var(--white);
  font-size: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: var(--transition-2);
}

.family:is(:hover, :focus) > ion-icon {
  opacity: 1;
}
.card-title {
  font-size: var(--fs-4);
  letter-spacing: 0.2rem;
}

.img-container {
  width: 28vw;
  max-width: 455px;
  height: 303px;
  min-width: 400px;
}

.family-img {
  border-radius: 8px 8px 0 0;
  object-fit: cover;
  object-position: top;
  height: 100%;
  width: 100%;
}
</style>

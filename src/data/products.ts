import chipsFryer from "@/assets/p-chips-fryer.jpg";
import electricFryer from "@/assets/p-electric-fryer.jpg";
import snackPlant from "@/assets/p-snack-plant.jpg";
import kurkureFryer from "@/assets/p-kurkure-fryer.jpg";
import gasFryer from "@/assets/p-gas-fryer.jpg";
import namkeenFryer from "@/assets/p-namkeen-fryer.jpg";
import extruder from "@/assets/p-extruder.jpg";
import soyaPlant from "@/assets/p-soya-plant.jpg";
import foodProcessing from "@/assets/p-food-processing.jpg";
import packing from "@/assets/p-packing.jpg";

export const productImages = {
  chipsFryer,
  electricFryer,
  snackPlant,
  kurkureFryer,
  gasFryer,
  namkeenFryer,
  extruder,
  soyaPlant,
  foodProcessing,
  packing,
};

export type Spec = { label: string; value: string };
export type Faq = { q: string; a: string };

export type Product = {
  slug: string;
  title: string;
  category: string;
  image: string;
  capacity: string;
  material: string;
  power: string;
  automation: string;
  summary: string;
  keywords: string[];
  specs: Spec[];
  features: string[];
  applications: string[];
  faqs: Faq[];
};

// export const hotProducts: Product[] = [
//   {
//     slug: "potato-banana-chips-batch-fryer",
//     title: "Potato & Banana Chips Batch Fryer",
//     category: "Industrial Batch Fryer",
//     image: chipsFryer,
//     capacity: "25 - 500 kg/hr",
//     material: "SS 304 Food Grade",
//     power: "1 HP - 3 HP + Gas/Electric Heating",
//     automation: "Semi-Automatic / Automatic",
//     summary:
//       "Heavy duty batch fryer engineered for uniform frying of potato wafers and banana chips with integrated slicer, oil filtration and stirring system for consistent colour and crispness.",
//     keywords: [
//       "potato chips batch fryer",
//       "banana chips frying machine",
//       "wafer fryer manufacturer",
//       "chips making machine price",
//     ],
//     specs: [
//       { label: "Output Capacity", value: "25 kg/hr to 500 kg/hr" },
//       { label: "Slicing Thickness", value: "0.8 mm - 2.5 mm adjustable" },
//       { label: "Oil Tank Capacity", value: "80 - 400 litres" },
//       { label: "Heating System", value: "LPG / PNG burner or electric heaters" },
//       { label: "Temperature Control", value: "Digital PID, 80°C - 220°C" },
//       { label: "Body Material", value: "SS 304, 1.5 - 2 mm thickness" },
//       { label: "Stirrer Drive", value: "Gear motor with VFD speed control" },
//     ],
//     features: [
//       "Uniform heat distribution with baffle plate oil circulation",
//       "Auto stirrer avoids chip sticking and breakage",
//       "Bottom sediment tray for easy oil cleaning",
//       "Insulated body for lower fuel consumption",
//       "Optional hydro extractor de-oiler integration",
//     ],
//     applications: ["Potato Wafers", "Banana Chips", "Tapioca Chips", "Sweet Potato Chips", "Plantain Chips"],
//     faqs: [
//       {
//         q: "What is the price of a potato chips batch fryer in India?",
//         a: "Price depends on capacity, heating type and automation level. Share your required output on WhatsApp and our team sends a same-day quotation.",
//       },
//       {
//         q: "Can the same fryer be used for banana chips?",
//         a: "Yes. The temperature control and stirrer speed can be adjusted for banana, tapioca and plantain chips on the same machine.",
//       },
//       {
//         q: "Do you install the machine at our site?",
//         a: "Yes, we provide installation, commissioning and operator training across India and for export orders.",
//       },
//     ],
//   },
//   {
//     slug: "electric-batch-fryer",
//     title: "Electric Batch Fryer",
//     category: "Industrial Batch Fryer",
//     image: electricFryer,
//     capacity: "20 - 250 kg/hr",
//     material: "SS 304 Food Grade",
//     power: "9 kW - 36 kW Heaters",
//     automation: "Semi-Automatic",
//     summary:
//       "Clean, smoke-free electric batch fryer with immersion heating elements and precise thermostatic control — ideal for indoor snack units, food courts and hygiene-sensitive plants.",
//     keywords: ["electric batch fryer", "electric deep fryer machine", "snack electric fryer manufacturer"],
//     specs: [
//       { label: "Output Capacity", value: "20 kg/hr to 250 kg/hr" },
//       { label: "Heating Elements", value: "Incoloy immersion heaters 9 - 36 kW" },
//       { label: "Thermostat Range", value: "60°C - 230°C digital control" },
//       { label: "Oil Capacity", value: "50 - 250 litres" },
//       { label: "Power Supply", value: "3 Phase, 415 V, 50 Hz" },
//       { label: "Body Material", value: "SS 304 mirror / matt finish" },
//     ],
//     features: [
//       "Zero flame, zero smoke operation",
//       "Swing-up heaters for quick cleaning",
//       "Low & high oil-level safety cut-off",
//       "Energy efficient insulated tank",
//     ],
//     applications: ["Namkeen", "French Fries", "Fried Snacks", "Cashew & Nuts", "Papad & Fryums"],
//     faqs: [
//       { q: "Is an electric fryer cheaper to run than gas?", a: "Gas is usually cheaper on fuel cost, but electric fryers give cleaner operation, faster heat-up and precise temperature control for premium snacks." },
//       { q: "What power connection is required?", a: "A 3 phase 415V connection sized for the heater bank, typically 9 kW to 36 kW depending on tank size." },
//     ],
//   },
//   {
//     slug: "snack-food-fryer-plant",
//     title: "Snack Food Fryer Plant",
//     category: "Industrial Batch Fryer",
//     image: snackPlant,
//     capacity: "100 - 1000 kg/hr",
//     material: "SS 304 Food Grade",
//     power: "5 HP - 15 HP",
//     automation: "Fully Automatic Line",
//     summary:
//       "Turnkey snack frying plant combining feeding conveyor, continuous fryer, de-oiling section, seasoning drum and cooling conveyor for large scale snack production.",
//     keywords: ["snack food fryer plant", "continuous frying line", "turnkey snack plant manufacturer"],
//     specs: [
//       { label: "Line Capacity", value: "100 kg/hr to 1000 kg/hr" },
//       { label: "Fryer Type", value: "Continuous mesh belt with submerger" },
//       { label: "Oil Filtration", value: "Inline continuous filtration unit" },
//       { label: "Heating", value: "Direct gas fired / thermic fluid" },
//       { label: "Sections", value: "Feeder, fryer, de-oiler, seasoning, cooling" },
//     ],
//     features: [
//       "Variable belt speed for exact frying time",
//       "Continuous oil filtration extends oil life",
//       "Hood with exhaust and heat recovery",
//       "Modular sections for future expansion",
//     ],
//     applications: ["Potato Chips", "Extruded Snacks", "Namkeen Mixtures", "Peanuts", "Pellet Snacks"],
//     faqs: [
//       { q: "What space is needed for a snack fryer plant?", a: "A 100 kg/hr line typically needs about 30 - 40 feet of length; our team provides a layout drawing before dispatch." },
//       { q: "Do you supply turnkey projects?", a: "Yes, we supply complete turnkey snack plants including utilities layout, installation and training." },
//     ],
//   },
//   {
//     slug: "kurkure-batch-fryer",
//     title: "Kurkure Batch Fryer",
//     category: "Industrial Batch Fryer",
//     image: kurkureFryer,
//     capacity: "50 - 300 kg/hr",
//     material: "SS 304 Food Grade",
//     power: "2 HP - 5 HP",
//     automation: "Semi-Automatic / Automatic",
//     summary:
//       "Purpose-built fryer for extruded kurkure and niknak collets, with gentle submerger mesh to keep the signature crunch and shape intact.",
//     keywords: ["kurkure batch fryer", "kurkure frying machine", "niknak fryer manufacturer"],
//     specs: [
//       { label: "Output Capacity", value: "50 kg/hr to 300 kg/hr" },
//       { label: "Frying Time", value: "12 - 30 seconds adjustable" },
//       { label: "Submerger", value: "SS wire mesh top belt" },
//       { label: "Heating", value: "LPG burner with pilot safety" },
//       { label: "Oil Temperature", value: "170°C - 200°C PID controlled" },
//     ],
//     features: [
//       "Gentle handling prevents collet breakage",
//       "Quick oil drain and clean-out design",
//       "Direct pairing with coating/masala drum",
//       "Fuel efficient burner assembly",
//     ],
//     applications: ["Kurkure", "Niknak Collets", "Corn Rings", "Extruded Puffs"],
//     faqs: [
//       { q: "Can this fryer be attached to my extruder line?", a: "Yes, it is designed to sit directly after a kurkure extruder and before the masala coating drum." },
//       { q: "What fuel does it use?", a: "LPG or PNG burners are standard; electric heating is available on request." },
//     ],
//   },
//   {
//     slug: "industrial-gas-batch-fryer",
//     title: "Industrial Gas Batch Fryer",
//     category: "Industrial Batch Fryer",
//     image: gasFryer,
//     capacity: "50 - 500 kg/hr",
//     material: "SS 304 Food Grade",
//     power: "1 HP + LPG/PNG Burner",
//     automation: "Semi-Automatic",
//     summary:
//       "Rugged gas fired batch fryer with high efficiency burner bank, ideal for namkeen and snack units seeking lowest cost per kilogram of production.",
//     keywords: ["industrial gas batch fryer", "gas fired fryer machine", "LPG batch fryer manufacturer"],
//     specs: [
//       { label: "Output Capacity", value: "50 kg/hr to 500 kg/hr" },
//       { label: "Heating Burner Type", value: "Multi-jet LPG/PNG burner with flame failure device" },
//       { label: "Oil Capacity", value: "100 - 500 litres" },
//       { label: "Temperature Control", value: "Thermostatic gas valve / PID" },
//       { label: "Insulation", value: "Ceramic wool insulated chamber" },
//     ],
//     features: [
//       "Lowest operating cost per kg fried",
//       "Flame failure safety device standard",
//       "Heavy gauge SS 304 tank for long life",
//       "Optional oil top-up tank with pump",
//     ],
//     applications: ["Namkeen", "Bhujia", "Chips", "Fryums", "Peanuts"],
//     faqs: [
//       { q: "Is a gas fryer safe for indoor use?", a: "Yes, with proper exhaust hood and the standard flame failure safety device fitted on every machine." },
//       { q: "How much gas does it consume?", a: "Consumption depends on tank size and batch cycle; our engineers share exact figures with the quotation." },
//     ],
//   },
//   {
//     slug: "namkeen-batch-fryer",
//     title: "Namkeen Batch Fryer",
//     category: "Industrial Batch Fryer",
//     image: namkeenFryer,
//     capacity: "30 - 400 kg/hr",
//     material: "SS 304 Food Grade",
//     power: "1.5 HP - 3 HP",
//     automation: "Semi-Automatic",
//     summary:
//       "Dedicated namkeen frying system with sev press compatibility, stirring arms and oil circulation to produce bhujia, sev, mixture and dal snacks at consistent quality.",
//     keywords: ["namkeen batch fryer", "bhujia frying machine", "sev fryer manufacturer india"],
//     specs: [
//       { label: "Output Capacity", value: "30 kg/hr to 400 kg/hr" },
//       { label: "Sev Press Mount", value: "Swivel arm compatible" },
//       { label: "Stirrer", value: "Twin paddle with VFD" },
//       { label: "Oil Filtration", value: "Removable sediment tray + mesh filter" },
//       { label: "Body Material", value: "SS 304 with insulated jacket" },
//     ],
//     features: [
//       "Direct press-frying of sev and gathiya",
//       "Uniform frying with twin paddle stirrer",
//       "Easy oil draining valve with strainer",
//       "Optional de-oiling centrifuge",
//     ],
//     applications: ["Bhujia", "Nylon Sev", "Ratlami Sev", "Namkeen Mixture", "Dal Moth"],
//     faqs: [
//       { q: "Can a sev machine be mounted on this fryer?", a: "Yes, a swivel arm sev press can be mounted directly above the oil tank." },
//       { q: "What is the delivery time?", a: "Standard models dispatch in 15 - 25 days; customised plants take longer." },
//     ],
//   },
//   {
//     slug: "food-extruder-machines",
//     title: "Food Extruder Machines",
//     category: "Food Extruder Machines",
//     image: extruder,
//     capacity: "60 - 500 kg/hr",
//     material: "SS 304 / Alloy Steel Screw",
//     power: "15 HP - 75 HP",
//     automation: "Automatic with PLC option",
//     summary:
//       "Single and twin screw food extruders for puffed snacks, kurkure collets, cereals and pellets, with hardened screw elements and instant die-face cutter.",
//     keywords: ["food extruder machine", "twin screw extruder manufacturer", "snack extruder price india"],
//     specs: [
//       { label: "Output Capacity", value: "60 kg/hr to 500 kg/hr" },
//       { label: "Screw Type", value: "Single screw / co-rotating twin screw" },
//       { label: "Die Molds", value: "Interchangeable ball, ring, tube, star" },
//       { label: "Cutting System", value: "Variable speed die face rotary knife" },
//       { label: "Barrel", value: "Segmented, water jacketed with thermocouples" },
//       { label: "Main Motor", value: "15 HP - 75 HP with gearbox" },
//     ],
//     features: [
//       "Hardened, wear resistant screw and barrel",
//       "Quick die change for multiple snack shapes",
//       "Precise moisture and temperature control",
//       "Feeder with VFD for consistent throughput",
//     ],
//     applications: ["Corn Puffs", "Kurkure Collets", "Breakfast Cereals", "Pellet Snacks", "Pet Food"],
//     faqs: [
//       { q: "Which extruder should I choose — single or twin screw?", a: "Single screw suits standard puffed snacks at lower cost; twin screw offers better control for cereals, pellets and high fat recipes." },
//       { q: "Can one extruder make multiple shapes?", a: "Yes, by changing the die mold and cutter speed you can produce balls, rings, tubes and star shapes." },
//     ],
//   },
//   {
//     slug: "soya-nugget-plant-and-extruder",
//     title: "Soya Nugget Plant & Extruder",
//     category: "Soya Nugget Plant",
//     image: soyaPlant,
//     capacity: "100 - 1000 kg/hr",
//     material: "SS 304 Food Grade",
//     power: "25 HP - 100 HP",
//     automation: "Fully Automatic Plant",
//     summary:
//       "Complete texturised soya protein (TSP/TVP) plant — grinder, mixer, twin screw extruder, dryer and packing section for soya chunks, granules and mini nuggets.",
//     keywords: ["soya nugget plant", "soya chunks making machine", "TVP extruder manufacturer"],
//     specs: [
//       { label: "Plant Capacity", value: "100 kg/hr to 1000 kg/hr" },
//       { label: "Raw Material", value: "Defatted soya flour, 50 - 52% protein" },
//       { label: "Extruder", value: "Twin screw with high shear texturising zone" },
//       { label: "Dryer", value: "Multi-pass conveyor dryer, gas/electric/thermic" },
//       { label: "Final Moisture", value: "6 - 8%" },
//       { label: "Products", value: "Chunks, mini chunks, granules, flakes" },
//     ],
//     features: [
//       "High protein texturisation with fibrous bite",
//       "Automatic dosing of water and steam",
//       "Energy efficient multi-deck dryer",
//       "Full turnkey layout and utility planning",
//     ],
//     applications: ["Soya Chunks", "Soya Granules", "Soya Mini Nuggets", "TVP for Ready Meals"],
//     faqs: [
//       { q: "What raw material is used for soya nuggets?", a: "Defatted soya flour with around 50-52% protein content gives the best texture and expansion." },
//       { q: "Do you provide the complete plant?", a: "Yes — from grinding and mixing to extrusion, drying and packing, supplied and commissioned as a turnkey plant." },
//     ],
//   },
//   {
//     slug: "food-processing-machines",
//     title: "Food Processing Machines",
//     category: "Food Processing Machines",
//     image: foodProcessing,
//     capacity: "50 - 800 kg/hr",
//     material: "SS 304 Food Grade",
//     power: "1 HP - 20 HP",
//     automation: "Semi-Automatic / Automatic",
//     summary:
//       "Complete range of food processing machinery — roasters, masala mixing drums, cutters, steamers, de-oilers and puffing machines built for Indian snack industry duty cycles.",
//     keywords: ["food processing machines manufacturer", "snack food machinery india", "food plant machinery supplier"],
//     specs: [
//       { label: "Output Capacity", value: "50 kg/hr to 800 kg/hr" },
//       { label: "Machine Range", value: "Roasters, mixers, cutters, steamers, de-oilers" },
//       { label: "Contact Parts", value: "SS 304 food grade, mirror polished" },
//       { label: "Controls", value: "MCB panel with PID / VFD as applicable" },
//       { label: "Customisation", value: "Capacity and layout built to order" },
//     ],
//     features: [
//       "Built for 16+ hour continuous shifts",
//       "Food grade contact parts throughout",
//       "Simple maintenance and spare availability",
//       "Custom capacities engineered on request",
//     ],
//     applications: ["Fryums", "Namkeen", "Chana & Peanuts", "Noodles", "Pasta", "Corn Puff"],
//     faqs: [
//       { q: "Do you customise machines to our recipe?", a: "Yes, capacity, heating type and layout are engineered around your product recipe and floor space." },
//       { q: "Is after-sales support available outside India?", a: "Yes, we support export customers in South Africa, UAE, Nepal and the UK with remote guidance and spares." },
//     ],
//   },
// ];




export const hotProducts: Product[] = [
  {
    slug: "potato-banana-chips-batch-fryer",
    title: "Potato & Banana Chips Batch Fryer",
    category: "Batch Fryer",
    image: chipsFryer,
    capacity: "150 kg/hr",
    material: "SS 304",
    power: "3 HP",
    automation: "Semi Automatic",
    summary:
      "Batch fryer with pallet burner for frying potato, banana chips, kurkure, fryums and other snack products. The machine is constructed with stainless steel food-grade contact parts.",
    keywords: [
      "potato banana chips batch fryer",
      "potato chips fryer",
      "banana chips fryer",
      "batch fryer machine",
      "snack fryer",
    ],
    specs: [
      { label: "Capacity", value: "150 kg/hr" },
      { label: "Pan Size", value: "48 × 48 inch" },
      { label: "Capacity (kg/hr)", value: "60" },
      { label: "Heating Type", value: "BIOMASS PALLET" },
      { label: "Equipment Type", value: "BATCH FRYER" },
      { label: "Automation Grade", value: "Semi Automatic" },
      { label: "Material", value: "SS 304" },
      { label: "Tilting Type", value: "Manual Tilting" },
      { label: "Power Consumption", value: "3 HP" },
      { label: "Machine Type", value: "Automatic, Semi Automatic" },
      { label: "Fuel", value: "Gas, Wooden pallet burner" },
      { label: "Brand", value: "FOODAX" },
      { label: "Oil Capacity", value: "300 L" },
      { label: "Voltage", value: "440 V" },
      { label: "Frying Temperature", value: "200°C" },
      { label: "Power Load", value: "3 kW" },
      { label: "Phase", value: "3 Phase" },
      { label: "Minimum Order Quantity", value: "1 Set" },
      { label: "Contact Parts", value: "Stainless Steel 304" },
      { label: "Basket Size", value: "48 × 48 inch" },
      {
        label: "Basket Net Thickness",
        value: "1.5 mm and 2.5 mm hole size",
      },
      {
        label: "Heat Converter",
        value: "1.50 lakh calories with pallet burner",
      },
      { label: "Heat Exchanger", value: "Body 5 mm thickness" },
      { label: "Pump", value: "3 H.P." },
      { label: "Motor", value: "5 H.P., Crompton Greaves make" },
      { label: "Oil Coil", value: "S.S. Seamless pipe" },
      { label: "Oil Pipe", value: "25 mm nominal bore" },
      { label: "Filter", value: "To separate small particles" },
      { label: "Oil Storage Tank", value: "350 Litre" },
      {
        label: "Production Capacity",
        value:
          "125–150 kg/hr for items such as gathiya, papdi, rath, bhujia",
      },
      {
        label: "Production Capacity - Kurkure/Fryums",
        value: "150–200 kg/hr",
      },
      {
        label: "Production Capacity - Chana Dal/Moong Dal/Masoor",
        value: "90–110 kg/hr",
      },
      {
        label: "Production Capacity - Potato Chips",
        value: "50–60 kg/hr",
      },
    ],
    features: [
      "Batch fryer with pallet burner",
      "All contact parts are Stainless Steel 304",
      "48 × 48 inch basket",
      "Manual tilting system",
      "300 litre oil capacity",
      "200°C frying temperature",
      "Oil filtration system",
      "350 litre oil storage tank",
      "Suitable for multiple snack products",
      "Semi automatic operation",
    ],
    applications: [
      "Potato Chips",
      "Banana Chips",
      "Kurkure",
      "Fryums",
      "Gathiya",
      "Papdi",
      "Bhujia",
      "Chana Dal",
      "Moong Dal",
      "Masoor",
    ],
    faqs: [
      {
        q: "What is the capacity of the Potato & Banana Chips Batch Fryer?",
        a: "The listed capacity is 150 kg/hr. Product-wise capacities are also provided for different snack products.",
      },
      {
        q: "What type of heating is used?",
        a: "The heating type is listed as BIOMASS PALLET, with gas and wooden pallet burner options also mentioned.",
      },
      {
        q: "What is the material of construction?",
        a: "The machine uses SS 304 material, with stainless steel food-grade contact parts.",
      },
      {
        q: "Is the machine automatic?",
        a: "The automation grade is listed as Semi Automatic, and the machine type is specified as Automatic, Semi Automatic.",
      },
      {
        q: "What is the oil capacity?",
        a: "The listed oil capacity is 300 L, with a 350 litre oil storage tank.",
      },
      {
        q: "What is the frying temperature?",
        a: "The listed frying temperature is 200°C.",
      },
      {
        q: "What products can be fried?",
        a: "The machine is suitable for potato chips, banana chips, Kurkure, fryums, gathiya, papdi, bhujia, chana dal, moong dal and masoor.",
      },
      {
        q: "What is the minimum order quantity?",
        a: "The minimum order quantity is 1 Set.",
      },
    ],
  },

  {
    slug: "electric-batch-fryer",
    title: "Electric Batch Fryer",
    category: "Batch Fryer",
    image: electricFryer,
    capacity: "100 kg/hr",
    material: "SS 304",
    power: "18 kW",
    automation: "Semi Automatic, Manual, Automatic",
    summary:
      "Electric batch fryer with SS 304 construction, designed for efficient batch frying with semi-automatic, manual and automatic operation.",
    keywords: [
      "electric batch fryer",
      "electric fryer machine",
      "electric snack fryer",
      "SS 304 batch fryer",
    ],
    specs: [
      { label: "Capacity (kg/hr)", value: "100" },
      { label: "Equipment Type", value: "BATCH FRYER" },
      { label: "Power Consumption", value: "3 phase" },
      {
        label: "Machine Type",
        value: "Semi Automatic, Manual, Automatic",
      },
      { label: "Material", value: "SS 304" },
      { label: "Power Source", value: "18 kW" },
      { label: "Voltage", value: "440 VOLTAGE" },
      { label: "Weight", value: "300" },
      { label: "Surface Finishing", value: "1000×1300 MM" },
      { label: "Model Name/Number", value: "FEW-51" },
      { label: "Warranty", value: "ONE YEAR" },
      { label: "Phase", value: "Three" },
      { label: "Minimum Order Quantity", value: "1 Piece" },
    ],
    features: [
      "SS 304 construction",
      "Electric heating system",
      "Semi automatic operation",
      "Manual operation",
      "Automatic operation",
      "18 kW power source",
      "440 voltage",
      "One year warranty",
    ],
    applications: [
      "Potato Chips",
      "Banana Chips",
      "Kurkure",
      "Fryums",
      "Namkeen",
    ],
    faqs: [
      {
        q: "What is the capacity of the Electric Batch Fryer?",
        a: "The listed capacity is 100 kg/hr.",
      },
      {
        q: "What is the machine type?",
        a: "The machine supports Semi Automatic, Manual and Automatic operation.",
      },
      {
        q: "What material is used?",
        a: "The machine is made with SS 304 construction.",
      },
      {
        q: "What is the power source?",
        a: "The listed power source is 18 kW.",
      },
      {
        q: "What is the voltage?",
        a: "The listed voltage is 440 VOLTAGE.",
      },
      {
        q: "What is the model number?",
        a: "The model number is FEW-51.",
      },
      {
        q: "What is the warranty?",
        a: "The listed warranty is ONE YEAR.",
      },
      {
        q: "What is the minimum order quantity?",
        a: "The minimum order quantity is 1 Piece.",
      },
    ],
  },

  {
    slug: "circular-batch-fryer-with-inbuilt-heat-exchanger",
    title: "Circular Batch Fryer With Inbuilt Heat Exchanger",
    category: "Batch Fryer",
    image: snackPlant,
    capacity: "Not Specified",
    material: "Mild Steel",
    power: "3 HP",
    automation: "Automatic",
    summary:
      "Circular batch fryer with an inbuilt heat exchanger, designed for efficient batch frying using oil as the frying medium.",
    keywords: [
      "circular batch fryer",
      "batch fryer heat exchanger",
      "gas batch fryer",
      "industrial batch fryer",
    ],
    specs: [
      { label: "Material", value: "Mild Steel" },
      { label: "Power Consumption", value: "3 HP" },
      { label: "Medium Used", value: "Oil" },
      {
        label: "Primary Exchanger Material",
        value: "MS chamber with seamless SS 304 pipe",
      },
      { label: "Heat Exchange Area", value: "Inbuilt" },
      { label: "Fuel", value: "Gas" },
      { label: "Power Source", value: "3 KW" },
      { label: "Voltage", value: "440" },
      { label: "Weight", value: "500 KG" },
      { label: "Model Name/Number", value: "FEW0065" },
      { label: "Warranty", value: "1 YEAR" },
      { label: "Phase", value: "THREE" },
      { label: "Floor Space", value: "10 FEET X 10 FEET" },
      { label: "Dimensions", value: "4×4×5" },
      { label: "Weight/Capacity", value: "700 kg" },
      { label: "Minimum Order Quantity", value: "1 Set" },
    ],
    features: [
      "Circular batch fryer design",
      "Inbuilt heat exchanger",
      "Oil frying medium",
      "Gas heating",
      "MS chamber with seamless SS 304 pipe",
      "Inbuilt heat exchange area",
      "440 voltage",
      "Three phase operation",
      "1 year warranty",
    ],
    applications: [
      "Namkeen",
      "Fryums",
      "Kurkure",
      "Potato Chips",
      "Banana Chips",
    ],
    faqs: [
      {
        q: "What type of fryer is this?",
        a: "It is a Circular Batch Fryer with an inbuilt heat exchanger.",
      },
      {
        q: "What medium is used for frying?",
        a: "The medium used is Oil.",
      },
      {
        q: "What type of fuel is used?",
        a: "The listed fuel is Gas.",
      },
      {
        q: "What material is used for the primary exchanger?",
        a: "The primary exchanger is an MS chamber with seamless SS 304 pipe.",
      },
      {
        q: "What is the model number?",
        a: "The model number is FEW0065.",
      },
      {
        q: "What is the machine weight?",
        a: "The listed machine weight is 500 KG.",
      },
      {
        q: "What is the warranty?",
        a: "The listed warranty is 1 YEAR.",
      },
      {
        q: "What is the minimum order quantity?",
        a: "The minimum order quantity is 1 Set.",
      },
    ],
  },

  {
    slug: "snack-food-fryer-plant",
    title: "Snack Food Fryer Plant",
    category: "Batch Fryer",
    image: kurkureFryer,
    capacity: "Potato chips 50–60 kg/hr",
    material: "SS 304",
    power: "3 kW",
    automation: "Semi Automatic",
    summary:
      "Semi-automatic snack food fryer plant with stainless steel construction, suitable for frying Kurkure, fryums, potato chips, banana chips and other namkeen products.",
    keywords: [
      "snack food fryer plant",
      "snack fryer plant",
      "potato chips fryer plant",
      "banana chips fryer plant",
    ],
    specs: [
      { label: "Machine Type", value: "Semi-Automatic" },
      {
        label: "Capacity",
        value:
          "Potato chips 65 kg/hrs, Pulses 110 kg/hrs, Besan product 150 to 180 kg/hrs",
      },
      { label: "Heating Type", value: "Diesel" },
      { label: "Automation Grade", value: "Semi Automatic" },
      { label: "Material", value: "SS 304" },
      { label: "Application", value: "Namkeen" },
      { label: "Voltage", value: "220, 440" },
      { label: "Power Consumption", value: "3 kW" },
      { label: "Brand", value: "Foodax Engineering Works" },
      { label: "Power Source", value: "Electric" },
      { label: "Oil Capacity", value: "300 L" },
      { label: "Frying Temperature", value: "190°C" },
      { label: "Weight", value: "1000 kg approx" },
      { label: "Power Load", value: "5 kW" },
      { label: "Phase", value: "3 PHASE" },
      { label: "Surface Finishing", value: "Smooth" },
      { label: "Model Number", value: "FERB 150" },
      { label: "Warranty", value: "1 year" },
      { label: "Floor Space", value: "1200 × 1000 mm" },
      { label: "Frequency", value: "50 Hz" },
      { label: "Heating Way", value: "Diesel, Gas, Wooden" },
      { label: "Fuel Type", value: "Diesel, Gas" },
      { label: "Condition", value: "New" },
      { label: "Production Capacity - Kurkure", value: "200 kg/hrs" },
      { label: "Production Capacity - Fryums", value: "200 kg/hrs" },
      {
        label: "Production Capacity - Potato Chips",
        value: "50 to 60 kg/hrs",
      },
      {
        label: "Production Capacity - Banana Chips",
        value: "60 to 70 kg/hrs",
      },
      { label: "Minimum Order Quantity", value: "1 Piece" },
    ],
    features: [
      "Semi-automatic operation",
      "SS 304 construction",
      "300 litre oil capacity",
      "190°C frying temperature",
      "Smooth surface finishing",
      "Multiple heating options",
      "Low fuel consumption",
      "Low edible oil consumption",
      "Suitable for continuous production",
    ],
    applications: [
      "Kurkure",
      "Fryums",
      "Potato Chips",
      "Banana Chips",
      "Namkeen",
      "Pulses",
      "Besan Products",
    ],
    faqs: [
      {
        q: "What is the machine type?",
        a: "The machine type is Semi-Automatic.",
      },
      {
        q: "What is the heating type?",
        a: "The listed heating type is Diesel, with Diesel, Gas and Wooden heating options mentioned.",
      },
      {
        q: "What material is used?",
        a: "The machine is constructed using SS 304 material.",
      },
      {
        q: "What is the oil capacity?",
        a: "The listed oil capacity is 300 L.",
      },
      {
        q: "What is the frying temperature?",
        a: "The listed frying temperature is 190°C.",
      },
      {
        q: "What products can be fried?",
        a: "The machine is suitable for Kurkure, Fryums, Potato Chips, Banana Chips, Namkeen, Pulses and Besan products.",
      },
      {
        q: "What is the production capacity for potato chips?",
        a: "The listed potato chips production capacity is 50 to 60 kg/hr.",
      },
      {
        q: "What is the minimum order quantity?",
        a: "The minimum order quantity is 1 Piece.",
      },
    ],
  },

  {
    slug: "direct-wooden-firing-batch-fryer",
    title: "Direct Wooden Firing Batch Fryer",
    category: "Batch Fryer",
    image: gasFryer,
    capacity: "75–90 kg/hr",
    material: "Not Specified",
    power: "1 HP",
    automation: "Automatic",
    summary:
      "Normal wooden batch fryer with automatic temperature control, complete tilting system and ash collection box for easy operation.",
    keywords: [
      "wooden firing batch fryer",
      "wood fired fryer",
      "wooden bhatti fryer",
      "batch fryer machine",
    ],
    specs: [
      { label: "Capacity (kg/hr)", value: "70" },
      { label: "Product Type", value: "BHATTI" },
      { label: "Equipment Type", value: "Wooden bhatti" },
      { label: "Power Consumption", value: "220 volt" },
      { label: "Model Name/Number", value: "FEW-0074" },
      { label: "Brand", value: "Foodax Engineering Works" },
      { label: "Motor", value: "1 HP" },
      { label: "Warranty", value: "ONE YEAR" },
      { label: "Packaging Type", value: "NO" },
      { label: "No Of Nobes", value: "1" },
      { label: "Gas Type", value: "Wooden" },
      { label: "Frying System", value: "Wooden firing" },
      { label: "Pan Size", value: "42 inch" },
      {
        label: "Temperature Control",
        value: "Automatic Temperature Control",
      },
      {
        label: "Tilting System",
        value: "Complete Tilting System",
      },
      { label: "Ash Collection", value: "Ashes Collection Box" },
      {
        label: "Production Capacity - Besan Items",
        value: "75–90 kg/hr",
      },
      { label: "Production Capacity - Dal", value: "30 kg/hr" },
      { label: "Minimum Order Quantity", value: "1 Piece" },
    ],
    features: [
      "Wooden firing system",
      "42 inch fryer",
      "Automatic temperature control",
      "Complete tilting system",
      "Ash collection box",
      "Easy operation",
      "1 HP motor",
      "Suitable for Besan items and Dal",
      "One year warranty",
    ],
    applications: [
      "Besan Items",
      "Dal",
      "Namkeen",
      "Fryums",
      "Gathiya",
      "Bhujia",
    ],
    faqs: [
      {
        q: "What is the capacity of the Direct Wooden Firing Batch Fryer?",
        a: "The listed capacity is 70 kg/hr, while the provided production capacity for Besan items is 75–90 kg/hr.",
      },
      {
        q: "What type of fuel is used?",
        a: "The fryer uses wooden firing, with the equipment type specified as Wooden Bhatti.",
      },
      {
        q: "Does it have automatic temperature control?",
        a: "Yes, the machine is specified with automatic temperature control.",
      },
      {
        q: "Does the machine have a tilting system?",
        a: "Yes, it has a complete tilting system.",
      },
      {
        q: "Does it have an ash collection system?",
        a: "Yes, an ash collection box is provided.",
      },
      {
        q: "What is the motor power?",
        a: "The listed motor power is 1 HP.",
      },
      {
        q: "What is the production capacity for Dal?",
        a: "The provided production capacity for Dal is 30 kg/hr.",
      },
      {
        q: "What is the warranty?",
        a: "The listed warranty is ONE YEAR.",
      },
      {
        q: "What is the minimum order quantity?",
        a: "The minimum order quantity is 1 Piece.",
      },
    ],
  },

  {
    slug: "kurkure-batch-fryer",
    title: "Kurkure Batch Fryer",
    category: "Batch Fryer",
    image: namkeenFryer,
    capacity: "100 kg/hr",
    material: "Stainless Steel",
    power: "Not Specified",
    automation: "Semi-Automatic",
    summary:
      "Semi-automatic batch fryer with inbuilt heat exchanger, designed for frying Kurkure, Namkeen, Fryums, Dal and potato chips with stainless steel contact parts.",
    keywords: [
      "kurkure batch fryer",
      "kurkure frying machine",
      "kurkure fryer",
      "namkeen batch fryer",
    ],
    specs: [
      { label: "Capacity (kg/hr)", value: "100" },
      {
        label: "Equipment Type",
        value: "Batch Fryer with inbuilt heat exchanger",
      },
      { label: "Machine Type", value: "Semi-Automatic" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Automation Grade", value: "Semi-Automatic" },
      { label: "Voltage", value: "440" },
      { label: "Phase", value: "Three" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "Minimum Order Quantity", value: "1 Piece" },
      { label: "Contact Parts", value: "Stainless Steel" },
      { label: "Size - Length", value: "1300 mm" },
      { label: "Size - Width", value: "1000 mm" },
      { label: "Size - Depth", value: "400 mm" },
      { label: "Total Height of Batch Fryer", value: "1000 mm" },
      { label: "Diesel Burner Capacity", value: "1.5 Lakh kcal" },
      { label: "Heating Chamber", value: "M.S." },
      { label: "Pump", value: "3 H.P. to oil circulation" },
      { label: "Oil Coil", value: "M.S. seamless pipe" },
      { label: "Pipe Type", value: "Seamless Pipe N.B. Type" },
      { label: "Storage Tank", value: "300 Ltr capacity" },
      {
        label: "Filter",
        value: "To separate small particles, Basket type",
      },
      {
        label: "Production Capacity - Potato Chips",
        value: "50–60 kg/hr",
      },
      {
        label: "Production Capacity - Namkeen",
        value: "150–180 kg/hr",
      },
      {
        label: "Production Capacity - Kurkure",
        value: "150–200 kg",
      },
      {
        label: "Production Capacity - Fryums",
        value: "150–200 kg",
      },
      {
        label: "Production Capacity - Dal",
        value: "90–100 kg/hr",
      },
      { label: "Control", value: "Complete electrical panel" },
    ],
    features: [
      "Inbuilt heat exchanger",
      "Stainless Steel contact parts",
      "Semi-automatic operation",
      "Diesel burner",
      "Oil circulation pump",
      "300 litre oil storage tank",
      "Particle separation filter",
      "Complete electrical panel",
      "Seamless pipe system",
    ],
    applications: [
      "Kurkure",
      "Namkeen",
      "Fryums",
      "Potato Chips",
      "Dal",
    ],
    faqs: [
      {
        q: "What is the capacity of the Kurkure Batch Fryer?",
        a: "The listed capacity is 100 kg/hr.",
      },
      {
        q: "What type of fryer is this?",
        a: "It is a Batch Fryer with an inbuilt heat exchanger.",
      },
      {
        q: "What is the automation grade?",
        a: "The automation grade is Semi-Automatic.",
      },
      {
        q: "What is the material?",
        a: "The listed material is Stainless Steel.",
      },
      {
        q: "What is the diesel burner capacity?",
        a: "The diesel burner capacity is 1.5 Lakh kcal.",
      },
      {
        q: "What is the oil storage tank capacity?",
        a: "The oil storage tank has a capacity of 300 litres.",
      },
      {
        q: "What products can be fried?",
        a: "The listed products include Kurkure, Namkeen, Fryums, Potato Chips and Dal.",
      },
      {
        q: "What is the minimum order quantity?",
        a: "The minimum order quantity is 1 Piece.",
      },
    ],
  },

  {
    slug: "direct-biomass-pallet-burner-batch-fryer",
    title: "Direct Biomass Pallet Burner Batch Fryer",
    category: "Batch Fryer",
    image: extruder,
    capacity: "100 kg/hr",
    material: "Not Specified",
    power: "1 HP",
    automation: "Automatic",
    summary:
      "Direct biomass pallet burner batch fryer designed for Namkeen processing with efficient biomass heating and industrial food processing applications.",
    keywords: [
      "biomass pallet burner fryer",
      "namkeen batch fryer",
      "biomass fryer machine",
      "pallet burner fryer",
    ],
    specs: [
      { label: "Capacity (kg/hr)", value: "100" },
      { label: "Equipment Type", value: "Namkeen" },
      { label: "Power Consumption", value: "1 HP" },
      { label: "Fuel", value: "BIOMASS PALLET BURNER" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "Minimum Order Quantity", value: "1 Set" },
    ],
    features: [
      "Direct biomass pallet burner system",
      "Suitable for Namkeen processing",
      "100 kg/hr capacity",
      "Efficient biomass heating",
      "Industrial food processing application",
      "Made in India",
    ],
    applications: [
      "Namkeen",
      "Fryums",
      "Gathiya",
      "Bhujia",
    ],
    faqs: [
      {
        q: "What is the capacity of the batch fryer?",
        a: "The listed capacity is 100 kg/hr.",
      },
      {
        q: "What type of fuel is used?",
        a: "The machine uses a BIOMASS PALLET BURNER.",
      },
      {
        q: "What is the equipment type?",
        a: "The equipment type is specified as Namkeen.",
      },
      {
        q: "What is the power consumption?",
        a: "The listed power consumption is 1 HP.",
      },
      {
        q: "What is the country of origin?",
        a: "The machine is Made in India.",
      },
      {
        q: "What is the minimum order quantity?",
        a: "The minimum order quantity is 1 Set.",
      },
    ],
  },

  {
    slug: "namkeen-batch-fryer",
    title: "Namkeen Batch Fryer",
    category: "Batch Fryer",
    image: soyaPlant,
    capacity: "150 kg/hr",
    material: "SS 304",
    power: "3 HP",
    automation: "Semi Automatic",
    summary:
      "Semi-automatic batch fryer with external heat exchanger for efficient frying of Namkeen, Kurkure, Fryums, Dal and Potato Chips.",
    keywords: [
      "namkeen batch fryer",
      "namkeen frying machine",
      "gathiya fryer",
      "bhujia fryer",
      "batch fryer manufacturer",
    ],
    specs: [
      { label: "Capacity", value: "150 kg/hr" },
      { label: "Pan Size", value: "48 × 48 inch" },
      { label: "Heating Type", value: "Biomass pallet burner" },
      { label: "Automation Grade", value: "Semi Automatic" },
      { label: "Material", value: "SS 304" },
      { label: "Tilting Type", value: "Manual Tilting" },
      { label: "Minimum Order Quantity", value: "1 Set" },
      {
        label: "Equipment Type",
        value: "Batch Fryer with external heat exchanger",
      },
      { label: "Contact Parts", value: "Stainless Steel 304" },
      {
        label: "Basket Net Thickness",
        value: "1.5 mm and 2.5 mm hole size",
      },
      { label: "Heat Convertor", value: "2 lakh Pallet burner" },
      { label: "Heat Exchanger Body", value: "5 mm thickness" },
      { label: "Pump", value: "3 H.P. to oil circulation" },
      { label: "Motor", value: "3 H.P. Crompton Greaves make" },
      { label: "Oil Coil", value: "S.S. seamless pipe" },
      { label: "Oil Pipe", value: "25 mm Nominal Bore" },
      { label: "Filter", value: "To separate small particles" },
      { label: "Oil Storage Tank", value: "350 ltr" },
      {
        label: "Production Capacity - Besan Item",
        value: "150 kg/hr (Gathiya, Papdi, Ratlami, Bhujia)",
      },
      {
        label: "Production Capacity - Kurkure/Fryums",
        value: "150–200 kg/hr",
      },
      {
        label: "Production Capacity - Chana Dal/Moong Dal/Masoor/Matar",
        value: "90–100 kg/hr",
      },
      {
        label: "Production Capacity - Potato Chips",
        value: "50–60 kg/hr",
      },
      { label: "Control", value: "Control panel" },
    ],
    features: [
      "Batch fryer with external heat exchanger",
      "Stainless Steel 304 contact parts",
      "48 × 48 inch pan",
      "Biomass pallet burner",
      "Manual tilting system",
      "3 HP oil circulation pump",
      "350 litre oil storage tank",
      "Particle separation filter",
      "Control panel",
    ],
    applications: [
      "Namkeen",
      "Gathiya",
      "Papdi",
      "Ratlami",
      "Bhujia",
      "Kurkure",
      "Fryums",
      "Chana Dal",
      "Moong Dal",
      "Masoor",
      "Matar",
      "Potato Chips",
    ],
    faqs: [
      {
        q: "What is the capacity of the Namkeen Batch Fryer?",
        a: "The listed capacity is 150 kg/hr.",
      },
      {
        q: "What type of heating is used?",
        a: "The heating type is Biomass pallet burner.",
      },
      {
        q: "What material is used?",
        a: "The contact parts are Stainless Steel 304.",
      },
      {
        q: "Is the fryer automatic?",
        a: "The automation grade is Semi Automatic with manual tilting.",
      },
      {
        q: "What is the oil storage capacity?",
        a: "The listed oil storage tank capacity is 350 litres.",
      },
      {
        q: "What products can be fried?",
        a: "The listed products include Namkeen, Gathiya, Papdi, Ratlami, Bhujia, Kurkure, Fryums, Dal, Matar and Potato Chips.",
      },
      {
        q: "What is the minimum order quantity?",
        a: "The minimum order quantity is 1 Set.",
      },
    ],
  },

  {
    slug: "circular-batch-fryer",
    title: "Circular Batch Fryer",
    category: "Batch Fryer",
    image: foodProcessing,
    capacity: "Not Specified",
    material: "Not Specified",
    power: "Not Specified",
    automation: "Automatic",
    summary:
      "Automatic circular batch fryer with inbuilt heat exchanger for frying Besan items, chips, Dal and other snacks.",
    keywords: [
      "circular batch fryer",
      "automatic batch fryer",
      "batch fryer heat exchanger",
      "besan fryer",
    ],
    specs: [
      {
        label: "Equipment Type",
        value: "Batch Fryer with inbuilt heat exchanger",
      },
      { label: "Power Consumption", value: "440 Volt" },
      { label: "Machine Type", value: "Automatic" },
      { label: "Brand", value: "Foodax" },
      { label: "Phase", value: "Single" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    features: [
      "Inbuilt heat exchanger",
      "Automatic operation",
      "Suitable for commercial snack processing",
      "Designed for batch frying",
      "Suitable for Besan items, chips and Dal snacks",
      "Made in India",
    ],
    applications: [
      "Besan Items",
      "Chips",
      "Dal Snacks",
      "Namkeen",
    ],
    faqs: [
      {
        q: "What type of machine is this?",
        a: "It is an Automatic Circular Batch Fryer with an inbuilt heat exchanger.",
      },
      {
        q: "What is the equipment type?",
        a: "The equipment type is Batch Fryer with inbuilt heat exchanger.",
      },
      {
        q: "What is the power requirement?",
        a: "The listed power consumption is 440 Volt.",
      },
      {
        q: "What products can be fried?",
        a: "The machine is used for frying Besan items, chips, Dal snacks and other snacks.",
      },
      {
        q: "What is the brand?",
        a: "The listed brand is Foodax.",
      },
      {
        q: "What is the country of origin?",
        a: "The machine is Made in India.",
      },
    ],
  },
];
export type CatalogProduct = {
  name: string;
  image: string;
  description: string;
  capacity: string;
  material: string;
  power: string;
  automation: string;
  specs: Spec[];
  features: string[];
  applications: string[];
  faqs: Faq[];
};

export type CatalogCategory = { slug: string; name: string; products: CatalogProduct[] };

const p = (
  name: string,
  image: string,
  description: string,
  capacity: string,
  power: string,
  automation: string,
  specs: Spec[],
  features: string[],
  applications: string[],
  faqs: Faq[],
): CatalogProduct => ({
  name,
  image,
  description,
  capacity,
  material: "SS 304 Food Grade",
  power,
  automation,
  specs,
  features,
  applications,
  faqs,
});

export const catalog: CatalogCategory[] = [

  {
  slug: "batch-fryer",
  name: "Batch Fryer",
  products: [

    // =====================================================
    // 1. Potato & Banana Chips Batch Fryer
    // =====================================================
    p(
      "Potato & Banana Chips Batch Fryer",
      "/images/machines/Batch Fryer/1.webp",
      "Batch fryer with pallet burner for frying potato, banana chips, kurkure, fryums and other snack products. The machine is constructed with stainless steel food-grade contact parts.",
      "150 kg/hr",
      "3 HP",
      "Semi Automatic",

      [
        { label: "Capacity", value: "150 kg/hr" },
        { label: "Pan Size", value: "48 × 48 inch" },
        { label: "Capacity (kg/hr)", value: "60" },
        { label: "Heating Type", value: "BIOMASS PALLET" },
        { label: "Equipment Type", value: "BATCH FRYER" },
        { label: "Automation Grade", value: "Semi Automatic" },
        { label: "Material", value: "SS 304" },
        { label: "Tilting Type", value: "Manual Tilting" },
        { label: "Power Consumption", value: "3 HP" },
        { label: "Machine Type", value: "Automatic, Semi Automatic" },
        { label: "Fuel", value: "Gas, Wooden pallet burner" },
        { label: "Brand", value: "FOODAX" },
        { label: "Oil Capacity", value: "300 L" },
        { label: "Voltage", value: "440 V" },
        { label: "Frying Temperature", value: "200°C" },
        { label: "Power Load", value: "3 kW" },
        { label: "Phase", value: "3 Phase" },
        { label: "Minimum Order Quantity", value: "1 Set" },
        { label: "Contact Parts", value: "Stainless Steel 304" },
        { label: "Basket Size", value: "48 × 48 inch" },
        { label: "Basket Net Thickness", value: "1.5 mm and 2.5 mm hole size" },
        { label: "Heat Converter", value: "1.50 lakh calories with pallet burner" },
        { label: "Heat Exchanger", value: "Body 5 mm thickness" },
        { label: "Pump", value: "3 H.P." },
        { label: "Motor", value: "5 H.P., Crompton Greaves make" },
        { label: "Oil Coil", value: "S.S. Seamless pipe" },
        { label: "Oil Pipe", value: "25 mm nominal bore" },
        { label: "Filter", value: "To separate small particles" },
        { label: "Oil Storage Tank", value: "350 Litre" },
        { label: "Production Capacity", value: "125–150 kg/hr for items such as gathiya, papdi, rath, bhujia" },
        { label: "Production Capacity - Kurkure/Fryums", value: "150–200 kg/hr" },
        { label: "Production Capacity - Chana Dal/Moong Dal/Masoor", value: "90–110 kg/hr" },
        { label: "Production Capacity - Potato Chips", value: "50–60 kg/hr" },
      ],

      [
        "Batch fryer with pallet burner",
        "All contact parts are Stainless Steel 304",
        "48 × 48 inch basket",
        "Manual tilting system",
        "300 litre oil capacity",
        "200°C frying temperature",
        "Oil filtration system",
        "350 litre oil storage tank",
        "Suitable for multiple snack products",
        "Semi automatic operation",
      ],

      [
        "Potato Chips",
        "Banana Chips",
        "Kurkure",
        "Fryums",
        "Gathiya",
        "Papdi",
        "Bhujia",
        "Chana Dal",
        "Moong Dal",
        "Masoor",
      ],

      [
        {
          q: "What is the capacity of the Potato & Banana Chips Batch Fryer?",
          a: "The listed capacity is 150 kg/hr. Product-wise capacities are also provided for different snack products.",
        },
        {
          q: "What type of heating is used?",
          a: "The heating type is listed as BIOMASS PALLET, with gas and wooden pallet burner options also mentioned.",
        },
        {
          q: "What is the material of construction?",
          a: "The machine uses SS 304 material, with stainless steel food-grade contact parts.",
        },
        {
          q: "Is the machine automatic?",
          a: "The automation grade is listed as Semi Automatic, and the machine type is specified as Automatic, Semi Automatic.",
        },
        {
          q: "What is the oil capacity?",
          a: "The listed oil capacity is 300 L, with a 350 litre oil storage tank.",
        },
        {
          q: "What is the frying temperature?",
          a: "The listed frying temperature is 200°C.",
        },
        {
          q: "What products can be fried?",
          a: "The machine is suitable for potato chips, banana chips, Kurkure, fryums, gathiya, papdi, bhujia, chana dal, moong dal and masoor.",
        },
        {
          q: "What is the minimum order quantity?",
          a: "The minimum order quantity is 1 Set.",
        },
      ]
    ),


    p(
  "Electric Batch Fryer",
  "/images/machines/Batch Fryer/2.webp",
  "Electric batch fryer with SS 304 construction, designed for efficient batch frying with semi-automatic, manual and automatic operation.",
  "100 kg/hr",
  "18 kW",
  "Semi Automatic, Manual, Automatic",

  [
    { label: "Capacity (kg/hr)", value: "100" },
    { label: "Equipment Type", value: "BATCH FRYER" },
    { label: "Power Consumption", value: "3 phase" },
    { label: "Machine Type", value: "Semi Automatic, Manual, Automatic" },
    { label: "Material", value: "SS 304" },
    { label: "Power Source", value: "18 kW" },
    { label: "Voltage", value: "440 VOLTAGE" },
    { label: "Weight", value: "300" },
    { label: "Surface Finishing", value: "1000×1300 MM" },
    { label: "Model Name/Number", value: "FEW-51" },
    { label: "Warranty", value: "ONE YEAR" },
    { label: "Phase", value: "Three" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "SS 304 construction",
    "Electric heating system",
    "Semi automatic operation",
    "Manual operation",
    "Automatic operation",
    "18 kW power source",
    "440 voltage",
    "One year warranty",
  ],

  [
    "Potato Chips",
    "Banana Chips",
    "Kurkure",
    "Fryums",
    "Namkeen",
  ],

  [
    {
      q: "What is the capacity of the Electric Batch Fryer?",
      a: "The listed capacity is 100 kg/hr.",
    },
    {
      q: "What is the machine type?",
      a: "The machine supports Semi Automatic, Manual and Automatic operation.",
    },
    {
      q: "What material is used?",
      a: "The machine is made with SS 304 construction.",
    },
    {
      q: "What is the power source?",
      a: "The listed power source is 18 kW.",
    },
    {
      q: "What is the voltage?",
      a: "The listed voltage is 440 VOLTAGE.",
    },
    {
      q: "What is the model number?",
      a: "The model number is FEW-51.",
    },
    {
      q: "What is the warranty?",
      a: "The listed warranty is ONE YEAR.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),

p(
  "Circular Batch Fryer With Inbuilt Heat Exchanger",
  "/images/machines/Batch Fryer/3.webp",
  "Circular batch fryer with an inbuilt heat exchanger, designed for efficient batch frying using oil as the frying medium.",
  "Not Specified",
  "3 HP",
  "Automatic",

  [
    { label: "Material", value: "Mild Steel" },
    { label: "Power Consumption", value: "3 HP" },
    { label: "Medium Used", value: "Oil" },
    { label: "Primary Exchanger Material", value: "MS chamber with seamless SS 304 pipe" },
    { label: "Heat Exchange Area", value: "Inbuilt" },
    { label: "Fuel", value: "Gas" },
    { label: "Power Source", value: "3 KW" },
    { label: "Voltage", value: "440" },
    { label: "Weight", value: "500 KG" },
    { label: "Model Name/Number", value: "FEW0065" },
    { label: "Warranty", value: "1 YEAR" },
    { label: "Phase", value: "THREE" },
    { label: "Floor Space", value: "10 FEET X 10 FEET" },
    { label: "Dimensions", value: "4×4×5" },
    { label: "Weight/Capacity", value: "700 kg" },
    { label: "Minimum Order Quantity", value: "1 Set" },
  ],

  [
    "Circular batch fryer design",
    "Inbuilt heat exchanger",
    "Oil frying medium",
    "Gas heating",
    "MS chamber with seamless SS 304 pipe",
    "Inbuilt heat exchange area",
    "440 voltage",
    "Three phase operation",
    "1 year warranty",
  ],

  [
    "Namkeen",
    "Fryums",
    "Kurkure",
    "Potato Chips",
    "Banana Chips",
  ],

  [
    {
      q: "What type of fryer is this?",
      a: "It is a Circular Batch Fryer with an inbuilt heat exchanger.",
    },
    {
      q: "What medium is used for frying?",
      a: "The medium used is Oil.",
    },
    {
      q: "What type of fuel is used?",
      a: "The listed fuel is Gas.",
    },
    {
      q: "What material is used for the primary exchanger?",
      a: "The primary exchanger is an MS chamber with seamless SS 304 pipe.",
    },
    {
      q: "What is the model number?",
      a: "The model number is FEW0065.",
    },
    {
      q: "What is the machine weight?",
      a: "The listed machine weight is 500 KG.",
    },
    {
      q: "What is the warranty?",
      a: "The listed warranty is 1 YEAR.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Set.",
    },
  ]
),

p(
  "Snack Food Fryer Plant",
  "/images/machines/Batch Fryer/4.webp",
  "Semi-automatic snack food fryer plant with stainless steel construction, suitable for frying Kurkure, fryums, potato chips, banana chips and other namkeen products.",
  "Potato chips 50–60 kg/hr",
  "3 kW",
  "Semi Automatic",

  [
    { label: "Machine Type", value: "Semi-Automatic" },
    { label: "Capacity", value: "Potato chips 65 kg/hrs, Pulses 110 kg/hrs, Besan product 150 to 180 kg/hrs" },
    { label: "Heating Type", value: "Diesel" },
    { label: "Automation Grade", value: "Semi Automatic" },
    { label: "Material", value: "SS 304" },
    { label: "Application", value: "Namkeen" },
    { label: "Voltage", value: "220, 440" },
    { label: "Power Consumption", value: "3 kW" },
    { label: "Brand", value: "Foodax Engineering Works" },
    { label: "Power Source", value: "Electric" },
    { label: "Oil Capacity", value: "300 L" },
    { label: "Frying Temperature", value: "190°C" },
    { label: "Weight", value: "1000 kg approx" },
    { label: "Power Load", value: "5 kW" },
    { label: "Phase", value: "3 PHASE" },
    { label: "Surface Finishing", value: "Smooth" },
    { label: "Model Number", value: "FERB 150" },
    { label: "Warranty", value: "1 year" },
    { label: "Floor Space", value: "1200 × 1000 mm" },
    { label: "Frequency", value: "50 Hz" },
    { label: "Heating Way", value: "Diesel, Gas, Wooden" },
    { label: "Fuel Type", value: "Diesel, Gas" },
    { label: "Condition", value: "New" },
    { label: "Production Capacity - Kurkure", value: "200 kg/hrs" },
    { label: "Production Capacity - Fryums", value: "200 kg/hrs" },
    { label: "Production Capacity - Potato Chips", value: "50 to 60 kg/hrs" },
    { label: "Production Capacity - Banana Chips", value: "60 to 70 kg/hrs" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Semi-automatic operation",
    "SS 304 construction",
    "300 litre oil capacity",
    "190°C frying temperature",
    "Smooth surface finishing",
    "Multiple heating options",
    "Low fuel consumption",
    "Low edible oil consumption",
    "Suitable for continuous production",
  ],

  [
    "Kurkure",
    "Fryums",
    "Potato Chips",
    "Banana Chips",
    "Namkeen",
    "Pulses",
    "Besan Products",
  ],

  [
    {
      q: "What is the machine type?",
      a: "The machine type is Semi-Automatic.",
    },
    {
      q: "What is the heating type?",
      a: "The listed heating type is Diesel, with Diesel, Gas and Wooden heating options mentioned.",
    },
    {
      q: "What material is used?",
      a: "The machine is constructed using SS 304 material.",
    },
    {
      q: "What is the oil capacity?",
      a: "The listed oil capacity is 300 L.",
    },
    {
      q: "What is the frying temperature?",
      a: "The listed frying temperature is 190°C.",
    },
    {
      q: "What products can be fried?",
      a: "The machine is suitable for Kurkure, Fryums, Potato Chips, Banana Chips, Namkeen, Pulses and Besan products.",
    },
    {
      q: "What is the production capacity for potato chips?",
      a: "The listed potato chips production capacity is 50 to 60 kg/hr.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
p(
  "Direct Wooden Firing Batch Fryer",
  "/images/machines/Batch Fryer/5.webp",
  "Normal wooden batch fryer with automatic temperature control, complete tilting system and ash collection box for easy operation.",
  "75–90 kg/hr",
  "1 HP",
  "Automatic",

  [
    { label: "Capacity (kg/hr)", value: "70" },
    { label: "Product Type", value: "BHATTI" },
    { label: "Equipment Type", value: "Wooden bhatti" },
    { label: "Power Consumption", value: "220 volt" },
    { label: "Model Name/Number", value: "FEW-0074" },
    { label: "Brand", value: "Foodax Engineering Works" },
    { label: "Motor", value: "1 HP" },
    { label: "Warranty", value: "ONE YEAR" },
    { label: "Packaging Type", value: "NO" },
    { label: "No Of Nobes", value: "1" },
    { label: "Gas Type", value: "Wooden" },
    { label: "Frying System", value: "Wooden firing" },
    { label: "Pan Size", value: "42 inch" },
    { label: "Temperature Control", value: "Automatic Temperature Control" },
    { label: "Tilting System", value: "Complete Tilting System" },
    { label: "Ash Collection", value: "Ashes Collection Box" },
    { label: "Production Capacity - Besan Items", value: "75–90 kg/hr" },
    { label: "Production Capacity - Dal", value: "30 kg/hr" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Wooden firing system",
    "42 inch fryer",
    "Automatic temperature control",
    "Complete tilting system",
    "Ash collection box",
    "Easy operation",
    "1 HP motor",
    "Suitable for Besan items and Dal",
    "One year warranty",
  ],

  [
    "Besan Items",
    "Dal",
    "Namkeen",
    "Fryums",
    "Gathiya",
    "Bhujia",
  ],

  [
    {
      q: "What is the capacity of the Direct Wooden Firing Batch Fryer?",
      a: "The listed capacity is 70 kg/hr, while the provided production capacity for Besan items is 75–90 kg/hr.",
    },
    {
      q: "What type of fuel is used?",
      a: "The fryer uses wooden firing, with the equipment type specified as Wooden Bhatti.",
    },
    {
      q: "Does it have automatic temperature control?",
      a: "Yes, the machine is specified with automatic temperature control.",
    },
    {
      q: "Does the machine have a tilting system?",
      a: "Yes, it has a complete tilting system.",
    },
    {
      q: "Does it have an ash collection system?",
      a: "Yes, an ash collection box is provided.",
    },
    {
      q: "What is the motor power?",
      a: "The listed motor power is 1 HP.",
    },
    {
      q: "What is the production capacity for Dal?",
      a: "The provided production capacity for Dal is 30 kg/hr.",
    },
    {
      q: "What is the warranty?",
      a: "The listed warranty is ONE YEAR.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),

p(
  "Kurkure Batch Fryer",
  "/images/machines/Batch Fryer/6.webp",
  "Semi-automatic batch fryer with inbuilt heat exchanger, designed for frying Kurkure, Namkeen, Fryums, Dal and potato chips with stainless steel contact parts.",
  "100 kg/hr",
  "Not Specified",
  "Semi-Automatic",

  [
    { label: "Capacity (kg/hr)", value: "100" },
    { label: "Equipment Type", value: "Batch Fryer with inbuilt heat exchanger" },
    { label: "Machine Type", value: "Semi-Automatic" },
    { label: "Material", value: "Stainless Steel" },
    { label: "Automation Grade", value: "Semi-Automatic" },
    { label: "Voltage", value: "440" },
    { label: "Phase", value: "Three" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
    { label: "Contact Parts", value: "Stainless Steel" },
    { label: "Size - Length", value: "1300 mm" },
    { label: "Size - Width", value: "1000 mm" },
    { label: "Size - Depth", value: "400 mm" },
    { label: "Total Height of Batch Fryer", value: "1000 mm" },
    { label: "Diesel Burner Capacity", value: "1.5 Lakh kcal" },
    { label: "Heating Chamber", value: "M.S." },
    { label: "Pump", value: "3 H.P. to oil circulation" },
    { label: "Pump", value: "8–12 NM3" },
    { label: "Oil Coil", value: "M.S. seamless pipe" },
    { label: "Pipe Type", value: "Seamless Pipe N.B. Type" },
    { label: "Storage Tank", value: "300 Ltr capacity" },
    { label: "Filter", value: "To separate small particles, Basket type" },
    { label: "Production Capacity - Potato Chips", value: "50–60 kg/hr" },
    { label: "Production Capacity - Namkeen", value: "150–180 kg/hr" },
    { label: "Production Capacity - Kurkure", value: "150–200 kg" },
    { label: "Production Capacity - Fryums", value: "150–200 kg" },
    { label: "Production Capacity - Dal", value: "90–100 kg/hr" },
    { label: "Control", value: "Complete electrical panel" },
  ],

  [
    "Inbuilt heat exchanger",
    "Stainless Steel contact parts",
    "Semi-automatic operation",
    "Diesel burner",
    "Oil circulation pump",
    "300 litre oil storage tank",
    "Particle separation filter",
    "Complete electrical panel",
    "Seamless pipe system",
  ],

  [
    "Kurkure",
    "Namkeen",
    "Fryums",
    "Potato Chips",
    "Dal",
  ],

  [
    {
      q: "What is the capacity of the Kurkure Batch Fryer?",
      a: "The listed capacity is 100 kg/hr.",
    },
    {
      q: "What type of fryer is this?",
      a: "It is a Batch Fryer with an inbuilt heat exchanger.",
    },
    {
      q: "What is the automation grade?",
      a: "The automation grade is Semi-Automatic.",
    },
    {
      q: "What is the material?",
      a: "The listed material is Stainless Steel.",
    },
    {
      q: "What is the diesel burner capacity?",
      a: "The diesel burner capacity is 1.5 Lakh kcal.",
    },
    {
      q: "What is the oil storage tank capacity?",
      a: "The oil storage tank has a capacity of 300 litres.",
    },
    {
      q: "What products can be fried?",
      a: "The listed products include Kurkure, Namkeen, Fryums, Potato Chips and Dal.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),

p(
  "Direct Biomass Pallet Burner Batch Fryer",
  "/images/machines/Batch Fryer/7.webp",
  "Direct biomass pallet burner batch fryer designed for Namkeen processing with efficient biomass heating and industrial food processing applications.",
  "100 kg/hr",
  "1 HP",
  "Automatic",

  [
    { label: "Capacity (kg/hr)", value: "100" },
    { label: "Equipment Type", value: "Namkeen" },
    { label: "Power Consumption", value: "1 HP" },
    { label: "Fuel", value: "BIOMASS PALLET BURNER" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Minimum Order Quantity", value: "1 Set" },
  ],

  [
    "Direct biomass pallet burner system",
    "Suitable for Namkeen processing",
    "100 kg/hr capacity",
    "Efficient biomass heating",
    "Industrial food processing application",
    "Made in India",
  ],

  [
    "Namkeen",
    "Fryums",
    "Gathiya",
    "Bhujia",
  ],

  [
    {
      q: "What is the capacity of the batch fryer?",
      a: "The listed capacity is 100 kg/hr.",
    },
    {
      q: "What type of fuel is used?",
      a: "The machine uses a BIOMASS PALLET BURNER.",
    },
    {
      q: "What is the equipment type?",
      a: "The equipment type is specified as Namkeen.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 1 HP.",
    },
    {
      q: "What is the country of origin?",
      a: "The machine is Made in India.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Set.",
    },
  ]
),
p(
  "Namkeen Batch Fryer",
  "/images/machines/Batch Fryer/8.webp",
  "Semi-automatic batch fryer with external heat exchanger for efficient frying of Namkeen, Kurkure, Fryums, Dal and Potato Chips.",
  "150 kg/hr",
  "3 HP",
  "Semi Automatic",

  [
    { label: "Capacity", value: "150 kg/hr" },
    { label: "Pan Size", value: "48 × 48 inch" },
    { label: "Heating Type", value: "Biomass pallet burner" },
    { label: "Automation Grade", value: "Semi Automatic" },
    { label: "Material", value: "SS 304" },
    { label: "Tilting Type", value: "Manual Tilting" },
    { label: "Minimum Order Quantity", value: "1 Set" },
    { label: "Equipment Type", value: "Batch Fryer with external heat exchanger" },
    { label: "Contact Parts", value: "Stainless Steel 304" },
    { label: "Basket Net Thickness", value: "1.5 mm and 2.5 mm hole size" },
    { label: "Heat Convertor", value: "2 lakh Pallet burner" },
    { label: "Heat Exchanger Body", value: "5 mm thickness" },
    { label: "Pump", value: "3 H.P. to oil circulation" },
    { label: "Motor", value: "3 H.P. Crompton Greaves make" },
    { label: "Oil Coil", value: "S.S. seamless pipe" },
    { label: "Oil Pipe", value: "25 mm Nominal Bore" },
    { label: "Filter", value: "To separate small particles" },
    { label: "Oil Storage Tank", value: "350 ltr" },
    { label: "Production Capacity - Besan Item", value: "150 kg/hr (Gathiya, Papdi, Ratlami, Bhujia)" },
    { label: "Production Capacity - Kurkure/Fryums", value: "150–200 kg/hr" },
    { label: "Production Capacity - Chana Dal/Moong Dal/Masoor/Matar", value: "90–100 kg/hr" },
    { label: "Production Capacity - Potato Chips", value: "50–60 kg/hr" },
    { label: "Control", value: "Control panel" },
  ],

  [
    "Batch fryer with external heat exchanger",
    "Stainless Steel 304 contact parts",
    "48 × 48 inch pan",
    "Biomass pallet burner",
    "Manual tilting system",
    "3 HP oil circulation pump",
    "350 litre oil storage tank",
    "Particle separation filter",
    "Control panel",
  ],

  [
    "Namkeen",
    "Gathiya",
    "Papdi",
    "Ratlami",
    "Bhujia",
    "Kurkure",
    "Fryums",
    "Chana Dal",
    "Moong Dal",
    "Masoor",
    "Matar",
    "Potato Chips",
  ],

  [
    {
      q: "What is the capacity of the Namkeen Batch Fryer?",
      a: "The listed capacity is 150 kg/hr.",
    },
    {
      q: "What type of heating is used?",
      a: "The heating type is Biomass pallet burner.",
    },
    {
      q: "What material is used?",
      a: "The contact parts are Stainless Steel 304.",
    },
    {
      q: "Is the fryer automatic?",
      a: "The automation grade is Semi Automatic with manual tilting.",
    },
    {
      q: "What is the oil storage capacity?",
      a: "The listed oil storage tank capacity is 350 litres.",
    },
    {
      q: "What products can be fried?",
      a: "The listed products include Namkeen, Gathiya, Papdi, Ratlami, Bhujia, Kurkure, Fryums, Dal, Matar and Potato Chips.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Set.",
    },
  ]
),

p(
  "Circular Batch Fryer",
  "/images/machines/Batch Fryer/9.webp",
  "Automatic circular batch fryer with inbuilt heat exchanger for frying Besan items, chips, Dal and other snacks.",
  "Not Specified",
  "Not Specified",
  "Automatic",

  [
    { label: "Equipment Type", value: "Batch Fryer with inbuilt heat exchanger" },
    { label: "Power Consumption", value: "440 Volt" },
    { label: "Machine Type", value: "Automatic" },
    { label: "Brand", value: "Foodax" },
    { label: "Phase", value: "Single" },
    { label: "Country of Origin", value: "Made in India" },
  ],

  [
    "Inbuilt heat exchanger",
    "Automatic operation",
    "Suitable for commercial snack processing",
    "Designed for batch frying",
    "Suitable for Besan items, chips and Dal snacks",
    "Made in India",
  ],

  [
    "Besan Items",
    "Chips",
    "Dal Snacks",
    "Namkeen",
  ],

  [
    {
      q: "What type of machine is this?",
      a: "It is an Automatic Circular Batch Fryer with an inbuilt heat exchanger.",
    },
    {
      q: "What is the equipment type?",
      a: "The equipment type is Batch Fryer with inbuilt heat exchanger.",
    },
    {
      q: "What is the power requirement?",
      a: "The listed power consumption is 440 Volt.",
    },
    {
      q: "What products can be fried?",
      a: "The machine is used for frying Besan items, chips, Dal snacks and other snacks.",
    },
    {
      q: "What is the brand?",
      a: "The listed brand is Foodax.",
    },
    {
      q: "What is the country of origin?",
      a: "The machine is Made in India.",
    },
  ]
),
p(
  "Wood Fired Batch Fryer",
  "/images/machines/Batch Fryer/10.webp",
  "Automatic batch fryer with wooden bowler, designed for frying food in small batches for commercial snack processing applications.",
  "150 kg/hr",
  "5 HP",
  "Automatic",

  [
    { label: "Equipment Type", value: "BATCH FRYER WITH WOODEN BOWLER" },
    { label: "Capacity", value: "150 Kg/Hr" },
    { label: "Power Consumption", value: "5 Hp" },
    { label: "Machine Type", value: "Automatic" },
    { label: "Voltage", value: "240 V" },
    { label: "Phase", value: "3 Phase" },
    { label: "Country of Origin", value: "Made in India" },
  ],

  [
    "Wood fired batch frying system",
    "Wooden bowler design",
    "Automatic operation",
    "150 kg/hr capacity",
    "Suitable for commercial snack processing",
    "Made in India",
  ],

  [
    "Besan Items",
    "Chips",
    "Dal Snacks",
    "Namkeen",
    "Fried Snacks",
  ],

  [
    {
      q: "What is the capacity of the Wood Fired Batch Fryer?",
      a: "The listed capacity is 150 Kg/Hr.",
    },
    {
      q: "What is the equipment type?",
      a: "The equipment type is BATCH FRYER WITH WOODEN BOWLER.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the machine type is Automatic.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 5 Hp.",
    },
    {
      q: "What is the voltage?",
      a: "The listed voltage is 240 V.",
    },
    {
      q: "What is the phase?",
      a: "The machine operates on 3 Phase.",
    },
    {
      q: "What is the machine used for?",
      a: "It is used as commercial snack processing equipment for frying food in small batches.",
    },
    {
      q: "What is the country of origin?",
      a: "The machine is Made in India.",
    },
  ]
),
p(
  "Batch Type Oil Fryer",
  "/images/machines/Batch Fryer/11.webp",
  "Automatic batch type oil fryer designed for frying snacks and Namkeen, featuring temperature control and a draining system for removing excess oil.",
  "150 kg/hr",
  "1 kW",
  "Automatic",

  [
    { label: "Capacity", value: "150 Kg/Hr" },
    { label: "Power Consumption", value: "1 kW" },
    { label: "Machine Type", value: "Automatic" },
    { label: "Brand", value: "Foodax" },
    { label: "Voltage", value: "240 V" },
    { label: "Design Type", value: "Standard" },
    { label: "Phase", value: "Single" },
    { label: "Country of Origin", value: "Made in India" },
  ],

  [
    "Automatic operation",
    "Standard design",
    "Deep frying system",
    "Temperature control system",
    "Basket or rack for holding food",
    "Draining system for excess oil",
    "150 kg/hr capacity",
    "Made in India",
  ],

  [
    "Namkeen",
    "Snacks",
    "Fried Snacks",
    "Chips",
  ],

  [
    {
      q: "What is the capacity of the Batch Type Oil Fryer?",
      a: "The listed capacity is 150 Kg/Hr.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the machine type is Automatic.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 1 kW.",
    },
    {
      q: "What is the voltage?",
      a: "The listed voltage is 240 V.",
    },
    {
      q: "What is the design type?",
      a: "The design type is Standard.",
    },
    {
      q: "What is the phase?",
      a: "The machine operates on Single phase.",
    },
    {
      q: "What is the machine used for?",
      a: "It is used for frying snacks and Namkeen.",
    },
    {
      q: "What features does the fryer have?",
      a: "It typically includes a deep fryer with basket or racks, temperature control and a draining system for excess oil.",
    },
    {
      q: "What is the country of origin?",
      a: "The machine is Made in India.",
    },
  ]
),
p(
  "BATCH FRYER (DIRECT DIESEL BURNER)",
  "/images/machines/Batch Fryer/12.webp",
  "Semi-automatic batch fryer with direct diesel burner, SS 304 construction, automatic temperature control panel and auto filtration system.",
  "As Per Product",
  "Not Specified",
  "Semi-Automatic",

  [
    { label: "Equipment Type", value: "BATCH FRYER" },
    { label: "Capacity", value: "AS PR PRODUCT" },
    { label: "Power Consumption", value: "220" },
    { label: "Machine Type", value: "Semi-Automatic" },
    { label: "Material", value: "SS 304" },
    { label: "Brand", value: "FOODAX" },
    { label: "Contact Parts", value: "Stainless Steel" },
    { label: "Size - Length", value: "1500 mm" },
    { label: "Size - Width", value: "1000 mm" },
    { label: "Size - Depth", value: "400 mm" },
    { label: "Burner", value: "1.50 Lakh kcal, Sookook make" },
    { label: "Gear Pump Motor", value: "0.5 HP" },
    { label: "Storage Tank", value: "200 Ltr" },
    { label: "Oil Circulation", value: "Not continuous circulation" },
    { label: "Filtration", value: "Auto filtration" },
    { label: "Production Capacity - Kurkure/Fryums/Katori", value: "100–150 kg/hr" },
    { label: "Production Capacity - Potato Chips", value: "25–30 kg/hr" },
    { label: "Temperature Control", value: "Auto temperature control panel" },
  ],

  [
    "Direct diesel burner",
    "SS 304 construction",
    "Stainless Steel contact parts",
    "Auto filtration system",
    "0.5 HP gear pump motor",
    "200 litre storage tank",
    "Auto temperature control panel",
    "Semi-automatic operation",
  ],

  [
    "Kurkure",
    "Fryums",
    "Katori",
    "Potato Chips",
  ],

  [
    {
      q: "What is the equipment type?",
      a: "The equipment type is BATCH FRYER.",
    },
    {
      q: "What type of burner is used?",
      a: "The machine is specified as a direct diesel burner batch fryer with a 1.50 Lakh kcal burner.",
    },
    {
      q: "What material is used?",
      a: "The machine uses SS 304 material and all contact parts are Stainless Steel.",
    },
    {
      q: "What is the production capacity?",
      a: "The listed production capacity is 100–150 kg/hr for Kurkure, Fryums and Katori, and 25–30 kg/hr for Potato Chips.",
    },
    {
      q: "What is the storage tank capacity?",
      a: "The storage tank capacity is 200 litres.",
    },
    {
      q: "Does it have automatic filtration?",
      a: "Yes, the machine has an auto filtration system.",
    },
    {
      q: "Does it have temperature control?",
      a: "Yes, it has an auto temperature control panel.",
    },
    {
      q: "What is the machine type?",
      a: "The machine type is Semi-Automatic.",
    },
  ]
),
p(
  "Gas Batch Fryer",
  "/images/machines/Batch Fryer/13.webp",
  "Commercial gas batch fryer with inbuilt heat exchanger, auto filtration, circulation pump, 350 litre storage tank and automatic temperature control.",
  "150 kg/hr",
  "Not Specified",
  "Semi Automatic",

  [
    { label: "Usage/Application", value: "Commercial" },
    { label: "Brand", value: "FOODAX" },
    { label: "Size", value: "48 INCH" },
    { label: "Model Name/Number", value: "FEW-090" },
    { label: "Automatic Grade", value: "SEMI" },
    { label: "Dimensions", value: "48 INCH" },
    { label: "Equipment Type", value: "Gas Batch Fryer with inbuilt heat exchanger" },
    { label: "Filtration", value: "Auto Filtration" },
    { label: "Circulation System", value: "Circulation Pump" },
    { label: "Storage Tank", value: "350 Ltr" },
    { label: "Temperature Control", value: "Automatic Temperature Control" },
    { label: "Production Capacity - Besan Item", value: "150 kg/hr" },
    { label: "Production Capacity - Dal", value: "100 kg/hr" },
    { label: "Production Capacity - Potato Chips", value: "60 kg/hr" },
  ],

  [
    "Commercial gas frying system",
    "Inbuilt heat exchanger",
    "Auto filtration system",
    "Oil circulation pump",
    "350 litre storage tank",
    "Automatic temperature control",
    "48 inch design",
    "Semi automatic operation",
  ],

  [
    "Besan Items",
    "Dal",
    "Potato Chips",
    "Namkeen",
    "Fried Snacks",
  ],

  [
    {
      q: "What type of fryer is this?",
      a: "It is a commercial Gas Batch Fryer with an inbuilt heat exchanger.",
    },
    {
      q: "What is the capacity for Besan items?",
      a: "The listed capacity for Besan items is 150 kg/hr.",
    },
    {
      q: "What is the capacity for Dal?",
      a: "The listed capacity for Dal is 100 kg/hr.",
    },
    {
      q: "What is the capacity for Potato Chips?",
      a: "The listed capacity for Potato Chips is 60 kg/hr.",
    },
    {
      q: "Does the fryer have an automatic filtration system?",
      a: "Yes, the fryer has auto filtration.",
    },
    {
      q: "What is the storage tank capacity?",
      a: "The storage tank capacity is 350 litres.",
    },
    {
      q: "Does it have automatic temperature control?",
      a: "Yes, the machine has automatic temperature control.",
    },
    {
      q: "What is the model number?",
      a: "The model number is FEW-090.",
    },
  ]
),
p(
  "Continuous Potato Banana Chips Fryer",
  "/images/machines/Batch Fryer/14.webp",
  "Continuous direct heat fryer for industrial potato and banana chips production with stainless steel construction and biomass pallet heating.",
  "100 kg/hr",
  "9 kW",
  "Automatic",

  [
    { label: "Production Capacity", value: "100 kg/hr" },
    { label: "Capacity (Kg/Hr)", value: "300" },
    { label: "Heating Source", value: "BIOMASS PALLET" },
    { label: "Fryer Type", value: "Direct Heat Fryer" },
    { label: "Machine Components", value: "Stainless Steel" },
    { label: "Material", value: "SS 304" },
    { label: "Usage/Application", value: "Industrial" },
    { label: "Application", value: "Potato Chips" },
    { label: "Oil Holding Capacity", value: "300–500 L" },
    { label: "Power Consumption", value: "9 kw" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Minimum Order Quantity", value: "1 Set" },
  ],

  [
    "Continuous frying operation",
    "Direct heat fryer",
    "Biomass pallet heating",
    "SS 304 construction",
    "Stainless Steel machine components",
    "300–500 litre oil holding capacity",
    "9 kW power consumption",
    "Suitable for industrial applications",
    "Made in India",
  ],

  [
    "Potato Chips",
    "Banana Chips",
    "Fried Snacks",
  ],

  [
    {
      q: "What is the production capacity?",
      a: "The listed production capacity is 100 kg/hr, with another listed capacity of 300 kg/hr.",
    },
    {
      q: "What type of fryer is used?",
      a: "The fryer type is Direct Heat Fryer.",
    },
    {
      q: "What is the heating source?",
      a: "The heating source is BIOMASS PALLET.",
    },
    {
      q: "What material is used?",
      a: "The machine is made with SS 304 and its components are Stainless Steel.",
    },
    {
      q: "What is the oil holding capacity?",
      a: "The listed oil holding capacity is 300–500 litres.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 9 kW.",
    },
    {
      q: "What is the application?",
      a: "The listed application is Potato Chips, with the machine intended for industrial use.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Set.",
    },
  ]
),
  ],
},


// 2nd category

{
  slug: "food-processing-machine",
  name: "Food Processing Machine",
  products: [
    p(
      "Fryums Roasting Machine",
      "/images/machines/Food Processing Machine/1.webp",
      "Rotary drum roasting machine for industrial grain roasting and roasting of fryums, kurkure, chana, corn and other snack products.",
      "60–70 kg/hr",
      "Not Specified",
      "Automatic",

      [
        { label: "Capacity", value: "60 to 70" },
        { label: "Machine Type", value: "Rotary Drum" },
        { label: "Usage/Application", value: "Industrial" },
        { label: "Application", value: "Grain Roasting" },
        { label: "Automation Grade", value: "Automatic" },
        { label: "Batch Type", value: "Continuous" },
        { label: "Power Consumption", value: "220 single phase" },
        { label: "Voltage", value: "240 V" },
        { label: "Material", value: "Mild Steel" },
        { label: "Phase", value: "Single Phase" },
        { label: "Control Type", value: "Manual Control" },
        { label: "Roasting Temperature", value: "Up To 250 C" },
        { label: "Heating Type", value: "Diesel" },
        { label: "Fuel", value: "LPG" },
        { label: "Minimum Order Quantity", value: "1 Piece" },
      ],

      [
        "Rotary drum design",
        "Industrial roasting application",
        "Automatic operation",
        "Continuous batch type",
        "Manual control",
        "Up to 250°C roasting temperature",
        "Diesel heating",
        "LPG fuel",
        "Mild Steel construction",
      ],

      [
        "Fryums",
        "Kurkure",
        "Chana",
        "Corn",
        "Grain",
        "Roasted Snacks",
      ],

      [
        {
          q: "What is the capacity of the Fryums Roasting Machine?",
          a: "The listed capacity is 60 to 70.",
        },
        {
          q: "What is the machine type?",
          a: "The machine type is Rotary Drum.",
        },
        {
          q: "What is the application?",
          a: "The listed application is Grain Roasting for industrial use.",
        },
        {
          q: "What is the roasting temperature?",
          a: "The roasting temperature is up to 250 C.",
        },
        {
          q: "What type of heating is used?",
          a: "The listed heating type is Diesel and the fuel is LPG.",
        },
        {
          q: "What is the control type?",
          a: "The control type is Manual Control.",
        },
        {
          q: "What material is used?",
          a: "The machine is constructed from Mild Steel.",
        },
        {
          q: "What is the minimum order quantity?",
          a: "The minimum order quantity is 1 Piece.",
        },
      ]
    ),

    p(
  "Masala Mixing Drum",
  "/images/machines/Food Processing Machine/2.webp",
  "Automatic masala mixing drum designed for industrial flavouring and seasoning applications with SS 304 food-contact construction.",
  "300 kg/hr",
  "2 HP",
  "Automatic",

  [
    { label: "Automation Grade", value: "Automatic" },
    { label: "Machine Type", value: "Automatic" },
    { label: "Machine Function", value: "Flavouring" },
    { label: "Process Type", value: "Flavouring" },
    { label: "Brand", value: "FOODAX" },
    { label: "Operation Mode", value: "Automatic" },
    { label: "Electricity Connection", value: "Three Phase" },
    { label: "Batch Capacity", value: "30 kg" },
    { label: "Capacity", value: "300 kg/hr" },
    { label: "Motor Power", value: "2 HP" },
    { label: "Material of Construction (Contact)", value: "SS 304" },
    { label: "Power Consumption", value: "1500 W" },
    { label: "Voltage", value: "415 V" },
    { label: "Material of Construction", value: "SS 304" },
    { label: "Speed", value: "20 rpm" },
    { label: "Surface Finish", value: "Industrial Finish" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Automatic operation",
    "Flavouring and seasoning process",
    "Three phase electrical connection",
    "SS 304 contact parts",
    "2 HP motor",
    "20 rpm operating speed",
    "1500 W power consumption",
    "30 kg batch capacity",
    "300 kg/hr capacity",
    "Industrial finish",
  ],

  [
    "Masala Mixing",
    "Snack Flavouring",
    "Namkeen",
    "Seasoned Snacks",
    "Food Processing",
  ],

  [
    {
      q: "What is the capacity of the Masala Mixing Drum?",
      a: "The listed capacity is 300 kg/hr with a batch capacity of 30 kg.",
    },
    {
      q: "What is the machine function?",
      a: "The machine function is Flavouring.",
    },
    {
      q: "What is the motor power?",
      a: "The listed motor power is 2 HP.",
    },
    {
      q: "What material is used for the contact parts?",
      a: "The contact parts are made from SS 304.",
    },
    {
      q: "What is the operating speed?",
      a: "The listed speed is 20 rpm.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 1500 W.",
    },
    {
      q: "What is the voltage?",
      a: "The listed voltage is 415 V.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),

p(
  "Pola Puff Cutter Machine",
  "/images/machines/Food Processing Machine/3.webp",
  "Pola puff cutting machine designed for fast and efficient cutting of Pola Puff snacks with 100 to 150 kg/hr capacity.",
  "100–150 kg/hr",
  "2 kW",
  "Automatic",

  [
    { label: "Capacity", value: "100 to 150 kg/hrs" },
    { label: "Material To Be Extruded", value: "Pola puff cutter" },
    { label: "Type", value: "Machine" },
    { label: "Power Consumption", value: "440 Volts" },
    { label: "Type Of Namkeen", value: "Pola Puff" },
    { label: "Power Source", value: "2 kW" },
    { label: "Phase", value: "3" },
    { label: "Model Name/Number", value: "FEW-0085" },
    { label: "Material", value: "Mild Steel" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "100–150 kg/hr production capacity",
    "Designed for Pola Puff",
    "Fast and efficient cutting",
    "2 kW power source",
    "3 phase operation",
    "Mild Steel construction",
    "440 V power connection",
    "Suitable for industrial snack processing",
  ],

  [
    "Pola Puff",
    "Puff Snacks",
    "Namkeen",
  ],

  [
    {
      q: "What is the capacity of the Pola Puff Cutter Machine?",
      a: "The listed capacity is 100 to 150 kg/hr.",
    },
    {
      q: "What type of Namkeen is it designed for?",
      a: "The machine is designed for Pola Puff.",
    },
    {
      q: "What is the power source?",
      a: "The listed power source is 2 kW.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 440 Volts.",
    },
    {
      q: "What is the model number?",
      a: "The model number is FEW-0085.",
    },
    {
      q: "What material is used?",
      a: "The machine is made from Mild Steel.",
    },
    {
      q: "What is the phase?",
      a: "The machine operates on 3 phase.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),

p(
  "Banana Chips Making Machine",
  "/images/machines/Food Processing Machine/4.webp",
  "Automatic banana chips making machine with stainless steel components, designed for producing plain and round sliced banana chips with a production capacity of 200 kg/hr.",
  "200 kg/hr",
  "1 HP",
  "Automatic",

  [
    { label: "Machine Type", value: "Automatic" },
    { label: "Production Capacity", value: "200 kg/hr" },
    { label: "Machine Components", value: "Stainless Steel" },
    { label: "Motor Power", value: "1 HP" },
    { label: "Usage/Application", value: "Banana Chips" },
    { label: "Slice Type", value: "Plain, Round" },
    { label: "Frequency", value: "50 Hz" },
    { label: "Voltage", value: "240 V" },
    { label: "Country of Origin", value: "Made in India" },
  ],

  [
    "Automatic operation",
    "200 kg/hr production capacity",
    "Stainless Steel components",
    "1 HP motor",
    "Plain and round slicing",
    "50 Hz frequency",
    "240 V operation",
    "Made in India",
  ],

  [
    "Banana Chips",
    "Plain Banana Chips",
    "Round Banana Chips",
  ],

  [
    {
      q: "What is the production capacity?",
      a: "The listed production capacity is 200 kg/hr.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the machine type is Automatic.",
    },
    {
      q: "What is the motor power?",
      a: "The listed motor power is 1 HP.",
    },
    {
      q: "What type of slices can it produce?",
      a: "The machine produces Plain and Round slices.",
    },
    {
      q: "What material are the machine components made from?",
      a: "The machine components are made from Stainless Steel.",
    },
    {
      q: "What is the voltage?",
      a: "The listed voltage is 240 V.",
    },
    {
      q: "What is the frequency?",
      a: "The listed frequency is 50 Hz.",
    },
    {
      q: "What is the country of origin?",
      a: "The machine is Made in India.",
    },
  ]
),
p(
  "Chana Roaster Machine",
  "/images/machines/Food Processing Machine/5.webp",
  "Semi-automatic industrial roasting machine for roasting Chana, nuts, flour, grains, seeds and other food products with stainless steel construction.",
  "400 kg/hr",
  "Not Specified",
  "Semi-Automatic",

  [
    { label: "Capacity (Kg/Hr)", value: "400" },
    { label: "Type of Machine", value: "Industrial Roasting Machine" },
    { label: "Usage/Application", value: "Industrial" },
    { label: "Fuel", value: "Diesel" },
    { label: "Material", value: "Stainless Steel" },
    { label: "Automation Grade", value: "Semi-Automatic" },
    { label: "Country of Origin", value: "Made in India" },
  ],

  [
    "400 kg/hr capacity",
    "Industrial roasting machine",
    "Semi-automatic operation",
    "Diesel heating",
    "Stainless Steel construction",
    "Suitable for multiple food products",
    "Made in India",
  ],

  [
    "Chana",
    "Nuts",
    "Flour",
    "Grains",
    "Seeds",
    "Roasted Food Products",
  ],

  [
    {
      q: "What is the capacity of the Chana Roaster Machine?",
      a: "The listed capacity is 400 kg/hr.",
    },
    {
      q: "What type of machine is this?",
      a: "It is an Industrial Roasting Machine.",
    },
    {
      q: "What fuel does the machine use?",
      a: "The listed fuel is Diesel.",
    },
    {
      q: "Is the machine automatic?",
      a: "The automation grade is Semi-Automatic.",
    },
    {
      q: "What material is used?",
      a: "The machine is made from Stainless Steel.",
    },
    {
      q: "What products can be roasted?",
      a: "The machine can be used for roasting Chana, nuts, flour, grains, seeds and other food products.",
    },
    {
      q: "What is the country of origin?",
      a: "The machine is Made in India.",
    },
  ]
),
p(
  "Noodle Steamer Machine",
  "/images/machines/Food Processing Machine/6.webp",
  "Noodle steamer machine with electric heating, MS and SS chamber construction and one-stage steaming system for food processing applications.",
  "100 kg/hr",
  "Not Specified",
  "Automatic",

  [
    { label: "Capacity Per Batch", value: "100 kg/batch" },
    { label: "Capacity (kg/hr)", value: "100" },
    { label: "Heating Source", value: "Electric" },
    { label: "Chamber Type", value: "MS and SS" },
    { label: "Capacity", value: "250 kg/hr" },
    { label: "Finish", value: "Color Coated" },
    { label: "Machine Type", value: "1-Stage" },
    { label: "Material", value: "MS" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Electric heating system",
    "MS and SS chamber",
    "1-stage steaming system",
    "Color coated finish",
    "100 kg/batch capacity",
    "Suitable for noodle processing",
  ],

  [
    "Noodles",
    "Steamed Noodles",
    "Food Processing",
  ],

  [
    {
      q: "What is the capacity per batch?",
      a: "The listed capacity per batch is 100 kg/batch.",
    },
    {
      q: "What is the listed hourly capacity?",
      a: "The listed capacity is 100 kg/hr, with another capacity specification of 250 kg/hr.",
    },
    {
      q: "What is the heating source?",
      a: "The heating source is Electric.",
    },
    {
      q: "What type of chamber is used?",
      a: "The chamber type is MS and SS.",
    },
    {
      q: "What is the machine type?",
      a: "The machine type is 1-Stage.",
    },
    {
      q: "What is the material?",
      a: "The listed material is MS.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
p(
  "Corn Puff Making Machine",
  "/images/machines/Food Processing Machine/7.webp",
  "Automatic single screw corn puff making machine with 100 kg/hr capacity, 25 HP motor and Mild Steel construction for industrial puff snack production.",
  "100 kg/hr",
  "25 HP",
  "Automatic",

  [
    { label: "Capacity", value: "100 kg/hr" },
    { label: "Motor Power", value: "25 HP" },
    { label: "Machine Type", value: "Single Screw" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Material Of Construction", value: "Mild Steel" },
    { label: "Power Source", value: "Electric" },
    { label: "Phase", value: "Three Phase" },
    { label: "Installation Services", value: "Yes" },
    { label: "Brand", value: "Foodax" },
    { label: "Country of Origin", value: "Made In India" },
  ],

  [
    "Automatic operation",
    "Single screw machine",
    "100 kg/hr production capacity",
    "25 HP motor",
    "Mild Steel construction",
    "Electric power source",
    "Three phase operation",
    "Installation services available",
    "Made in India",
  ],

  [
    "Corn Puff",
    "Puff Snacks",
    "Extruded Snacks",
  ],

  [
    {
      q: "What is the capacity of the Corn Puff Making Machine?",
      a: "The listed capacity is 100 kg/hr.",
    },
    {
      q: "What is the motor power?",
      a: "The listed motor power is 25 HP.",
    },
    {
      q: "What type of machine is it?",
      a: "The machine type is Single Screw.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the automation grade is Automatic.",
    },
    {
      q: "What material is used for construction?",
      a: "The material of construction is Mild Steel.",
    },
    {
      q: "What is the power source?",
      a: "The power source is Electric.",
    },
    {
      q: "What phase does the machine require?",
      a: "The machine requires Three Phase power.",
    },
    {
      q: "Are installation services available?",
      a: "Yes, installation services are available.",
    },
    {
      q: "What is the brand?",
      a: "The listed brand is Foodax.",
    },
    {
      q: "What is the country of origin?",
      a: "The machine is Made In India.",
    },
  ]
),
p(
  "Pasta Making Machine",
  "/images/machines/Food Processing Machine/8.webp",
  "Automatic single screw pasta making machine designed for industrial production of pasta and macaroni with SS 304 construction, rugged design and low power consumption.",
  "50–60 kg/hr",
  "20 kW",
  "Automatic",

  [
    { label: "Machine Type", value: "Single Screw" },
    { label: "Production Capacity", value: "100 kg/hr" },
    { label: "Actual Production Capacity", value: "50–60 kg/hr" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Usage/Application", value: "Industrial" },
    { label: "Installed Power", value: "20 kW" },
    { label: "Die Material", value: "SS 304" },
    { label: "Material Of Construction", value: "SS 304" },
    { label: "Power Consumption", value: "10 Kw" },
    { label: "Pasta Shape", value: "Penne" },
    { label: "Dryer Type", value: "Batch Dryer" },
    { label: "Power Source", value: "Electrical" },
    { label: "Country of Origin", value: "Made In India" },
    { label: "Weight", value: "300 kg" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Rugged design",
    "Negligible maintenance",
    "Low power consumption",
    "Automatic operation",
    "Single screw system",
    "SS 304 die material",
    "SS 304 construction",
    "Batch dryer system",
    "Electrical power source",
  ],

  [
    "Pasta",
    "Macaroni",
    "Penne",
  ],

  [
    {
      q: "What is the machine type?",
      a: "The machine type is Single Screw.",
    },
    {
      q: "What is the production capacity?",
      a: "The listed production capacity is 100 kg/hr, while the provided specification also mentions 50–60 kg/hr.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the automation grade is Automatic.",
    },
    {
      q: "What material is used for construction?",
      a: "The material of construction is SS 304.",
    },
    {
      q: "What material is used for the die?",
      a: "The die material is SS 304.",
    },
    {
      q: "What pasta shape is specified?",
      a: "The specified pasta shape is Penne.",
    },
    {
      q: "What type of dryer is used?",
      a: "The dryer type is Batch Dryer.",
    },
    {
      q: "What is the power source?",
      a: "The power source is Electrical.",
    },
    {
      q: "What is the machine weight?",
      a: "The listed weight is 300 kg.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
p(
  "Food Extruder Machine",
  "/images/machines/Food Processing Machine/9.webp",
  "Fully automatic single screw food extruder machine designed for industrial snack production with high output capacity, steam jacket heating, quick die change and HMI control system.",
  "1000 kg/hr",
  "90 kW",
  "Fully Automatic",

  [
    { label: "Extruder Type", value: "Single screw" },
    { label: "Application", value: "Snacks" },
    { label: "Output Capacity", value: "1000 kg/hr" },
    { label: "Drive Power", value: "90 kW" },
    { label: "Heating Type", value: "Steam jackets" },
    { label: "Die Change", value: "Quick change" },
    { label: "Automation Grade", value: "Fully automatic" },
    { label: "Feeder Type", value: "Loss in weight" },
    { label: "Control System", value: "HMI" },
  ],

  [
    "Single screw extrusion system",
    "1000 kg/hr output capacity",
    "90 kW drive power",
    "Steam jacket heating",
    "Quick die change system",
    "Fully automatic operation",
    "Loss in weight feeder",
    "HMI control system",
    "Designed for snack production",
  ],

  [
    "Snacks",
    "Extruded Snacks",
    "Food Products",
  ],

  [
    {
      q: "What is the output capacity of the Food Extruder Machine?",
      a: "The listed output capacity is 1000 kg/hr.",
    },
    {
      q: "What type of extruder is used?",
      a: "The extruder type is Single screw.",
    },
    {
      q: "What is the drive power?",
      a: "The listed drive power is 90 kW.",
    },
    {
      q: "What type of heating is used?",
      a: "The heating type is Steam jackets.",
    },
    {
      q: "Does the machine have quick die change?",
      a: "Yes, the machine is specified with a Quick change die system.",
    },
    {
      q: "What is the automation grade?",
      a: "The automation grade is Fully automatic.",
    },
    {
      q: "What type of feeder is used?",
      a: "The feeder type is Loss in weight.",
    },
    {
      q: "What control system is used?",
      a: "The control system is HMI.",
    },
  ]
),


p(
  "Dough Mixer (Malli Machine)",
  "/images/machines/Food Processing Machine/11.webp",
  "Automatic stainless steel dough mixer designed for mixing dough ingredients evenly in bakeries and food processing applications.",
  "10 kg",
  "Not Specified",
  "Automatic",

  [
    { label: "Material", value: "Stainless Steel (SS)" },
    { label: "Type of Machine", value: "Dough Mixers" },
    { label: "Power Source", value: "Electric" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Capacity", value: "10 kg" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Automatic operation",
    "Stainless Steel construction",
    "Electric power source",
    "10 kg mixing capacity",
    "Designed for even dough consistency",
    "Suitable for bakery and food processing applications",
    "Made in India",
  ],

  [
    "Dough",
    "Bakery Products",
    "Food Processing",
  ],

  [
    {
      q: "What is the capacity of the Dough Mixer?",
      a: "The listed capacity is 10 kg.",
    },
    {
      q: "What material is used?",
      a: "The machine is made from Stainless Steel (SS).",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the automation grade is Automatic.",
    },
    {
      q: "What is the power source?",
      a: "The power source is Electric.",
    },
    {
      q: "What is the machine used for?",
      a: "Dough mixers are used to stir dough ingredients together and produce dough of even consistency.",
    },
    {
      q: "What is the country of origin?",
      a: "The machine is Made in India.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),

p(
  "Food Processing Plant Installation Service",
  "/images/machines/Food Processing Machine/12.webp",
  "Food processing plant installation and recipe development service for a wide range of snack, cereal, pasta, nut and spice processing plants across India.",
  "PAN India",
  "Not Specified",
  "Service",

  [
    { label: "Service Location", value: "Delhi NCR" },
    { label: "Machine Type", value: "All Food Processing Machines" },
    { label: "Place Of Service", value: "Ghaziabad" },
    { label: "Duration", value: "200 km" },
    { label: "Deliver Type", value: "PAN India" },
    { label: "Minimum Order Quantity", value: "1 Unit" },
    { label: "Service Type", value: "Plant Installation & Recipe Development" },
  ],

  [
    "Food processing plant installation service",
    "PAN India service",
    "Recipe development support",
    "Spice recipe development",
    "Rice and corn puff plant support",
    "Kurkure plant support",
    "Namkeen plant support",
    "Potato chips plant support",
    "Soya badi plant support",
    "Macaroni and pasta plant support",
    "Potato flakes plant support",
    "Almond, cashew and pista processing plant support",
  ],

  [
    "Rice Corn Puff",
    "Kurkure",
    "Namkeen",
    "Potato Chips",
    "Soya Badi",
    "Macaroni",
    "Pasta",
    "Potato Flakes",
    "Almond",
    "Cashew Nut",
    "Pista",
    "Spices",
  ],

  [
    {
      q: "What does the Food Processing Plant Installation Service include?",
      a: "The service includes installation support for food processing machines and plant setup.",
    },
    {
      q: "Where is the service available?",
      a: "The service location is Delhi NCR, with PAN India delivery/service coverage.",
    },
    {
      q: "Where is the place of service?",
      a: "The listed place of service is Ghaziabad.",
    },
    {
      q: "What type of machines can be installed?",
      a: "The service covers all food processing machines.",
    },
    {
      q: "Is recipe development available?",
      a: "Yes, the service includes recipe development for different food products and spices.",
    },
    {
      q: "Which products are supported?",
      a: "Support is listed for rice corn puff, Kurkure, Namkeen, potato chips, soya badi, macaroni, pasta, potato flakes, almond, cashew nut and pista plants.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Unit.",
    },
  ]
),
  ],
},



{
  slug: "packing-machine",
  name: "Packing Machine",
  products: [
    p(
      "Extruded (KURKURE) Snack Production Line",
      "/images/machines/Packing Machine/1.webp",
      "Automatic industrial Kurkure production line with 300 kg/hr capacity for extruded snack production.",
      "300 kg/hr",
      "Not Specified",
      "Automatic",

      [
        { label: "Capacity", value: "300 kg/hr" },
        { label: "Snacks Type", value: "Kurkure production line" },
        { label: "Usage/Application", value: "Industrial" },
        { label: "Automation Grade", value: "Automatic" },
        { label: "Country of Origin", value: "Made in India" },
      ],

      [
        "Automatic production line",
        "300 kg/hr capacity",
        "Designed for Kurkure production",
        "Industrial application",
        "Suitable for extruded snack production",
        "Made in India",
      ],

      [
        "Kurkure",
        "Extruded Snacks",
        "Millet Extruded Snacks",
      ],

      [
        {
          q: "What is the capacity of the Kurkure Production Line?",
          a: "The listed capacity is 300 kg/hr.",
        },
        {
          q: "What type of snacks can be produced?",
          a: "The line is designed for Kurkure and extruded snack production.",
        },
        {
          q: "What is the automation grade?",
          a: "The automation grade is Automatic.",
        },
        {
          q: "Where can the production line be used?",
          a: "It is designed for industrial snack production applications.",
        },
        {
          q: "What is the country of origin?",
          a: "The production line is Made in India.",
        },
      ]
    ),


    p(
  "Collar Type Packing Machine",
  "/images/machines/Packing Machine/2.webp",
  "Automatic collar type packing machine for commercial snack packaging with center seal pouch formation, volumetric cup filling and 40–60 pouches per minute packing speed.",
  "40–60 pouch/min",
  "3–4 kW",
  "Automatic",

  [
    { label: "Packing Speed", value: "40-60 pouch/min" },
    { label: "Filling Range", value: "10-100 g" },
    { label: "Product Type", value: "Snacks" },
    { label: "Capacity", value: "50 pack/min" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Pouch Type", value: "Center Seal" },
    { label: "Film Material", value: "Laminated Film" },
    { label: "Roll Width (Max)", value: "400 mm" },
    { label: "Voltage", value: "220 V" },
    { label: "Usage/Application", value: "Commercial" },
    { label: "Filling System", value: "Volumetric Cup" },
    { label: "Machine Automation", value: "Automatic" },
    { label: "Power Consumption", value: "3-4 kW" },
    { label: "Machine Material", value: "SS304" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "40–60 pouches per minute packing speed",
    "10–100 g filling range",
    "Center seal pouch system",
    "Volumetric cup filling",
    "Automatic operation",
    "Laminated film compatible",
    "400 mm maximum roll width",
    "SS304 machine construction",
    "Commercial snack packaging",
    "Made in India",
  ],

  [
    "Snacks",
    "Namkeen",
    "Kurkure",
    "Fryums",
    "Extruded Snacks",
  ],

  [
    {
      q: "What is the packing speed?",
      a: "The listed packing speed is 40–60 pouches per minute.",
    },
    {
      q: "What is the filling range?",
      a: "The filling range is 10–100 g.",
    },
    {
      q: "What type of pouch is used?",
      a: "The machine uses a Center Seal pouch format.",
    },
    {
      q: "What filling system is used?",
      a: "The filling system is Volumetric Cup.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the automation grade and machine automation are Automatic.",
    },
    {
      q: "What is the maximum roll width?",
      a: "The maximum roll width is 400 mm.",
    },
    {
      q: "What material is the machine made from?",
      a: "The machine material is SS304.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
p(
  "Spices Packing Machine",
  "/images/machines/Packing Machine/3.webp",
  "Semi-automatic vertical FFS spices packing machine with cup filler feeding system and center seal packaging for food processing applications.",
  "2500 pouch/hour",
  "1–2 HP",
  "Semi-Automatic",

  [
    { label: "Spice Form", value: "Namkeen" },
    { label: "Filling Range", value: "50–100 g" },
    { label: "Machine Type", value: "Vertical FFS" },
    { label: "Pouch Capacity", value: "50 grams" },
    { label: "Usage/Application", value: "Food Processing Industry" },
    { label: "Packaging Type", value: "Center Seal" },
    { label: "Feeding System", value: "Cup Filler" },
    { label: "Packaging Speed", value: "30–50 ppm" },
    { label: "Pouch Type", value: "Center Seal" },
    { label: "Capacity", value: "2500 Pouch/Hour" },
    { label: "Frequency", value: "50 Hz" },
    { label: "Driven Type", value: "Electric" },
    { label: "Voltage", value: "440" },
    { label: "Automation Grade", value: "Semi-Automatic" },
    { label: "Machine Power", value: "1–2 HP" },
    { label: "Country of Origin", value: "Made in India" },
  ],

  [
    "Vertical FFS packaging system",
    "Cup filler feeding system",
    "Center seal pouch packaging",
    "30–50 ppm packaging speed",
    "2500 pouches/hour capacity",
    "Semi-automatic operation",
    "Electric drive",
    "1–2 HP machine power",
    "Suitable for food processing industry",
    "Made in India",
  ],

  [
    "Namkeen",
    "Spices",
    "Snacks",
    "Food Products",
  ],

  [
    {
      q: "What is the filling range?",
      a: "The filling range is 50–100 g.",
    },
    {
      q: "What type of packing machine is this?",
      a: "It is a Vertical FFS packing machine.",
    },
    {
      q: "What feeding system is used?",
      a: "The machine uses a Cup Filler feeding system.",
    },
    {
      q: "What is the packaging speed?",
      a: "The listed packaging speed is 30–50 ppm.",
    },
    {
      q: "What is the capacity?",
      a: "The listed capacity is 2500 pouches per hour.",
    },
    {
      q: "What type of pouch is used?",
      a: "The pouch type is Center Seal.",
    },
    {
      q: "What is the automation grade?",
      a: "The automation grade is Semi-Automatic.",
    },
    {
      q: "What is the machine power?",
      a: "The listed machine power is 1–2 HP.",
    },
    {
      q: "What is the voltage?",
      a: "The listed voltage is 440.",
    },
    {
      q: "What is the country of origin?",
      a: "The machine is Made in India.",
    },
  ]
),
p(
  "Tea Packaging Machine",
  "/images/machines/Packing Machine/4.webp",
  "Fully automatic tea packaging machine designed for efficient tea packaging with a capacity of 500 pouches per hour.",
  "500 pouch/hour",
  "Not Specified",
  "Automatic",

  [
    { label: "Capacity", value: "500 Pouch/Hour" },
    { label: "Packaging Type", value: "Fully Automatic" },
    { label: "Usage/Application", value: "Tea Packaging" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Brand", value: "Foodax" },
    { label: "Driven Type", value: "Electric" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Fully automatic packaging",
    "500 pouches per hour capacity",
    "Designed for tea packaging",
    "Electric drive",
    "Automatic operation",
    "Suitable for commercial packaging",
    "Made for efficient tea packing",
  ],

  [
    "Tea",
    "Tea Leaves",
    "Tea Products",
  ],

  [
    {
      q: "What is the capacity of the Tea Packaging Machine?",
      a: "The listed capacity is 500 pouches per hour.",
    },
    {
      q: "Is the machine fully automatic?",
      a: "Yes, the packaging type is Fully Automatic and the automation grade is Automatic.",
    },
    {
      q: "What is the machine used for?",
      a: "The machine is designed for Tea Packaging.",
    },
    {
      q: "What is the driven type?",
      a: "The driven type is Electric.",
    },
    {
      q: "What is the brand?",
      a: "The listed brand is Foodax.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),

p(
  "Automatic Tea Packing Machine",
  "/images/machines/Packing Machine/5.webp",
  "Automatic center seal tea packing machine designed for high-speed tea packaging with a capacity of 1500 pouches per hour.",
  "1500 pouch/hour",
  "5 kW",
  "Automatic",

  [
    { label: "Capacity", value: "1500 Pouch/Hour" },
    { label: "Packaging Type", value: "Center Seal" },
    { label: "Usage/Application", value: "Tea Packaging" },
    { label: "Model Name/Number", value: "FEW-0999" },
    { label: "Power", value: "5 kW Single Phase" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Brand", value: "FOODAX" },
  ],

  [
    "Automatic operation",
    "1500 pouches per hour capacity",
    "Center seal packaging",
    "5 kW single phase power",
    "High-speed tea packaging",
    "Suitable for commercial tea packaging",
  ],

  [
    "Tea",
    "Tea Leaves",
    "Tea Products",
  ],

  [
    {
      q: "What is the capacity of the Automatic Tea Packing Machine?",
      a: "The listed capacity is 1500 pouches per hour.",
    },
    {
      q: "What type of packaging is used?",
      a: "The packaging type is Center Seal.",
    },
    {
      q: "What is the machine used for?",
      a: "The machine is designed for Tea Packaging.",
    },
    {
      q: "What is the model number?",
      a: "The model number is FEW-0999.",
    },
    {
      q: "What is the power requirement?",
      a: "The listed power is 5 kW Single Phase.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the automation grade is Automatic.",
    },
    {
      q: "What is the brand?",
      a: "The listed brand is FOODAX.",
    },
  ]
),
p(
  "Snack Packing Machine",
  "/images/machines/Packing Machine/6.webp",
  "Automatic snack packing machine with 3000 pouches per hour capacity, electric drive and three phase operation for efficient commercial packaging.",
  "3000 pouch/hour",
  "8 kW",
  "Automatic",

  [
    { label: "Capacity", value: "3000 Pouch/Hour" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Brand", value: "FOODAX" },
    { label: "Power Consumption", value: "8 kW" },
    { label: "Voltage", value: "440 V" },
    { label: "Phase", value: "Three Phase" },
    { label: "Driven Type", value: "Electric" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Minimum Order Quantity", value: "01 Piece" },
  ],

  [
    "Automatic operation",
    "3000 pouches per hour capacity",
    "8 kW power consumption",
    "440 V operation",
    "Three phase power",
    "Electric drive",
    "Suitable for snack packaging",
    "Made in India",
  ],

  [
    "Snacks",
    "Namkeen",
    "Kurkure",
    "Fryums",
    "Chips",
  ],

  [
    {
      q: "What is the capacity of the Snack Packing Machine?",
      a: "The listed capacity is 3000 pouches per hour.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the automation grade is Automatic.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 8 kW.",
    },
    {
      q: "What is the voltage?",
      a: "The machine operates at 440 V.",
    },
    {
      q: "What phase does the machine require?",
      a: "The machine requires Three Phase power.",
    },
    {
      q: "What is the driven type?",
      a: "The driven type is Electric.",
    },
    {
      q: "What products can be packed?",
      a: "The machine is suitable for packaging snacks and similar food products.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 01 Piece.",
    },
  ]
),
p(
  "Packaging Machine",
  "/images/machines/Packing Machine/7.webp",
  "Automatic electric packaging machine designed for efficient food product packaging with 220V operation.",
  "Not Specified",
  "Electric",
  "Automatic",

  [
    { label: "Automation Grade", value: "Automatic" },
    { label: "Driven Type", value: "Electric" },
    { label: "Voltage", value: "220V" },
    { label: "Power", value: "Electric" },
    { label: "Country of Origin", value: "Made in India" },
  ],

  [
    "Automatic operation",
    "Electric driven system",
    "220V operation",
    "Suitable for food product packaging",
    "Made in India",
  ],

  [
    "Food Products",
    "Snacks",
    "Namkeen",
    "Packaged Foods",
  ],

  [
    {
      q: "What is the automation grade?",
      a: "The automation grade is Automatic.",
    },
    {
      q: "What is the driven type?",
      a: "The driven type is Electric.",
    },
    {
      q: "What is the operating voltage?",
      a: "The listed voltage is 220V.",
    },
    {
      q: "What is the power source?",
      a: "The listed power is Electric.",
    },
    {
      q: "What is the country of origin?",
      a: "The machine is Made in India.",
    },
  ]
),
  ],
},



//4th

{
  slug: "extruder-machine",
  name: "Extruder Machine",
  products: [
    p(
      "Kurkure Extruder Machine",
      "/images/machines/Extruder Machine/1.webp",
      "Automatic single screw Kurkure extruder machine for industrial snack production with automatic feeding and high production capacity.",
      "80–100 kg/hr",
      "18.75 kW",
      "Automatic",

      [
        { label: "Motor Power", value: "25 HP" },
        { label: "Machine Type", value: "Single Screw" },
        { label: "Capacity", value: "90 to 100" },
        { label: "Snacks Type", value: "Kurkure extruder" },
        { label: "Type Of Namkeen", value: "KURKURE TYPE SNACKS" },
        { label: "Automation Grade", value: "Automatic" },
        { label: "Usage/Application", value: "Industrial" },
        { label: "Phase", value: "Three Phase" },
        { label: "Material Of Construction", value: "SS And MS" },
        { label: "Power", value: "0-25" },
        { label: "Model Name/Number", value: "FEW-002" },
        { label: "Power Consumption", value: "18.75 KW" },
        { label: "Feeding Type", value: "Automatic Feed" },
        { label: "Usage", value: "Kurkure" },
        { label: "Body Finish", value: "Paint Coated" },
        { label: "Country Of Origin", value: "Made In India" },
        {
          label: "Production Capacity",
          value: "100 kg/hrs, 50–100 kg per hour",
        },
        { label: "Brand", value: "Foodax Engineering Works" },
        { label: "Minimum Order Quantity", value: "1 Piece" },
        { label: "Main Motor", value: "25 HP" },
        { label: "Feed Motor", value: "5 H.P." },
        { label: "Production Capacity", value: "80 KG/HRS" },
        {
          label: "Required Raw Material",
          value: "Rice Grit, Corn Grit, Gram Grit",
        },
        { label: "Particals Size", value: "500 micron" },
      ],

      [
        "Single screw extrusion system",
        "Automatic feeding system",
        "25 HP main motor",
        "5 HP feed motor",
        "18.75 kW power consumption",
        "Three phase operation",
        "SS and MS construction",
        "Paint coated body finish",
        "Industrial application",
        "Designed for Kurkure type snacks",
      ],

      [
        "Kurkure",
        "Kurkure Type Snacks",
        "Extruded Snacks",
        "Namkeen",
      ],

      [
        {
          q: "What is the machine type?",
          a: "The machine type is Single Screw.",
        },
        {
          q: "What is the motor power?",
          a: "The main motor power is 25 HP and the feed motor is 5 HP.",
        },
        {
          q: "What is the production capacity?",
          a: "The provided specifications list production capacities of 80 kg/hr and 50–100 kg/hr, with another listed capacity of 100 kg/hr.",
        },
        {
          q: "What type of feeding system is used?",
          a: "The feeding type is Automatic Feed.",
        },
        {
          q: "What raw material is required?",
          a: "The listed raw materials are Rice Grit, Corn Grit and Gram Grit.",
        },
        {
          q: "What is the model number?",
          a: "The model number is FEW-002.",
        },
        {
          q: "What is the power consumption?",
          a: "The listed power consumption is 18.75 kW.",
        },
        {
          q: "What type of snacks can it produce?",
          a: "The machine is listed for Kurkure and Kurkure type snacks.",
        },
        {
          q: "What is the construction material?",
          a: "The listed material of construction is SS and MS.",
        },
        {
          q: "What is the minimum order quantity?",
          a: "The minimum order quantity is 1 Piece.",
        },
      ]
    ),


    p(
  "Sev Extruder Machine",
  "/images/machines/Extruder Machine/2.webp",
  "Automatic Sev extruder machine designed for high-productivity Namkeen production with up to 200 kg/hr capacity and electric operation.",
  "Up to 200 kg/hr",
  "Not Specified",
  "Automatic",

  [
    { label: "Production Capacity", value: "Up to 200 kg/hr" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Power Source", value: "Electric" },
    { label: "Voltage", value: "240 V" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Frequency", value: "50 Hz" },
  ],

  [
    "Automatic operation",
    "Up to 200 kg/hr production capacity",
    "Electric power source",
    "240 V operation",
    "50 Hz frequency",
    "High productivity",
    "Better quality finished product",
    "Suitable for Namkeen production",
    "Made in India",
  ],

  [
    "Sev",
    "Namkeen",
    "Extruded Snacks",
  ],

  [
    {
      q: "What is the production capacity?",
      a: "The machine has a production capacity of up to 200 kg/hr.",
    },
    {
      q: "Is the Sev Extruder Machine automatic?",
      a: "Yes, the automation grade is Automatic.",
    },
    {
      q: "What is the power source?",
      a: "The power source is Electric.",
    },
    {
      q: "What is the voltage?",
      a: "The listed voltage is 240 V.",
    },
    {
      q: "What is the frequency?",
      a: "The listed frequency is 50 Hz.",
    },
    {
      q: "What is the machine used for?",
      a: "The machine is designed for Sev and Namkeen production.",
    },
    {
      q: "What are the key benefits?",
      a: "The provided information highlights better quality finished products and high productivity.",
    },
    {
      q: "What is the country of origin?",
      a: "The machine is Made in India.",
    },
  ]
),

p(
  "Rice Corn Puff Extruder (Small)",
  "/images/machines/Extruder Machine/3.webp",
  "Automatic small rice corn puff extruder with single screw extrusion, automatic feeding and 50 kg/hr listed capacity for corn puff production.",
  "35–50 kg/hr",
  "8 kW",
  "Automatic",

  [
    { label: "Capacity", value: "50 kg/hr" },
    { label: "Production Capacity", value: "35–40 kg/hr" },
    { label: "Motor Power", value: "15 HP" },
    { label: "Machine Type", value: "Single Screw" },
    { label: "Type", value: "Rice Corn Puff Extruder" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Material Of Construction", value: "SS And MS" },
    { label: "Power Source", value: "Electric" },
    { label: "Power Load", value: "8 kW" },
    { label: "Phase", value: "3 phase" },
    { label: "Feeding Type", value: "Automatic Feed" },
    { label: "Usage", value: "Corn Puff" },
    { label: "Body Finish", value: "Paint Coated" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Minimum Order Quantity", value: "01 Piece" },
  ],

  [
    "Small-size rice corn puff extruder",
    "Single screw extrusion system",
    "Automatic feeding",
    "15 HP motor",
    "8 kW electric load",
    "Three phase operation",
    "SS and MS construction",
    "Paint coated body finish",
    "Suitable for corn puff production",
    "Made in India",
  ],

  [
    "Corn Puff",
    "Rice Puff",
    "Rice Corn Puff",
    "Extruded Snacks",
  ],

  [
    {
      q: "What is the capacity of the Rice Corn Puff Extruder?",
      a: "The listed capacity is 50 kg/hr, while the provided production specification states 35–40 kg/hr.",
    },
    {
      q: "What is the motor power?",
      a: "The listed motor power is 15 HP.",
    },
    {
      q: "What type of machine is it?",
      a: "It is a Single Screw Rice Corn Puff Extruder.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the automation grade is Automatic.",
    },
    {
      q: "What type of feeding system is used?",
      a: "The feeding type is Automatic Feed.",
    },
    {
      q: "What is the power source?",
      a: "The power source is Electric with an 8 kW electric load.",
    },
    {
      q: "What phase does the machine require?",
      a: "The machine operates on 3 phase power.",
    },
    {
      q: "What is the machine used for?",
      a: "The listed usage is Corn Puff production.",
    },
    {
      q: "What material is used?",
      a: "The material of construction is SS and MS.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 01 Piece.",
    },
  ]
),

p(
  "Namkeen Snack Packing Machine",
  "/images/machines/Extruder Machine/4.webp",
  "Automatic namkeen snack packing machine with a capacity of 500 pouches per hour, designed for efficient commercial snack packaging.",
  "500 pouch/hour",
  "Not Specified",
  "Automatic",

  [
    { label: "Capacity", value: "500 Pouch/Hour" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Phase", value: "Three Phase" },
    { label: "Country of Origin", value: "Made in India" },
  ],

  [
    "Automatic operation",
    "500 pouches per hour capacity",
    "Three phase operation",
    "Designed for Namkeen snack packaging",
    "Suitable for commercial packaging",
    "Made in India",
  ],

  [
    "Namkeen",
    "Snacks",
    "Snack Products",
  ],

  [
    {
      q: "What is the capacity of the Namkeen Snack Packing Machine?",
      a: "The listed capacity is 500 pouches per hour.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the automation grade is Automatic.",
    },
    {
      q: "What phase does the machine require?",
      a: "The machine requires Three Phase power.",
    },
    {
      q: "What is the machine used for?",
      a: "The machine is designed for Namkeen snack packaging.",
    },
    {
      q: "What is the country of origin?",
      a: "The machine is Made in India.",
    },
  ]
),


p(
  "Puff Extruder Machine",
  "/images/machines/Extruder Machine/5.webp",
  "High-performance Puff and Corn Ring extruder machine for producing rice puff, Pola, Cheese Ball, Corn Ring, Flower, Mad Angles and other extruded snacks.",
  "50–100 kg/hr",
  "24 kW",
  "Semi-Automatic, Automatic",

  [
    { label: "Brand", value: "Foodax Engineering" },
    { label: "Material to be Extruded", value: "Puff" },
    { label: "Machine Type", value: "Semi-Automatic, Automatic" },
    { label: "Power Consumption", value: "24 kW" },
    { label: "A.C Drive Motor Power", value: "1 H.P." },
    { label: "Main Motor", value: "25 H.P." },
    { label: "Output", value: "50–100 kg/hr" },
    { label: "Production Capacity", value: "100 kg/hr" },
    { label: "Body Material", value: "M.S." },
    { label: "Phase", value: "3 PH" },
    { label: "Voltage", value: "440 V" },
    { label: "Frequency", value: "50 Hz" },
    { label: "Condition", value: "New" },
    { label: "Cutter Motor", value: "1 H.P." },
    { label: "Feed Motor", value: "1 H.P." },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Easy to operate",
    "High load bearing capacity",
    "High performance",
    "25 H.P. main motor",
    "1 H.P. cutter motor",
    "1 H.P. feed motor",
    "50–100 kg/hr output",
    "Semi-automatic and automatic operation",
    "Suitable for multiple extruded snack products",
  ],

  [
    "Rice Puff",
    "Pola",
    "Cheese Ball",
    "Corn Ring",
    "Flower",
    "Mad Angles",
    "Puff Snacks",
    "Extruded Snacks",
  ],

  [
    {
      q: "What is the output capacity?",
      a: "The listed output is 50–100 kg/hr, with the provided production capacity specified as 100 kg/hr.",
    },
    {
      q: "What is the main motor power?",
      a: "The main motor power is 25 H.P.",
    },
    {
      q: "What is the cutter motor power?",
      a: "The cutter motor power is 1 H.P.",
    },
    {
      q: "What is the feed motor power?",
      a: "The feed motor power is 1 H.P.",
    },
    {
      q: "What material can be extruded?",
      a: "The listed material to be extruded is Puff.",
    },
    {
      q: "What products can be produced?",
      a: "The machine can produce Rice Puff, Pola, Cheese Ball, Corn Ring, Flower, Mad Angles and other types of extruded snacks.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 24 kW.",
    },
    {
      q: "What is the voltage and phase?",
      a: "The machine operates at 440 V and 3 phase.",
    },
    {
      q: "What is the machine condition?",
      a: "The listed condition is New.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
  ],
},


//5th


{
  slug: "puff-extruder-machine",
  name: "Puff Extruder Machine",
  products: [
    p(
      "Cheese Ball Extruder",
      "/images/machines/Puff Extruder Machine/1.webp",
      "Automatic single screw extruder machine designed for Cheese Ball production using rice and corn, with automatic feeding, variable cutter speed and continuous extrusion operation.",
      "90–100 kg/hr",
      "20 kW",
      "Automatic",

      [
        { label: "Capacity", value: "100 kg/hr" },
        { label: "Material To Be Extruded", value: "Rice and Corn" },
        { label: "Type", value: "Automatic" },
        { label: "Power Consumption", value: "20 kW" },
        { label: "Type Of Namkeen", value: "Cheese Ball" },
        { label: "Automation Grade", value: "Automatic" },
        { label: "Ideal In", value: "New Only" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Minimum Order Quantity", value: "1 Piece" },
        { label: "A.C Motor", value: "25 HP (Make: Crompton Greaves)" },
        { label: "D.C Motor for Feed Control", value: "1 HP" },
        { label: "D.C Motor for Vary Cutter Speed", value: "1 HP" },
        { label: "Production Capacity", value: "90–100 kg/hr" },
        { label: "Construction", value: "Painted Mild Steel" },
        { label: "Hopper", value: "Stainless Steel" },
        { label: "Product Discharge Guard", value: "Stainless Steel" },
      ],

      [
        "Single screw extruder",
        "Automatic operation",
        "Automatic feed control",
        "Variable cutter speed",
        "Continuous cooking and extrusion",
        "25 HP A.C. motor",
        "1 HP feed control motor",
        "1 HP cutter motor",
        "Painted Mild Steel construction",
        "Stainless Steel hopper",
        "Stainless Steel guard at product discharge",
      ],

      [
        "Cheese Ball",
        "Rice Puff",
        "Corn Snacks",
        "Extruded Snacks",
      ],

      [
        {
          q: "What is the capacity of the Cheese Ball Extruder?",
          a: "The listed capacity is 100 kg/hr, with production capacity specified as 90–100 kg/hr.",
        },
        {
          q: "What material can be extruded?",
          a: "The listed material to be extruded is Rice and Corn.",
        },
        {
          q: "What is the power consumption?",
          a: "The listed power consumption is 20 kW.",
        },
        {
          q: "What is the main motor power?",
          a: "The A.C. main motor is 25 HP, with Crompton Greaves specified as the make.",
        },
        {
          q: "What is the feed control motor?",
          a: "The D.C. motor for feed control is 1 HP.",
        },
        {
          q: "What is the cutter motor power?",
          a: "The D.C. motor for varying cutter speed is 1 HP.",
        },
        {
          q: "What is the construction material?",
          a: "The construction is Painted Mild Steel, with a Stainless Steel hopper and Stainless Steel guard at product discharge.",
        },
        {
          q: "What type of operation does the machine use?",
          a: "The machine is Automatic and uses a single screw extruder with continuous cooking and extrusion.",
        },
        {
          q: "What is the minimum order quantity?",
          a: "The minimum order quantity is 1 Piece.",
        },
      ]
    ),

p(
  "Pola Kachri Making Machine",
  "/images/machines/Puff Extruder Machine/3.webp",
  "Automatic industrial extruded snack production machine for making Pola Kachri and rice corn puff snacks with electric heating and SS 304 construction.",
  "100 kg/hr",
  "Not Specified",
  "Automatic",

  [
    { label: "Line Type", value: "Extruded Snacks" },
    { label: "Installed Capacity", value: "100 kg/hr" },
    { label: "Capacity", value: "100 kg/hr" },
    { label: "Snacks Type", value: "Rice corn pufff snacks" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Usage/Application", value: "Industrial" },
    { label: "Process Type", value: "Baking" },
    { label: "Heating Type", value: "Electric" },
    { label: "Material Of Construction", value: "SS 304" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "100 kg/hr production capacity",
    "Automatic operation",
    "Extruded snack production",
    "Baking process",
    "Electric heating",
    "SS 304 construction",
    "Industrial application",
    "Suitable for rice corn puff snacks",
    "Made in India",
  ],

  [
    "Pola Kachri",
    "Rice Corn Puff",
    "Puff Snacks",
    "Extruded Snacks",
  ],

  [
    {
      q: "What is the capacity of the Pola Kachri Making Machine?",
      a: "The installed capacity and listed capacity are both 100 kg/hr.",
    },
    {
      q: "What type of snacks can be produced?",
      a: "The listed snacks type is Rice corn pufff snacks.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the automation grade is Automatic.",
    },
    {
      q: "What is the process type?",
      a: "The process type is Baking.",
    },
    {
      q: "What type of heating is used?",
      a: "The heating type is Electric.",
    },
    {
      q: "What material is used for construction?",
      a: "The material of construction is SS 304.",
    },
    {
      q: "What is the usage/application?",
      a: "The machine is intended for Industrial use.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),

p(
  "Mini Corn And Rice Extruder Machine",
  "/images/machines/Puff Extruder Machine/4.webp",
  "Small electric puff making machine for producing Pola Puff and other puff snacks, designed for easy operation, low maintenance and cost-effective production.",
  "30–40 kg/hr",
  "8 kW",
  "Automatic",

  [
    { label: "Capacity", value: "30 to 40 kg/hrs" },
    { label: "Type", value: "Machine" },
    { label: "Power Consumption", value: "3 Phase 440 Volts" },
    { label: "Type Of Namkeen", value: "Pola Puff" },
    { label: "Power Source", value: "7.5 kW" },
    { label: "Phase", value: "3" },
    { label: "Installation Services", value: "Yes" },
    { label: "Material To Be Extruded", value: "Puff" },
    { label: "Usage/Application", value: "Industrial" },
    { label: "Brand", value: "FOODAX ENGINEERING WORKS" },
    { label: "Machine Type", value: "Automatic" },
    { label: "Electric Load", value: "8 kW" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Small puff making machine",
    "30–40 kg/hr production capacity",
    "8 kW electric load",
    "Three phase operation",
    "440 V power connection",
    "Automatic operation",
    "Easy operation",
    "Low maintenance",
    "Cost-effective design",
    "Installation services available",
  ],

  [
    "Pola Puff",
    "Puff Snacks",
    "Corn Puff",
    "Rice Puff",
    "Extruded Snacks",
  ],

  [
    {
      q: "What is the capacity of the Mini Corn And Rice Extruder Machine?",
      a: "The listed capacity is 30 to 40 kg/hr.",
    },
    {
      q: "What type of Namkeen can it produce?",
      a: "The listed type of Namkeen is Pola Puff.",
    },
    {
      q: "What material can be extruded?",
      a: "The listed material to be extruded is Puff.",
    },
    {
      q: "What is the electric load?",
      a: "The provided specification mentions an electric load of 8 kW.",
    },
    {
      q: "What is the power source?",
      a: "The listed power source is 7.5 kW.",
    },
    {
      q: "What phase does the machine require?",
      a: "The machine operates on 3 phase power.",
    },
    {
      q: "Is installation service available?",
      a: "Yes, installation services are available.",
    },
    {
      q: "Is the machine easy to operate?",
      a: "Yes, the provided information describes it as easy to operate and low maintenance.",
    },
    {
      q: "What is the brand?",
      a: "The listed brand is FOODAX ENGINEERING WORKS.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
    
  ],
},


//6th



{
  slug: "rotary-roaster-machine",
  name: "Rotary Roaster Machine",
  products: [
    p(
      "Grain Roasting Machine",
      "/images/machines/Rotary Roaster Machine/1.webp",
      "Automatic grain roasting machine for industrial roasting of nuts, flour, grains, seeds and other food products with stainless steel construction.",
      "Not Specified",
      "Not Specified",
      "Automatic",

      [
        { label: "Type of Machine", value: "Grain Roasting Machine" },
        { label: "Usage/Application", value: "Industrial" },
        { label: "Material", value: "Stainless Steel" },
        { label: "Automation Grade", value: "Automatic" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Minimum Order Quantity", value: "01 Piece" },
      ],

      [
        "Automatic operation",
        "Grain roasting application",
        "Stainless Steel construction",
        "Industrial use",
        "Suitable for roasting multiple food products",
        "Made in India",
      ],

      [
        "Nuts",
        "Flour",
        "Grains",
        "Seeds",
        "Roasted Food Products",
      ],

      [
        {
          q: "What type of machine is this?",
          a: "It is a Grain Roasting Machine.",
        },
        {
          q: "What is the automation grade?",
          a: "The automation grade is Automatic.",
        },
        {
          q: "What material is used?",
          a: "The machine is made from Stainless Steel.",
        },
        {
          q: "Where can the machine be used?",
          a: "The machine is intended for Industrial applications.",
        },
        {
          q: "What products can be roasted?",
          a: "It can be used to roast nuts, flour, grain, seed and many other food products.",
        },
        {
          q: "What is the minimum order quantity?",
          a: "The minimum order quantity is 01 Piece.",
        },
        {
          q: "What is the country of origin?",
          a: "The machine is Made in India.",
        },
      ]
    ),


    p(
  "Foxnut Roasting Machine",
  "/images/machines/Rotary Roaster Machine/2.webp",
  "Automatic rotary drum foxnut roasting machine for industrial Makhana roasting with electric heating and 100 to 125 kg/hr capacity.",
  "100–125 kg/hr",
  "20 kW",
  "Automatic",

  [
    { label: "Heating Type", value: "Electric" },
    { label: "Machine Type", value: "Rotary Drum" },
    { label: "Capacity", value: "100 TO 125 Kg/Hr" },
    { label: "Snacks Type", value: "Makhana" },
    { label: "Type Of Namkeen", value: "Makhana" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Usage/Application", value: "Industrial" },
    { label: "Application", value: "Cashew almond pista foxnut" },
    { label: "Cooling Type", value: "No Cooling" },
    { label: "Power", value: "0-25" },
    { label: "Power Consumption", value: "20 kW, 440 Volt, 3 Phase" },
    { label: "Dimensions", value: "650 x 6100 x 1790" },
    { label: "Weight", value: "900 kg" },
    { label: "Minimum Order Quantity", value: "1 Unit" },
  ],

  [
    "Rotary drum roasting system",
    "Electric heating",
    "100–125 kg/hr capacity",
    "Automatic operation",
    "20 kW electric load",
    "440 V three phase operation",
    "900 kg machine weight",
    "No cooling system",
    "Designed for Makhana roasting",
    "Industrial application",
  ],

  [
    "Makhana",
    "Foxnut",
    "Cashew",
    "Almond",
    "Pista",
  ],

  [
    {
      q: "What is the capacity of the Foxnut Roasting Machine?",
      a: "The listed capacity is 100 to 125 kg/hr.",
    },
    {
      q: "What type of machine is it?",
      a: "The machine type is Rotary Drum.",
    },
    {
      q: "What is the heating type?",
      a: "The heating type is Electric.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 20 kW at 440 Volt, 3 Phase.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the automation grade is Automatic.",
    },
    {
      q: "What is the cooling type?",
      a: "The listed cooling type is No Cooling.",
    },
    {
      q: "What products can be roasted?",
      a: "The listed applications include Makhana, cashew, almond and pista.",
    },
    {
      q: "What is the machine weight?",
      a: "The listed machine weight is 900 kg.",
    },
    {
      q: "What are the machine dimensions?",
      a: "The listed dimensions are 650 x 6100 x 1790.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Unit.",
    },
  ]
),

p(
  "Rotary Roaster Machine",
  "/images/machines/Rotary Roaster Machine/3.webp",
  "Automatic continuous rotary roaster machine with SS 304 construction, electric heating and variable drum speed control for industrial roasting applications.",
  "100 kg/hr",
  "14 kW",
  "Automatic",

  [
    { label: "Capacity", value: "100 KG/HRS" },
    { label: "Heating Type", value: "Electric" },
    { label: "Drum Material", value: "SS304" },
    { label: "Usage/Application", value: "Industrial" },
    { label: "Fuel", value: "ELCTRIC" },
    { label: "Application", value: "Rice Corn Puff" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Batch Type", value: "Continuous" },
    { label: "Machine Type", value: "Automatic" },
    { label: "Power Consumption", value: "14 KW" },
    { label: "Material", value: "SS 304" },
    { label: "Color", value: "WHITE" },
    { label: "Drum Speed Control", value: "Variable Speed" },
    { label: "Roasting Temperature", value: "Up To 200 C" },
    { label: "Phase", value: "Three Phase" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Rugged design",
    "Maximum performance",
    "Easy to operate",
    "Continuous roasting operation",
    "Electric heating",
    "SS 304 construction",
    "Variable drum speed control",
    "Up to 200°C roasting temperature",
    "Three phase operation",
    "Industrial application",
  ],

  [
    "Rice Corn Puff",
    "Seeds",
    "Nuts",
    "Roasted Food Products",
  ],

  [
    {
      q: "What is the capacity of the Rotary Roaster Machine?",
      a: "The listed capacity is 100 kg/hr.",
    },
    {
      q: "What is the heating type?",
      a: "The heating type is Electric.",
    },
    {
      q: "What material is the drum made from?",
      a: "The drum material is SS304.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the automation grade and machine type are Automatic.",
    },
    {
      q: "Is the roasting process continuous?",
      a: "Yes, the batch type is specified as Continuous.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 14 KW.",
    },
    {
      q: "What is the roasting temperature?",
      a: "The roasting temperature is up to 200 C.",
    },
    {
      q: "Does it have drum speed control?",
      a: "Yes, it has Variable Speed drum control.",
    },
    {
      q: "What is the phase?",
      a: "The machine operates on Three Phase power.",
    },
    {
      q: "What products can be roasted?",
      a: "The listed application is rice corn puff, and the provided use also mentions roasting various seeds and nuts.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
  ],
},


//7th


{
  slug: "starch-processing-plant",
  name: "Starch Processing Plant",
  products: [
    p(
      "Potato Starch Recovery Plant",
      "/images/machines/Starch Processing Plant/1.webp",
      "Semi-automatic potato starch recovery plant with stainless steel construction, electric operation and 30 kg/hr production capacity.",
      "30 kg/hr",
      "10 kW",
      "Semi-Automatic",

      [
        { label: "Operation Mode", value: "Semi-Automatic" },
        { label: "Raw Material", value: "Potato best vest water" },
        { label: "Automation Grade", value: "Automatic" },
        { label: "Machine Material", value: "Stainless Steel" },
        { label: "Electricity Connection", value: "Three Phase" },
        { label: "Capacity", value: "30 kg/hr" },
        { label: "Material of Construction (Contact)", value: "SS 304" },
        { label: "Production Capacity", value: "30 kg/hr" },
        { label: "Power Consumption", value: "10 KW" },
        { label: "Power Source", value: "Electric" },
        { label: "Voltage", value: "440 V" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Minimum Order Quantity", value: "1 Piece" },
      ],

      [
        "30 kg/hr production capacity",
        "Semi-automatic operation mode",
        "Automatic automation grade",
        "Stainless Steel construction",
        "SS 304 contact parts",
        "Three phase electricity connection",
        "10 KW power consumption",
        "Electric power source",
        "440 V operation",
        "Made in India",
      ],

      [
        "Potato Starch",
        "Potato Processing",
        "Starch Recovery",
        "Potato Waste Water Processing",
      ],

      [
        {
          q: "What is the production capacity?",
          a: "The listed capacity and production capacity are 30 kg/hr.",
        },
        {
          q: "What is the operation mode?",
          a: "The operation mode is Semi-Automatic.",
        },
        {
          q: "What is the automation grade?",
          a: "The listed automation grade is Automatic.",
        },
        {
          q: "What is the machine material?",
          a: "The machine material is Stainless Steel.",
        },
        {
          q: "What is the contact material?",
          a: "The material of construction for contact parts is SS 304.",
        },
        {
          q: "What is the power consumption?",
          a: "The listed power consumption is 10 KW.",
        },
        {
          q: "What is the power source?",
          a: "The power source is Electric.",
        },
        {
          q: "What voltage does the plant require?",
          a: "The listed voltage is 440 V.",
        },
        {
          q: "What type of electricity connection is required?",
          a: "The electricity connection is Three Phase.",
        },
        {
          q: "What is the minimum order quantity?",
          a: "The minimum order quantity is 1 Piece.",
        },
      ]
    ),


  ],
},



//8th


{
  slug: "puff-making-machines",
  name: "Puff Making Machines",
  products: [
    p(
      "Kurkure Corn Puff Making Machine",
      "/images/machines/Puff Making Machines/1.webp",
      "Automatic 2-in-1 puff making machine for producing Kurkure and rice corn puff ring snacks through extrusion cooking.",
      "100 kg",
      "25 kW",
      "Automatic",

      [
        { label: "Material To Be Extruded", value: "Rice corn" },
        { label: "Type", value: "Automatic" },
        { label: "Power Consumption", value: "25 kW" },
        { label: "Type Of Namkeen", value: "Kurkure and rice corn puff ring" },
        { label: "Capacity", value: "100 kg 2 IN 1 MACHINE" },
        { label: "Power Source", value: "440 volts" },
        { label: "Phase", value: "3 phase" },
      ],

      [
        "Automatic operation",
        "2-in-1 machine",
        "100 kg capacity",
        "25 kW power consumption",
        "440 V power source",
        "Three phase operation",
        "Suitable for Kurkure production",
        "Suitable for rice corn puff ring production",
        "Extrusion cooking process",
      ],

      [
        "Kurkure",
        "Rice Corn Puff",
        "Puff Ring",
        "Extruded Snacks",
      ],

      [
        {
          q: "What is the capacity of the machine?",
          a: "The listed capacity is 100 kg for the 2-in-1 machine.",
        },
        {
          q: "What products can be produced?",
          a: "The machine is designed for Kurkure and rice corn puff ring production.",
        },
        {
          q: "What material is extruded?",
          a: "The listed material to be extruded is Rice corn.",
        },
        {
          q: "Is the machine automatic?",
          a: "Yes, the machine type is Automatic.",
        },
        {
          q: "What is the power consumption?",
          a: "The listed power consumption is 25 kW.",
        },
        {
          q: "What is the power source?",
          a: "The listed power source is 440 volts.",
        },
        {
          q: "What phase does the machine require?",
          a: "The machine operates on 3 phase power.",
        },
        {
          q: "How are puffcorn products processed?",
          a: "The provided information states that puffcorn and similar puffed products are processed through extrusion cooking using an extruder.",
        },
      ]
    ),


    p(
  "Kurkure Making Machine",
  "/images/machines/Puff Making Machines/2.webp",
  "Single screw ready-to-eat expanded food extruder for continuous cooking and production of Kurkure and other extruded snacks from corn, rice, suji, pulses and soya grits.",
  "90–100 kg/hr",
  "22.5 kW",
  "Automatic",

  [
    { label: "Material To Be Extruded", value: "RICE CORN AND OTHER GRIET" },
    { label: "Type", value: "EXTRUDER" },
    { label: "Power Consumption", value: "22.5 KW" },
    { label: "Type Of Namkeen", value: "KURKURE" },
    { label: "Power Source", value: "440" },
    { label: "Phase", value: "3 PHASE" },
    { label: "A.C Drive Motor", value: "5 HP" },
    { label: "Main Motor", value: "25 HP" },
    { label: "A.C Motor", value: "YES" },
    { label: "Production Capacity", value: "90 TO 100 kg/hour" },
    { label: "Extruder Type", value: "Single Screw" },
    { label: "Cooking System", value: "Continuous Cooking" },
    { label: "Main Motor Make", value: "Siemens / BCH / Rotomotive" },
    { label: "Feed Control Motor", value: "5 HP A.C. Motor" },
    { label: "Construction", value: "Painted Mild Steel" },
    { label: "Hopper", value: "Stainless Steel" },
    { label: "Product Discharge Guard", value: "Stainless Steel" },
  ],

  [
    "Easy to operate and maintain",
    "Food grade contact parts",
    "Standard parts for long service life",
    "Single screw extrusion system",
    "Continuous cooking food extruder",
    "25 HP main A.C. motor",
    "5 HP A.C. motor for feed control",
    "Variable cutter speed for different product lengths",
    "Feed control through A.C. control panel",
    "Stainless Steel hopper",
    "Stainless Steel product discharge guard",
    "Production capacity up to 100 kg/hr",
  ],

  [
    "Kurkure",
    "Corn Snacks",
    "Rice Snacks",
    "Suji Snacks",
    "Pulse Snacks",
    "Soya Grit Snacks",
    "Ready-to-Eat Expanded Snacks",
  ],

  [
    {
      q: "What is the production capacity?",
      a: "The listed production capacity is 90 to 100 kg per hour.",
    },
    {
      q: "What type of extruder is used?",
      a: "The machine uses a Single Screw extruder.",
    },
    {
      q: "What is the main motor power?",
      a: "The main A.C. motor is 25 HP.",
    },
    {
      q: "What is the feed control motor power?",
      a: "The A.C. motor for feed control is 5 HP.",
    },
    {
      q: "What products can be produced?",
      a: "The machine is designed for Kurkure and ready-to-eat expanded snacks made from corn, rice, suji, pulses and soya grits.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 22.5 KW.",
    },
    {
      q: "What is the power supply?",
      a: "The machine uses 440 V, 3 phase power.",
    },
    {
      q: "Are the contact parts food grade?",
      a: "Yes, the provided specification states that the contact parts are food grade.",
    },
    {
      q: "What is the construction material?",
      a: "The construction is Painted Mild Steel with a Stainless Steel hopper and Stainless Steel product discharge guard.",
    },
    {
      q: "Can product length be controlled?",
      a: "Yes, different product lengths can be obtained by varying the cutter speed.",
    },
  ]
),
  ],
},


//9th


{
  slug: "pasta-making-machine",
  name: "Pasta Making Machine",
  products: [
    p(
      "Pasta Making Machine",
      "/images/machines/Pasta Making Machine/1.webp",
      "Automatic single screw pasta making machine for industrial production of penne pasta with SS 304 construction and batch dryer.",
      "50 kg/hr",
      "6 kW",
      "Automatic",

      [
        { label: "Machine Type", value: "Single Screw" },
        { label: "Production Capacity", value: "50 kg/hr" },
        { label: "Automation Grade", value: "Automatic" },
        { label: "Snacks Type", value: "Small pasta making machine" },
        { label: "Usage/Application", value: "Industrial" },
        { label: "Installed Power", value: "10 KW" },
        { label: "Electric Load", value: "6 kW" },
        { label: "Voltage", value: "440 V" },
        { label: "Die Material", value: "SS 304" },
        { label: "Material Of Construction", value: "SS 304" },
        { label: "Pasta Shape", value: "Penne" },
        { label: "Dryer Type", value: "Batch Dryer" },
        { label: "Phase", value: "Three Phase" },
        { label: "Country Of Origin", value: "Made In India" },
        { label: "Minimum Order Quantity", value: "1 Piece" },
      ],

      [
        "Single screw extrusion system",
        "Automatic operation",
        "50 kg/hr production capacity",
        "SS 304 die material",
        "SS 304 construction",
        "Penne pasta production",
        "Batch dryer system",
        "Three phase operation",
        "440 V power supply",
        "6 kW electric load",
        "Industrial application",
        "Made in India",
      ],

      [
        "Pasta",
        "Penne",
        "Small Pasta",
        "Macaroni",
      ],

      [
        {
          q: "What is the production capacity?",
          a: "The production capacity is 50 kg/hr.",
        },
        {
          q: "What type of machine is it?",
          a: "It is a Single Screw pasta making machine.",
        },
        {
          q: "Is the machine automatic?",
          a: "Yes, the automation grade is Automatic.",
        },
        {
          q: "What pasta shape does it produce?",
          a: "The listed pasta shape is Penne.",
        },
        {
          q: "What material is used for construction?",
          a: "The material of construction is SS 304.",
        },
        {
          q: "What material is the die made from?",
          a: "The die material is SS 304.",
        },
        {
          q: "What type of dryer is used?",
          a: "The dryer type is Batch Dryer.",
        },
        {
          q: "What is the electric load?",
          a: "The provided specification states an electric load of 6 kW.",
        },
        {
          q: "What voltage and phase are required?",
          a: "The machine uses 440 V, Three Phase power.",
        },
        {
          q: "What is the minimum order quantity?",
          a: "The minimum order quantity is 1 Piece.",
        },
      ]
    ),

    p(
  "Pasta Making Machine 100 Kg Hr",
  "/images/machines/Pasta Making Machine/2.webp",
  "Automatic pasta making machine for industrial production of pasta and macaroni with SS 304 construction, rugged design and low power consumption.",
  "100 kg/hr",
  "10 kW",
  "Automatic",

  [
    { label: "Production Capacity", value: "100 kg/hr" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Machine Type", value: "1-Stage" },
    { label: "Installed Power", value: "20 kW" },
    { label: "Die Material", value: "SS 304" },
    { label: "Material Of Construction", value: "SS 304" },
    { label: "Material", value: "SS 304" },
    { label: "Capacity", value: "50 kg" },
    { label: "Weight", value: "300 KG" },
    { label: "Usage/Application", value: "Industrial" },
    { label: "Power Consumption", value: "10 kW" },
    { label: "Power Source", value: "Electrical" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Rugged design",
    "Negligible maintenance",
    "Low power consumption",
    "Automatic operation",
    "SS 304 construction",
    "SS 304 die",
    "Electrical power source",
    "Industrial application",
    "Suitable for pasta and macaroni production",
  ],

  [
    "Pasta",
    "Macaroni",
    "Industrial Pasta",
  ],

  [
    {
      q: "What is the production capacity?",
      a: "The listed production capacity is 100 kg/hr. The provided description also mentions 50 to 60 kg per hour.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the automation grade is Automatic.",
    },
    {
      q: "What type of machine is it?",
      a: "The machine type is 1-Stage.",
    },
    {
      q: "What material is used for construction?",
      a: "The material of construction is SS 304.",
    },
    {
      q: "What is the die material?",
      a: "The die material is SS 304.",
    },
    {
      q: "What is the installed power?",
      a: "The listed installed power is 20 kW.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 10 kW.",
    },
    {
      q: "What is the machine weight?",
      a: "The listed weight is 300 kg.",
    },
    {
      q: "What is the machine used for?",
      a: "The machine is used for making pasta and macaroni.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
  ],
},



//10th


{
  slug: "fryer-machine",
  name: "Fryer Machine",
  products: [
    p(
      "Kurkure Fryer Machine",
      "/images/machines/Fryer Machine/1.webp",
      "Automatic tilting fryer machine for industrial pellet snack frying with diesel heating, 200 kg/hr capacity and SS construction.",
      "200 kg/hr",
      "5 kW",
      "Automatic",

      [
        { label: "Capacity", value: "200 kg/hr" },
        { label: "Production Capacity", value: "200 kg/hr" },
        { label: "Machine Type", value: "Tilting Fryer" },
        { label: "Heating Type", value: "Diesel" },
        { label: "Equipment Type", value: "Puff Snacks Foodtruder" },
        { label: "Automation Grade", value: "Automatic" },
        { label: "Material", value: "SS" },
        { label: "Application", value: "Pellet Snacks" },
        { label: "Shape", value: "Rectangular" },
        { label: "Oil Capacity", value: "200 L" },
        { label: "Frying Temperature", value: "200°C" },
        { label: "Power Load", value: "5 kW" },
        { label: "Phase", value: "3 Phase" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Minimum Order Quantity", value: "1 Piece" },
      ],

      [
        "200 kg/hr production capacity",
        "Tilting fryer design",
        "Diesel heating system",
        "Automatic operation",
        "SS construction",
        "200 L oil capacity",
        "Frying temperature up to 200°C",
        "5 kW power load",
        "Three phase operation",
        "Rectangular design",
        "Suitable for pellet snacks",
        "Made in India",
      ],

      [
        "Kurkure",
        "Pellet Snacks",
        "Puff Snacks",
        "Namkeen",
        "Extruded Snacks",
      ],

      [
        {
          q: "What is the capacity of the Kurkure Fryer Machine?",
          a: "The listed capacity and production capacity are 200 kg/hr.",
        },
        {
          q: "What type of fryer is this?",
          a: "The machine type is Tilting Fryer.",
        },
        {
          q: "What is the heating type?",
          a: "The heating type is Diesel.",
        },
        {
          q: "Is the machine automatic?",
          a: "Yes, the automation grade is Automatic.",
        },
        {
          q: "What is the oil capacity?",
          a: "The listed oil capacity is 200 L.",
        },
        {
          q: "What is the frying temperature?",
          a: "The listed frying temperature is 200°C.",
        },
        {
          q: "What is the power load?",
          a: "The listed power load is 5 kW.",
        },
        {
          q: "What type of snacks is it used for?",
          a: "The listed application is Pellet Snacks.",
        },
        {
          q: "What is the phase?",
          a: "The machine operates on Three Phase power.",
        },
        {
          q: "What is the minimum order quantity?",
          a: "The minimum order quantity is 1 Piece.",
        },
      ]
    ),


    p(
  "42 Inch Stainless Steel Bhatti",
  "/images/machines/Fryer Machine/2.webp",
  "Stainless steel biomass pallet burner bhatti designed for frying Basen items, Kurkure, dal, potato chips and other snacks.",
  "As per product",
  "Not Specified",
  "Semi-Automatic",

  [
    { label: "Bhatti Type", value: "NAMKEEN BHATTI" },
    { label: "Capacity", value: "As per product" },
    { label: "Fuel Type", value: "BIOMASS PALLET" },
    { label: "Body Material", value: "Stainless Steel" },
    { label: "Burner Count", value: "1 Burner" },
    { label: "Automation Grade", value: "Semi-Automatic" },
    { label: "Insulation Type", value: "Fire Brick" },
    { label: "Material", value: "Stainless Steel" },
    { label: "Shape", value: "Round" },
    { label: "Usage", value: "Frying" },
    { label: "Mounting", value: "Floor" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Product Type", value: "Frying biomass pallet burner" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "42 inch stainless steel bhatti",
    "Biomass pallet burner",
    "Stainless steel body",
    "Fire brick insulation",
    "Single burner",
    "Semi-automatic operation",
    "Round design",
    "Floor mounted",
    "Suitable for frying snacks",
    "Made in India",
  ],

  [
    "Basen Items",
    "Kurkure",
    "Dal",
    "Potato Chips",
    "Namkeen",
    "Snacks",
  ],

  [
    {
      q: "What type of bhatti is this?",
      a: "The bhatti type is Namkeen Bhatti.",
    },
    {
      q: "What fuel does the bhatti use?",
      a: "The fuel type is Biomass Pallet.",
    },
    {
      q: "What is the body material?",
      a: "The body is made from Stainless Steel.",
    },
    {
      q: "How many burners are provided?",
      a: "The bhatti has 1 burner.",
    },
    {
      q: "What is the automation grade?",
      a: "The automation grade is Semi-Automatic.",
    },
    {
      q: "What type of insulation is used?",
      a: "The insulation type is Fire Brick.",
    },
    {
      q: "What is the shape of the bhatti?",
      a: "The bhatti has a Round shape.",
    },
    {
      q: "What is it used for?",
      a: "It is used for frying snacks such as Basen items, Kurkure, dal and potato chips.",
    },
    {
      q: "How is the bhatti mounted?",
      a: "The mounting type is Floor.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
  ],
},


//11



//

{
  slug: "conveyors",
  name: "Conveyors",
  products: [
    p(
      "Wire Mesh Conveyor",
      "/images/machines/Conveyors/1.webp",
      "Stainless steel wire mesh conveyor designed for food industry applications with variable speed control and a 1–10 feet length range.",
      "1–10 feet",
      "Not Specified",
      "Variable Speed",

      [
        { label: "Type", value: "Mess Conveyor" },
        { label: "Material", value: "Stainless Steel" },
        { label: "Usage/Application", value: "Food Industry" },
        { label: "Variable Speed", value: "Variable Speed" },
        { label: "Length", value: "1–10 feet" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Minimum Order Quantity", value: "1 Piece" },
      ],

      [
        "Stainless steel construction",
        "Variable speed operation",
        "1–10 feet length range",
        "Suitable for food industry",
        "Wire mesh conveyor design",
        "Designed for continuous material movement",
        "Made in India",
      ],

      [
        "Food Industry",
        "Food Processing",
        "Snacks",
        "Namkeen",
        "Processed Food",
      ],

      [
        {
          q: "What type of conveyor is this?",
          a: "The listed type is Mess Conveyor.",
        },
        {
          q: "What material is used?",
          a: "The conveyor is made from Stainless Steel.",
        },
        {
          q: "Where is the conveyor used?",
          a: "It is designed for Food Industry applications.",
        },
        {
          q: "Does it have variable speed?",
          a: "Yes, the conveyor has Variable Speed operation.",
        },
        {
          q: "What is the available length?",
          a: "The listed length range is 1–10 feet.",
        },
        {
          q: "What is the minimum order quantity?",
          a: "The minimum order quantity is 1 Piece.",
        },
        {
          q: "What is the country of origin?",
          a: "The conveyor is Made in India.",
        },
      ]
    ),

    p(
      "Bucket Conveyors",
      "/images/machines/Conveyors/2.webp",
      "Bucket elevator conveyor designed for conveying bulk materials through horizontal, inclined and vertical paths.",
      "10 kg",
      "Not Specified",
      "Not Specified",

      [
        { label: "Capacity", value: "10 Kg" },
        { label: "Type", value: "Bucket Elevator Conveyor" },
        { label: "Material", value: "Mild Steel" },
        { label: "Frequency", value: "50 Hz" },
        { label: "Country of Origin", value: "Made in India" },
      ],

      [
        "Bucket elevator conveyor design",
        "10 kg capacity",
        "Mild Steel construction",
        "50 Hz operation",
        "Suitable for bulk material handling",
        "Can convey material in horizontal paths",
        "Can convey material in inclined paths",
        "Can convey material in vertical paths",
        "Made in India",
      ],

      [
        "Bulk Material",
        "Food Products",
        "Snacks",
        "Namkeen",
        "Grains",
      ],

      [
        {
          q: "What is the capacity of the Bucket Conveyor?",
          a: "The listed capacity is 10 Kg.",
        },
        {
          q: "What type of conveyor is this?",
          a: "It is a Bucket Elevator Conveyor.",
        },
        {
          q: "What material is used?",
          a: "The listed material is Mild Steel.",
        },
        {
          q: "What is the frequency?",
          a: "The listed frequency is 50 Hz.",
        },
        {
          q: "What is the conveyor used for?",
          a: "Bucket conveyors are used for conveying bulk material through horizontal, inclined and vertical paths.",
        },
        {
          q: "What is the country of origin?",
          a: "The conveyor is Made in India.",
        },
      ]
    ),
  ],
},



//


{
  slug: "peeling-machine",
  name: "Peeling Machine",
  products: [
    p(
      "Potato Peeler Machine",
      "/images/machines/Peeling Machine/1.webp",
      "Semi-automatic batch type potato peeling machine with stainless steel construction and emery stone peeler, designed for industrial applications.",
      "100–150 kg/hr",
      "Not Specified",
      "Semi Automatic",

      [
        { label: "Capacity", value: "10 kg/hr" },
        { label: "Production Capacity", value: "100–150 kg/hr" },
        { label: "Type", value: "Batch Type" },
        { label: "Product To Be Peeled", value: "Potato" },
        { label: "Usage/Application", value: "Industrial" },
        { label: "Material", value: "Stainless Steel" },
        { label: "Automation Grade", value: "Semi Automatic" },
        { label: "Peeler Material", value: "Emery Stone" },
        { label: "Color", value: "Silver" },
        { label: "Location", value: "Pan India" },
        { label: "Minimum Order Quantity", value: "1 Piece" },
      ],

      [
        "Batch type peeling system",
        "Semi-automatic operation",
        "Stainless steel construction",
        "Emery stone peeler",
        "Designed for potato peeling",
        "Industrial application",
        "100–150 kg/hr production capacity",
        "Silver finish",
        "Pan India availability",
      ],

      [
        "Potato",
        "Potato Processing",
        "Food Processing",
      ],

      [
        {
          q: "What product can be peeled?",
          a: "The machine is designed for peeling Potato.",
        },
        {
          q: "What is the production capacity?",
          a: "The provided description states a peeling capacity of 100 to 150 kg/hr.",
        },
        {
          q: "What type of machine is it?",
          a: "It is a Batch Type peeling machine.",
        },
        {
          q: "What is the automation grade?",
          a: "The automation grade is Semi Automatic.",
        },
        {
          q: "What material is used?",
          a: "The machine is made from Stainless Steel.",
        },
        {
          q: "What material is used for the peeler?",
          a: "The peeler material is Emery Stone.",
        },
        {
          q: "What is the color?",
          a: "The listed color is Silver.",
        },
        {
          q: "Where is it available?",
          a: "The listed location is Pan India.",
        },
        {
          q: "What is the minimum order quantity?",
          a: "The minimum order quantity is 1 Piece.",
        },
      ]
    ),

    p(
  "Masala Coating Pan",
  "/images/machines/Peeling Machine/2.webp",
  "Semi-automatic 48-inch masala mixing and coating pan with SS 304 construction, 2 HP CG motor and portable design for Namkeen, Kurkure and puff products.",
  "50 kg",
  "2 HP",
  "Semi Automatic",

  [
    { label: "Capacity", value: "50 kg" },
    { label: "Material", value: "MS AND SS 304" },
    { label: "Machine Structure", value: "STANDARD" },
    { label: "Grade", value: "SEMI AUTOMATIC" },
    { label: "Dimensions", value: "STANDARD" },
    { label: "Brand", value: "Foodax Engineering Works" },
    { label: "Portable", value: "YES" },
    { label: "Voltage", value: "440 V" },
    { label: "Finishing", value: "YES" },
    { label: "Usage/Application", value: "NAMKEEN, KURKURE, PUFF" },
    { label: "Pan Size", value: "48 Inch" },
    { label: "Motor", value: "2 HP CG Motor" },
    { label: "Contact Material", value: "SS 304" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "48 inch masala mixing pan",
    "50 kg capacity",
    "Semi-automatic operation",
    "2 HP CG motor",
    "SS 304 construction",
    "Portable design",
    "Standard machine structure",
    "Suitable for Namkeen, Kurkure and Puff",
    "440 V operation",
  ],

  [
    "Namkeen",
    "Kurkure",
    "Puff",
    "Masala Coating",
    "Snack Products",
  ],

  [
    {
      q: "What is the capacity of the Masala Coating Pan?",
      a: "The listed capacity is 50 kg.",
    },
    {
      q: "What is the pan size?",
      a: "The provided specification states a 48-inch masala mixer pan.",
    },
    {
      q: "Is the machine automatic?",
      a: "The grade is Semi Automatic.",
    },
    {
      q: "What motor is used?",
      a: "The provided specification mentions a 2 HP CG motor.",
    },
    {
      q: "What material is used?",
      a: "The listed material is MS and SS 304, with SS 304 specified for the contact material.",
    },
    {
      q: "What products can be coated or mixed?",
      a: "The machine is listed for Namkeen, Kurkure and Puff applications.",
    },
    {
      q: "Is the machine portable?",
      a: "Yes, the provided specification states Portable: YES.",
    },
    {
      q: "What is the voltage?",
      a: "The listed voltage is 440 V.",
    },
    {
      q: "What is the brand?",
      a: "The listed brand is Foodax Engineering Works.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
  ],
},


//

{
  slug: "noodle-extruder-machine",
  name: "Noodle Extruder Machine",
  products: [
    p(
      "Noodle Extruder Machine",
      "/images/machines/Noodle Extruder Machine/1.webp",
      "1-stage noodle extruder machine with polished finish, 100 kg/hr capacity and 300 kg machine weight, designed for industrial noodle production.",
      "100 kg/hr",
      "Not Specified",
      "Not Specified",

      [
        { label: "Capacity", value: "100 kg/hr" },
        { label: "Finish", value: "Polished" },
        { label: "Machine Type", value: "1 Stage" },
        { label: "Weight", value: "300 kg" },
        { label: "Country of Origin", value: "Made in India" },
      ],

      [
        "100 kg/hr capacity",
        "1-stage extrusion system",
        "Polished finish",
        "300 kg machine weight",
        "Suitable for noodle production",
        "Made in India",
      ],

      [
        "Noodles",
        "Food Processing",
        "Extruded Food Products",
      ],

      [
        {
          q: "What is the capacity of the Noodle Extruder Machine?",
          a: "The listed capacity is 100 kg/hr.",
        },
        {
          q: "What type of machine is it?",
          a: "The machine type is 1 Stage.",
        },
        {
          q: "What is the finish?",
          a: "The listed finish is Polished.",
        },
        {
          q: "What is the machine weight?",
          a: "The listed weight is 300 kg.",
        },
        {
          q: "What is the machine used for?",
          a: "The machine is designed for noodle production.",
        },
        {
          q: "What is the country of origin?",
          a: "The machine is Made in India.",
        },
      ]
    ),
    
    p(
  "Chawmin Making Machine",
  "/images/machines/Noodle Extruder Machine/2.webp",
  "Semi-automatic complete Chowmin and noodle making plant with polished finish, 1-stage machine design and flour-based processing.",
  "50–70 kg/hr",
  "Not Specified",
  "Semi Automatic",

  [
    { label: "Capacity", value: "300, 50 TO 70 KG/HRS" },
    { label: "Finish", value: "Polished" },
    { label: "Machine Type", value: "1-Stage" },
    { label: "Finishing", value: "NOODLE MAKING MACHINE (CHOWMIN)" },
    { label: "Material", value: "FLOUR" },
    { label: "Weight", value: "300 kg" },
    { label: "Features", value: "Semi Automatic Complete Plant" },
    { label: "Brand", value: "FOODAX ENGINEERING" },
    { label: "Usage/Application", value: "Noodles" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Semi-automatic complete plant",
    "1-stage machine design",
    "Polished finish",
    "Flour-based noodle production",
    "50–70 kg/hr production range",
    "300 kg machine weight",
    "Designed for Chowmin and noodle production",
    "Foodax Engineering brand",
  ],

  [
    "Chowmin",
    "Noodles",
    "Instant Noodles",
    "Flour Noodles",
  ],

  [
    {
      q: "What is the production capacity?",
      a: "The provided specification lists 300 and 50 to 70 kg/hr capacities.",
    },
    {
      q: "Is the machine automatic?",
      a: "The machine is described as a Semi Automatic Complete Plant.",
    },
    {
      q: "What type of machine is it?",
      a: "The machine type is 1-Stage.",
    },
    {
      q: "What material is used?",
      a: "The listed material is Flour.",
    },
    {
      q: "What is the machine used for?",
      a: "The usage/application is Noodles, including Chowmin production.",
    },
    {
      q: "What is the machine weight?",
      a: "The listed weight is 300 kg.",
    },
    {
      q: "What is the finish?",
      a: "The listed finish is Polished.",
    },
    {
      q: "What is the brand?",
      a: "The listed brand is FOODAX ENGINEERING.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
  ],
},


//
{
  slug: "mixture-machine",
  name: "Mixture Machine",
  products: [
    p(
      "Stainless Steel Masala Mixer",
      "/images/machines/Mixture Machine/1.webp",
      "Semi-automatic stainless steel masala mixer with a 40-inch round drum, 30 kg batch capacity and 2 HP motor for industrial mixing applications.",
      "30 kg",
      "2 HP",
      "Semi Automatic",

      [
        { label: "Drum Design", value: "ROUND" },
        { label: "Automation Grade", value: "Semi Automatic" },
        { label: "Brand", value: "FOODAX" },
        { label: "Operation Mode", value: "Semi Automatic" },
        { label: "Electricity Connection", value: "Three Phase" },
        { label: "Batch Capacity", value: "30 kg" },
        { label: "Capacity", value: "30 kg" },
        { label: "Motor Power", value: "2 HP" },
        { label: "Voltage", value: "415 V" },
        { label: "Power Consumption", value: "1500 W" },
        { label: "Usage/Application", value: "Industrial" },
        { label: "Material Of Construction", value: "Stainless Steel" },
        { label: "Speed", value: "40 rpm" },
        { label: "Model Name/Number", value: "FE-0081" },
        { label: "Drum Size", value: "40 Inch" },
        { label: "Product Contact Material", value: "SS" },
        { label: "Frame Material", value: "MS" },
        { label: "Minimum Order Quantity", value: "1 Piece" },
      ],

      [
        "40-inch round drum",
        "30 kg batch capacity",
        "2 HP motor",
        "Semi-automatic operation",
        "Stainless Steel construction",
        "MS frame",
        "Three phase electricity connection",
        "415 V operation",
        "40 rpm mixing speed",
        "1500 W power consumption",
        "Industrial application",
      ],

      [
        "Masala",
        "Namkeen",
        "Kurkure",
        "Puff",
        "Snack Products",
      ],

      [
        {
          q: "What is the batch capacity?",
          a: "The batch capacity is 30 kg.",
        },
        {
          q: "What is the drum design?",
          a: "The drum design is Round.",
        },
        {
          q: "What is the drum size?",
          a: "The provided description specifies a 40-inch masala mixer.",
        },
        {
          q: "What is the motor power?",
          a: "The motor power is 2 HP.",
        },
        {
          q: "What is the automation grade?",
          a: "The automation grade is Semi Automatic.",
        },
        {
          q: "What material is used for construction?",
          a: "The machine construction is Stainless Steel, with an MS frame specified in the description.",
        },
        {
          q: "What is the mixing speed?",
          a: "The listed speed is 40 rpm.",
        },
        {
          q: "What is the power consumption?",
          a: "The listed power consumption is 1500 W.",
        },
        {
          q: "What is the voltage and phase?",
          a: "The machine uses 415 V, Three Phase power.",
        },
        {
          q: "What is the model number?",
          a: "The model number is FE-0081.",
        },
        {
          q: "What is the minimum order quantity?",
          a: "The minimum order quantity is 1 Piece.",
        },
      ]
    ),

    p(
  "Slurry Mixing Machine",
  "/images/machines/Mixture Machine/2.webp",
  "Semi-automatic slurry mixing machine designed to homogenize slurry and maintain a pumpable, flowable mixture for efficient industrial processing.",
  "100 kg/batch",
  "Not Specified",
  "Semi Automatic",

  [
    { label: "Automation Grade", value: "Semi Automatic" },
    { label: "Capacity", value: "100 KG/PR BATCH" },
    { label: "Frequency", value: "50 Hz" },
    { label: "Maximum Propeller Diameter", value: "550 MM" },
    { label: "Model Name/Number", value: "FEW-0032" },
    { label: "Phase", value: "3 Phase" },
    { label: "Power Source", value: "Electric" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Semi-automatic operation",
    "100 kg per batch capacity",
    "550 mm maximum propeller diameter",
    "Three phase operation",
    "Electric power source",
    "Designed for slurry mixing",
    "Helps prevent floating layer formation",
    "Maintains a pumpable and flowable mixture",
    "Provides homogeneous mixing",
  ],

  [
    "Slurry",
    "Liquid Mixtures",
    "Industrial Mixing",
    "Food Processing",
  ],

  [
    {
      q: "What is the capacity of the Slurry Mixing Machine?",
      a: "The listed capacity is 100 kg per batch.",
    },
    {
      q: "What is the automation grade?",
      a: "The automation grade is Semi Automatic.",
    },
    {
      q: "What is the maximum propeller diameter?",
      a: "The maximum propeller diameter is 550 mm.",
    },
    {
      q: "What is the model number?",
      a: "The model name/number is FEW-0032.",
    },
    {
      q: "What is the power source?",
      a: "The power source is Electric.",
    },
    {
      q: "What phase does the machine require?",
      a: "The machine operates on 3 Phase power.",
    },
    {
      q: "What is the frequency?",
      a: "The listed frequency is 50 Hz.",
    },
    {
      q: "What is a slurry mixer used for?",
      a: "The provided description states that slurry mixers are used to stir slurry, prevent floating layers, maintain pumpability and flowability, and homogenize the mixture.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
  ],
},



//other prodct


{
  slug: "other-product",
  name: "Other Product",
  products: [
    p(
      "Multipurpose Namkeen Fryer",
      "/images/machines/Other Product/1.webp",
      "Automatic continuous multipurpose fryer for making various fried food products including Namkeen, Dal, Kurkure and other snacks.",
      "300 kg/hr",
      "9 kW",
      "Automatic",

      [
        { label: "Capacity", value: "300 kg/hr" },
        { label: "Machine Type", value: "Continuous Fryer" },
        { label: "Heating Type", value: "DIESEL, GAS, BIOMASS PALLET & WOODEN" },
        { label: "Automation Grade", value: "Automatic" },
        { label: "Material", value: "SS 304" },
        { label: "Application", value: "Namkeen" },
        { label: "Shape", value: "Rectangular" },
        { label: "Equipment Type", value: "Multi Product Fryer, Basen Item, Dal, Bundi" },
        { label: "Power Consumption", value: "9 kW" },
        { label: "Fuel", value: "LPG, Gas, Diesel" },
        { label: "Voltage", value: "440 V" },
        { label: "Oil Capacity", value: "500 L" },
        { label: "Frying Temperature", value: "200°C" },
        { label: "Power Load", value: "10 kW" },
        { label: "Phase", value: "3 Phase" },
        { label: "Brand", value: "FOODAX ENGINEERING WORKS" },
        { label: "Minimum Order Quantity", value: "1 Piece" },
      ],

      [
        "300 kg/hr production capacity",
        "Continuous frying system",
        "Automatic operation",
        "SS 304 construction",
        "500 L oil capacity",
        "200°C frying temperature",
        "Multiple heating options",
        "9 kW power consumption",
        "10 kW power load",
        "440 V operation",
        "Three phase operation",
        "Suitable for multiple fried snacks",
      ],

      [
        "Namkeen",
        "Dal",
        "Kurkure",
        "Bundi",
        "Basen Items",
        "Fried Snacks",
      ],

      [
        {
          q: "What is the capacity of the Multipurpose Namkeen Fryer?",
          a: "The listed capacity is 300 kg/hr.",
        },
        {
          q: "What type of fryer is it?",
          a: "It is a Continuous Fryer.",
        },
        {
          q: "Is the machine automatic?",
          a: "Yes, the automation grade is Automatic.",
        },
        {
          q: "What material is used?",
          a: "The machine is made from SS 304.",
        },
        {
          q: "What products can be fried?",
          a: "The machine is listed for Namkeen, Dal, Kurkure, Bundi, Basen items and other snacks.",
        },
        {
          q: "What is the oil capacity?",
          a: "The listed oil capacity is 500 L.",
        },
        {
          q: "What is the frying temperature?",
          a: "The listed frying temperature is 200°C.",
        },
        {
          q: "What heating options are available?",
          a: "The listed heating types are Diesel, Gas, Biomass Pallet and Wooden.",
        },
        {
          q: "What is the power consumption?",
          a: "The listed power consumption is 9 kW.",
        },
        {
          q: "What is the power load?",
          a: "The listed power load is 10 kW.",
        },
        {
          q: "What voltage and phase are required?",
          a: "The machine uses 440 V, Three Phase power.",
        },
        {
          q: "What is the minimum order quantity?",
          a: "The minimum order quantity is 1 Piece.",
        },
      ]
    ),

    p(
  "Z Shaped Bucket Elevator",
  "/images/machines/Other Product/2.webp",
  "Z type bucket elevator conveyor designed for efficient automatic transportation of bulk materials with a 15 feet operating height and 1–2 ton capacity.",
  "1–2 ton",
  "440",
  "Not Specified",

  [
    { label: "Structure", value: "Z Type Bucket Elevator" },
    { label: "Operating Height", value: "15 feet" },
    { label: "Capacity", value: "1–2 ton" },
    { label: "Model Name/Number", value: "FE-0087" },
    { label: "Gear Box", value: "YES" },
    { label: "Voltage", value: "440 V" },
    { label: "Power", value: "440" },
    { label: "Brand", value: "FOODAX ENGINEERING" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Z type bucket elevator design",
    "15 feet operating height",
    "1–2 ton capacity",
    "Gear box provided",
    "Suitable for automatic material transportation",
    "Designed for efficient bulk material handling",
    "440 V operation",
    "FOODAX ENGINEERING",
  ],

  [
    "Bulk Materials",
    "Food Products",
    "Grains",
    "Snacks",
    "Namkeen",
  ],

  [
    {
      q: "What type of elevator is this?",
      a: "It is a Z Type Bucket Elevator.",
    },
    {
      q: "What is the operating height?",
      a: "The listed operating height is 15 feet.",
    },
    {
      q: "What is the capacity?",
      a: "The listed capacity is 1–2 ton.",
    },
    {
      q: "Does it have a gear box?",
      a: "Yes, the specification states that a gear box is provided.",
    },
    {
      q: "What is the model number?",
      a: "The model number is FE-0087.",
    },
    {
      q: "What is the voltage?",
      a: "The listed voltage is 440 V.",
    },
    {
      q: "What is the brand?",
      a: "The listed brand is FOODAX ENGINEERING.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
p(
  "Heating Equipment",
  "/images/machines/Other Product/3.webp",
  "Heating equipment designed for oven applications with MS construction and 240 V electrical operation.",
  "Not Specified",
  "Not Specified",
  "Not Specified",

  [
    { label: "Material", value: "MS" },
    { label: "Voltage", value: "240 V" },
    { label: "Usage/Application", value: "Ovens" },
    { label: "Country of Origin", value: "Made in India" },
  ],

  [
    "MS construction",
    "240 V operation",
    "Suitable for oven applications",
    "Made in India",
    "Designed for heating applications",
  ],

  [
    "Ovens",
    "Heating Applications",
    "Food Processing",
  ],

  [
    {
      q: "What is the material of the Heating Equipment?",
      a: "The listed material is MS.",
    },
    {
      q: "What is the voltage?",
      a: "The listed voltage is 240 V.",
    },
    {
      q: "What is the equipment used for?",
      a: "The listed usage/application is Ovens.",
    },
    {
      q: "What is the country of origin?",
      a: "The equipment is Made in India.",
    },
  ]
),

p(
  "Electric Bhatti",
  "/images/machines/Other Product/4.webp",
  "Electric bhatti with stainless steel body, electric heating system, glass wool insulation and round design, suitable for food processing and frying applications.",
  "Not Specified",
  "Not Specified",
  "Electric",

  [
    { label: "Bhatti Type", value: "Electric Bhatti" },
    { label: "Fuel Type", value: "Electric" },
    { label: "Body Material", value: "Stainless Steel" },
    { label: "Burner Count", value: "Electric Heater" },
    { label: "Insulation Type", value: "Glass Wool" },
    { label: "Shape", value: "Round" },
  ],

  [
    "Electric heating system",
    "Stainless Steel body",
    "Electric heater",
    "Glass wool insulation",
    "Round design",
    "Suitable for food processing applications",
  ],

  [
    "Namkeen",
    "Snacks",
    "Food Processing",
    "Frying",
  ],

  [
    {
      q: "What type of bhatti is this?",
      a: "It is an Electric Bhatti.",
    },
    {
      q: "What is the fuel type?",
      a: "The fuel type is Electric.",
    },
    {
      q: "What material is used for the body?",
      a: "The body material is Stainless Steel.",
    },
    {
      q: "What is used as the burner?",
      a: "The burner system uses an Electric Heater.",
    },
    {
      q: "What type of insulation is used?",
      a: "The insulation type is Glass Wool.",
    },
    {
      q: "What is the shape of the bhatti?",
      a: "The bhatti has a Round shape.",
    },
  ]
),
p(
  "Momos Making Machine",
  "/images/machines/Other Product/5.webp",
  "Semi-automatic momos making machine designed for easy operation and low maintenance with an electric momo forming system.",
  "Not Specified",
  "2.2 kW",
  "Semi Automatic",

  [
    { label: "Automation Grade", value: "Semi Automatic" },
    { label: "Power Source", value: "Electric" },
    { label: "Machine Function", value: "Momo Forming" },
    { label: "Number Of Dies", value: "As per requirement" },
    { label: "Brand", value: "FOODAX" },
    { label: "Power", value: "2.2 kW" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Semi-automatic operation",
    "Electric power source",
    "Momo forming system",
    "Easy operation",
    "Low maintenance",
    "2.2 kW power",
    "Multiple die options as per requirement",
  ],

  [
    "Momos",
    "Momo Forming",
    "Food Processing",
    "Frozen Food",
  ],

  [
    {
      q: "What is the automation grade?",
      a: "The automation grade is Semi Automatic.",
    },
    {
      q: "What is the machine function?",
      a: "The machine function is Momo Forming.",
    },
    {
      q: "What is the power source?",
      a: "The power source is Electric.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power is 2.2 kW.",
    },
    {
      q: "How many dies are provided?",
      a: "The number of dies is available as per requirement.",
    },
    {
      q: "Is the machine easy to operate?",
      a: "Yes, the provided description states that the machine is easy to operate.",
    },
    {
      q: "Is the machine low maintenance?",
      a: "Yes, the provided description states that the machine requires low maintenance.",
    },
    {
      q: "What is the brand?",
      a: "The listed brand is FOODAX.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
p(
  "Rolling Shutter Fabrication Works",
  "/images/machines/Other Product/6.webp",
  "Motorized rolling shutter fabrication works using mild steel with gear-operated operation, suitable for industrial units and custom fabrication as per drawing.",
  "1 sq ft",
  "Not Specified",
  "Motorized",

  [
    { label: "Shutter Type", value: "Motorized" },
    { label: "Material", value: "Mild Steel" },
    { label: "Shutter Thickness", value: "1 to 5 mm" },
    { label: "Operation Mode", value: "Gear Operated" },
    { label: "Application", value: "Industrial Unit" },
    { label: "Surface Finish", value: "Plain" },
    { label: "Minimum Order Quantity", value: "1 sq ft" },
  ],

  [
    "Motorized rolling shutter",
    "Mild Steel construction",
    "1–5 mm shutter thickness",
    "Gear operated system",
    "Plain surface finish",
    "Suitable for industrial units",
    "Custom SS/MS tank fabrication available",
    "Fabrication as per drawing",
  ],

  [
    "Rolling Shutter",
    "SS Tank",
    "MS Tank",
    "Industrial Fabrication",
    "Custom Fabrication",
  ],

  [
    {
      q: "What type of shutter is this?",
      a: "The shutter type is Motorized.",
    },
    {
      q: "What material is used?",
      a: "The listed material is Mild Steel.",
    },
    {
      q: "What is the shutter thickness?",
      a: "The shutter thickness range is 1 to 5 mm.",
    },
    {
      q: "What is the operation mode?",
      a: "The operation mode is Gear Operated.",
    },
    {
      q: "Where is it used?",
      a: "The listed application is Industrial Unit.",
    },
    {
      q: "What is the surface finish?",
      a: "The surface finish is Plain.",
    },
    {
      q: "What other fabrication work is available?",
      a: "SS/MS tanks and other fabrication work are available as per drawing.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 sq ft.",
    },
  ]
),
p(
  "Ms And Ss Fabricators Works",
  "/images/machines/Other Product/7.webp",
  "MS and SS fabrication service for industrial applications, including tanks, trolleys, frames and structural frameworks as per drawing and requirement.",
  "As per requirement",
  "Not Specified",
  "With Material",

  [
    { label: "Application", value: "Industrial" },
    { label: "Material", value: "Mild Steel (MS)" },
    { label: "Service Scope", value: "With Material" },
    { label: "Height", value: "AS PER REQUIREMENT" },
    { label: "Thickness", value: "AS PER REQUIREMENT" },
    { label: "Service Type", value: "SS AND MS FABRICATION" },
    { label: "Structure Type", value: "Structural Framework" },
    { label: "Surface Treatment", value: "Powder Coated" },
    { label: "Service Duration", value: "10 days" },
    { label: "Minimum Order Quantity", value: "50 Kg" },
  ],

  [
    "MS and SS fabrication work",
    "Industrial fabrication service",
    "Fabrication as per drawing",
    "Structural framework fabrication",
    "Custom height and thickness",
    "With material service",
    "Powder coated finish",
    "10 days service duration",
    "Tanks, trolleys and frames fabrication",
  ],

  [
    "MS Fabrication",
    "SS Fabrication",
    "MS Tank",
    "SS Tank",
    "Trolley",
    "Frame",
    "Structural Framework",
  ],

  [
    {
      q: "What type of fabrication service is offered?",
      a: "The service type is SS and MS Fabrication.",
    },
    {
      q: "What is the application?",
      a: "The listed application is Industrial.",
    },
    {
      q: "What material is used?",
      a: "The listed material is Mild Steel (MS), with SS and MS fabrication also specified.",
    },
    {
      q: "Is material included in the service?",
      a: "Yes, the service scope is With Material.",
    },
    {
      q: "Can the height and thickness be customized?",
      a: "Yes, both height and thickness are provided as per requirement.",
    },
    {
      q: "What type of structures can be fabricated?",
      a: "The provided description includes SS/MS tanks, trolleys, frames and other fabrication work as per drawing.",
    },
    {
      q: "What is the surface treatment?",
      a: "The listed surface treatment is Powder Coated.",
    },
    {
      q: "What is the service duration?",
      a: "The listed service duration is 10 days.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 50 Kg.",
    },
  ]
),
p(
  "Flat Belt Conveyor",
  "/images/machines/Other Product/8.webp",
  "Rubber flat belt conveyor designed for controlled movement and transportation of products in straight directions, through directional changes and elevation.",
  "Not Specified",
  "Not Specified",
  "Not Specified",

  [
    { label: "Material", value: "Rubber" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Rubber belt construction",
    "Controlled product movement",
    "Suitable for straight transportation",
    "Can handle directional changes",
    "Suitable for elevation movement",
    "Industrial material handling",
  ],

  [
    "Food Products",
    "Snacks",
    "Namkeen",
    "Bulk Materials",
    "Material Handling",
  ],

  [
    {
      q: "What material is used for the Flat Belt Conveyor?",
      a: "The listed material is Rubber.",
    },
    {
      q: "What is the conveyor used for?",
      a: "It is used to provide controlled movement and transport products.",
    },
    {
      q: "Can the conveyor transport products in a straight direction?",
      a: "Yes, conveyor belts can transport products in a straight direction.",
    },
    {
      q: "Can it handle directional changes?",
      a: "Yes, the provided description states that products can be transported through directional changes.",
    },
    {
      q: "Can it handle elevation?",
      a: "Yes, the provided description states that conveyor belts can transport products through elevation.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
p(
  "Thermocouple Sensor",
  "/images/machines/Other Product/9.webp",
  "Industrial thermocouple sensor with stainless steel construction, Class 1 accuracy, 0 to 1200°C temperature range and 150 mm probe length.",
  "0–1200°C",
  "Not Specified",
  "Industrial",

  [
    { label: "Thermocouple Type", value: "ALL TYPE AS PER SAMPLE" },
    { label: "Sheath Material", value: "DIFFERENT" },
    { label: "Temperature Range", value: "0 to 1200°C" },
    { label: "Probe Length", value: "150 mm" },
    { label: "Probe Diameter", value: "8 mm" },
    { label: "Insulation", value: "Fiberglass" },
    { label: "Material", value: "Stainless Steel" },
    { label: "Accuracy Class", value: "Class 1" },
    { label: "Cable Length", value: "5 m" },
    { label: "Termination", value: "Terminal Head" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Usage", value: "Industrial" },
    { label: "Delivery", value: "PAN India" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "0–1200°C temperature range",
    "150 mm probe length",
    "8 mm probe diameter",
    "Stainless Steel construction",
    "Fiberglass insulation",
    "Class 1 accuracy",
    "5 m cable length",
    "Terminal head termination",
    "All types available as per sample",
    "Industrial application",
    "PAN India delivery",
    "Made in India",
  ],

  [
    "Temperature Sensor",
    "Thermocouple",
    "Industrial Sensor",
    "Temperature Measurement",
    "Heating Equipment",
  ],

  [
    {
      q: "What is the temperature range?",
      a: "The listed temperature range is 0 to 1200°C.",
    },
    {
      q: "What is the probe length?",
      a: "The probe length is 150 mm.",
    },
    {
      q: "What is the probe diameter?",
      a: "The probe diameter is 8 mm.",
    },
    {
      q: "What material is used?",
      a: "The listed material is Stainless Steel.",
    },
    {
      q: "What is the accuracy class?",
      a: "The accuracy class is Class 1.",
    },
    {
      q: "What type of insulation is used?",
      a: "The insulation is Fiberglass.",
    },
    {
      q: "What is the cable length?",
      a: "The cable length is 5 m.",
    },
    {
      q: "What type of termination is provided?",
      a: "The termination is a Terminal Head.",
    },
    {
      q: "What thermocouple types are available?",
      a: "The provided specification states that all types are available as per sample.",
    },
    {
      q: "Where is it used?",
      a: "The listed usage is Industrial.",
    },
    {
      q: "What is the delivery area?",
      a: "The listed delivery area is PAN India.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
p(
  "Pan Masala & Tobacco Consultant",
  "/images/machines/Other Product/10.webp",
  "Automatic cutting machine for chewing tobacco applications with SS304 body, electric power source, three phase operation and pillow pouch output.",
  "As per requirement",
  "Not Specified",
  "Automatic",

  [
    { label: "Machine Type", value: "Cutting Machine" },
    { label: "Capacity", value: "As per requirement" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Application", value: "Chewing Tobacco" },
    { label: "Body Material", value: "SS304" },
    { label: "Power Source", value: "Electric" },
    { label: "Phase", value: "Three Phase" },
    { label: "Mounted Type", value: "Floor Mounted" },
    { label: "Output Form", value: "Pillow Pouch" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Automatic cutting machine",
    "SS304 body construction",
    "Electric power source",
    "Three phase operation",
    "Floor mounted design",
    "Pillow pouch output",
    "Capacity as per requirement",
  ],

  [
    "Chewing Tobacco",
    "Tobacco Cutting",
    "Pouch Packaging",
    "Pillow Pouch",
  ],

  [
    {
      q: "What type of machine is this?",
      a: "The machine type is Cutting Machine.",
    },
    {
      q: "What is the automation grade?",
      a: "The automation grade is Automatic.",
    },
    {
      q: "What is the capacity?",
      a: "The capacity is provided as per requirement.",
    },
    {
      q: "What is the body material?",
      a: "The body material is SS304.",
    },
    {
      q: "What is the power source?",
      a: "The power source is Electric.",
    },
    {
      q: "What phase does the machine require?",
      a: "The machine operates on Three Phase power.",
    },
    {
      q: "What is the mounting type?",
      a: "The machine is Floor Mounted.",
    },
    {
      q: "What is the output form?",
      a: "The listed output form is Pillow Pouch.",
    },
    {
      q: "What is the application?",
      a: "The listed application is Chewing Tobacco.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
p(
  "Mild Steel Table Frame",
  "/images/machines/Other Product/11.webp",
  "Mild steel table frame with multiple shape options, 6x3 feet size and four-leg design, suitable for hotels, schools, restaurants and other institutional applications.",
  "6x3 Feet",
  "Not Specified",
  "As per requirement",

  [
    { label: "Frame Shape", value: "ALL SHAPE" },
    { label: "Color", value: "White" },
    { label: "Size", value: "6x3 Feet" },
    { label: "Frame Height", value: "AS PER REQUIREMENT" },
    { label: "Surface Finish", value: "AS PER REQUIREMENT" },
    { label: "Leg Type", value: "4 Leg" },
    { label: "Usage Area", value: "Hotel, School, Restaurant" },
    { label: "Frame Material", value: "Stainless Steel" },
    { label: "Material", value: "Mild Steel" },
    { label: "Minimum Order Quantity", value: "50 Piece" },
  ],

  [
    "6x3 feet table frame",
    "Multiple frame shapes available",
    "Four-leg design",
    "Mild Steel construction",
    "Stainless Steel frame material specified",
    "Custom frame height",
    "Custom surface finish",
    "Suitable for hotels, schools and restaurants",
    "White color",
  ],

  [
    "Mild Steel Table",
    "School Table",
    "Hospital Table",
    "Hotel Table",
    "Restaurant Table",
    "Table Frame",
  ],

  [
    {
      q: "What is the table frame size?",
      a: "The listed size is 6x3 feet.",
    },
    {
      q: "What type of frame shapes are available?",
      a: "The specification states that all shapes are available.",
    },
    {
      q: "How many legs does the table frame have?",
      a: "The frame has 4 legs.",
    },
    {
      q: "What material is specified?",
      a: "The listed material is Mild Steel, while the frame material is specified as Stainless Steel.",
    },
    {
      q: "Can the frame height be customized?",
      a: "Yes, the frame height is provided as per requirement.",
    },
    {
      q: "Can the surface finish be customized?",
      a: "Yes, the surface finish is provided as per requirement.",
    },
    {
      q: "Where can it be used?",
      a: "The listed usage areas are hotels, schools and restaurants.",
    },
    {
      q: "What is the color?",
      a: "The listed color is White.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 50 Piece.",
    },
  ]
),
p(
  "Tilting Hydro Machine",
  "/images/machines/Other Product/12.webp",
  "Automatic tilting hydro machine with stainless steel construction and 20 kg capacity, designed for Namkeen food processing applications.",
  "20 kg",
  "Not Specified",
  "Automatic",

  [
    { label: "Capacity", value: "20 kg" },
    { label: "Usage/Application", value: "Namkeen" },
    { label: "Machine Type", value: "Automatic" },
    { label: "Material", value: "Stainless Steel" },
  ],

  [
    "20 kg capacity",
    "Automatic operation",
    "Stainless Steel construction",
    "Suitable for Namkeen applications",
    "Food processing equipment",
  ],

  [
    "Namkeen",
    "Food Processing",
    "Snack Processing",
  ],

  [
    {
      q: "What is the capacity of the Tilting Hydro Machine?",
      a: "The listed capacity is 20 kg.",
    },
    {
      q: "What is the machine type?",
      a: "The machine type is Automatic.",
    },
    {
      q: "What material is used?",
      a: "The machine is made from Stainless Steel.",
    },
    {
      q: "What is the usage/application?",
      a: "The listed usage/application is Namkeen.",
    },
  ]
),
p(
  "Traditional Diesel Bhatti",
  "/images/machines/Other Product/13.webp",
  "Traditional diesel bhatti with an MS body, diesel fuel system and capacity of 70 kg Namkeen per hour.",
  "70 kg/hr",
  "Not Specified",
  "Diesel",

  [
    { label: "Burner Size", value: "More Than 18 Inch" },
    { label: "Model Name/Number", value: "FEW-0073" },
    { label: "Material", value: "MS" },
    { label: "Fuel Type", value: "Diesel" },
    { label: "Color", value: "Black" },
    { label: "Capacity", value: "70 kg Namkeen per hrs" },
  ],

  [
    "Traditional diesel bhatti",
    "More than 18 inch burner size",
    "MS construction",
    "Diesel fuel operation",
    "Black finish",
    "70 kg/hr Namkeen capacity",
    "Model FEW-0073",
  ],

  [
    "Namkeen",
    "Snacks",
    "Frying",
    "Food Processing",
  ],

  [
    {
      q: "What is the capacity of the Traditional Diesel Bhatti?",
      a: "The listed capacity is 70 kg Namkeen per hour.",
    },
    {
      q: "What is the fuel type?",
      a: "The fuel type is Diesel.",
    },
    {
      q: "What is the burner size?",
      a: "The burner size is more than 18 inch.",
    },
    {
      q: "What material is used?",
      a: "The listed material is MS.",
    },
    {
      q: "What is the model number?",
      a: "The model name/number is FEW-0073.",
    },
    {
      q: "What is the color?",
      a: "The listed color is Black.",
    },
  ]
),
p(
  "Food Processing Machine Repairing Service",
  "/images/machines/Other Product/14.webp",
  "Professional food processing machine repairing service available across India at reasonable prices with quality service.",
  "As per requirement",
  "Not Specified",
  "Service",

  [
    { label: "Service Type", value: "Food Processing Machine Repairing Service" },
    { label: "Service Area", value: "All Over India" },
    { label: "Service Quality", value: "Best Quality" },
    { label: "Pricing", value: "Reasonable Prices" },
  ],

  [
    "Food processing machine repair service",
    "Available all over India",
    "Quality repair service",
    "Reasonable pricing",
    "Suitable for food processing equipment",
  ],

  [
    "Machine Repair",
    "Food Processing Machines",
    "Maintenance Service",
    "Industrial Repair",
  ],

  [
    {
      q: "What service is provided?",
      a: "The service provided is Food Processing Machine Repairing Service.",
    },
    {
      q: "Where is the repair service available?",
      a: "The service is available all over India.",
    },
    {
      q: "What type of machines can be repaired?",
      a: "The provided information specifies Food Processing Machines, but does not list specific machine models.",
    },
    {
      q: "What is the pricing?",
      a: "The service is offered at reasonable prices.",
    },
    {
      q: "What is the service quality?",
      a: "The service is provided with a focus on best quality.",
    },
  ]
),
p(
  "Varmicelli Making Machine",
  "/images/machines/Other Product/15.webp",
  "Fully automatic vermicelli making machine with stainless steel body, polished finish, 100 kg/hr listed capacity and 7.5 HP motor, designed for raw vermicelli production.",
  "100 kg/hr",
  "30 kW",
  "Fully Automatic",

  [
    { label: "Operation Mode", value: "Fully Automatic" },
    { label: "Machine Type", value: "Automatic" },
    { label: "Power Consumption", value: "30 kW" },
    { label: "Snacks Type", value: "No" },
    { label: "Finish", value: "Polished" },
    { label: "Body Material", value: "Stainless Steel" },
    { label: "Vermicelli Thickness", value: "1 mm" },
    { label: "Die Size", value: "1.2 mm to 2 mm" },
    { label: "Power Source", value: "Electric" },
    { label: "Material", value: "MS and SS" },
    { label: "Weight", value: "700 kg" },
    { label: "Product Type", value: "Raw Vermicelli" },
    { label: "Phase Type", value: "Three Phase" },
    { label: "Motor Power", value: "7.5 HP" },
    { label: "Number Of Dies", value: "2 Dies" },
    { label: "Capacity Per Hour", value: "100 kg/hr" },
    { label: "Capacity", value: "150 kg/hr" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Fully automatic operation",
    "100 kg/hr listed hourly capacity",
    "150 kg/hr stated machine capacity",
    "30 kW power consumption",
    "7.5 HP motor",
    "Stainless Steel body",
    "MS and SS construction",
    "Polished finish",
    "1 mm vermicelli thickness",
    "1.2–2 mm die size",
    "2 dies",
    "Three phase operation",
    "Easy operation",
    "Low maintenance",
    "Designed for raw vermicelli production",
  ],

  [
    "Vermicelli",
    "Raw Vermicelli",
    "Food Processing",
    "Pasta Products",
  ],

  [
    {
      q: "What is the operation mode?",
      a: "The operation mode is Fully Automatic.",
    },
    {
      q: "What is the capacity?",
      a: "The provided specifications list 100 kg/hr capacity per hour and 150 kg/hr overall capacity.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 30 kW.",
    },
    {
      q: "What is the motor power?",
      a: "The motor power is 7.5 HP.",
    },
    {
      q: "What is the body material?",
      a: "The body material is Stainless Steel, with MS and SS also specified for the machine material.",
    },
    {
      q: "What is the vermicelli thickness?",
      a: "The listed vermicelli thickness is 1 mm.",
    },
    {
      q: "What is the die size?",
      a: "The listed die size is 1.2 mm to 2 mm.",
    },
    {
      q: "How many dies are provided?",
      a: "The machine has 2 dies.",
    },
    {
      q: "What is the product type?",
      a: "The product type is Raw Vermicelli.",
    },
    {
      q: "What is the power source?",
      a: "The power source is Electric.",
    },
    {
      q: "What phase does the machine require?",
      a: "The machine uses Three Phase power.",
    },
    {
      q: "What is the machine weight?",
      a: "The listed machine weight is 700 kg.",
    },
    {
      q: "What is the finish?",
      a: "The listed finish is Polished.",
    },
    {
      q: "Is the machine easy to operate?",
      a: "The provided description states that the machine offers easy operation and low maintenance.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
p(
  "Hydro Continuous Dryers Machine For Food Processing Plant",
  "/images/machines/Other Product/16.webp",
  "Hydro dryer machine for food processing plants with stainless steel construction, 300 kg/hr capacity and 3 HP motor.",
  "300 kg/hr",
  "3 HP",
  "Not Specified",

  [
    { label: "Material", value: "Stainless Steel" },
    { label: "Brand", value: "Foodax" },
    { label: "Capacity", value: "300 Kg/Hr" },
    { label: "Motor Power", value: "3 HP" },
    { label: "Voltage", value: "220 V" },
    { label: "Frequency", value: "50 Hz" },
  ],

  [
    "300 kg/hr capacity",
    "Stainless Steel construction",
    "3 HP motor",
    "220 V operation",
    "50 Hz frequency",
    "Suitable for food processing plants",
    "Continuous drying application",
    "Foodax brand",
  ],

  [
    "Food Processing",
    "Hydro Drying",
    "Food Products",
    "Processed Snacks",
  ],

  [
    {
      q: "What is the capacity of the Hydro Continuous Dryer?",
      a: "The listed capacity is 300 kg/hr.",
    },
    {
      q: "What material is used?",
      a: "The machine is made from Stainless Steel.",
    },
    {
      q: "What is the motor power?",
      a: "The listed motor power is 3 HP.",
    },
    {
      q: "What is the voltage?",
      a: "The listed voltage is 220 V.",
    },
    {
      q: "What is the frequency?",
      a: "The listed frequency is 50 Hz.",
    },
    {
      q: "What is the brand?",
      a: "The listed brand is Foodax.",
    },
    {
      q: "What is the machine used for?",
      a: "It is a Hydro Dryer Machine designed for Food Processing Plants.",
    },
  ]
),
p(
  "Cooler Type Packing Machine",
  "/images/machines/Other Product/17.webp",
  "Fully automatic cooler type packing machine with volumetric filling, center seal packaging, laminated film support and high-speed pouch packing.",
  "3000 pouches/hr",
  "440",
  "Fully Automatic",

  [
    { label: "Filling Capacity", value: "25 to 50 gm" },
    { label: "Packaging Speed", value: "2000 Pouch/Hour" },
    { label: "Speed", value: "3000 pouches/hr" },
    { label: "Machine Type", value: "Fully Automatic" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Filling System", value: "Volumetric" },
    { label: "Sealing Type", value: "Center Seal" },
    { label: "Pouch Material", value: "Laminated Film" },
    { label: "Compressor Air Required", value: "Yes" },
    { label: "Model Name/Number", value: "FEW 754" },
    { label: "Phase", value: "Three Phase" },
    { label: "Power Consumption", value: "440" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
    { label: "Additional Feature", value: "Reben Printer" },
  ],

  [
    "Fully automatic operation",
    "25–50 gm filling capacity",
    "Up to 3000 pouches/hr speed",
    "Volumetric filling system",
    "Center seal packaging",
    "Laminated film compatible",
    "Compressor air required",
    "Three phase operation",
    "Reben printer support",
    "Model FEW 754",
  ],

  [
    "Namkeen",
    "Snacks",
    "Food Products",
    "Pouch Packaging",
    "Center Seal Packaging",
  ],

  [
    {
      q: "What is the filling capacity?",
      a: "The filling capacity is 25 to 50 gm.",
    },
    {
      q: "What is the packing speed?",
      a: "The listed packaging speed is 2000 pouch/hour, while the listed speed is up to 3000 pouches/hour.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, it is a Fully Automatic machine.",
    },
    {
      q: "What filling system is used?",
      a: "The filling system is Volumetric.",
    },
    {
      q: "What type of sealing is used?",
      a: "The sealing type is Center Seal.",
    },
    {
      q: "What pouch material is supported?",
      a: "The listed pouch material is Laminated Film.",
    },
    {
      q: "Is compressor air required?",
      a: "Yes, compressor air is required.",
    },
    {
      q: "What is the model number?",
      a: "The model name/number is FEW 754.",
    },
    {
      q: "What phase does the machine require?",
      a: "The machine operates on Three Phase power.",
    },
    {
      q: "What additional feature is mentioned?",
      a: "The provided description mentions a Reben printer.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
p(
  "Noodle Tray Continuous Dryers Machine",
  "/images/machines/Other Product/18.webp",
  "Noodle tray dryer machine with 24 trays, electric heating, polished finish and stainless steel construction, designed for continuous noodle drying applications.",
  "100 kg/hr",
  "Not Specified",
  "Electric",

  [
    { label: "Capacity (Kg/Hr)", value: "100 kg/hr" },
    { label: "Number Of Tray", value: "24" },
    { label: "Heating Media", value: "Electric" },
    { label: "Surface Finish", value: "Polished" },
    { label: "Capacity", value: "70 kg/Batch" },
    { label: "Material", value: "Stainless Steel" },
    { label: "Product Type", value: "Noodle Tray Dryer Machine" },
    { label: "Additional Specification", value: "70 kg per batch, MS" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "100 kg/hr capacity",
    "24 tray configuration",
    "Electric heating",
    "70 kg per batch capacity",
    "Stainless Steel construction",
    "Polished surface finish",
    "Designed for noodle drying",
    "Suitable for food processing applications",
  ],

  [
    "Noodles",
    "Noodle Tray",
    "Food Drying",
    "Food Processing",
  ],

  [
    {
      q: "What is the capacity of the dryer?",
      a: "The listed capacity is 100 kg/hr, with a batch capacity of 70 kg.",
    },
    {
      q: "How many trays are provided?",
      a: "The machine has 24 trays.",
    },
    {
      q: "What is the heating media?",
      a: "The heating media is Electric.",
    },
    {
      q: "What is the surface finish?",
      a: "The listed surface finish is Polished.",
    },
    {
      q: "What material is used?",
      a: "The listed machine material is Stainless Steel.",
    },
    {
      q: "What is the product type?",
      a: "The product type is Noodle Tray Dryer Machine.",
    },
    {
      q: "What is the batch capacity?",
      a: "The listed batch capacity is 70 kg per batch.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
p(
  "Industrial Wood Pellet Burner",
  "/images/machines/Other Product/19.webp",
  "Industrial wood pellet burner designed to burn compressed wood or biomass pellets to generate heat for industrial applications.",
  "Not Specified",
  "Not Specified",
  "Industrial",

  [
    { label: "Model Name/Number", value: "FEW009" },
    { label: "Usage/Application", value: "Industrial" },
    { label: "Color", value: "Green" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Minimum Order Quantity", value: "01 Unit" },
  ],

  [
    "Industrial application",
    "Designed for wood pellet burning",
    "Suitable for biomass pellets",
    "Heat generation system",
    "Model FEW009",
    "Green finish",
    "Made in India",
  ],

  [
    "Wood Pellets",
    "Biomass Pellets",
    "Industrial Heating",
    "Heat Generation",
  ],

  [
    {
      q: "What is the model number?",
      a: "The model name/number is FEW009.",
    },
    {
      q: "What is the usage/application?",
      a: "The listed usage/application is Industrial.",
    },
    {
      q: "What fuel does the burner use?",
      a: "The provided description states that pellet-burning equipment uses compressed wood or biomass pellets to create heat.",
    },
    {
      q: "What is the color?",
      a: "The listed color is Green.",
    },
    {
      q: "What is the country of origin?",
      a: "The burner is Made in India.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 01 Unit.",
    },
  ]
),
p(
  "Rewinder Machine",
  "/images/machines/Other Product/20.webp",
  "Rewinding machine with 80 meter per minute production capacity, MS construction and 50 Hz frequency, suitable for industrial rewinding applications.",
  "80 meter/min",
  "220",
  "Not Specified",

  [
    { label: "Production Capacity", value: "80 meter ppm" },
    { label: "Power Consumption", value: "220" },
    { label: "Material", value: "MS" },
    { label: "Frequency", value: "50 Hz" },
    { label: "Brand", value: "FEW 067" },
    { label: "Size", value: "3x4x3" },
    { label: "Additional Specification", value: "150" },
    { label: "Minimum Order Quantity", value: "1 Unit" },
  ],

  [
    "80 meter per minute production capacity",
    "MS construction",
    "50 Hz operation",
    "Compact machine design",
    "Suitable for rewinding applications",
    "FEW 067 model/brand",
  ],

  [
    "Rewinding",
    "Packaging",
    "Industrial Machinery",
    "Film Rewinding",
  ],

  [
    {
      q: "What is the production capacity?",
      a: "The listed production capacity is 80 meter ppm.",
    },
    {
      q: "What material is used?",
      a: "The listed material is MS.",
    },
    {
      q: "What is the frequency?",
      a: "The listed frequency is 50 Hz.",
    },
    {
      q: "What is the brand?",
      a: "The listed brand is FEW 067.",
    },
    {
      q: "What is the machine size?",
      a: "The provided specification lists the size as 3x4x3.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Unit.",
    },
  ]
),
p(
  "U Type Mixer",
  "/images/machines/Other Product/21.webp",
  "U type mixer with 50 kg capacity, mild steel construction and standard design, suitable for mixing rice corn grits and food industry applications.",
  "50 kg",
  "Not Specified",
  "Not Specified",

  [
    { label: "Capacity", value: "50 kg" },
    { label: "Material", value: "Mild Steel" },
    { label: "Brand", value: "Foodax" },
    { label: "Usage/Application", value: "Rice Corn Griet" },
    { label: "Design Type", value: "Standard" },
    { label: "Voltage", value: "240 V" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "50 kg capacity",
    "Mild Steel construction",
    "Standard design",
    "240 V operation",
    "Easy to operate",
    "High performance",
    "Excellent functionality",
    "Suitable for rice corn grits",
    "Used in food industry",
    "Made in India",
  ],

  [
    "Rice Corn Grits",
    "Soya Nugget",
    "Food Processing",
    "Extruded Food Products",
  ],

  [
    {
      q: "What is the capacity of the U Type Mixer?",
      a: "The listed capacity is 50 kg.",
    },
    {
      q: "What material is used?",
      a: "The listed material is Mild Steel.",
    },
    {
      q: "What is the usage/application?",
      a: "The listed usage/application is Rice Corn Griet.",
    },
    {
      q: "What is the design type?",
      a: "The design type is Standard.",
    },
    {
      q: "What is the voltage?",
      a: "The listed voltage is 240 V.",
    },
    {
      q: "What is the brand?",
      a: "The listed brand is Foodax.",
    },
    {
      q: "What are the features of the mixer?",
      a: "The provided description lists easy operation, high performance and excellent functionality.",
    },
    {
      q: "What is the machine used for?",
      a: "The provided description states that it is used in the food industry for extruding soya nugget.",
    },
    {
      q: "What is the country of origin?",
      a: "The mixer is Made in India.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
p(
  "Winder Rewinder Machine For Batch Coding",
  "/images/machines/Other Product/22.webp",
  "Automatic winder rewinder machine for industrial batch coding applications with 5 HP power source, 440 V operation and 50 Hz frequency.",
  "Not Specified",
  "5 HP",
  "Automatic",

  [
    { label: "Machine Type", value: "Automatic" },
    { label: "Brand", value: "Foodex Engineering" },
    { label: "Usage/Application", value: "Industrial" },
    { label: "Model Name/Number", value: "FEW0098" },
    { label: "Model/Type", value: "FEW-0072" },
    { label: "Frequency", value: "50 Hz" },
    { label: "Power Source", value: "5 HP" },
    { label: "Voltage", value: "440 V" },
    { label: "Minimum Order Quantity", value: "1 Unit" },
  ],

  [
    "Automatic operation",
    "Designed for batch coding applications",
    "Industrial application",
    "5 HP power source",
    "440 V operation",
    "50 Hz frequency",
    "Foodex Engineering brand",
    "Suitable for rewinding applications",
  ],

  [
    "Batch Coding",
    "Rewinding",
    "Packaging",
    "Industrial Machinery",
  ],

  [
    {
      q: "What type of machine is this?",
      a: "It is an Automatic Winder Rewinder Machine for Batch Coding.",
    },
    {
      q: "What is the machine used for?",
      a: "The listed usage/application is Industrial, and the machine is specified for batch coding.",
    },
    {
      q: "What is the power source?",
      a: "The listed power source is 5 HP.",
    },
    {
      q: "What is the voltage?",
      a: "The listed voltage is 440 V.",
    },
    {
      q: "What is the frequency?",
      a: "The listed frequency is 50 Hz.",
    },
    {
      q: "What is the model number?",
      a: "The model name/number is FEW0098 and the model/type is FEW-0072.",
    },
    {
      q: "What is the brand?",
      a: "The listed brand is Foodex Engineering.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Unit.",
    },
  ]
),
p(
  "Industrial Conveyors System",
  "/images/machines/Other Product/23.webp",
  "Industrial chain conveyor system designed for bulk material handling with SS304 structure, 30 feet conveyor length and 60 m/min operating speed.",
  "200 Kg/Feet",
  "Not Specified",
  "Not Specified",

  [
    { label: "Conveyor Type", value: "Chain" },
    { label: "Application", value: "Bulk Material" },
    { label: "Capacity", value: "200 Kg/Feet" },
    { label: "Structure Material", value: "SS304" },
    { label: "Load Capacity", value: "300 kg/m" },
    { label: "Length", value: "30 feet" },
    { label: "Conveyor Length", value: "30 m" },
    { label: "Application/Usage", value: "Industries" },
    { label: "Belt Width", value: "400 mm" },
    { label: "Speed", value: "60 m/min" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "Chain conveyor system",
    "Bulk material handling",
    "SS304 structure",
    "300 kg/m load capacity",
    "30 feet listed length",
    "30 m conveyor length",
    "400 mm belt width",
    "60 m/min speed",
    "Suitable for industrial applications",
    "Custom conveyor design available",
    "PVC belt conveyor available",
    "Wire mesh belt conveyor available",
    "Roller conveyor available",
    "Z conveyor available",
  ],

  [
    "Bulk Material",
    "Industrial Conveyors",
    "PVC Belt Conveyor",
    "Wire Mesh Conveyor",
    "Roller Conveyor",
    "Z Conveyor",
  ],

  [
    {
      q: "What type of conveyor is this?",
      a: "The listed conveyor type is Chain.",
    },
    {
      q: "What is the application?",
      a: "The listed application is Bulk Material handling.",
    },
    {
      q: "What is the load capacity?",
      a: "The listed load capacity is 300 kg/m.",
    },
    {
      q: "What material is used for the structure?",
      a: "The structure material is SS304.",
    },
    {
      q: "What is the conveyor length?",
      a: "The specifications list a 30 feet length and a 30 m conveyor length.",
    },
    {
      q: "What is the belt width?",
      a: "The listed belt width is 400 mm.",
    },
    {
      q: "What is the conveyor speed?",
      a: "The listed speed is 60 m/min.",
    },
    {
      q: "What conveyor types can be designed as per customer requirement?",
      a: "The provided description mentions PVC belt conveyor, wire mesh belt conveyor, roller conveyor and Z conveyor.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
p(
  "Diesel Gas 36 Bhatti with Imported Burner",
  "/images/machines/Other Product/24.webp",
  "36-inch round bhatti with imported burner, SS 304 construction, diesel fuel system and fire brick lining for heat treatment applications.",
  "50 kg",
  "Not Specified",
  "Diesel",

  [
    { label: "Fuel Type", value: "Diesel" },
    { label: "Burner Size", value: "Imported Burner" },
    { label: "Bhatti Type", value: "Round Bhatti" },
    { label: "Capacity", value: "50 kg" },
    { label: "Application", value: "Heat Treatment" },
    { label: "Lining Material", value: "Fire Brick" },
    { label: "Size", value: "36 Inch" },
    { label: "Body Material", value: "SS 304" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "36-inch round bhatti",
    "Imported burner",
    "Diesel fuel operation",
    "50 kg capacity",
    "SS 304 construction",
    "Fire brick lining",
    "Suitable for heat treatment applications",
  ],

  [
    "Round Bhatti",
    "Heat Treatment",
    "Diesel Bhatti",
    "Food Processing",
  ],

  [
    {
      q: "What type of bhatti is this?",
      a: "The bhatti type is Round Bhatti.",
    },
    {
      q: "What is the size of the bhatti?",
      a: "The provided description specifies a 36-inch bhatti.",
    },
    {
      q: "What fuel type is used?",
      a: "The fuel type is Diesel.",
    },
    {
      q: "What type of burner is used?",
      a: "The machine uses an Imported Burner.",
    },
    {
      q: "What is the capacity?",
      a: "The listed capacity is 50 kg.",
    },
    {
      q: "What material is used?",
      a: "The provided description specifies SS 304 construction.",
    },
    {
      q: "What lining material is used?",
      a: "The lining material is Fire Brick.",
    },
    {
      q: "What is the application?",
      a: "The listed application is Heat Treatment.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
p(
  "Electric Cremation Furnace",
  "/images/machines/Other Product/25.webp",
  "Electric cremation furnace with 75 kW power, maximum temperature of 1000°C, 8500 kg weight and one-year warranty.",
  "Not Specified",
  "75 kW",
  "Electric",

  [
    { label: "Power", value: "75 kW" },
    { label: "Brand", value: "Foodax Engineering" },
    { label: "Max Temperature", value: "1000°C" },
    { label: "Melting Material", value: "Death Body" },
    { label: "Warranty", value: "1 Year" },
    { label: "Weight", value: "8500 kg" },
    { label: "Dimensions", value: "L-2400 mm × W-1500 mm × H-1800 mm" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "75 kW electric power",
    "Maximum temperature up to 1000°C",
    "8500 kg machine weight",
    "2400 × 1500 × 1800 mm dimensions",
    "1 year warranty",
    "Foodax Engineering brand",
    "Electric furnace operation",
  ],

  [
    "Cremation Furnace",
    "Electric Furnace",
    "Industrial Furnace",
    "High Temperature Furnace",
  ],

  [
    {
      q: "What is the power of the Electric Cremation Furnace?",
      a: "The listed power is 75 kW.",
    },
    {
      q: "What is the maximum temperature?",
      a: "The listed maximum temperature is 1000°C.",
    },
    {
      q: "What is the listed melting material?",
      a: "The provided specification lists Death Body.",
    },
    {
      q: "What is the warranty?",
      a: "The listed warranty is 1 year.",
    },
    {
      q: "What is the weight?",
      a: "The listed weight is 8500 kg.",
    },
    {
      q: "What are the dimensions?",
      a: "The listed dimensions are 2400 mm length, 1500 mm width and 1800 mm height.",
    },
    {
      q: "What is the brand?",
      a: "The listed brand is Foodax Engineering.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
p(
  "Fluid Bed Dryer",
  "/images/machines/Other Product/26.webp",
  "Fluid bed dryer with a 30 kg capacity, designed to reduce moisture content from powders and granules through fluidization.",
  "30 kg",
  "Not Specified",
  "Not Specified",

  [
    { label: "Capacity", value: "30 kg" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "30 kg capacity",
    "Designed for moisture reduction",
    "Suitable for powder and granule processing",
    "Fluidization-based drying process",
    "Suitable for industrial processing",
  ],

  [
    "Powder",
    "Granules",
    "Moisture Removal",
    "Drying",
  ],

  [
    {
      q: "What is the capacity of the Fluid Bed Dryer?",
      a: "The listed capacity is 30 kg.",
    },
    {
      q: "What is a Fluid Bed Dryer used for?",
      a: "The provided description states that it is used to lower the moisture content of raw materials such as powder and granules.",
    },
    {
      q: "How does the drying process work?",
      a: "The provided description states that fluidization of the material being fed into the apparatus is part of its operation.",
    },
    {
      q: "What materials can be processed?",
      a: "The provided description specifically mentions powders and granules.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
p(
  "Twin Screw Extruder",
  "/images/machines/Other Product/27.webp",
  "Automatic twin screw extruder for snack production with 200 kg/hr capacity, 30 kW power source and three phase operation. The machine converts mechanical energy into heat energy for squeezing and cooking food.",
  "200 kg/hr",
  "30 kW",
  "Automatic",

  [
    { label: "Type", value: "Automatic" },
    { label: "Power Consumption", value: "440 Volt" },
    { label: "Type Of Namkeen", value: "Snacks" },
    { label: "Capacity", value: "200 kg/hr" },
    { label: "Power Source", value: "30 kW" },
    { label: "Phase", value: "3 Phase" },
  ],

  [
    "Automatic operation",
    "200 kg/hr capacity",
    "30 kW power source",
    "Three phase operation",
    "Suitable for snack production",
    "Twin screw extrusion system",
    "Mechanical energy converted into heat energy",
    "Heat generated during rotation is used to squeeze and cook food",
  ],

  [
    "Snacks",
    "Namkeen",
    "Extruded Snacks",
    "Food Extrusion",
  ],

  [
    {
      q: "What is the capacity of the Twin Screw Extruder?",
      a: "The listed capacity is 200 kg/hr.",
    },
    {
      q: "What type of machine is it?",
      a: "The listed type is Automatic.",
    },
    {
      q: "What is the power source?",
      a: "The listed power source is 30 kW.",
    },
    {
      q: "What is the power consumption specification?",
      a: "The provided specification lists 440 Volt.",
    },
    {
      q: "What type of products can it process?",
      a: "The listed Type Of Namkeen is Snacks.",
    },
    {
      q: "What phase does the machine use?",
      a: "The machine operates on 3 Phase power.",
    },
    {
      q: "What is the working principle?",
      a: "The provided description states that mechanical energy is converted into heat energy, and the heat generated when the machine rotates is used to squeeze and cook the food.",
    },
  ]
),
  ],
},

];

export function getHotProduct(slug: string) {
  return hotProducts.find((p) => p.slug === slug);
}

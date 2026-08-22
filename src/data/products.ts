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

export const hotProducts: Product[] = [
  {
    slug: "potato-banana-chips-batch-fryer",
    title: "Potato & Banana Chips Batch Fryer",
    category: "Industrial Batch Fryer",
    image: chipsFryer,
    capacity: "25 - 500 kg/hr",
    material: "SS 304 Food Grade",
    power: "1 HP - 3 HP + Gas/Electric Heating",
    automation: "Semi-Automatic / Automatic",
    summary:
      "Heavy duty batch fryer engineered for uniform frying of potato wafers and banana chips with integrated slicer, oil filtration and stirring system for consistent colour and crispness.",
    keywords: [
      "potato chips batch fryer",
      "banana chips frying machine",
      "wafer fryer manufacturer",
      "chips making machine price",
    ],
    specs: [
      { label: "Output Capacity", value: "25 kg/hr to 500 kg/hr" },
      { label: "Slicing Thickness", value: "0.8 mm - 2.5 mm adjustable" },
      { label: "Oil Tank Capacity", value: "80 - 400 litres" },
      { label: "Heating System", value: "LPG / PNG burner or electric heaters" },
      { label: "Temperature Control", value: "Digital PID, 80°C - 220°C" },
      { label: "Body Material", value: "SS 304, 1.5 - 2 mm thickness" },
      { label: "Stirrer Drive", value: "Gear motor with VFD speed control" },
    ],
    features: [
      "Uniform heat distribution with baffle plate oil circulation",
      "Auto stirrer avoids chip sticking and breakage",
      "Bottom sediment tray for easy oil cleaning",
      "Insulated body for lower fuel consumption",
      "Optional hydro extractor de-oiler integration",
    ],
    applications: ["Potato Wafers", "Banana Chips", "Tapioca Chips", "Sweet Potato Chips", "Plantain Chips"],
    faqs: [
      {
        q: "What is the price of a potato chips batch fryer in India?",
        a: "Price depends on capacity, heating type and automation level. Share your required output on WhatsApp and our team sends a same-day quotation.",
      },
      {
        q: "Can the same fryer be used for banana chips?",
        a: "Yes. The temperature control and stirrer speed can be adjusted for banana, tapioca and plantain chips on the same machine.",
      },
      {
        q: "Do you install the machine at our site?",
        a: "Yes, we provide installation, commissioning and operator training across India and for export orders.",
      },
    ],
  },
  {
    slug: "electric-batch-fryer",
    title: "Electric Batch Fryer",
    category: "Industrial Batch Fryer",
    image: electricFryer,
    capacity: "20 - 250 kg/hr",
    material: "SS 304 Food Grade",
    power: "9 kW - 36 kW Heaters",
    automation: "Semi-Automatic",
    summary:
      "Clean, smoke-free electric batch fryer with immersion heating elements and precise thermostatic control — ideal for indoor snack units, food courts and hygiene-sensitive plants.",
    keywords: ["electric batch fryer", "electric deep fryer machine", "snack electric fryer manufacturer"],
    specs: [
      { label: "Output Capacity", value: "20 kg/hr to 250 kg/hr" },
      { label: "Heating Elements", value: "Incoloy immersion heaters 9 - 36 kW" },
      { label: "Thermostat Range", value: "60°C - 230°C digital control" },
      { label: "Oil Capacity", value: "50 - 250 litres" },
      { label: "Power Supply", value: "3 Phase, 415 V, 50 Hz" },
      { label: "Body Material", value: "SS 304 mirror / matt finish" },
    ],
    features: [
      "Zero flame, zero smoke operation",
      "Swing-up heaters for quick cleaning",
      "Low & high oil-level safety cut-off",
      "Energy efficient insulated tank",
    ],
    applications: ["Namkeen", "French Fries", "Fried Snacks", "Cashew & Nuts", "Papad & Fryums"],
    faqs: [
      { q: "Is an electric fryer cheaper to run than gas?", a: "Gas is usually cheaper on fuel cost, but electric fryers give cleaner operation, faster heat-up and precise temperature control for premium snacks." },
      { q: "What power connection is required?", a: "A 3 phase 415V connection sized for the heater bank, typically 9 kW to 36 kW depending on tank size." },
    ],
  },
  {
    slug: "snack-food-fryer-plant",
    title: "Snack Food Fryer Plant",
    category: "Industrial Batch Fryer",
    image: snackPlant,
    capacity: "100 - 1000 kg/hr",
    material: "SS 304 Food Grade",
    power: "5 HP - 15 HP",
    automation: "Fully Automatic Line",
    summary:
      "Turnkey snack frying plant combining feeding conveyor, continuous fryer, de-oiling section, seasoning drum and cooling conveyor for large scale snack production.",
    keywords: ["snack food fryer plant", "continuous frying line", "turnkey snack plant manufacturer"],
    specs: [
      { label: "Line Capacity", value: "100 kg/hr to 1000 kg/hr" },
      { label: "Fryer Type", value: "Continuous mesh belt with submerger" },
      { label: "Oil Filtration", value: "Inline continuous filtration unit" },
      { label: "Heating", value: "Direct gas fired / thermic fluid" },
      { label: "Sections", value: "Feeder, fryer, de-oiler, seasoning, cooling" },
    ],
    features: [
      "Variable belt speed for exact frying time",
      "Continuous oil filtration extends oil life",
      "Hood with exhaust and heat recovery",
      "Modular sections for future expansion",
    ],
    applications: ["Potato Chips", "Extruded Snacks", "Namkeen Mixtures", "Peanuts", "Pellet Snacks"],
    faqs: [
      { q: "What space is needed for a snack fryer plant?", a: "A 100 kg/hr line typically needs about 30 - 40 feet of length; our team provides a layout drawing before dispatch." },
      { q: "Do you supply turnkey projects?", a: "Yes, we supply complete turnkey snack plants including utilities layout, installation and training." },
    ],
  },
  {
    slug: "kurkure-batch-fryer",
    title: "Kurkure Batch Fryer",
    category: "Industrial Batch Fryer",
    image: kurkureFryer,
    capacity: "50 - 300 kg/hr",
    material: "SS 304 Food Grade",
    power: "2 HP - 5 HP",
    automation: "Semi-Automatic / Automatic",
    summary:
      "Purpose-built fryer for extruded kurkure and niknak collets, with gentle submerger mesh to keep the signature crunch and shape intact.",
    keywords: ["kurkure batch fryer", "kurkure frying machine", "niknak fryer manufacturer"],
    specs: [
      { label: "Output Capacity", value: "50 kg/hr to 300 kg/hr" },
      { label: "Frying Time", value: "12 - 30 seconds adjustable" },
      { label: "Submerger", value: "SS wire mesh top belt" },
      { label: "Heating", value: "LPG burner with pilot safety" },
      { label: "Oil Temperature", value: "170°C - 200°C PID controlled" },
    ],
    features: [
      "Gentle handling prevents collet breakage",
      "Quick oil drain and clean-out design",
      "Direct pairing with coating/masala drum",
      "Fuel efficient burner assembly",
    ],
    applications: ["Kurkure", "Niknak Collets", "Corn Rings", "Extruded Puffs"],
    faqs: [
      { q: "Can this fryer be attached to my extruder line?", a: "Yes, it is designed to sit directly after a kurkure extruder and before the masala coating drum." },
      { q: "What fuel does it use?", a: "LPG or PNG burners are standard; electric heating is available on request." },
    ],
  },
  {
    slug: "industrial-gas-batch-fryer",
    title: "Industrial Gas Batch Fryer",
    category: "Industrial Batch Fryer",
    image: gasFryer,
    capacity: "50 - 500 kg/hr",
    material: "SS 304 Food Grade",
    power: "1 HP + LPG/PNG Burner",
    automation: "Semi-Automatic",
    summary:
      "Rugged gas fired batch fryer with high efficiency burner bank, ideal for namkeen and snack units seeking lowest cost per kilogram of production.",
    keywords: ["industrial gas batch fryer", "gas fired fryer machine", "LPG batch fryer manufacturer"],
    specs: [
      { label: "Output Capacity", value: "50 kg/hr to 500 kg/hr" },
      { label: "Heating Burner Type", value: "Multi-jet LPG/PNG burner with flame failure device" },
      { label: "Oil Capacity", value: "100 - 500 litres" },
      { label: "Temperature Control", value: "Thermostatic gas valve / PID" },
      { label: "Insulation", value: "Ceramic wool insulated chamber" },
    ],
    features: [
      "Lowest operating cost per kg fried",
      "Flame failure safety device standard",
      "Heavy gauge SS 304 tank for long life",
      "Optional oil top-up tank with pump",
    ],
    applications: ["Namkeen", "Bhujia", "Chips", "Fryums", "Peanuts"],
    faqs: [
      { q: "Is a gas fryer safe for indoor use?", a: "Yes, with proper exhaust hood and the standard flame failure safety device fitted on every machine." },
      { q: "How much gas does it consume?", a: "Consumption depends on tank size and batch cycle; our engineers share exact figures with the quotation." },
    ],
  },
  {
    slug: "namkeen-batch-fryer",
    title: "Namkeen Batch Fryer",
    category: "Industrial Batch Fryer",
    image: namkeenFryer,
    capacity: "30 - 400 kg/hr",
    material: "SS 304 Food Grade",
    power: "1.5 HP - 3 HP",
    automation: "Semi-Automatic",
    summary:
      "Dedicated namkeen frying system with sev press compatibility, stirring arms and oil circulation to produce bhujia, sev, mixture and dal snacks at consistent quality.",
    keywords: ["namkeen batch fryer", "bhujia frying machine", "sev fryer manufacturer india"],
    specs: [
      { label: "Output Capacity", value: "30 kg/hr to 400 kg/hr" },
      { label: "Sev Press Mount", value: "Swivel arm compatible" },
      { label: "Stirrer", value: "Twin paddle with VFD" },
      { label: "Oil Filtration", value: "Removable sediment tray + mesh filter" },
      { label: "Body Material", value: "SS 304 with insulated jacket" },
    ],
    features: [
      "Direct press-frying of sev and gathiya",
      "Uniform frying with twin paddle stirrer",
      "Easy oil draining valve with strainer",
      "Optional de-oiling centrifuge",
    ],
    applications: ["Bhujia", "Nylon Sev", "Ratlami Sev", "Namkeen Mixture", "Dal Moth"],
    faqs: [
      { q: "Can a sev machine be mounted on this fryer?", a: "Yes, a swivel arm sev press can be mounted directly above the oil tank." },
      { q: "What is the delivery time?", a: "Standard models dispatch in 15 - 25 days; customised plants take longer." },
    ],
  },
  {
    slug: "food-extruder-machines",
    title: "Food Extruder Machines",
    category: "Food Extruder Machines",
    image: extruder,
    capacity: "60 - 500 kg/hr",
    material: "SS 304 / Alloy Steel Screw",
    power: "15 HP - 75 HP",
    automation: "Automatic with PLC option",
    summary:
      "Single and twin screw food extruders for puffed snacks, kurkure collets, cereals and pellets, with hardened screw elements and instant die-face cutter.",
    keywords: ["food extruder machine", "twin screw extruder manufacturer", "snack extruder price india"],
    specs: [
      { label: "Output Capacity", value: "60 kg/hr to 500 kg/hr" },
      { label: "Screw Type", value: "Single screw / co-rotating twin screw" },
      { label: "Die Molds", value: "Interchangeable ball, ring, tube, star" },
      { label: "Cutting System", value: "Variable speed die face rotary knife" },
      { label: "Barrel", value: "Segmented, water jacketed with thermocouples" },
      { label: "Main Motor", value: "15 HP - 75 HP with gearbox" },
    ],
    features: [
      "Hardened, wear resistant screw and barrel",
      "Quick die change for multiple snack shapes",
      "Precise moisture and temperature control",
      "Feeder with VFD for consistent throughput",
    ],
    applications: ["Corn Puffs", "Kurkure Collets", "Breakfast Cereals", "Pellet Snacks", "Pet Food"],
    faqs: [
      { q: "Which extruder should I choose — single or twin screw?", a: "Single screw suits standard puffed snacks at lower cost; twin screw offers better control for cereals, pellets and high fat recipes." },
      { q: "Can one extruder make multiple shapes?", a: "Yes, by changing the die mold and cutter speed you can produce balls, rings, tubes and star shapes." },
    ],
  },
  {
    slug: "soya-nugget-plant-and-extruder",
    title: "Soya Nugget Plant & Extruder",
    category: "Soya Nugget Plant",
    image: soyaPlant,
    capacity: "100 - 1000 kg/hr",
    material: "SS 304 Food Grade",
    power: "25 HP - 100 HP",
    automation: "Fully Automatic Plant",
    summary:
      "Complete texturised soya protein (TSP/TVP) plant — grinder, mixer, twin screw extruder, dryer and packing section for soya chunks, granules and mini nuggets.",
    keywords: ["soya nugget plant", "soya chunks making machine", "TVP extruder manufacturer"],
    specs: [
      { label: "Plant Capacity", value: "100 kg/hr to 1000 kg/hr" },
      { label: "Raw Material", value: "Defatted soya flour, 50 - 52% protein" },
      { label: "Extruder", value: "Twin screw with high shear texturising zone" },
      { label: "Dryer", value: "Multi-pass conveyor dryer, gas/electric/thermic" },
      { label: "Final Moisture", value: "6 - 8%" },
      { label: "Products", value: "Chunks, mini chunks, granules, flakes" },
    ],
    features: [
      "High protein texturisation with fibrous bite",
      "Automatic dosing of water and steam",
      "Energy efficient multi-deck dryer",
      "Full turnkey layout and utility planning",
    ],
    applications: ["Soya Chunks", "Soya Granules", "Soya Mini Nuggets", "TVP for Ready Meals"],
    faqs: [
      { q: "What raw material is used for soya nuggets?", a: "Defatted soya flour with around 50-52% protein content gives the best texture and expansion." },
      { q: "Do you provide the complete plant?", a: "Yes — from grinding and mixing to extrusion, drying and packing, supplied and commissioned as a turnkey plant." },
    ],
  },
  {
    slug: "food-processing-machines",
    title: "Food Processing Machines",
    category: "Food Processing Machines",
    image: foodProcessing,
    capacity: "50 - 800 kg/hr",
    material: "SS 304 Food Grade",
    power: "1 HP - 20 HP",
    automation: "Semi-Automatic / Automatic",
    summary:
      "Complete range of food processing machinery — roasters, masala mixing drums, cutters, steamers, de-oilers and puffing machines built for Indian snack industry duty cycles.",
    keywords: ["food processing machines manufacturer", "snack food machinery india", "food plant machinery supplier"],
    specs: [
      { label: "Output Capacity", value: "50 kg/hr to 800 kg/hr" },
      { label: "Machine Range", value: "Roasters, mixers, cutters, steamers, de-oilers" },
      { label: "Contact Parts", value: "SS 304 food grade, mirror polished" },
      { label: "Controls", value: "MCB panel with PID / VFD as applicable" },
      { label: "Customisation", value: "Capacity and layout built to order" },
    ],
    features: [
      "Built for 16+ hour continuous shifts",
      "Food grade contact parts throughout",
      "Simple maintenance and spare availability",
      "Custom capacities engineered on request",
    ],
    applications: ["Fryums", "Namkeen", "Chana & Peanuts", "Noodles", "Pasta", "Corn Puff"],
    faqs: [
      { q: "Do you customise machines to our recipe?", a: "Yes, capacity, heating type and layout are engineered around your product recipe and floor space." },
      { q: "Is after-sales support available outside India?", a: "Yes, we support export customers in South Africa, UAE, Nepal and the UK with remote guidance and spares." },
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
      "Batch Fryer with Pallet Burner. All contact parts are Stainless Steel 304. Size: diameter 48 inch. Basket net thickness 1.5 mm and 2.5 mm hole size. Heat convertor 1.50 lack calories with pallet burner. Heat exchanger body 5 mm thickness. Pump 3 H.P. to oil circulation. Motor 5 H.P. 3 ph Crompton Greaves make. All coil are S. S. Seamless pipe. Coil pipe 25 mm nominal bore. Filter to separate small particles. Oil storage tank 350 ltr.",
      "150 kg/hr",
      "3 HP",
      "Semi Automatic",
      [
        { label: "Capacity", value: "150 kg/hr" },
        { label: "Pan Size", value: "48×48 inch" },
        { label: "Capacity(kg/hr)", value: "60" },
        { label: "Heating Type", value: "BIOMASS PALLET" },
        { label: "Equipment Type", value: "BATCH FRYER" },
        { label: "Automation Grade", value: "Semi Automatic" },
        { label: "Material", value: "S S 304" },
        { label: "Tilting Type", value: "Manual Tilting" },
        { label: "Power Consumption", value: "3 HP" },
        { label: "Machine Type", value: "Automatic, Semi Automatic" },
        { label: "Fuel", value: "Gas, Wooden pallet burner" },
        { label: "Brand", value: "FOODAX" },
        { label: "Oil Capacity", value: "300 L" },
        { label: "Voltage", value: "440" },
        { label: "Frying Temperature", value: "200°C" },
        { label: "Power Load", value: "3 kW" },
        { label: "Phase", value: "3 Phase" },
        { label: "Minimum order quantity", value: "1 Set" },
        { label: "Basket Net Thickness", value: "1.5 mm" },
        { label: "Basket Hole Size", value: "2.5 mm" },
        {
          label: "Heat Convertor",
          value: "1.50 lack calories with pallet burner",
        },
        { label: "Heat Exchanger Body", value: "5 mm thickness" },
        { label: "Oil Circulation Pump", value: "3 H.P." },
        {
          label: "Motor",
          value: "5 H.P. 3 ph Crompton Greaves make",
        },
        { label: "Coil", value: "S. S. Seamless pipe" },
        { label: "Coil Pipe", value: "25 mm nominal bore" },
        { label: "Oil Storage Tank", value: "350 ltr" },
      ],
      [
        "All contact part are stainless steel 304",
        "Size: diameter 48 inch",
        "Basket net thickness 1.5 mm and 2.5 mm hole size",
        "Heat convertor 1.50 lack calories with pallet burner",
        "Heat exchanger body 5 mm thickness",
        "Pump 3 H.P. to oil circulation",
        "Motor 5 H.P. 3 ph Crompton Greaves make",
        "All coil are S. S. Seamless pipe",
        "Coil pipe 25 mm nominal bore",
        "Filter to separate small particles",
        "Oil storage tank 350 ltr",
        "Control panel",
      ],
      [
        "Production capacity 125–150 kg/hrs besan item (gathiya, papdi, ratlami, bhujia)",
        "Production capacity 150–200 kg/hrs (kurkure, fryums)",
        "Production capacity 90–110 kg/hrs (chana dal, moong dal, masoor, matar)",
        "Production capacity potato chips 50–60 kg/hrs",
        "Potato Chips",
        "Banana Chips",
      ],
      []
    ),

    // =====================================================
    // 2. Electric Batch Fryer
    // =====================================================
    p(
      "Electric Batch Fryer",
      "/images/machines/Batch Fryer/2.webp",
      "Electric Batch Fryer with SS 304 construction, designed for efficient batch frying with semi-automatic, manual and automatic operation. Model FEW-51 with 100 kg/hr capacity, 18 kW power source and 440 voltage.",
      "100 kg/hr",
      "18 kW",
      "Semi Automatic, Manual, Automatic",
      [
        { label: "Capacity (kg/hr)", value: "100" },
        { label: "Equipment Type", value: "BATCH FRYER" },
        { label: "Power Consumption", value: "3 Phase" },
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
      [
        "SS 304 material construction",
        "100 kg/hr production capacity",
        "18 kW power source",
        "440 VOLTAGE operation",
        "Semi Automatic, Manual and Automatic operation",
        "1000×1300 MM surface finishing",
        "FEW-51 model",
        "One year warranty",
      ],
      [
        "Batch Frying",
        "Electric Frying",
        "Food Processing",
      ],
      [
        {
          q: "What is the capacity of the Electric Batch Fryer?",
          a: "The machine has a capacity of 100 kg/hr.",
        },
        {
          q: "What material is used in the machine?",
          a: "The machine is constructed using SS 304 material.",
        },
        {
          q: "What is the power requirement?",
          a: "The machine has an 18 kW power source and operates on three phase power.",
        },
        {
          q: "What is the model number?",
          a: "The model name/number is FEW-51.",
        },
        {
          q: "What is the warranty?",
          a: "The machine comes with a one year warranty.",
        },
      ]
    ),

    // =====================================================
    // 3. Circular Batch Fryer With Inbuilt Heat Exchanger
    // =====================================================
    p(
      "Circular Batch Fryer With Inbuilt Heat Exchanger",
      "/images/machines/Batch Fryer/3.webp",
      "Circular Batch Fryer with an inbuilt heat exchanger, designed for efficient batch frying using oil as the frying medium. The machine features a mild steel construction, MS chamber with seamless SS 304 pipe, gas heating and a 3 kW power source.",
      "Not specified",
      "3 HP",
      "Semi Automatic",
      [
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
        { label: "4×4×5", value: "700 kg" },
        { label: "Minimum Order Quantity", value: "1 Set" },
      ],
      [
        "Mild Steel construction",
        "Inbuilt heat exchanger",
        "MS chamber with seamless SS 304 pipe",
        "Oil as frying medium",
        "Gas heating system",
        "3 HP power consumption",
        "3 KW power source",
        "440 voltage",
        "FEW0065 model",
        "One year warranty",
      ],
      [
        "Batch Frying",
        "Oil Frying",
        "Food Processing",
      ],
      [
        {
          q: "What type of heat exchanger is used?",
          a: "The machine has an inbuilt heat exchange system with an MS chamber and seamless SS 304 pipe.",
        },
        {
          q: "What medium is used for frying?",
          a: "Oil is used as the frying medium.",
        },
        {
          q: "What fuel does the machine use?",
          a: "The machine uses gas as its fuel source.",
        },
        {
          q: "What is the model number?",
          a: "The model name/number is FEW0065.",
        },
        {
          q: "What is the warranty?",
          a: "The machine comes with a one year warranty.",
        },
      ]
    ),
    // =====================================================
// 4. Circular & Rectangular Batch Fryer
// =====================================================
p(
  "Circular & Rectangular Batch Fryer",
  "/images/machines/Batch Fryer/4.webp",
  "Semi-automatic batch fryer available in circular and rectangular designs according to production requirements. Built with SS 304 material, perforated construction and low fuel and oil consumption for efficient frying.",
  "Potato Chips: 65 kg/hr, Pulses: 110 kg/hr, Besan Products: 150–180 kg/hr",
  "3 kW",
  "Semi Automatic",
  [
    { label: "Machine Type", value: "Semi-Automatic" },
    {
      label: "Capacity",
      value: "Potato chips 65 kg/hr, Pulses 110 kg/hr, Besan products 150–180 kg/hr",
    },
    { label: "Heating Type", value: "Diesel" },
    { label: "Automation Grade", value: "Semi Automatic" },
    { label: "Material", value: "SS 304" },
    { label: "Application", value: "Namkeen" },
    { label: "Voltage", value: "220, 440 V" },
    { label: "Power Consumption", value: "3 kW" },
    { label: "Brand", value: "Foodax Engineering Works" },
    { label: "Power Source", value: "Electric" },
    { label: "Oil Capacity", value: "300 L" },
    { label: "Frying Temperature", value: "190°C" },
    { label: "Weight", value: "1000 kg approx" },
    { label: "Power Load", value: "5 kW" },
    { label: "Phase", value: "3 PHASE" },
    { label: "Surface Finishing", value: "Smooth" },
    { label: "Model Number", value: "FEB 150" },
    { label: "Warranty", value: "1 Year" },
    { label: "Floor Space", value: "1200 × 1000 mm" },
    { label: "Frequency", value: "50 Hz" },
    { label: "Heating Way", value: "Diesel, Gas, Wooden" },
    { label: "Fuel Type", value: "Diesel, Gas" },
    { label: "Condition", value: "New" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],
  [
    "Circular and rectangular batch fryer designs",
    "Manufactured according to client requirement",
    "Stainless steel construction with perforated design",
    "3 mm perforation size",
    "Weight used for balancing",
    "Low fuel consumption",
    "Low edible oil consumption",
    "SS 304 material construction",
    "Smooth surface finishing",
  ],
  [
    "Kurkure - 200 kg/hr",
    "Fryums - 200 kg/hr",
    "Potato Chips - 50–60 kg/hr",
    "Banana Chips - 60–70 kg/hr",
    "Namkeen",
  ],
  [
    {
      q: "What types of batch fryer are available?",
      a: "Circular and rectangular batch fryer designs are manufactured according to the customer's production requirements.",
    },
    {
      q: "What material is used?",
      a: "The machine uses SS 304 material with a perforated construction.",
    },
    {
      q: "What is the oil capacity?",
      a: "The oil capacity is 300 L.",
    },
    {
      q: "What is the frying temperature?",
      a: "The frying temperature is 190°C.",
    },
    {
      q: "What is the model number?",
      a: "The model number is FEB 150.",
    },
    {
      q: "What products can be processed?",
      a: "The machine can be used for Kurkure, Fryums, Potato Chips and Banana Chips.",
    },
  ]
),
// =====================================================
// 5. Snack Food Fryer Plant
// =====================================================
p(
  "Snack Food Fryer Plant",
  "/images/machines/Batch Fryer/5.webp",
  "Semi-automatic snack food fryer plant available in circular and rectangular batch fryer designs, manufactured according to production requirements. SS 304 construction with low fuel and edible oil consumption.",
  "Potato Chips: 65 kg/hr, Pulses: 110 kg/hr, Besan Products: 150–180 kg/hr",
  "3 kW",
  "Semi Automatic",
  [
    { label: "Machine Type", value: "Semi-Automatic" },
    {
      label: "Capacity",
      value:
        "Potato chips 65 kg/hr, Pulses 110 kg/hr, Besan product 150–180 kg/hr",
    },
    { label: "Heating Type", value: "Diesel" },
    { label: "Automation Grade", value: "Semi Automatic" },
    { label: "Material", value: "SS 304" },
    { label: "Application", value: "Namkeen" },
    { label: "Voltage", value: "220, 440 V" },
    { label: "Power Consumption", value: "3 kW" },
    { label: "Brand", value: "Foodax Engineering Works" },
    { label: "Power Source", value: "Electric" },
    { label: "Oil Capacity", value: "300 L" },
    { label: "Frying Temperature", value: "190°C" },
    { label: "Weight", value: "1000 kg approx" },
    { label: "Power Load", value: "5 kW" },
    { label: "Phase", value: "3 PHASE" },
    { label: "Surface Finishing", value: "Smooth" },
    { label: "Model Number", value: "FEB 150" },
    { label: "Warranty", value: "1 Year" },
    { label: "Floor Space", value: "1200 × 1000 mm" },
    { label: "Frequency", value: "50 Hz" },
    { label: "Heating Way", value: "Diesel, Gas, Wooden" },
    { label: "Fuel Type", value: "Diesel, Gas" },
    { label: "Condition", value: "New" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],
  [
    "Circular and rectangular batch fryer designs",
    "Manufactured according to client requirement",
    "Stainless steel construction",
    "3 mm perforation size",
    "Weight used to balance the machine",
    "Low fuel consumption",
    "Low edible oil consumption",
    "SS 304 material construction",
    "Smooth surface finishing",
  ],
  [
    "Kurkure - 200 kg/hr",
    "Fryums - 200 kg/hr",
    "Potato Chips - 50–60 kg/hr",
    "Banana Chips - 60–70 kg/hr",
    "Namkeen",
  ],
  [
    {
      q: "What types of fryer designs are available?",
      a: "Circular and rectangular batch fryer designs are manufactured according to the customer's production requirements.",
    },
    {
      q: "What material is used in the fryer plant?",
      a: "The machine is manufactured using SS 304 material.",
    },
    {
      q: "What is the oil capacity?",
      a: "The oil capacity is 300 L.",
    },
    {
      q: "What is the frying temperature?",
      a: "The frying temperature is 190°C.",
    },
    {
      q: "What is the model number?",
      a: "The model number is FEB 150.",
    },
    {
      q: "What products can be processed?",
      a: "The fryer plant can be used for Kurkure, Fryums, Potato Chips and Banana Chips.",
    },
  ]
),

// =====================================================
// 6. Kurkure Batch Fryer
// =====================================================
p(
  "Kurkure Batch Fryer",
  "/images/machines/Batch Fryer/6.webp",
  "Semi-automatic batch fryer with inbuilt heat exchanger, SS 304 construction and diesel burner. Designed for potato chips, namkeen, kurkure, fryums and dal frying with oil circulation and complete electrical control panel.",
  "100 kg/hr",
  "Not specified",
  "Semi Automatic",
  [
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
    { label: "Material Grade", value: "SS 304" },
    { label: "Contact Parts", value: "Stainless Steel" },
    { label: "Length", value: "1300 mm" },
    { label: "Width", value: "1000 mm" },
    { label: "Depth", value: "400 mm" },
    { label: "Total Height", value: "1000 mm" },
    { label: "Diesel Burner Capacity", value: "1.5 Lakh kcal" },
    { label: "Heating Chamber", value: "MS" },
    { label: "Oil Circulation Pump", value: "3 HP" },
    { label: "Pump Flow", value: "8–12 NM3" },
    { label: "Coil", value: "M.S. seamless pipe" },
    { label: "Seamless Pipe", value: "N.B. Type" },
    { label: "Oil Storage Tank", value: "300 L" },
    { label: "Filter", value: "Filter to separate small particles" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],
  [
    "SS 304 material",
    "All contact parts are Stainless Steel",
    "1300 × 1000 × 400 mm machine dimensions",
    "Total height of batch fryer 1000 mm",
    "1.5 Lakh kcal diesel burner",
    "MS heating chamber",
    "3 HP pump for oil circulation",
    "8–12 NM3 pump flow",
    "M.S. seamless pipe coils",
    "N.B. type seamless pipe",
    "300 L oil storage tank",
    "Filter for separating small particles",
    "Complete electrical panel",
  ],
  [
    "Potato Chips - 50–60 kg/hr",
    "Namkeen - 150–180 kg/hr",
    "Kurkure - 150–200 kg/hr",
    "Fryums - 150–200 kg/hr",
    "Dal - 90–100 kg/hr",
  ],
  [
    {
      q: "What is the capacity of the Kurkure Batch Fryer?",
      a: "The listed machine capacity is 100 kg/hr.",
    },
    {
      q: "What material is used?",
      a: "The machine uses SS 304 material and stainless steel for contact parts.",
    },
    {
      q: "What type of burner is used?",
      a: "The machine uses a diesel burner with 1.5 Lakh kcal capacity.",
    },
    {
      q: "What is the oil storage capacity?",
      a: "The oil storage tank capacity is 300 L.",
    },
    {
      q: "What products can be processed?",
      a: "The machine is suitable for potato chips, namkeen, kurkure, fryums and dal.",
    },
    {
      q: "Is an electrical panel included?",
      a: "Yes, the specifications mention a complete electrical panel.",
    },
  ]
),

// =====================================================
// 7. Direct Biomass Pallet Burner Batch Fryer
// =====================================================
p(
  "Direct Biomass Pallet Burner Batch Fryer",
  "/images/machines/Batch Fryer/7.webp",
  "Batch fryer designed for direct biomass pallet burner operation, suitable for namkeen production with a capacity of 100 kg/hr. Made in India with 1 HP power consumption.",
  "100 kg/hr",
  "1 HP",
  "Semi Automatic",
  [
    { label: "Capacity (kg/hr)", value: "100" },
    { label: "Equipment Type", value: "Namkeen" },
    { label: "Power Consumption", value: "1 HP" },
    { label: "Fuel", value: "BIOMASS PALLET BURNER" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Minimum Order Quantity", value: "1 Set" },
  ],
  [
    "Direct biomass pallet burner operation",
    "100 kg/hr production capacity",
    "1 HP power consumption",
    "Suitable for namkeen production",
    "Made in India",
  ],
  [
    "Namkeen",
  ],
  [
    {
      q: "What is the capacity of the machine?",
      a: "The listed capacity is 100 kg/hr.",
    },
    {
      q: "What fuel does the fryer use?",
      a: "The fryer uses a direct biomass pallet burner.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 1 HP.",
    },
    {
      q: "What is the equipment type?",
      a: "The equipment type is Namkeen.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Set.",
    },
  ]
),
// =====================================================
// 8. Namkeen Batch Fryer
// =====================================================
p(
  "Namkeen Batch Fryer",
  "/images/machines/Batch Fryer/8.webp",
  "Batch fryer with external heat exchanger, designed for namkeen and snack frying. Features SS 304 contact parts, biomass pallet burner heating, oil circulation system and manual tilting.",
  "150 kg/hr",
  "3 HP",
  "Semi Automatic",
  [
    { label: "Capacity", value: "150 kg/hr" },
    { label: "Pan Size", value: "48×48 inch" },
    { label: "Heating Type", value: "Biomass pallet burner" },
    { label: "Automation Grade", value: "Semi Automatic" },
    { label: "Material", value: "SS 304" },
    { label: "Tilting Type", value: "Manual Tilting" },
    { label: "Minimum Order Quantity", value: "1 Set" },
    { label: "Equipment Type", value: "BATCH FRYER" },
    { label: "Heat Convertor", value: "2 lakh pallet burner" },
    { label: "Heat Exchanger Body", value: "5 mm thickness" },
    { label: "Oil Circulation Pump", value: "3 HP" },
    { label: "Motor", value: "3 HP, 3 PH Crompton Greaves make" },
    { label: "Coil", value: "S.S. seamless pipe" },
    { label: "Coil Pipe", value: "25 mm nominal bore" },
    { label: "Oil Storage Tank", value: "350 L" },
  ],
  [
    "All contact parts are Stainless Steel 304",
    "48 inch pan size",
    "Basket net thickness 1.5 mm with 2.5 mm hole size",
    "2 lakh calorie heat convertor with pallet burner",
    "5 mm heat exchanger body",
    "3 HP pump for oil circulation",
    "3 HP, 3 phase Crompton Greaves motor",
    "S.S. seamless pipe coils",
    "25 mm nominal bore coil pipe",
    "Filter to separate small particles",
    "350 L oil storage tank",
    "Manual tilting",
    "Complete control panel",
  ],
  [
    "Besan Items - 150 kg/hr (Gathiya, Papdi, Ratlami, Bhujia)",
    "Kurkure / Fryums - 150–200 kg/hr",
    "Chana Dal / Moong Dal / Masoor / Matar - 90–100 kg/hr",
    "Potato Chips - 50–60 kg/hr",
    "Namkeen",
  ],
  [
    {
      q: "What is the capacity of the Namkeen Batch Fryer?",
      a: "The listed capacity is 150 kg/hr.",
    },
    {
      q: "What heating system is used?",
      a: "The machine uses a biomass pallet burner with an external heat exchanger.",
    },
    {
      q: "What material are the contact parts made of?",
      a: "All contact parts are made of Stainless Steel 304.",
    },
    {
      q: "What is the pan size?",
      a: "The pan size is 48×48 inch.",
    },
    {
      q: "What is the oil storage capacity?",
      a: "The oil storage tank capacity is 350 L.",
    },
    {
      q: "What products can be fried?",
      a: "The machine is suitable for besan items, Kurkure, Fryums, dal products, potato chips and namkeen.",
    },
  ]
),

// =====================================================
// 9. Circular Batch Fryer
// =====================================================
p(
  "Circular Batch Fryer",
  "/images/machines/Batch Fryer/9.webp",
  "Circular Batch Fryer with inbuilt heat exchanger, automatic operation and Foodax construction. Made in India for efficient batch frying applications.",
  "Not specified",
  "440 Volt",
  "Automatic",
  [
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
  [
    "Circular batch fryer design",
    "Inbuilt heat exchanger",
    "Automatic operation",
    "Foodax brand",
    "Single phase operation",
    "Made in India",
  ],
  [
    "Batch Frying",
    "Food Processing",
  ],
  [
    {
      q: "What type of machine is this?",
      a: "It is a circular batch fryer with an inbuilt heat exchanger.",
    },
    {
      q: "What is the machine type?",
      a: "The machine type is Automatic.",
    },
    {
      q: "What is the brand?",
      a: "The listed brand is Foodax.",
    },
    {
      q: "What is the phase?",
      a: "The listed phase is Single.",
    },
    {
      q: "Where is the machine manufactured?",
      a: "The country of origin is listed as Made in India.",
    },
  ]
),
// =====================================================
// 10. Wood Fired Batch Fryer
// =====================================================
p(
  "Wood Fired Batch Fryer",
  "/images/machines/Batch Fryer/10.webp",
  "Wood fired batch fryer with automatic operation, 150 kg/hr capacity and 5 HP power consumption. Designed for batch frying with a wooden bowler heating system.",
  "150 kg/hr",
  "5 HP",
  "Automatic",
  [
    {
      label: "Equipment Type",
      value: "BATCH FRYER WITH WOODEN BOWLER",
    },
    { label: "Capacity", value: "150 kg/hr" },
    { label: "Power Consumption", value: "5 HP" },
    { label: "Machine Type", value: "Automatic" },
    { label: "Voltage", value: "240 V" },
    { label: "Phase", value: "3 Phase" },
    { label: "Country of Origin", value: "Made in India" },
  ],
  [
    "Wood fired batch frying system",
    "150 kg/hr capacity",
    "5 HP power consumption",
    "Automatic operation",
    "240 V voltage",
    "3 phase operation",
    "Made in India",
  ],
  [
    "Batch Frying",
    "Food Processing",
  ],
  [
    {
      q: "What is the capacity of the Wood Fired Batch Fryer?",
      a: "The machine has a capacity of 150 kg/hr.",
    },
    {
      q: "What type of heating system is used?",
      a: "The equipment type is listed as Batch Fryer with Wooden Bowler.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 5 HP.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the machine type is Automatic.",
    },
    {
      q: "What is the voltage and phase?",
      a: "The machine operates at 240 V and 3 Phase.",
    },
    {
      q: "Where is the machine manufactured?",
      a: "The country of origin is listed as Made in India.",
    },
  ]
),
// =====================================================
// 11. Batch Type Oil Fryer
// =====================================================
p(
  "Batch Type Oil Fryer",
  "/images/machines/Batch Fryer/11.webp",
  "Automatic batch type oil fryer with standard design, Foodax construction and 150 kg/hr frying capacity. Designed for efficient batch frying applications.",
  "150 kg/hr",
  "1 kW",
  "Automatic",
  [
    { label: "Capacity", value: "150 kg/hr" },
    { label: "Power Consumption", value: "1 kW" },
    { label: "Machine Type", value: "Automatic" },
    { label: "Brand", value: "Foodax" },
    { label: "Voltage", value: "240 V" },
    { label: "Design Type", value: "Standard" },
    { label: "Phase", value: "Single" },
    { label: "Country of Origin", value: "Made in India" },
  ],
  [
    "Automatic batch frying operation",
    "150 kg/hr capacity",
    "1 kW power consumption",
    "Standard design",
    "Foodax brand",
    "240 V operation",
    "Single phase",
    "Made in India",
  ],
  [
    "Batch Frying",
    "Oil Frying",
    "Food Processing",
  ],
  [
    {
      q: "What is the capacity of the Batch Type Oil Fryer?",
      a: "The machine has a capacity of 150 kg/hr.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 1 kW.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the machine type is Automatic.",
    },
    {
      q: "What is the design type?",
      a: "The design type is Standard.",
    },
    {
      q: "What is the voltage and phase?",
      a: "The machine operates at 240 V and Single phase.",
    },
    {
      q: "Where is the machine manufactured?",
      a: "The country of origin is listed as Made in India.",
    },
  ]
),
// =====================================================
// 12. Continuous Potato Banana Chips Fryer
// =====================================================
p(
  "Continuous Potato Banana Chips Fryer",
  "/images/machines/Batch Fryer/12.webp",
  "Continuous direct heat fryer designed for industrial potato and banana chips production, featuring SS 304 construction, biomass pallet heating and 300–500 L oil holding capacity.",
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
    { label: "Power Consumption", value: "9 kW" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Minimum Order Quantity", value: "1 Set" },
  ],
  [
    "Continuous direct heat frying system",
    "Biomass pallet heating source",
    "Stainless Steel machine components",
    "SS 304 material",
    "300–500 L oil holding capacity",
    "Industrial application",
    "Designed for potato chips production",
    "Made in India",
  ],
  [
    "Potato Chips",
    "Banana Chips",
    "Industrial Frying",
  ],
  [
    {
      q: "What type of fryer is this?",
      a: "It is a continuous direct heat fryer.",
    },
    {
      q: "What is the production capacity?",
      a: "The listed production capacity is 100 kg/hr, with a separate capacity specification of 300 kg/hr.",
    },
    {
      q: "What heating source is used?",
      a: "The heating source is a biomass pallet.",
    },
    {
      q: "What material is used?",
      a: "The machine components are Stainless Steel and the listed material is SS 304.",
    },
    {
      q: "What is the oil holding capacity?",
      a: "The oil holding capacity is 300–500 L.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 9 kW.",
    },
  ]
),
  ],
},




  // =====================================================
// 2. Food Processing Machines
// =====================================================
{
  slug: "food-processing-machines",
  name: "Food Processing Machines",
  products: [
    // =====================================================
    // 1. Fryums Roasting Machine
    // =====================================================
    p(
      "Fryums Roasting Machine",
      "/images/machines/Food Processing Machine/1.webp",
      "Automatic rotary drum roasting machine for industrial grain roasting applications, with continuous batch operation, diesel heating and roasting temperature up to 250°C.",
      "60–70 kg/hr",
      "220 single phase",
      "Automatic",
      [
        { label: "Capacity", value: "60–70 kg/hr" },
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
        { label: "Roasting Temperature", value: "Up To 250°C" },
        { label: "Heating Type", value: "Diesel" },
        { label: "Fuel", value: "LPG" },
        { label: "Minimum Order Quantity", value: "1 Piece" },
      ],
      [
        "Rotary drum roasting system",
        "Automatic operation",
        "Continuous batch type",
        "Industrial grain roasting",
        "Manual control",
        "Roasting temperature up to 250°C",
        "Diesel heating system",
        "LPG fuel",
        "Mild Steel construction",
      ],
      [
        "Grain Roasting",
        "Fryums",
        "Food Processing",
      ],
      [
        {
          q: "What is the capacity of the Fryums Roasting Machine?",
          a: "The listed capacity is 60–70 kg/hr.",
        },
        {
          q: "What type of machine is this?",
          a: "It is a rotary drum roasting machine.",
        },
        {
          q: "What is the application?",
          a: "The listed application is grain roasting for industrial use.",
        },
        {
          q: "What is the maximum roasting temperature?",
          a: "The roasting temperature is up to 250°C.",
        },
        {
          q: "What heating type is used?",
          a: "The listed heating type is Diesel and the listed fuel is LPG.",
        },
        {
          q: "What is the automation grade?",
          a: "The automation grade is Automatic.",
        },
      ]
    ),
    // =====================================================
// 2. Masala Mixing Drum
// =====================================================
p(
  "Masala Mixing Drum",
  "/images/machines/Food Processing Machine/2.webp",
  "Automatic masala mixing drum with SS 304 construction, designed for industrial flavouring and seasoning applications. Features a 30 kg batch capacity, 300 kg/hr capacity and automatic three-phase operation.",
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
    { label: "Speed", value: "20 RPM" },
    { label: "Surface Finish", value: "Industrial Finish" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],
  [
    "Automatic flavouring operation",
    "30 kg batch capacity",
    "300 kg/hr production capacity",
    "SS 304 contact material",
    "SS 304 construction",
    "20 RPM operating speed",
    "Three phase electrical connection",
    "1500 W power consumption",
    "Industrial finish",
  ],
  [
    "Masala Mixing",
    "Flavouring",
    "Seasoning",
    "Namkeen",
  ],
  [
    {
      q: "What is the capacity of the Masala Mixing Drum?",
      a: "The listed capacity is 300 kg/hr with a 30 kg batch capacity.",
    },
    {
      q: "What is the machine function?",
      a: "The machine function and process type are listed as Flavouring.",
    },
    {
      q: "What material is used?",
      a: "SS 304 is used for both the contact material and the main construction.",
    },
    {
      q: "What is the motor power?",
      a: "The motor power is 2 HP.",
    },
    {
      q: "What is the operating speed?",
      a: "The listed operating speed is 20 RPM.",
    },
    {
      q: "What electrical connection is required?",
      a: "The machine uses a three phase electrical connection and 415 V voltage.",
    },
  ]
),
// =====================================================
// 3. Pola Puff Cutter Machine
// =====================================================
p(
  "Pola Puff Cutter Machine",
  "/images/machines/Food Processing Machine/3.webp",
  "Pola puff cutter machine designed for processing and cutting pola puff products with a capacity of 100–150 kg/hr. Mild Steel construction with 2 kW power source and three-phase operation.",
  "100–150 kg/hr",
  "2 kW",
  "Automatic",
  [
    { label: "Capacity", value: "100–150 kg/hr" },
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
    "100–150 kg/hr capacity",
    "Designed for Pola Puff",
    "2 kW power source",
    "Three-phase operation",
    "Mild Steel construction",
    "FEW-0085 model",
  ],
  [
    "Pola Puff",
    "Namkeen",
    "Puff Snacks",
  ],
  [
    {
      q: "What is the capacity of the Pola Puff Cutter Machine?",
      a: "The listed capacity is 100–150 kg/hr.",
    },
    {
      q: "What type of namkeen is it used for?",
      a: "The listed type of namkeen is Pola Puff.",
    },
    {
      q: "What is the power source?",
      a: "The listed power source is 2 kW.",
    },
    {
      q: "What is the model number?",
      a: "The model name/number is FEW-0085.",
    },
    {
      q: "What material is used?",
      a: "The listed material is Mild Steel.",
    },
  ]
),
// =====================================================
// 4. Banana Chips Making Machine
// =====================================================
p(
  "Banana Chips Making Machine",
  "/images/machines/Food Processing Machine/4.webp",
  "Automatic banana chips making machine with stainless steel construction, 200 kg/hr production capacity and round, plain slice cutting system.",
  "200 kg/hr",
  "1 HP",
  "Automatic",
  [
    { label: "Machine Type", value: "Automatic" },
    { label: "Production Capacity", value: "200 kg/hr" },
    { label: "Machine Components", value: "Stainless Steel" },
    { label: "Motor Power", value: "1 HP" },
    { label: "Usage/Application", value: "Banana Chips" },
    { label: "Slice Type", value: "Round, Plain" },
    { label: "Frequency", value: "50 Hz" },
    { label: "Voltage", value: "240 V" },
    { label: "Country of Origin", value: "Made in India" },
  ],
  [
    "Automatic operation",
    "200 kg/hr production capacity",
    "Stainless Steel construction",
    "1 HP motor",
    "Round and plain slice cutting",
    "50 Hz frequency",
    "240 V operation",
    "Made in India",
  ],
  [
    "Banana Chips",
    "Banana Slicing",
    "Food Processing",
  ],
  [
    {
      q: "What is the production capacity?",
      a: "The listed production capacity is 200 kg/hr.",
    },
    {
      q: "What is the machine type?",
      a: "The machine type is Automatic.",
    },
    {
      q: "What is the motor power?",
      a: "The listed motor power is 1 HP.",
    },
    {
      q: "What type of slices can it produce?",
      a: "The listed slice type is Round, Plain.",
    },
    {
      q: "What material are the machine components made of?",
      a: "The machine components are made of Stainless Steel.",
    },
    {
      q: "Where is the machine manufactured?",
      a: "The country of origin is listed as Made in India.",
    },
  ]
),
// =====================================================
// 5. Chana Roster Machine
// =====================================================
p(
  "Chana Roster Machine",
  "/images/machines/Food Processing Machine/5.webp",
  "Industrial roasting machine designed for chana and other industrial roasting applications, with diesel fuel, stainless steel construction and semi-automatic operation.",
  "400 kg/hr",
  "Not specified",
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
    "400 kg/hr roasting capacity",
    "Industrial roasting machine",
    "Diesel fuel",
    "Stainless Steel construction",
    "Semi-automatic operation",
    "Made in India",
  ],
  [
    "Chana Roasting",
    "Grain Roasting",
    "Industrial Roasting",
  ],
  [
    {
      q: "What is the capacity of the Chana Roster Machine?",
      a: "The listed capacity is 400 kg/hr.",
    },
    {
      q: "What type of machine is it?",
      a: "It is an Industrial Roasting Machine.",
    },
    {
      q: "What fuel is used?",
      a: "The listed fuel is Diesel.",
    },
    {
      q: "What material is used?",
      a: "The machine is made of Stainless Steel.",
    },
    {
      q: "Is the machine automatic?",
      a: "The automation grade is Semi-Automatic.",
    },
    {
      q: "Where is the machine manufactured?",
      a: "The country of origin is listed as Made in India.",
    },
  ]
),
// =====================================================
// 6. Soya Nuggets Extruder
// =====================================================
p(
  "Soya Nuggets Extruder",
  "/images/machines/Food Processing Machine/6.webp",
  "Soya nuggets extruder designed for industrial production with 200 kg/hr capacity, electric power source, single-phase operation and stainless steel construction.",
  "200 kg/hr",
  "Electric",
  "Automatic",
  [
    { label: "Production Capacity", value: "200 kg/hr" },
    { label: "Type", value: "Soya Nuggets Extruder" },
    { label: "Power Source", value: "Electric" },
    { label: "Phase", value: "Single" },
    { label: "Material", value: "Stainless Steel" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Minimum Order Quantity", value: "01 Piece" },
  ],
  [
    "200 kg/hr production capacity",
    "Electric power source",
    "Single-phase operation",
    "Stainless Steel construction",
    "Made in India",
  ],
  [
    "Soya Nuggets",
    "Soya Chunks",
    "Food Processing",
  ],
  [
    {
      q: "What is the production capacity?",
      a: "The listed production capacity is 200 kg/hr.",
    },
    {
      q: "What type of machine is it?",
      a: "It is a Soya Nuggets Extruder.",
    },
    {
      q: "What is the power source?",
      a: "The listed power source is Electric.",
    },
    {
      q: "What is the phase?",
      a: "The machine is listed as Single phase.",
    },
    {
      q: "What material is used?",
      a: "The machine is made of Stainless Steel.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 01 Piece.",
    },
  ]
),
// =====================================================
// 6. Soya Nuggets Extruder
// =====================================================
p(
  "Soya Nuggets Extruder",
  "/images/machines/Food Processing Machine/6.webp",
  "Soya nuggets extruder designed for industrial production with 200 kg/hr capacity, electric power source, single-phase operation and stainless steel construction.",
  "200 kg/hr",
  "Electric",
  "Automatic",
  [
    { label: "Production Capacity", value: "200 kg/hr" },
    { label: "Type", value: "Soya Nuggets Extruder" },
    { label: "Power Source", value: "Electric" },
    { label: "Phase", value: "Single" },
    { label: "Material", value: "Stainless Steel" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Minimum Order Quantity", value: "01 Piece" },
  ],
  [
    "200 kg/hr production capacity",
    "Electric power source",
    "Single-phase operation",
    "Stainless Steel construction",
    "Made in India",
  ],
  [
    "Soya Nuggets",
    "Soya Chunks",
    "Food Processing",
  ],
  [
    {
      q: "What is the production capacity?",
      a: "The listed production capacity is 200 kg/hr.",
    },
    {
      q: "What type of machine is it?",
      a: "It is a Soya Nuggets Extruder.",
    },
    {
      q: "What is the power source?",
      a: "The listed power source is Electric.",
    },
    {
      q: "What is the phase?",
      a: "The machine is listed as Single phase.",
    },
    {
      q: "What material is used?",
      a: "The machine is made of Stainless Steel.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 01 Piece.",
    },
  ]
),
// =====================================================
// 7. Noodle Steamer Machine
// =====================================================
p(
  "Noodle Steamer Machine",
  "/images/machines/Food Processing Machine/7.webp",
  "Noodle steamer machine with electric heating source, MS and SS chamber construction, 100 kg/batch capacity and up to 250 kg/hr listed capacity.",
  "250 kg/hr",
  "Electric",
  "1-Stage",
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
    "100 kg/batch capacity",
    "250 kg/hr listed capacity",
    "Electric heating source",
    "MS and SS chamber",
    "Color coated finish",
    "1-stage machine",
    "MS construction",
  ],
  [
    "Noodles",
    "Steaming",
    "Food Processing",
  ],
  [
    {
      q: "What is the capacity per batch?",
      a: "The listed capacity per batch is 100 kg/batch.",
    },
    {
      q: "What is the listed machine capacity?",
      a: "The specifications list a capacity of 250 kg/hr.",
    },
    {
      q: "What heating source is used?",
      a: "The heating source is Electric.",
    },
    {
      q: "What type of chamber is used?",
      a: "The chamber type is listed as MS and SS.",
    },
    {
      q: "What is the machine type?",
      a: "The machine type is 1-Stage.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Piece.",
    },
  ]
),
// =====================================================
// 8. Corn Puff Making Machine
// =====================================================
p(
  "Corn Puff Making Machine",
  "/images/machines/Food Processing Machine/8.webp",
  "Automatic corn puff making machine with single screw extrusion system, 25 HP motor, electric power source and mild steel construction. Installation service is available.",
  "100 kg/hr",
  "25 HP",
  "Automatic",
  [
    { label: "Capacity", value: "100 kg/hr" },
    { label: "Motor Power", value: "25 HP" },
    { label: "Machine Type", value: "Single Screw" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Material of Construction", value: "Mild Steel" },
    { label: "Power Source", value: "Electric" },
    { label: "Phase", value: "Three Phase" },
    { label: "Installation Services", value: "Yes" },
    { label: "Brand", value: "Foodax" },
    { label: "Country of Origin", value: "Made In India" },
  ],
  [
    "100 kg/hr production capacity",
    "25 HP motor",
    "Single screw extrusion system",
    "Automatic operation",
    "Mild Steel construction",
    "Electric power source",
    "Three phase operation",
    "Installation service available",
    "Foodax brand",
    "Made in India",
  ],
  [
    "Corn Puffs",
    "Puffed Snacks",
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
      q: "What is the power source?",
      a: "The power source is Electric with Three Phase operation.",
    },
    {
      q: "Are installation services available?",
      a: "Yes, installation services are listed as available.",
    },
  ]
),
// =====================================================
// 9. Pasta Making Machines
// =====================================================
p(
  "Pasta Making Machines",
  "/images/machines/Food Processing Machine/9.webp",
  "Single screw pasta making machine for industrial pasta and macaroni production, featuring SS 304 die and construction, 100 kg/hr production capacity and batch drying system.",
  "100 kg/hr",
  "20 kW",
  "Automatic",
  [
    { label: "Machine Type", value: "Single Screw" },
    { label: "Production Capacity", value: "100 kg/hr" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Usage/Application", value: "Industrial" },
    { label: "Installed Power", value: "20 kW" },
    { label: "Die Material", value: "SS 304" },
    { label: "Material of Construction", value: "SS 304" },
    { label: "Power Consumption", value: "10 kW" },
    { label: "Pasta Shape", value: "Penne" },
    { label: "Dryer Type", value: "Batch Dryer" },
    { label: "Country of Origin", value: "Made In India" },
    { label: "Weight", value: "300 kg" },
    { label: "Power Source", value: "Electrical" },
    { label: "Additional Capacity", value: "50–60 kg/hr" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],
  [
    "Rugged design",
    "Negligible maintenance",
    "Low power consumption",
    "Single screw extrusion system",
    "SS 304 die material",
    "SS 304 construction",
    "Batch dryer system",
    "Electrical power source",
    "Suitable for pasta and macaroni",
  ],
  [
    "Pasta",
    "Macaroni",
    "Penne",
  ],
  [
    {
      q: "What is the production capacity?",
      a: "The listed production capacity is 100 kg/hr, with an additional specification of 50–60 kg/hr.",
    },
    {
      q: "What type of machine is it?",
      a: "The machine type is Single Screw.",
    },
    {
      q: "What material is used?",
      a: "The die and machine construction are specified as SS 304.",
    },
    {
      q: "What pasta shape is listed?",
      a: "The listed pasta shape is Penne.",
    },
    {
      q: "What type of dryer is used?",
      a: "The dryer type is Batch Dryer.",
    },
    {
      q: "What products can be made?",
      a: "The provided specification states that the machine is used for making pasta and macaroni.",
    },
    {
      q: "What is the power source?",
      a: "The power source is Electrical.",
    },
  ]
),
// =====================================================
// 10. Food Extruder Machine
// =====================================================
p(
  "Food Extruder Machine",
  "/images/machines/Food Processing Machine/10.webp",
  "Fully automatic single screw food extruder for industrial snack production with steam jacket heating, quick die change, loss-in-weight feeding and HMI control system.",
  "1000 kg/hr",
  "90 kW",
  "Fully Automatic",
  [
    { label: "Extruder Type", value: "Single Screw" },
    { label: "Application", value: "Snacks" },
    { label: "Output Capacity", value: "1000 kg/hr" },
    { label: "Drive Power", value: "90 kW" },
    { label: "Heating Type", value: "Steam Jackets" },
    { label: "Die Change", value: "Quick Change" },
    { label: "Automation Grade", value: "Fully Automatic" },
    { label: "Feeder Type", value: "Loss in Weight" },
    { label: "Control System", value: "HMI" },
  ],
  [
    "Single screw extrusion system",
    "1000 kg/hr output capacity",
    "90 kW drive power",
    "Steam jacket heating",
    "Quick die change system",
    "Fully automatic operation",
    "Loss-in-weight feeder",
    "HMI control system",
  ],
  [
    "Snacks",
    "Extruded Snacks",
    "Food Processing",
  ],
  [
    {
      q: "What is the output capacity?",
      a: "The listed output capacity is 1000 kg/hr.",
    },
    {
      q: "What type of extruder is used?",
      a: "The extruder type is Single Screw.",
    },
    {
      q: "What heating system is used?",
      a: "The heating type is Steam Jackets.",
    },
    {
      q: "Is the machine fully automatic?",
      a: "Yes, the automation grade is Fully Automatic.",
    },
    {
      q: "What type of feeder is used?",
      a: "The feeder type is Loss in Weight.",
    },
    {
      q: "What control system is provided?",
      a: "The control system is HMI.",
    },
  ]
),
// =====================================================
// 11. Food Extruder
// =====================================================
p(
  "Food Extruder",
  "/images/machines/Food Processing Machine/11.webp",
  "Twin screw food extruder designed for breakfast cereal, pellet feed, pasta, snacks, pet food and soya nuggets production, with electric heater system and manual die change.",
  "100 kg/hr",
  "75 kW",
  "Automatic",
  [
    { label: "Extruder Type", value: "Twin Screw" },
    {
      label: "Application",
      value: "Breakfast cereal, Pellet feed, Pasta, Snacks, Pet food, Soya nuggets",
    },
    { label: "Output Capacity", value: "100 kg/hr" },
    { label: "Drive Power", value: "75 kW" },
    { label: "Heating Type", value: "Electric heaters" },
    { label: "Die Change", value: "Manual change" },
  ],
  [
    "Twin screw extrusion system",
    "100 kg/hr output capacity",
    "75 kW drive power",
    "Electric heater system",
    "Manual die change",
    "Suitable for multiple food applications",
  ],
  [
    "Breakfast Cereal",
    "Pellet Feed",
    "Pasta",
    "Snacks",
    "Pet Food",
    "Soya Nuggets",
  ],
  [
    {
      q: "What type of extruder is this?",
      a: "The extruder type is Twin Screw.",
    },
    {
      q: "What is the output capacity?",
      a: "The listed output capacity is 100 kg/hr.",
    },
    {
      q: "What is the drive power?",
      a: "The listed drive power is 75 kW.",
    },
    {
      q: "What heating system is used?",
      a: "The machine uses electric heaters.",
    },
    {
      q: "How is the die changed?",
      a: "The die change system is manual.",
    },
    {
      q: "What products can be made?",
      a: "The listed applications include breakfast cereal, pellet feed, pasta, snacks, pet food and soya nuggets.",
    },
  ]
),
// =====================================================
// 12. Dough Mixer (Malli Machine)
// =====================================================
p(
  "Dough Mixer (Malli Machine)",
  "/images/machines/Food Processing Machine/12.webp",
  "Automatic electric dough mixer with Stainless Steel construction, 10 kg capacity and industrial mixing application.",
  "10 kg",
  "Electric",
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
    "Stainless Steel construction",
    "Automatic operation",
    "Electric power source",
    "10 kg mixing capacity",
    "Made in India",
  ],
  [
    "Dough Mixing",
    "Food Processing",
    "Bakery",
  ],
  [
    {
      q: "What is the capacity of the Dough Mixer?",
      a: "The listed capacity is 10 kg.",
    },
    {
      q: "What type of machine is it?",
      a: "The type of machine is Dough Mixers.",
    },
    {
      q: "What is the power source?",
      a: "The power source is Electric.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the automation grade is Automatic.",
    },
    {
      q: "What material is used?",
      a: "The machine is made of Stainless Steel (SS).",
    },
    {
      q: "Where is the machine manufactured?",
      a: "The country of origin is listed as Made in India.",
    },
  ]
),

// =====================================================
// 13. Food Processing Plant Installation Service
// =====================================================
p(
  "Food Processing Plant Installation Service",
  "/images/machines/Food Processing Machine/13.webp",
  "Professional food processing plant installation service covering all types of food processing machines across Delhi NCR and PAN India.",
  "200 km",
  "Not Specified",
  "Service",
  [
    { label: "Service Location", value: "Delhi NCR" },
    { label: "Machine Type", value: "All Food Processing Machines" },
    { label: "Place of Service", value: "Ghaziabad" },
    { label: "Service Duration", value: "200 km" },
    { label: "Deliver Type", value: "PAN India" },
    { label: "Minimum Order Quantity", value: "1 Unit" },
  ],
  [
    "Food processing plant installation service",
    "Installation for all food processing machines",
    "Service available across Delhi NCR",
    "Service location: Ghaziabad",
    "PAN India delivery/service",
  ],
  [
    "Food Processing Plant Installation",
    "Machine Installation",
    "Plant Setup",
    "Food Processing",
  ],
  [
    {
      q: "Where is the installation service available?",
      a: "The service location is listed as Delhi NCR, with the place of service in Ghaziabad.",
    },
    {
      q: "What type of machines are covered?",
      a: "The service covers all food processing machines.",
    },
    {
      q: "Is the service available across India?",
      a: "The listed delivery type is PAN India.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Unit.",
    },
  ]
),
  ],
},


  // {
  //   slug: "extruder-machines",
  //   name: "Extruder Machines",
  //   products: [
  //     p("Kurkure Extruder Machine", extruder, "High-torque friction rotary die extruder head for authentic crunchy irregular kurkure and niknak collets.", "80 - 300 kg/hr", "20 HP - 50 HP", "Automatic",
  //       [{ label: "Die Head", value: "Rotary friction collet die" }, { label: "Raw Material", value: "Corn grits 12 - 14% moisture" }],
  //       ["Authentic irregular collet shape", "High torque gearbox", "Wear resistant die"], ["Kurkure", "Niknak", "Collet Snacks"],
  //       [{ q: "What corn grit size is needed?", a: "300 - 500 micron corn grits give the best collet structure." }]),
  //     p("Sev Extruder Machine", extruder, "Hydraulic & screw press extruder with swivel swing arm for direct press frying of nylon sev, ratlami sev, gathiya, and papdi.", "50 - 200 kg/hr", "3 HP - 7.5 HP", "Semi-Automatic",
  //       [{ label: "Press Type", value: "Hydraulic / screw press" }, { label: "Dies", value: "Interchangeable sev & gathiya jalis" }],
  //       ["Direct press over fryer", "Swivel swing arm", "Quick die changeover"], ["Nylon Sev", "Ratlami Sev", "Gathiya", "Papdi"],
  //       [{ q: "Can it press directly into the fryer?", a: "Yes, the swivel arm positions the die directly above the oil tank." }]),
  //     p("Rice Corn Puff Extruder", extruder, "High thermal expansion twin/single screw extruder for puffed rice balls, corn rings, and cereal pellets.", "60 - 350 kg/hr", "20 HP - 60 HP", "Automatic",
  //       [{ label: "Screw", value: "Single / twin screw high expansion" }, { label: "Barrel", value: "Water jacketed segmented" }],
  //       ["High expansion ratio", "Cereal and snack capable", "Stable throughput feeder"], ["Rice Puffs", "Corn Rings", "Cereals", "Pellets"],
  //       [{ q: "Can it make breakfast cereals?", a: "Yes, with the appropriate die and screw configuration." }]),
  //     p("Puff Extruder Machine", extruder, "Single screw extruder with instant die face rotary knife cutter for 2D/3D puffed snacks.", "60 - 250 kg/hr", "15 HP - 40 HP", "Automatic",
  //       [{ label: "Cutting System", value: "Die face rotary knife, VFD" }, { label: "Die Molds", value: "2D / 3D interchangeable" }],
  //       ["Instant cut at die face", "Multiple shape dies", "Simple operation and maintenance"], ["Puffed Snacks", "2D Snacks", "3D Snacks"],
  //       [{ q: "How many shapes can I make?", a: "Any number — shapes change by swapping the die mold." }]),
  //     p("Industrial Dough Mixer", foodProcessing, "SS 304 ribbon & Z-blade mixer for uniform pre-moistening and dough preparation before extrusion.", "50 - 300 kg/batch", "3 HP - 10 HP", "Semi-Automatic",
  //       [{ label: "Mixer Type", value: "Ribbon blender / Z-blade" }, { label: "Batch Size", value: "50 - 300 kg" }],
  //       ["Uniform moisture distribution", "Heavy duty gearbox", "Tilting discharge option"], ["Snack Dough", "Grit Pre-mix", "Namkeen Dough"],
  //       [{ q: "Ribbon or Z-blade — which one?", a: "Ribbon suits dry pre-mixing of grits; Z-blade suits stiff dough for sev and papdi." }]),
  //   ],
  // },

  {
  slug: "packing-machines",
  name: "Packing Machines",
  products: [
    // =====================================================
    // 1. Extruded (KURKURE) Snack Production Line
    // =====================================================
    p(
      "Extruded (KURKURE) Snack Production Line",
      "/images/machines/Packing Machine/1.webp",
      "Industrial Kurkure production line with automatic operation and 300 kg/hr production capacity.",
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
        "300 kg/hr production capacity",
        "Automatic operation",
        "Industrial application",
        "Designed for Kurkure production",
        "Made in India",
      ],

      [
        "Kurkure",
        "Extruded Snacks",
        "Snack Production",
      ],

      [
        {
          q: "What is the capacity of the Kurkure production line?",
          a: "The listed capacity is 300 kg/hr.",
        },
        {
          q: "What type of snacks is this line designed for?",
          a: "The listed snacks type is Kurkure production line.",
        },
        {
          q: "Is the production line automatic?",
          a: "Yes, the automation grade is Automatic.",
        },
        {
          q: "What is the application?",
          a: "The listed application is Industrial.",
        },
        {
          q: "Where is the production line manufactured?",
          a: "The country of origin is listed as Made in India.",
        },
      ]
    ),
    // =====================================================
// 2. Spices Packing Machine
// =====================================================
p(
  "Spices Packing Machine",
  "/images/machines/Packing Machine/2.webp",
  "Semi-automatic vertical FFS spices packing machine with cup filler feeding system, center seal pouch packaging and 30–50 ppm packing speed.",
  "2500 Pouch/Hour",
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
    { label: "Voltage", value: "440 V" },
    { label: "Automation Grade", value: "Semi-Automatic" },
    { label: "Machine Power", value: "1–2 HP" },
    { label: "Country of Origin", value: "Made in India" },
  ],

  [
    "Vertical FFS packing system",
    "50–100 g filling range",
    "Center seal pouch packaging",
    "Cup filler feeding system",
    "30–50 ppm packaging speed",
    "2500 pouch/hour capacity",
    "Electric operation",
    "50 Hz frequency",
    "Semi-automatic operation",
    "1–2 HP machine power",
    "Made in India",
  ],

  [
    "Namkeen",
    "Spices",
    "Food Processing",
    "Snack Packaging",
  ],

  [
    {
      q: "What is the filling range?",
      a: "The listed filling range is 50–100 g.",
    },
    {
      q: "What type of packing machine is it?",
      a: "The machine type is Vertical FFS.",
    },
    {
      q: "What packaging type is used?",
      a: "The packaging type is Center Seal.",
    },
    {
      q: "What feeding system is used?",
      a: "The feeding system is Cup Filler.",
    },
    {
      q: "What is the packaging speed?",
      a: "The listed packaging speed is 30–50 ppm.",
    },
    {
      q: "What is the machine power?",
      a: "The listed machine power is 1–2 HP.",
    },
    {
      q: "What is the voltage?",
      a: "The listed voltage is 440 V.",
    },
    {
      q: "Is the machine automatic?",
      a: "The automation grade is Semi-Automatic.",
    },
  ]
),
// =====================================================
// 3. Collar Type Packing Machine
// =====================================================
p(
  "Collar Type Packing Machine",
  "/images/machines/Packing Machine/3.webp",
  "Automatic collar type packing machine for commercial snack packaging with volumetric cup filling, center seal pouches and laminated film.",
  "50 pack/min",
  "3–4 kW",
  "Automatic",

  [
    { label: "Packing Speed", value: "40–60 pouch/min" },
    { label: "Filling Range", value: "10–100 g" },
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
    { label: "Power Consumption", value: "3–4 kW" },
    { label: "Machine Material", value: "SS304" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "40–60 pouch/min packing speed",
    "10–100 g filling range",
    "Center seal pouch system",
    "Laminated film compatible",
    "400 mm maximum roll width",
    "Volumetric cup filling system",
    "Automatic operation",
    "SS304 machine construction",
    "220 V operation",
    "Commercial packaging application",
    "Made in India",
  ],

  [
    "Snacks",
    "Namkeen",
    "Food Packaging",
    "Commercial Packaging",
  ],

  [
    {
      q: "What is the packing speed?",
      a: "The listed packing speed is 40–60 pouch/min.",
    },
    {
      q: "What is the filling range?",
      a: "The filling range is 10–100 g.",
    },
    {
      q: "What type of pouch is used?",
      a: "The machine uses a Center Seal pouch.",
    },
    {
      q: "What filling system is used?",
      a: "The filling system is Volumetric Cup.",
    },
    {
      q: "What film material is supported?",
      a: "The listed film material is Laminated Film.",
    },
    {
      q: "What is the maximum roll width?",
      a: "The maximum roll width is 400 mm.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 3–4 kW.",
    },
    {
      q: "What material is the machine made of?",
      a: "The listed machine material is SS304.",
    },
  ]
),
p(
  "Tea Packaging Machine",
  "/images/machines/Packing Machine/4.webp",
  "Fully automatic electric tea packaging machine designed for tea packaging applications with a capacity of 500 pouches per hour.",
  "500 pouch/hour",
  "Electric",
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
    "500 pouch/hour packaging capacity",
    "Fully automatic packaging operation",
    "Designed for tea packaging",
    "Electric operation",
    "Foodax brand",
    "Made for continuous packaging applications",
  ],

  [
    "Tea",
    "Tea Packaging",
    "Food Packaging",
  ],

  [
    {
      q: "What is the capacity of the Tea Packaging Machine?",
      a: "The listed capacity is 500 Pouch/Hour.",
    },
    {
      q: "What is the packaging type?",
      a: "The packaging type is Fully Automatic.",
    },
    {
      q: "What is the machine used for?",
      a: "The listed usage/application is Tea Packaging.",
    },
    {
      q: "What is the automation grade?",
      a: "The automation grade is Automatic.",
    },
    {
      q: "What is the driven type?",
      a: "The driven type is Electric.",
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
  "Automatic tea packing machine with center seal packaging system, 1500 pouch/hour capacity and 5 kW single-phase power operation.",
  "1500 pouch/hour",
  "5 kW",
  "Automatic",

  [
    { label: "Capacity", value: "1500 Pouch/Hour" },
    { label: "Packaging Type", value: "Center Seal" },
    { label: "Usage/Application", value: "Tea Packaging" },
    { label: "Model Name/Number", value: "FEW-0999" },
    { label: "Power", value: "5 kW single phase" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Brand", value: "FOODAX" },
  ],

  [
    "1500 pouch/hour packaging capacity",
    "Center seal packaging",
    "Automatic operation",
    "5 kW single-phase power",
    "FEW-0999 model",
    "FOODAX brand",
    "Designed for tea packaging",
  ],

  [
    "Tea",
    "Tea Packaging",
    "Food Packaging",
  ],

  [
    {
      q: "What is the capacity of the Automatic Tea Packing Machine?",
      a: "The listed capacity is 1500 Pouch/Hour.",
    },
    {
      q: "What packaging type is used?",
      a: "The packaging type is Center Seal.",
    },
    {
      q: "What is the machine used for?",
      a: "The listed usage/application is Tea Packaging.",
    },
    {
      q: "What is the model number?",
      a: "The model name/number is FEW-0999.",
    },
    {
      q: "What is the power requirement?",
      a: "The listed power is 5 kW single phase.",
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
// =====================================================
// 6. Snack Packing Machine
// =====================================================
p(
  "Snack Packing Machine",
  "/images/machines/Packing Machine/6.webp",
  "Automatic electric snack packing machine with 3000 pouch/hour capacity, three-phase operation and FOODAX brand.",
  "3000 Pouch/Hour",
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
    "3000 pouch/hour capacity",
    "Automatic operation",
    "FOODAX brand",
    "8 kW power consumption",
    "440 V voltage",
    "Three phase operation",
    "Electric drive",
    "Made in India",
  ],

  [
    "Potato Chips",
    "Namkeen",
    "Puffs",
    "Extruded Snacks",
  ],

  [
    {
      q: "What is the capacity of the Snack Packing Machine?",
      a: "The listed capacity is 3000 Pouch/Hour.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 8 kW.",
    },
    {
      q: "What is the voltage?",
      a: "The listed voltage is 440 V.",
    },
    {
      q: "What phase is required?",
      a: "The machine requires Three Phase operation.",
    },
    {
      q: "What is the driven type?",
      a: "The driven type is Electric.",
    },
    {
      q: "What is the brand?",
      a: "The listed brand is FOODAX.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 01 Piece.",
    },
  ]
),
  ],
},
{
  slug: "extruder-machine",
  name: "Extruder Machine",
  products: [

    // =====================================================
    // 1. Kurkure Extruder Machine
    // =====================================================
    p(
      "Kurkure Extruder Machine",
      "/images/machines/Extruder Machine/1.webp",
      "Automatic single screw Kurkure extruder for industrial snack production. The machine is suitable for Kurkure type snacks and uses rice grit, corn grit and gram grit as raw material.",
      "50–100 kg/hr",
      "25 HP",
      "Automatic",

      [
        { label: "Motor Power", value: "25 HP" },
        { label: "Machine Type", value: "Single Screw" },
        { label: "Capacity", value: "90 to 100 kg/hr" },
        { label: "Snacks Type", value: "Kurkure Extruder" },
        { label: "Type Of Namkeen", value: "KURKURE TYPE SNACKS" },
        { label: "Automation Grade", value: "Automatic" },
        { label: "Usage/Application", value: "Industrial" },
        { label: "Phase", value: "Three Phase" },
        { label: "Material Of Construction", value: "SS And MS" },
        { label: "Power", value: "0–25" },
        { label: "Model Name/Number", value: "FEW-002" },
        { label: "Power Consumption", value: "18.75 kW" },
        { label: "Feeding Type", value: "Automatic Feed" },
        { label: "Usage", value: "Kurkure" },
        { label: "Body Finish", value: "Paint Coated" },
        { label: "Country Of Origin", value: "Made In India" },
        { label: "Production Capacity", value: "50–100 kg per hour, 100 kg/hrs" },
        { label: "Brand", value: "Foodax Engineering Works" },
        { label: "Minimum Order Quantity", value: "1 Piece" },
        { label: "Main Motor", value: "25 HP" },
        { label: "Feed Motor", value: "5 HP" },
        { label: "Production Capacity (Additional)", value: "80 KG/HRS" },
        { label: "Required Raw Material", value: "Rice Grit, Corn Grit, Gram Grit" },
        { label: "Particle Size", value: "500 micron" },
      ],

      [
        "25 HP main motor",
        "5 HP feed motor",
        "Single screw extrusion system",
        "Automatic feed",
        "Automatic operation",
        "Three phase operation",
        "SS and MS construction",
        "18.75 kW power consumption",
        "Paint coated body finish",
        "500 micron particle size",
        "Suitable for Kurkure type snacks",
      ],

      [
        "Kurkure",
        "Kurkure Type Snacks",
        "Extruded Snacks",
        "Namkeen",
      ],

      [
        {
          q: "What is the motor power?",
          a: "The listed motor power is 25 HP, with a 5 HP feed motor.",
        },
        {
          q: "What type of extruder is used?",
          a: "The machine type is Single Screw.",
        },
        {
          q: "What is the production capacity?",
          a: "The provided specifications list capacity values of 90–100 kg/hr, 50–100 kg/hr and 80 kg/hr.",
        },
        {
          q: "Is the machine automatic?",
          a: "Yes, the automation grade is Automatic and the feeding type is Automatic Feed.",
        },
        {
          q: "What raw materials are required?",
          a: "The listed raw materials are Rice Grit, Corn Grit and Gram Grit.",
        },
        {
          q: "What is the required particle size?",
          a: "The listed particle size is 500 micron.",
        },
        {
          q: "What is the model number?",
          a: "The model name/number is FEW-002.",
        },
        {
          q: "What is the power consumption?",
          a: "The listed power consumption is 18.75 kW.",
        },
      ]
    ),

    p(
  "Sev Extruder Machine",
  "/images/machines/Extruder Machine/2.webp",
  "Automatic electric sev extruder machine with up to 200 kg/hr production capacity, 240 V power supply and 50 Hz frequency. Suitable for Namkeen making applications.",
  "Up to 200 kg/hr",
  "Electric",
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
    "Up to 200 kg/hr production capacity",
    "Automatic operation",
    "Electric power source",
    "240 V operation",
    "50 Hz frequency",
    "Suitable for Namkeen making",
    "Better quality finish product",
    "High productivity",
  ],

  [
    "Sev",
    "Namkeen",
    "Namkeen Making",
    "Extruded Snacks",
  ],

  [
    {
      q: "What is the production capacity?",
      a: "The listed production capacity is up to 200 kg/hr.",
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
      a: "The provided information describes it for Namkeen making applications.",
    },
  ]
),
p(
  "Rice Corn Puff Extruder (small)",
  "/images/machines/Extruder Machine/3.webp",
  "Automatic single screw rice corn puff extruder with 50 kg/hr capacity, electric power source, automatic feeding and SS and MS construction.",
  "50 kg/hr",
  "Electric",
  "Automatic",

  [
    { label: "Capacity", value: "50 kg/hr" },
    { label: "Motor Power", value: "15 HP" },
    { label: "Machine Type", value: "Single Screw" },
    { label: "Type", value: "Rice Corn Puff Extruder" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Material Of Construction", value: "SS And MS" },
    { label: "Power Source", value: "Electric" },
    { label: "Phase", value: "3 Phase" },
    { label: "Feeding Type", value: "Automatic Feed" },
    { label: "Usage", value: "Corn Puff" },
    { label: "Body Finish", value: "Paint Coated" },
    { label: "Country of Origin", value: "Made in India" },
    { label: "Minimum Order Quantity", value: "01 Piece" },
    { label: "Production Capacity (Additional)", value: "35 to 40 kg/hrs" },
    { label: "Electric Load", value: "8 kW" },
  ],

  [
    "50 kg/hr listed capacity",
    "15 HP motor",
    "Single screw extrusion system",
    "Automatic operation",
    "SS and MS construction",
    "Electric power source",
    "3 phase operation",
    "Automatic feed",
    "Paint coated body finish",
    "35–40 kg/hr additional production capacity",
    "8 kW electric load",
    "Made in India",
  ],

  [
    "Corn Puff",
    "Rice Puff",
    "Puffed Snacks",
    "Extruded Snacks",
  ],

  [
    {
      q: "What is the capacity of the Rice Corn Puff Extruder?",
      a: "The listed capacity is 50 kg/hr. An additional production capacity of 35 to 40 kg/hr is also specified.",
    },
    {
      q: "What type of extruder is it?",
      a: "The machine type is Single Screw and the type is Rice Corn Puff Extruder.",
    },
    {
      q: "What is the motor power?",
      a: "The listed motor power is 15 HP.",
    },
    {
      q: "What is the power source?",
      a: "The power source is Electric with 3 Phase operation.",
    },
    {
      q: "What type of feeding system is used?",
      a: "The feeding type is Automatic Feed.",
    },
    {
      q: "What material is used?",
      a: "The material of construction is SS And MS.",
    },
    {
      q: "What is the electric load?",
      a: "The provided specification lists an electric load of 8 kW.",
    },
  ]
),
p(
  "Namkeen Snack Packing Machine",
  "/images/machines/Packing Machine/4.webp",
  "Automatic three-phase namkeen snack packing machine with a capacity of 500 pouches per hour, suitable for industrial snack packaging.",
  "500 Pouch/Hour",
  "Not Specified",
  "Automatic",

  [
    { label: "Capacity", value: "500 Pouch/Hour" },
    { label: "Automation Grade", value: "Automatic" },
    { label: "Phase", value: "Three Phase" },
    { label: "Country of Origin", value: "Made in India" },
  ],

  [
    "500 pouch/hour capacity",
    "Automatic operation",
    "Three phase operation",
    "Suitable for namkeen snack packaging",
    "Made in India",
  ],

  [
    "Namkeen",
    "Snacks",
    "Snack Packaging",
  ],

  [
    {
      q: "What is the capacity of the Namkeen Snack Packing Machine?",
      a: "The listed capacity is 500 Pouch/Hour.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the automation grade is Automatic.",
    },
    {
      q: "What phase is required?",
      a: "The machine requires Three Phase operation.",
    },
    {
      q: "Where is the machine manufactured?",
      a: "The country of origin is listed as Made in India.",
    },
  ]
),

// =====================================================
// 4. Puff Extruder Machine
// =====================================================
p(
  "Puff Extruder Machine",
  "/images/machines/Extruder Machine/5.webp",
  "Puff extruder machine for producing puff and corn-based snack products. The machine features a 25 HP main motor, 1 HP cutter motor, 1 HP feed motor and 50–100 kg/hr output capacity.",
  "50–100 kg/hr",
  "25 HP",
  "Automatic / Semi-Automatic",

  [
    { label: "Brand", value: "Foodax Engineering" },
    { label: "Material to be Extruded", value: "Puff" },
    { label: "Machine Type", value: "Automatic, Semi-Automatic" },
    { label: "Power Consumption", value: "24 kW" },
    { label: "A.C Drive Motor Power", value: "1 H.P." },
    { label: "Main Motor", value: "25 H.P." },
    { label: "Output", value: "50–100 kg/hr" },
    { label: "Body Material", value: "M.S." },
    { label: "Phase", value: "3 PH" },
    { label: "Voltage", value: "440 V" },
    { label: "Frequency", value: "50 Hz" },
    { label: "Condition", value: "New" },
    { label: "Cutter Motor", value: "1 H.P." },
    { label: "Feed Motor", value: "1 H.P." },
    { label: "Production Capacity", value: "100 kg/hr" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
  ],

  [
    "50–100 kg/hr output capacity",
    "25 HP main motor",
    "1 HP cutter motor",
    "1 HP feed motor",
    "24 kW power consumption",
    "Automatic / semi-automatic operation",
    "Mild Steel body",
    "3 phase operation",
    "440 V voltage",
    "50 Hz frequency",
    "New machine condition",
    "Suitable for multiple puff snack products",
  ],

  [
    "Rice Puff",
    "Pola",
    "Cheese Ball",
    "Corn Ring Flower",
    "Mad Angles",
    "Puff Snacks",
  ],

  [
    {
      q: "What is the output capacity?",
      a: "The listed output is 50–100 kg/hr, with production capacity also specified as 100 kg/hr.",
    },
    {
      q: "What is the main motor power?",
      a: "The main motor power is 25 HP.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 24 kW.",
    },
    {
      q: "What is the machine type?",
      a: "The machine type is Automatic, Semi-Automatic.",
    },
    {
      q: "What material is used for the body?",
      a: "The body material is M.S. (Mild Steel).",
    },
    {
      q: "What products can be produced?",
      a: "The listed products include Rice Puff, Pola, Cheese Ball, Corn Ring Flower and Mad Angles.",
    },
    {
      q: "What are the cutter and feed motor powers?",
      a: "Both the cutter motor and feed motor are listed as 1 H.P.",
    },
    {
      q: "What is the voltage and phase?",
      a: "The machine is specified for 440 V and 3 PH operation.",
    },
  ]
),

  ],
},




{
  slug: "rotary-roaster-machine",
  name: "Rotary Roaster Machine",
  products: [

    // =====================================================
    // 1. Grain Roasting Machine
    // =====================================================
    p(
      "Grain Roasting Machine",
      "/images/machines/Rotary Roaster Machine/1.webp",
      "Automatic grain roasting machine for industrial roasting applications with stainless steel construction.",
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
        "Stainless Steel construction",
        "Suitable for industrial applications",
        "Made in India",
      ],

      [
        "Grain Roasting",
        "Roasting",
        "Food Processing",
      ],

      [
        {
          q: "What is the type of machine?",
          a: "The machine type is Grain Roasting Machine.",
        },
        {
          q: "What is the machine used for?",
          a: "The machine is used for industrial applications.",
        },
        {
          q: "What material is used?",
          a: "The machine is made of Stainless Steel.",
        },
        {
          q: "Is the machine automatic?",
          a: "Yes, the automation grade is Automatic.",
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
  "Automatic rotary drum roasting machine designed for roasting makhana, cashew, almond, pista and other foxnut products for industrial applications.",
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
    { label: "Power Consumption", value: "20 kw 440 volt 3 phase" },
    { label: "Machine Dimension", value: "650x6100x1790" },
    { label: "Weight", value: "900 kg" },
    { label: "Minimum Order Quantity", value: "1 Unit" },
  ],

  [
    "Electric heating system",
    "Rotary drum machine design",
    "100–125 kg/hr capacity",
    "Automatic operation",
    "Suitable for Makhana roasting",
    "Suitable for cashew, almond and pista",
    "20 kW power consumption",
    "440 V three phase operation",
    "900 kg machine weight",
  ],

  [
    "Makhana",
    "Foxnut",
    "Cashew",
    "Almond",
    "Pista",
    "Roasting",
  ],

  [
    {
      q: "What is the capacity of the Foxnut Roasting Machine?",
      a: "The listed capacity is 100 TO 125 Kg/Hr.",
    },
    {
      q: "What type of heating is used?",
      a: "The heating type is Electric.",
    },
    {
      q: "What is the machine type?",
      a: "The machine type is Rotary Drum.",
    },
    {
      q: "Is the machine automatic?",
      a: "Yes, the automation grade is Automatic.",
    },
    {
      q: "What products can be roasted?",
      a: "The listed applications include Makhana, cashew, almond and pista.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 20 kW, 440 volt, 3 phase.",
    },
    {
      q: "What is the machine weight?",
      a: "The listed machine weight is 900 kg.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "The minimum order quantity is 1 Unit.",
    },
  ]
),



  ],
},


//......................................//

{
  slug: "other-product",
  name: "Other Product",
  products: [
    p(
      "Puff Making Machine",
      "/images/machines/Other Product/1.webp",
      "Automatic 2-in-1 machine for producing Kurkure and rice corn puff ring products.",
      "100 kg",
      "25 kW",
      "Automatic",

      [
        { label: "Material To Be Extruded", value: "Rice corn" },
        { label: "Type", value: "Automatic" },
        { label: "Power Consumption", value: "25 kw" },
        { label: "Type Of Namkeen", value: "Kurkure and rice corn puff ring" },
        { label: "Capacity", value: "100 kg 2 IN 1 MACHINE" },
        { label: "Power Source", value: "440 volts" },
        { label: "Phase", value: "3 phase" },
      ],

      [
        "Automatic operation",
        "2 in 1 machine",
        "Suitable for Kurkure production",
        "Suitable for rice corn puff ring production",
        "25 kW power consumption",
        "440 volts power source",
        "3 phase operation",
      ],

      [
        "Kurkure",
        "Rice Corn Puff Ring",
        "Puff Snacks",
        "Extruded Snacks",
      ],

      [
        {
          q: "What material is used for extrusion?",
          a: "The material to be extruded is Rice corn.",
        },
        {
          q: "What is the machine type?",
          a: "The machine type is Automatic.",
        },
        {
          q: "What is the capacity?",
          a: "The listed capacity is 100 kg and it is specified as a 2 IN 1 MACHINE.",
        },
        {
          q: "What products can be produced?",
          a: "The machine is specified for Kurkure and rice corn puff ring production.",
        },
        {
          q: "What is the power consumption?",
          a: "The listed power consumption is 25 kw.",
        },
        {
          q: "What is the power source?",
          a: "The listed power source is 440 volts.",
        },
        {
          q: "What phase is required?",
          a: "The machine requires 3 phase operation.",
        },
      ]
    ),

    p(
  "Kurkure Making Machine",
  "/images/machines/Other Product/2.webp",
  "Single screw Kurkure extruder machine for producing Kurkure from rice corn and other grits, with automatic feed control and stainless steel hopper and guard.",
  "90–100 kg/hr",
  "25 HP",
  "Automatic",

  [
    { label: "Material To Be Extruded", value: "RICE CORN AND OTHER GRIT" },
    { label: "Type", value: "EXTRUDER" },
    { label: "Power Consumption", value: "22.5 KW" },
    { label: "Type Of Namkeen", value: "KURKURE" },
    { label: "Power Source", value: "440" },
    { label: "Phase", value: "3 PHASE" },
    { label: "A.C Drive Motor", value: "5 HP" },
    { label: "Main Motor", value: "25 HP" },
    { label: "AC Motor", value: "YES" },
    { label: "Production Capacity", value: "90 TO 100 kgs/hour" },
    { label: "Motor", value: "25 HP" },
    { label: "Construction", value: "Painted Mild Steel" },
    { label: "Hopper", value: "Stainless Steel Hopper" },
    { label: "Product Discharge Guard", value: "Stainless Steel Guard at Product Discharge" },
  ],

  [
    "Single screw extruder",
    "Easy to operate and maintain",
    "Food grade contact parts",
    "Standard parts for long life",
    "25 HP main motor",
    "5 HP feed control motor",
    "Automatic feed control",
    "Stainless Steel hopper",
    "Stainless Steel guard at product discharge",
    "90–100 kg/hr production capacity",
  ],

  [
    "Kurkure",
    "Extruded Snacks",
    "Namkeen",
  ],

  [
    {
      q: "What is the production capacity?",
      a: "The listed production capacity is 90 to 100 kg per hour.",
    },
    {
      q: "What is the main motor power?",
      a: "The main motor is 25 HP.",
    },
    {
      q: "What is the feed control motor power?",
      a: "The A.C motor for feed control is 5 HP.",
    },
    {
      q: "What material can be extruded?",
      a: "The machine is designed for rice corn and other grit.",
    },
    {
      q: "What is the power consumption?",
      a: "The listed power consumption is 22.5 KW.",
    },
    {
      q: "What type of Namkeen is produced?",
      a: "The listed Namkeen type is Kurkure.",
    },
    {
      q: "What is the phase?",
      a: "The machine operates on 3 phase power.",
    },
    {
      q: "What is the construction material?",
      a: "The construction includes painted mild steel, stainless steel hopper and stainless steel guard at product discharge.",
    },
  ]
),
p(
  "Kurkure Fryer Machine",
  "/images/machines/Other Product/3.webp",
  "Automatic tilting fryer machine for pellet snacks with 200 kg/hr production capacity, diesel heating and stainless steel construction.",
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
    "Diesel heating",
    "Automatic operation",
    "Stainless Steel construction",
    "200 L oil capacity",
    "200°C frying temperature",
    "5 kW power load",
    "3 phase operation",
    "Suitable for pellet snacks",
    "Made in India",
  ],

  [
    "Kurkure",
    "Pellet Snacks",
    "Puff Snacks",
    "Fried Snacks",
  ],

  [
    {
      q: "What is the production capacity?",
      a: "The listed production capacity is 200 kg/hr.",
    },
    {
      q: "What type of fryer is used?",
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
      a: "The oil capacity is 200 L.",
    },
    {
      q: "What is the frying temperature?",
      a: "The listed frying temperature is 200°C.",
    },
    {
      q: "What is the power load?",
      a: "The power load is 5 kW.",
    },
    {
      q: "What is the country of origin?",
      a: "The machine is Made in India.",
    },
  ]
),
  ],
},
  
];

export function getHotProduct(slug: string) {
  return hotProducts.find((p) => p.slug === slug);
}

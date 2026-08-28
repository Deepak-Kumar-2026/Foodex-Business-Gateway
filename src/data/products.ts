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
    title: "Corn Puffs Snack Line",
    category: "Batch Fryer",
    image: "/images/machines/Processing Machine/1.webp",
    capacity: "150 kg/hr",
    material: "SS 304",
    power: "3 HP",
    automation: "Semi Automatic",
    summary:
      "Grace presents an exquisite range of Corn Puffs Snack Machines, designed for efficient and reliable production of popular and delectable corn-based snacks loved by all ages. Our Corn Puffs Snack Machine offers a complete solution for producing crispy, airy, and flavorful corn puffs with consistent quality and excellent texture. Using advanced technology and high-quality materials, our machine is engineered to deliver smooth and efficient corn puff production.\\n\\nIt is suitable for manufacturing a wide variety of corn-based snacks with different shapes, sizes, flavors, and seasonings. The machine ensures uniform processing, excellent expansion, and consistent product quality in every batch. Whether you are producing classic buttery corn puffs or spicy and flavored varieties, Grace's Corn Puffs Snack Machine provides the flexibility and performance required for modern snack production.\\n\\nIt is ideal for snack manufacturers looking for reliable operation, high productivity, easy handling, and consistent results. Perfectly suited for small, medium, and large-scale snack production, our Corn Puffs Snack Machine combines efficiency, durability, and advanced technology to help businesses produce high-quality corn puffs with ease. Experience reliable performance and efficient snack production with Grace's Corn Puffs Snack Machine.",
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
    title: "Kurkure Snack Line",
    category: "Batch Fryer",
    image: "/images/machines/Processing Machine/2.webp",
    capacity: "100 kg/hr",
    material: "SS 304",
    power: "18 kW",
    automation: "Semi Automatic, Manual, Automatic",
    summary:
      "Take your snack production to new heights with our state-of-the-art Extruded Corn Stick Line. Designed for the manufacturing of irresistible corn sticks, this advanced production line combines precision engineering with innovative technology to deliver exceptional quality and flavor. Our Extruded Corn Stick Line is equipped with a high-performance extruder that transforms corn-based dough into perfectly shaped and textured sticks. With customizable settings and precise control over temperature and pressure, you can achieve consistent and uniform corn sticks with optimal crunch and taste.\\n\\nFrom classic flavors to unique seasonings, our Extruded Corn Stick Line accommodates a wide range of recipe variations, allowing you to create an extensive portfolio of delicious snacks. Whether you prefer cheesy, spicy, or savory corn sticks, this production line ensures that each batch meets the highest standards of taste and quality. Not only does our Extruded Corn Stick Line offer outstanding snack production capabilities, but it also emphasizes efficiency and safety.\\n\\nWith user-friendly controls, automated processes, and robust safety features, you can streamline your production while maintaining strict quality control measures. Join the snack revolution with Foodax's Extruded Corn Stick Line and captivate snack enthusiasts with your delectable corn stick creations. Enhance your brand reputation and expand your market reach by offering a snack that combines irresistible taste with superior texture. Experience the power of Foodax's Extruded Corn Stick Line and elevate your snack manufacturing to new levels of excellence. Trust in our expertise and cutting-edge technology to deliver unmatched results that will delight consumers and set your brand apart in the competitive snack industry.",
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
    title: "Pellets Chips Snack Frying Line",
    category: "Batch Fryer",
    image: "/images/machines/Processing Machine/3.webp",
    capacity: "Not Specified",
    material: "Mild Steel",
    power: "3 HP",
    automation: "Automatic",
    summary:
      "Experience the perfect balance of quality, efficiency, and flavor with our Pallets Chips Snack Frying Line. Designed for the production of crispy and flavorful pallets chips snacks, this advanced frying line is the ultimate solution for snack manufacturers. Our Pallets Chips Snack Frying Line combines precision engineering with state-of-the-art technology to deliver consistent and superior frying results.\\n\\nWith adjustable temperature controls, precise oil circulation, and efficient heat transfer, you can achieve the perfect texture and taste for your pallets chips snacks every time. From classic salted to bold and spicy flavors, our Pallets Chips Snack Frying Line accommodates a wide range of recipes and seasonings, allowing you to cater to diverse consumer preferences. Whether you're frying potato-based or grain-based pallets chips, our frying line ensures optimal frying conditions and uniformity throughout the batch.\\n\\nNot only does our Pallets Chips Snack Frying Line deliver exceptional frying performance, but it also prioritizes safety and efficiency. With advanced safety features, easy-to-use controls, and a streamlined production process, you can maximize productivity while maintaining strict quality standards. Upgrade your snack production with Foodax's Pallets Chips Snack Frying Line and unlock a world of possibilities in the pallets chips snack market. Craft high-quality, crispy, and delicious snacks that will captivate consumers and elevate your brand to new heights. Discover the unmatched frying capabilities of Foodax's Pallets Chips Snack Frying Line and revolutionize your snack manufacturing process. Trust in our expertise and cutting-edge technology to achieve unparalleled results and satisfy the cravings of snack lovers everywhere.",
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
    title: "Potato Chips Line",
    category: "Batch Fryer",
    image: "/images/machines/Processing Machine/4.webp",
    capacity: "Potato chips 50–60 kg/hr",
    material: "SS 304",
    power: "3 kW",
    automation: "Semi Automatic",
    summary:
      "Unlock the potential of your snack production with our cutting-edge Potato Chips Line. Designed to meet the demands of the ever-growing potato chips market, this advanced production line offers unmatched efficiency, versatility, and quality. Our Potato Chips Line features state-of-the-art equipment and technology that ensures the production of crispy, golden potato chips with consistent texture and flavor.\\n\\nFrom slicing and frying to seasoning and packaging, every step of the process is meticulously controlled to deliver superior quality chips that meet the highest standards of taste and crunch. With customizable settings and precise control over temperature, frying time, and seasoning application, our Potato Chips Line allows you to create a wide variety of flavors and styles. From classic salted chips to unique and innovative blends, you can cater to diverse consumer preferences and stay ahead of the competition.\\n\\nNot only does our Potato Chips Line prioritize taste and quality, but it also emphasizes efficiency and productivity. With automated processes, optimized frying systems, and intelligent packaging solutions, you can maximize throughput, minimize waste, and streamline your production operations. Experience the power of Foodax's Potato Chips Line and elevate your snack brand to new heights. Whether you're a small-scale producer or a large-scale manufacturer, our innovative technology and expertise will empower you to meet the demands of the market and exceed consumer expectations. Join the ranks of successful snack brands and offer irresistible potato chips that leave a lasting impression. Trust in Foodax's Potato Chips Line to deliver exceptional results, enhance your brand reputation, and propel your business forward in the dynamic world of snack manufacturing.",
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
    title: "Banana Chips Line",
    category: "Batch Fryer",
    image: "/images/machines/Processing Machine/5.webp",
    capacity: "75–90 kg/hr",
    material: "Not Specified",
    power: "1 HP",
    automation: "Automatic",
    summary:
      "Discover the perfect solution for producing delicious and crispy banana chips with our advanced Banana Chips Line. This state-of-the-art production line is designed to deliver exceptional quality, efficiency, and versatility, helping you meet the growing demand for tasty and healthy banana chips. Our Banana Chips Line combines cutting-edge technology with precision engineering to ensure consistent results every time.\\n\\nFrom the slicing and frying process to seasoning and packaging, each step is carefully optimized to achieve the perfect balance of flavor, texture, and crunch. With our Banana Chips Line, you have the flexibility to create a wide range of banana chip varieties to cater to diverse consumer preferences. Whether it's classic salted chips, sweet and tangy flavors, or unique blends, you can easily customize the seasoning and achieve the desired taste profiles.\\n\\nIn addition to its exceptional product quality, the Banana Chips Line is designed for efficiency and productivity. Automated processes, advanced frying systems, and intelligent packaging solutions ensure maximum throughput, reduced waste, and streamlined operations, allowing you to meet the demands of the market with ease. Embrace the opportunity to expand your snack business with our Banana Chips Line. Whether you're a small-scale producer or a large-scale manufacturer, Foodax's expertise and cutting-edge technology will empower you to create high-quality banana chips that leave a lasting impression on consumers. Choose Foodax's Banana Chips Line and embark on a journey of flavor, innovation, and success. Elevate your snack brand with irresistible banana chips that captivate taste buds and stand out in the market. Trust in our expertise and let us be your partner in achieving excellence in the world of banana chip manufacturing.",
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
    title: "Namkeen Frying Line",
    category: "Batch Fryer",
    image: "/images/machines/Processing Machine/6.webp",
    capacity: "100 kg/hr",
    material: "Stainless Steel",
    power: "Not Specified",
    automation: "Semi-Automatic",
    summary:
      "The Namkeen Frying Machine is a state-of-the-art equipment designed to meet the needs of snack food manufacturers in the production of crispy and delicious namkeen snacks. This advanced frying machine is specifically engineered to provide efficient and consistent frying results, ensuring high-quality output every time. With its robust construction and innovative features, the Namkeen Frying Machine offers precise temperature control, allowing for optimal frying conditions to achieve the perfect texture and taste of namkeen snacks.\\n\\nThe machine is equipped with advanced heating elements and a well-designed frying chamber to ensure uniform heat distribution, minimizing product variations and ensuring even frying. The Namkeen Frying Machine also incorporates user-friendly controls and safety features to enhance productivity and operator convenience. It provides adjustable frying time and temperature settings, allowing operators to customize the frying process according to the specific requirements of different namkeen snack varieties.\\n\\nAdditionally, safety mechanisms such as temperature sensors and automatic shut-off systems are implemented to prevent overheating and ensure safe operation. With its high capacity and efficient frying capabilities, the Namkeen Frying Machine is ideal for large-scale namkeen production. It enables snack food manufacturers to meet the growing demand for crispy and flavorful namkeen snacks while maintaining consistent quality and reducing production time. Investing in a Namkeen Frying Machine empowers snack food manufacturers to enhance their production efficiency, achieve consistent product quality, and cater to the increasing market demand for delicious namkeen snacks.",
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
    title: "Matar Frying Line",
    category: "Batch Fryer",
    image: "/images/machines/Processing Machine/7.webp",
    capacity: "100 kg/hr",
    material: "Not Specified",
    power: "1 HP",
    automation: "Automatic",
    summary:
      "The Matar Frying Line is a specialized processing line designed for the efficient and uniform frying of green peas, also known as matar. It is a comprehensive solution that incorporates various equipment and processes to ensure the production of crispy and flavorful fried matar. The processing line starts with a washing and sorting system, where fresh green peas are thoroughly cleaned and sorted to remove any impurities or damaged peas. The peas are then blanched to maintain their vibrant color and preserve their natural texture.\\n\\nNext, the blanched peas are carefully dried to remove excess moisture, ensuring optimal frying conditions. The dried peas are then transferred to a continuous frying system, which consists of a specially designed fryer with precise temperature control and efficient oil circulation. This ensures that the peas are evenly fried to a crispy and golden-brown texture while maintaining their natural flavor. During the frying process, the peas are continuously agitated and gently mixed to ensure uniform frying and to prevent them from sticking together. The frying parameters, such as temperature and frying time, are carefully controlled to achieve the desired texture and color while minimizing oil absorption.\\n\\nAfter frying, the fried matar are conveyed to a seasoning system, where they can be coated with a variety of seasonings and flavors to enhance their taste. This system allows for precise control of the seasoning application, ensuring that the fried matar are evenly coated and flavorful. Finally, the fried and seasoned matar are conveyed to a packaging system, where they are efficiently packed into bags or containers, ready for distribution and consumption. The packaging system can be customized to meet specific requirements, such as portioning, sealing, and labeling.",
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
    title: "Popcorn Processing Line",
    category: "Batch Fryer",
    image: "/images/machines/Processing Machine/8.webp",
    capacity: "150 kg/hr",
    material: "SS 304",
    power: "3 HP",
    automation: "Semi Automatic",
    summary:
      "The Popcorn Processing Line is a comprehensive solution designed for the efficient production of delicious and high-quality popcorn. It combines various equipment and processes to transform raw popcorn kernels into fluffy and crunchy popcorn snacks. The processing line begins with a cleaning and sorting system, where the raw popcorn kernels are thoroughly cleaned to remove any impurities or foreign particles. This ensures the quality and purity of the popcorn.\\n\\nOnce cleaned, the kernels are transferred to a specially designed popping machine. This machine utilizes hot air or oil to heat the kernels, causing them to burst and transform into popcorn. The popping machine ensures precise temperature control and efficient popping, resulting in evenly popped kernels with minimal waste. After popping, the popcorn is conveyed to a cooling and sifting system. This system allows the popcorn to cool down and removes any remaining unpopped kernels or small debris. The cooling process helps to maintain the optimal texture and crispiness of the popcorn.\\n\\nNext, the popcorn is transferred to a seasoning and flavoring system. This system allows for the precise application of a variety of seasonings, such as butter, salt, cheese, caramel, or other custom flavors. The seasoning can be applied in a uniform and controlled manner to ensure that each popcorn kernel is coated with the desired flavor. Finally, the seasoned popcorn is conveyed to a packaging system, where it is efficiently packed into bags or containers. The packaging system can be customized to meet specific requirements, such as portioning, sealing, and labeling. It ensures that the popcorn remains fresh and protected until it reaches the consumers.",
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
    title: "Tortilla Chips Processing Line",
    category: "Batch Fryer",
    image: "/images/machines/Processing Machine/9.webp",
    capacity: "Not Specified",
    material: "Not Specified",
    power: "Not Specified",
    automation: "Automatic",
    summary:
      "The Tortilla Chips Processing Line is a comprehensive solution designed for efficient and high-quality production of crispy and flavorful tortilla chips. This advanced processing line combines various equipment and processes to transform raw ingredients into delicious finished tortilla chips. The processing line begins with a dough mixing system, where a precisely controlled blend of corn flour, water, and other ingredients is mixed to create a consistent and smooth dough. The dough is then fed into a tortilla dough sheeter, which rolls it into thin and uniform sheets.\\n\\nThese sheets are then cut into desired shapes and sizes using a tortilla chip cutter, ensuring consistent and perfectly shaped chips. Once the chips are cut, they are transferred to a continuous frying system. This system features a specially designed fryer with precise temperature control and efficient oil circulation, ensuring that the chips are evenly cooked to a crispy texture. The frying process is carefully monitored to maintain consistent frying conditions and to achieve the desired golden color and taste.\\n\\nAfter frying, the tortilla chips are conveyed to a seasoning and flavoring system, where they are coated with a variety of delicious seasonings and spices. This system allows for precise control of the seasoning application, ensuring that each chip is perfectly flavored. Finally, the tortilla chips are conveyed to a packaging system, where they are efficiently and hygienically packed into bags or containers. The packaging system can be customized to meet specific requirements, such as portioning, sealing, and labeling. The Tortilla Chips Processing Line is designed to streamline the production process, improve productivity, and ensure consistent quality of tortilla chips. It offers flexibility in terms of chip size, shape, and flavor options, allowing manufacturers to cater to diverse consumer preferences and market demands.",
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
  slug: "Processing Machine",
  name: "Processing Machine",
  products: [
    p(
      "Corn Puffs Snack Line",
      "/images/machines/Processing Machine/1.webp",
      "Grace presents an exquisite range of Corn Puffs Snack Machines, designed for efficient and reliable production of popular and delectable corn-based snacks loved by all ages. Our Corn Puffs Snack Machine offers a complete solution for producing crispy, airy, and flavorful corn puffs with consistent quality and excellent texture. Using advanced technology and high-quality materials, our machine is engineered to deliver smooth and efficient corn puff production. It is suitable for manufacturing a wide variety of corn-based snacks with different shapes, sizes, flavors, and seasonings. The machine ensures uniform processing, excellent expansion, and consistent product quality in every batch. Whether you are producing classic buttery corn puffs or spicy and flavored varieties, Grace's Corn Puffs Snack Machine provides the flexibility and performance required for modern snack production. It is ideal for snack manufacturers looking for reliable operation, high productivity, easy handling, and consistent results. Perfectly suited for small, medium, and large-scale snack production, our Corn Puffs Snack Machine combines efficiency, durability, and advanced technology to help businesses produce high-quality corn puffs with ease. Experience reliable performance and efficient snack production with Grace's Corn Puffs Snack Machine.",
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
  "Kurkure Snack Line",
      "/images/machines/Processing Machine/2.webp",
      "Take your snack production to new heights with our state-of-the-art Extruded Corn Stick Line. Designed for the manufacturing of irresistible corn sticks, this advanced production line combines precision engineering with innovative technology to deliver exceptional quality and flavor. Our Extruded Corn Stick Line is equipped with a high-performance extruder that transforms corn-based dough into perfectly shaped and textured sticks. With customizable settings and precise control over temperature and pressure, you can achieve consistent and uniform corn sticks with optimal crunch and taste. From classic flavors to unique seasonings, our Extruded Corn Stick Line accommodates a wide range of recipe variations, allowing you to create an extensive portfolio of delicious snacks. Whether you prefer cheesy, spicy, or savory corn sticks, this production line ensures that each batch meets the highest standards of taste and quality. Not only does our Extruded Corn Stick Line offer outstanding snack production capabilities, but it also emphasizes efficiency and safety. With user-friendly controls, automated processes, and robust safety features, you can streamline your production while maintaining strict quality control measures. Join the snack revolution with Foodax's Extruded Corn Stick Line and captivate snack enthusiasts with your delectable corn stick creations. Enhance your brand reputation and expand your market reach by offering a snack that combines irresistible taste with superior texture. Experience the power of Foodax's Extruded Corn Stick Line and elevate your snack manufacturing to new levels of excellence. Trust in our expertise and cutting-edge technology to deliver unmatched results that will delight consumers and set your brand apart in the competitive snack industry.",
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
  "Pellets Chips Snack Frying Line",
      "/images/machines/Processing Machine/3.webp",
      "Experience the perfect balance of quality, efficiency, and flavor with our Pallets Chips Snack Frying Line. Designed for the production of crispy and flavorful pallets chips snacks, this advanced frying line is the ultimate solution for snack manufacturers. Our Pallets Chips Snack Frying Line combines precision engineering with state-of-the-art technology to deliver consistent and superior frying results. With adjustable temperature controls, precise oil circulation, and efficient heat transfer, you can achieve the perfect texture and taste for your pallets chips snacks every time. From classic salted to bold and spicy flavors, our Pallets Chips Snack Frying Line accommodates a wide range of recipes and seasonings, allowing you to cater to diverse consumer preferences. Whether you're frying potato-based or grain-based pallets chips, our frying line ensures optimal frying conditions and uniformity throughout the batch. Not only does our Pallets Chips Snack Frying Line deliver exceptional frying performance, but it also prioritizes safety and efficiency. With advanced safety features, easy-to-use controls, and a streamlined production process, you can maximize productivity while maintaining strict quality standards. Upgrade your snack production with Foodax's Pallets Chips Snack Frying Line and unlock a world of possibilities in the pallets chips snack market. Craft high-quality, crispy, and delicious snacks that will captivate consumers and elevate your brand to new heights. Discover the unmatched frying capabilities of Foodax's Pallets Chips Snack Frying Line and revolutionize your snack manufacturing process. Trust in our expertise and cutting-edge technology to achieve unparalleled results and satisfy the cravings of snack lovers everywhere.",
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
  "Potato Chips Line",
      "/images/machines/Processing Machine/4.webp",
      "Unlock the potential of your snack production with our cutting-edge Potato Chips Line. Designed to meet the demands of the ever-growing potato chips market, this advanced production line offers unmatched efficiency, versatility, and quality. Our Potato Chips Line features state-of-the-art equipment and technology that ensures the production of crispy, golden potato chips with consistent texture and flavor. From slicing and frying to seasoning and packaging, every step of the process is meticulously controlled to deliver superior quality chips that meet the highest standards of taste and crunch. With customizable settings and precise control over temperature, frying time, and seasoning application, our Potato Chips Line allows you to create a wide variety of flavors and styles. From classic salted chips to unique and innovative blends, you can cater to diverse consumer preferences and stay ahead of the competition. Not only does our Potato Chips Line prioritize taste and quality, but it also emphasizes efficiency and productivity. With automated processes, optimized frying systems, and intelligent packaging solutions, you can maximize throughput, minimize waste, and streamline your production operations. Experience the power of Foodax's Potato Chips Line and elevate your snack brand to new heights. Whether you're a small-scale producer or a large-scale manufacturer, our innovative technology and expertise will empower you to meet the demands of the market and exceed consumer expectations. Join the ranks of successful snack brands and offer irresistible potato chips that leave a lasting impression. Trust in Foodax's Potato Chips Line to deliver exceptional results, enhance your brand reputation, and propel your business forward in the dynamic world of snack manufacturing.",
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
  "Banana Chips Line",
      "/images/machines/Processing Machine/5.webp",
      "Discover the perfect solution for producing delicious and crispy banana chips with our advanced Banana Chips Line. This state-of-the-art production line is designed to deliver exceptional quality, efficiency, and versatility, helping you meet the growing demand for tasty and healthy banana chips. Our Banana Chips Line combines cutting-edge technology with precision engineering to ensure consistent results every time. From the slicing and frying process to seasoning and packaging, each step is carefully optimized to achieve the perfect balance of flavor, texture, and crunch. With our Banana Chips Line, you have the flexibility to create a wide range of banana chip varieties to cater to diverse consumer preferences. Whether it's classic salted chips, sweet and tangy flavors, or unique blends, you can easily customize the seasoning and achieve the desired taste profiles. In addition to its exceptional product quality, the Banana Chips Line is designed for efficiency and productivity. Automated processes, advanced frying systems, and intelligent packaging solutions ensure maximum throughput, reduced waste, and streamlined operations, allowing you to meet the demands of the market with ease. Embrace the opportunity to expand your snack business with our Banana Chips Line. Whether you're a small-scale producer or a large-scale manufacturer, Foodax's expertise and cutting-edge technology will empower you to create high-quality banana chips that leave a lasting impression on consumers. Choose Foodax's Banana Chips Line and embark on a journey of flavor, innovation, and success. Elevate your snack brand with irresistible banana chips that captivate taste buds and stand out in the market. Trust in our expertise and let us be your partner in achieving excellence in the world of banana chip manufacturing.",
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
  "Namkeen Frying Line",
      "/images/machines/Processing Machine/6.webp",
      "The Namkeen Frying Machine is a state-of-the-art equipment designed to meet the needs of snack food manufacturers in the production of crispy and delicious namkeen snacks. This advanced frying machine is specifically engineered to provide efficient and consistent frying results, ensuring high-quality output every time. With its robust construction and innovative features, the Namkeen Frying Machine offers precise temperature control, allowing for optimal frying conditions to achieve the perfect texture and taste of namkeen snacks. The machine is equipped with advanced heating elements and a well-designed frying chamber to ensure uniform heat distribution, minimizing product variations and ensuring even frying. The Namkeen Frying Machine also incorporates user-friendly controls and safety features to enhance productivity and operator convenience. It provides adjustable frying time and temperature settings, allowing operators to customize the frying process according to the specific requirements of different namkeen snack varieties. Additionally, safety mechanisms such as temperature sensors and automatic shut-off systems are implemented to prevent overheating and ensure safe operation. With its high capacity and efficient frying capabilities, the Namkeen Frying Machine is ideal for large-scale namkeen production. It enables snack food manufacturers to meet the growing demand for crispy and flavorful namkeen snacks while maintaining consistent quality and reducing production time. Investing in a Namkeen Frying Machine empowers snack food manufacturers to enhance their production efficiency, achieve consistent product quality, and cater to the increasing market demand for delicious namkeen snacks.",
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
  "Matar Frying Line",
      "/images/machines/Processing Machine/7.webp",
      "The Matar Frying Line is a specialized processing line designed for the efficient and uniform frying of green peas, also known as matar. It is a comprehensive solution that incorporates various equipment and processes to ensure the production of crispy and flavorful fried matar. The processing line starts with a washing and sorting system, where fresh green peas are thoroughly cleaned and sorted to remove any impurities or damaged peas. The peas are then blanched to maintain their vibrant color and preserve their natural texture. Next, the blanched peas are carefully dried to remove excess moisture, ensuring optimal frying conditions. The dried peas are then transferred to a continuous frying system, which consists of a specially designed fryer with precise temperature control and efficient oil circulation. This ensures that the peas are evenly fried to a crispy and golden-brown texture while maintaining their natural flavor. During the frying process, the peas are continuously agitated and gently mixed to ensure uniform frying and to prevent them from sticking together. The frying parameters, such as temperature and frying time, are carefully controlled to achieve the desired texture and color while minimizing oil absorption. After frying, the fried matar are conveyed to a seasoning system, where they can be coated with a variety of seasonings and flavors to enhance their taste. This system allows for precise control of the seasoning application, ensuring that the fried matar are evenly coated and flavorful. Finally, the fried and seasoned matar are conveyed to a packaging system, where they are efficiently packed into bags or containers, ready for distribution and consumption. The packaging system can be customized to meet specific requirements, such as portioning, sealing, and labeling.",
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
  "Popcorn Processing Line",
      "/images/machines/Processing Machine/8.webp",
      "The Popcorn Processing Line is a comprehensive solution designed for the efficient production of delicious and high-quality popcorn. It combines various equipment and processes to transform raw popcorn kernels into fluffy and crunchy popcorn snacks. The processing line begins with a cleaning and sorting system, where the raw popcorn kernels are thoroughly cleaned to remove any impurities or foreign particles. This ensures the quality and purity of the popcorn. Once cleaned, the kernels are transferred to a specially designed popping machine. This machine utilizes hot air or oil to heat the kernels, causing them to burst and transform into popcorn. The popping machine ensures precise temperature control and efficient popping, resulting in evenly popped kernels with minimal waste. After popping, the popcorn is conveyed to a cooling and sifting system. This system allows the popcorn to cool down and removes any remaining unpopped kernels or small debris. The cooling process helps to maintain the optimal texture and crispiness of the popcorn. Next, the popcorn is transferred to a seasoning and flavoring system. This system allows for the precise application of a variety of seasonings, such as butter, salt, cheese, caramel, or other custom flavors. The seasoning can be applied in a uniform and controlled manner to ensure that each popcorn kernel is coated with the desired flavor. Finally, the seasoned popcorn is conveyed to a packaging system, where it is efficiently packed into bags or containers. The packaging system can be customized to meet specific requirements, such as portioning, sealing, and labeling. It ensures that the popcorn remains fresh and protected until it reaches the consumers.",
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
  "Tortilla Chips Processing Line",
      "/images/machines/Processing Machine/9.webp",
      "The Tortilla Chips Processing Line is a comprehensive solution designed for efficient and high-quality production of crispy and flavorful tortilla chips. This advanced processing line combines various equipment and processes to transform raw ingredients into delicious finished tortilla chips. The processing line begins with a dough mixing system, where a precisely controlled blend of corn flour, water, and other ingredients is mixed to create a consistent and smooth dough. The dough is then fed into a tortilla dough sheeter, which rolls it into thin and uniform sheets. These sheets are then cut into desired shapes and sizes using a tortilla chip cutter, ensuring consistent and perfectly shaped chips. Once the chips are cut, they are transferred to a continuous frying system. This system features a specially designed fryer with precise temperature control and efficient oil circulation, ensuring that the chips are evenly cooked to a crispy texture. The frying process is carefully monitored to maintain consistent frying conditions and to achieve the desired golden color and taste. After frying, the tortilla chips are conveyed to a seasoning and flavoring system, where they are coated with a variety of delicious seasonings and spices. This system allows for precise control of the seasoning application, ensuring that each chip is perfectly flavored. Finally, the tortilla chips are conveyed to a packaging system, where they are efficiently and hygienically packed into bags or containers. The packaging system can be customized to meet specific requirements, such as portioning, sealing, and labeling. The Tortilla Chips Processing Line is designed to streamline the production process, improve productivity, and ensure consistent quality of tortilla chips. It offers flexibility in terms of chip size, shape, and flavor options, allowing manufacturers to cater to diverse consumer preferences and market demands.",
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
  "Batch Fryers",
      "/images/machines/Processing Machine/10.webp",
      "A Batch Fryer is a specialized piece of equipment used in the food processing industry for frying a variety of food products. It is designed to fry a batch or a specific quantity of food at a time, providing efficient and consistent frying results. The Batch Fryer typically consists of a large frying vat or tank where the oil is heated to the desired temperature. The food items, such as chips, snacks, or other fried products, are placed in a basket or mesh tray and submerged into the hot oil for a specific duration. The fryer is equipped with precise temperature controls to ensure that the oil remains at the optimal frying temperature throughout the cooking process. This helps to achieve even and consistent frying results, with crispy and golden-brown texture. Batch Fryers often come with features such as adjustable frying times and temperature settings, allowing operators to customize the frying process based on the specific requirements of different food products. They may also have built-in oil filtration systems to remove debris and extend the lifespan of the frying oil. Batch Fryers are known for their versatility and can handle a wide range of food items, including potato chips, French fries, chicken nuggets, samosas, and more. They are commonly used in commercial kitchens, food processing plants, and snack manufacturing facilities. The use of a Batch Fryer offers several benefits, including efficient frying operation, consistent frying results, and the ability to handle different food products. It also helps in reducing oil wastage and maintaining the quality and taste of the fried food.",
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





  ],
},


{
  slug: "Seasoning Systems",
  name: "Seasoning Systems",
  products: [
    p(
      "Seasoning System",
      "/images/machines/Seasoning Systems/1.webp",
      "A seasoning system is a crucial component in the food processing industry, specifically designed to apply flavorings, spices, and seasonings to food products. It is an automated system that ensures consistent and precise seasoning application, enhancing the taste, aroma, and overall quality of the final product. The seasoning system typically consists of various components, including a hopper or storage container for holding the seasonings, a conveyor or distribution system for moving the food product, and a mechanism for evenly dispersing the seasonings onto the product. The seasoning process begins by loading the desired seasonings into the hopper or storage container. The system then transports the food product, such as chips, snacks, or other food items, through a conveyor belt or similar mechanism. As the product moves along the conveyor, the seasonings are uniformly sprayed, sprinkled, or applied onto the surface of the product. Seasoning systems can be customized to meet specific requirements, allowing operators to adjust the amount and distribution of seasonings based on desired flavor profiles. They may incorporate features like adjustable seasoning intensity, speed control, and even flavor blending capabilities. The benefits of using a seasoning system are manifold. It ensures consistent flavor distribution, eliminates human error in seasoning application, improves production efficiency, and enhances the overall product quality and consumer satisfaction. It also allows for flexibility in experimenting with different flavor combinations and meeting customer preferences. Seasoning systems are commonly used in snack food manufacturing, including potato chips, tortilla chips, popcorn, extruded snacks, and other savory snacks. They are also employed in other food processing applications where controlled and precise seasoning application is required.",
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
        "Kurkure",
        "Seasoned Snacks",
        "Food Processing",
      ],

      [
        {
          q: "What is the capacity of the Seasoning System?",
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
          a: "The listed operating speed is 20 rpm.",
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
          q: "What products can be seasoned?",
          a: "The system can be used for Namkeen, Kurkure and other seasoned snack products.",
        },
        {
          q: "What is the minimum order quantity?",
          a: "The minimum order quantity is 1 Piece.",
        },
      ]
    ),
  ],
},


{
  slug: "Handling Systems",
  name: "Handling Systems",
  products: [
    p(
      "Handling System",
      "/images/machines/Handling Systems/1.webp",
      "Product handling systems are integral components of industrial operations that involve the movement, transportation, and manipulation of various products or materials within a production facility or supply chain. These systems are designed to optimize efficiency, streamline processes, and ensure the safe and reliable handling of goods. Product handling systems encompass a wide range of equipment and technologies, including conveyor systems, automated guided vehicles (AGVs), robotic arms, sorting systems, palletizers, and more. These systems can be customized to meet the specific needs of different industries and applications. The primary purpose of product handling systems is to facilitate the seamless flow of goods throughout the production or distribution process. They enable the smooth transfer of products from one stage to another, minimizing manual labor and reducing the risk of errors or damage. Product handling systems offer numerous benefits to businesses. They enhance productivity by automating repetitive tasks, increasing throughput, and reducing handling time. They also improve safety by minimizing the risk of injuries associated with manual material handling. Efficient product handling systems contribute to better inventory management and order fulfillment processes. They enable faster and more accurate picking, sorting, and packaging of products, resulting in improved customer satisfaction and reduced order processing times. Moreover, these systems can be integrated with other technologies, such as barcode scanners, sensors, and software solutions, to enhance control, visibility, and data tracking throughout the handling process. This allows businesses to monitor and optimize their operations, identify bottlenecks, and make informed decisions for process improvement.",
      "Not Specified",
      "Not Specified",
      "Automatic",

      [
        { label: "Machine Type", value: "Handling System" },
        { label: "Application", value: "Food Processing" },
        { label: "Automation Grade", value: "Automatic" },
        { label: "Material", value: "Stainless Steel" },
        { label: "Minimum Order Quantity", value: "1 Piece" },
      ],

      [
        "Efficient product handling",
        "Automatic operation",
        "Suitable for food processing",
        "Stainless Steel construction",
        "Designed for industrial applications",
      ],

      [
        "Snack Products",
        "Food Processing",
        "Potato Chips",
        "Namkeen",
        "Fryums",
      ],

      [
        {
          q: "What is the Handling System used for?",
          a: "The Handling System is designed for efficient movement, transfer and handling of food processing and snack products.",
        },
        {
          q: "Is the Handling System automatic?",
          a: "The system is specified as Automatic.",
        },
        {
          q: "What material is used?",
          a: "The system is specified with Stainless Steel construction.",
        },
        {
          q: "What products can be handled?",
          a: "The system can be used for snack products and other food processing applications.",
        },
        {
          q: "What is the minimum order quantity?",
          a: "The minimum order quantity is 1 Piece.",
        },
      ]
    ),
  ],
},

{
  slug: "Packaging System",
  name: "Packaging System",
  products: [
    p(
      "Pillow Packaging Machine",
      "/images/machines/Packaging System/1.webp",
      "Our Pilow Packaging Machine is a cutting-edge solution that simplifies the packaging process and ensures the preservation of product freshness. This versatile machine is designed to create Pilow-shaped packs, which are a popular choice for packaging various items, including snacks, confectionery, pharmaceuticals, and more. With precision engineering and user-friendly controls, our Pilow Packaging Machine delivers efficient and consistent packaging results. The automated operation streamlines the process, reducing labor requirements and increasing productivity. From sealing to cutting, each step is meticulously executed, ensuring airtight and secure packaging that keeps products fresh for extended periods. Versatility is a key feature of our Pilow Packaging Machine, as it can handle different packaging materials and sizes. Whether you need to package single items or multiple units, this machine adapts to your specific requirements, delivering uniform and appealing Pilow packs every time. In addition to efficiency and versatility, our Pilow Packaging Machine prioritizes product integrity. The sealing process ensures that products remain protected from external elements, such as moisture and contaminants, maintaining their quality and flavor. Whether you are a small business or a large-scale manufacturer, our Pilow Packaging Machine is designed to enhance your packaging efficiency and elevate the presentation of your products. Experience the convenience and reliability of our Pilow Packaging Machine, and let it seal the goodness of your offerings while preserving their freshness for an exceptional customer experience.",
      "Not Specified",
      "Not Specified",
      "Automatic",

      [
        { label: "Machine Type", value: "Pillow Packaging Machine" },
        { label: "Application", value: "Food Packaging" },
        { label: "Automation Grade", value: "Automatic" },
        { label: "Minimum Order Quantity", value: "1 Piece" },
      ],

      [
        "Automatic packaging operation",
        "Pillow-type packaging",
        "Suitable for food products",
        "Industrial packaging application",
        "Efficient and reliable packaging",
      ],

      [
        "Namkeen",
        "Chips",
        "Fryums",
        "Snack Products",
        "Food Products",
      ],

      [
        {
          q: "What is the Pillow Packaging Machine used for?",
          a: "It is used for efficient packaging of food and snack products.",
        },
        {
          q: "Is the machine automatic?",
          a: "The machine is specified as Automatic.",
        },
        {
          q: "What type of packaging does it provide?",
          a: "It is designed for pillow-type packaging.",
        },
        {
          q: "What products can be packed?",
          a: "It can be used for Namkeen, Chips, Fryums and other snack products.",
        },
      ]
    ),

    p(
      "V F F S Servo Bagger",
      "/images/machines/Packaging System/2.webp",
      "The VFFS Machine with Servo Bagger is a state-of-the-art packaging system that combines the benefits of vertical form-fill-seal technology with advanced servo-driven automation. This machine is specifically designed to provide efficient and precise bagging solutions for a wide range of products, including snacks, powders, grains, liquids, and more. One of the key features of the VFFS Machine with Servo Bagger is its servo-driven operation. Servo motors offer precise control and positioning, ensuring accurate bag forming, filling, and sealing. This results in consistent and high-quality packaging, minimizing product waste and maximizing efficiency. The machine's versatility is another advantage. It can handle various bag types and sizes, including pillow bags, gusseted bags, and quad seal bags. This allows for flexibility in packaging different products and meeting diverse customer requirements. The machine's adjustable bagging parameters make it easy to accommodate different product weights and fill volumes. The VFFS Machine with Servo Bagger also offers user-friendly features for ease of operation. Its intuitive touchscreen interface allows operators to easily set bagging parameters, monitor the production process, and make adjustments as needed. The machine's PLC-based control system ensures reliable performance and enables seamless integration with other equipment in the production line. In addition, the machine is designed for high-speed operation, optimizing productivity and throughput. It can efficiently handle large volumes of products, making it ideal for demanding production environments. The machine's robust construction and reliable components contribute to its durability and long-term performance. Maintenance and cleaning are simplified with the VFFS Machine with Servo Bagger. It is designed for easy access to critical components, reducing downtime for maintenance tasks. The machine's hygienic design and washdown capabilities ensure proper sanitation and compliance with food safety standards.",
      "Not Specified",
      "Not Specified",
      "Automatic",

      [
        { label: "Machine Type", value: "VFFS Servo Bagger" },
        { label: "Application", value: "Food Packaging" },
        { label: "Automation Grade", value: "Automatic" },
        { label: "Minimum Order Quantity", value: "1 Piece" },
      ],

      [
        "VFFS packaging system",
        "Servo-controlled operation",
        "Automatic packaging",
        "Accurate product filling",
        "Suitable for food and snack products",
      ],

      [
        "Namkeen",
        "Chips",
        "Fryums",
        "Snack Products",
        "Food Products",
      ],

      [
        {
          q: "What is the VFFS Servo Bagger used for?",
          a: "It is used for automatic packaging of food and snack products.",
        },
        {
          q: "Is the VFFS Servo Bagger automatic?",
          a: "Yes, the machine is specified as Automatic.",
        },
        {
          q: "What type of machine is it?",
          a: "It is a VFFS Servo Bagger packaging machine.",
        },
        {
          q: "What products can be packed?",
          a: "It can be used for Namkeen, Chips, Fryums and other snack products.",
        },
      ]
    ),
  ],
},


]






export function getHotProduct(slug: string) {
  return hotProducts.find((p) => p.slug === slug);
}

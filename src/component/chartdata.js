let mydata = [
  { Project_Name: "Impala", Year: "Impala PY 1", actual: 3502080.0, reco: 0.0 },
  { Project_Name: "Impala", Year: "Impala PY 2", actual: 0.0, reco: 0.0 },
  { Project_Name: "Impala", Year: "Impala PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Canopy 3.0",
    Year: "Canopy 3.0 PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Canopy 3.0",
    Year: "Canopy 3.0 PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Canopy 3.0",
    Year: "Canopy 3.0 PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Lip S Bee F",
    Year: "Lip S Bee F PY 1",
    actual: 6000461.100000001,
    reco: 0.0,
  },
  {
    Project_Name: "Lip S Bee F",
    Year: "Lip S Bee F PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Lip S Bee F",
    Year: "Lip S Bee F PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  { Project_Name: "Core Void", Year: "Core Void PY 1", actual: 0.0, reco: 0.0 },
  { Project_Name: "Core Void", Year: "Core Void PY 2", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Core Void",
    Year: "Core Void PY 3",
    actual: 6719011.4459999995,
    reco: 0.0,
  },
  {
    Project_Name: "GMB Black Bag Distribution Drive FY22",
    Year: "GMB Black Bag Distribution Drive FY22 PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "GMB Black Bag Distribution Drive FY22",
    Year: "GMB Black Bag Distribution Drive FY22 PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "GMB Black Bag Distribution Drive FY22",
    Year: "GMB Black Bag Distribution Drive FY22 PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  { Project_Name: "Matcha", Year: "Matcha PY 1", actual: 0.0, reco: 0.0 },
  { Project_Name: "Matcha", Year: "Matcha PY 2", actual: 0.0, reco: 0.0 },
  { Project_Name: "Matcha", Year: "Matcha PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Gracias Madre",
    Year: "Gracias Madre PY 1",
    actual: 1463261.8050000004,
    reco: 0.0,
  },
  {
    Project_Name: "Gracias Madre",
    Year: "Gracias Madre PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Gracias Madre",
    Year: "Gracias Madre PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Little Monsters",
    Year: "Little Monsters PY 1",
    actual: 1344600.0,
    reco: 0.0,
  },
  {
    Project_Name: "Little Monsters",
    Year: "Little Monsters PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Little Monsters",
    Year: "Little Monsters PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Project Fireworks - Cleaning",
    Year: "Project Fireworks - Cleaning PY 1",
    actual: 26853120.0,
    reco: 0.0,
  },
  {
    Project_Name: "Project Fireworks - Cleaning",
    Year: "Project Fireworks - Cleaning PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Project Fireworks - Cleaning",
    Year: "Project Fireworks - Cleaning PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "FY22 Ulta Exclusive",
    Year: "FY22 Ulta Exclusive PY 1",
    actual: 862409.4600000001,
    reco: 0.0,
  },
  {
    Project_Name: "FY22 Ulta Exclusive",
    Year: "FY22 Ulta Exclusive PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "FY22 Ulta Exclusive",
    Year: "FY22 Ulta Exclusive PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Meow Target Test",
    Year: "Meow Target Test PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Meow Target Test",
    Year: "Meow Target Test PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Meow Target Test",
    Year: "Meow Target Test PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Project Gig",
    Year: "Project Gig PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Project Gig",
    Year: "Project Gig PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Project Gig",
    Year: "Project Gig PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  { Project_Name: "Kale", Year: "Kale PY 1", actual: 0.0, reco: 0.0 },
  { Project_Name: "Kale", Year: "Kale PY 2", actual: 0.0, reco: 0.0 },
  { Project_Name: "Kale", Year: "Kale PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Facial SPF",
    Year: "Facial SPF PY 1",
    actual: 5263455.629999985,
    reco: 0.0,
  },
  {
    Project_Name: "Facial SPF",
    Year: "Facial SPF PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Facial SPF",
    Year: "Facial SPF PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "FY22 Face and Eye Balms (Un-Make-Up)",
    Year: "FY22 Face and Eye Balms (Un-Make-Up) PY 1",
    actual: 4908128.250000002,
    reco: 0.0,
  },
  {
    Project_Name: "FY22 Face and Eye Balms (Un-Make-Up)",
    Year: "FY22 Face and Eye Balms (Un-Make-Up) PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "FY22 Face and Eye Balms (Un-Make-Up)",
    Year: "FY22 Face and Eye Balms (Un-Make-Up) PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  { Project_Name: "Allspice", Year: "Allspice PY 1", actual: 0.0, reco: 0.0 },
  { Project_Name: "Allspice", Year: "Allspice PY 2", actual: 0.0, reco: 0.0 },
  { Project_Name: "Allspice", Year: "Allspice PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Project Clover",
    Year: "Project Clover PY 1",
    actual: 68493.8925,
    reco: 0.0,
  },
  {
    Project_Name: "Project Clover",
    Year: "Project Clover PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Project Clover",
    Year: "Project Clover PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Waterproof Mascara",
    Year: "Waterproof Mascara PY 1",
    actual: 759306.8100000011,
    reco: 0.0,
  },
  {
    Project_Name: "Waterproof Mascara",
    Year: "Waterproof Mascara PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Waterproof Mascara",
    Year: "Waterproof Mascara PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Solid Lip Gloss",
    Year: "Solid Lip Gloss PY 1",
    actual: 95741.40000000008,
    reco: 0.0,
  },
  {
    Project_Name: "Solid Lip Gloss",
    Year: "Solid Lip Gloss PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Solid Lip Gloss",
    Year: "Solid Lip Gloss PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  { Project_Name: "Solo", Year: "Solo PY 1", actual: 2928000.0, reco: 0.0 },
  { Project_Name: "Solo", Year: "Solo PY 2", actual: 0.0, reco: 0.0 },
  { Project_Name: "Solo", Year: "Solo PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Saffron",
    Year: "Saffron PY 1",
    actual: 18345355.497000027,
    reco: 0.0,
  },
  {
    Project_Name: "Saffron",
    Year: "Saffron PY 2",
    actual: 214831.88999999996,
    reco: 0.0,
  },
  { Project_Name: "Saffron", Year: "Saffron PY 3", actual: 0.0, reco: 0.0 },
  { Project_Name: "Dorothy", Year: "Dorothy PY 1", actual: 0.0, reco: 0.0 },
  { Project_Name: "Dorothy", Year: "Dorothy PY 2", actual: 0.0, reco: 0.0 },
  { Project_Name: "Dorothy", Year: "Dorothy PY 3", actual: 0.0, reco: 0.0 },
  { Project_Name: "Verne", Year: "Verne PY 1", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Verne",
    Year: "Verne PY 2",
    actual: 15346685.489999995,
    reco: 0.0,
  },
  { Project_Name: "Verne", Year: "Verne PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Project Pinocchio",
    Year: "Project Pinocchio PY 1",
    actual: 35904000.0,
    reco: 0.0,
  },
  {
    Project_Name: "Project Pinocchio",
    Year: "Project Pinocchio PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Project Pinocchio",
    Year: "Project Pinocchio PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Brita CY MTI",
    Year: "Brita CY MTI PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Brita CY MTI",
    Year: "Brita CY MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Brita CY MTI",
    Year: "Brita CY MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Burts Bees CY MTI",
    Year: "Burts Bees CY MTI PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Burts Bees CY MTI",
    Year: "Burts Bees CY MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Burts Bees CY MTI",
    Year: "Burts Bees CY MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Cleaning CY MTI",
    Year: "Cleaning CY MTI PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Cleaning CY MTI",
    Year: "Cleaning CY MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Cleaning CY MTI",
    Year: "Cleaning CY MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Foods CY MTI",
    Year: "Foods CY MTI PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Foods CY MTI",
    Year: "Foods CY MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Foods CY MTI",
    Year: "Foods CY MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Glad CY MTI",
    Year: "Glad CY MTI PY 1",
    actual: 3700000.0,
    reco: 0.0,
  },
  {
    Project_Name: "Glad CY MTI",
    Year: "Glad CY MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Glad CY MTI",
    Year: "Glad CY MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "International CY MTI",
    Year: "International CY MTI PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "International CY MTI",
    Year: "International CY MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "International CY MTI",
    Year: "International CY MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Kingsford CY MTI",
    Year: "Kingsford CY MTI PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Kingsford CY MTI",
    Year: "Kingsford CY MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Kingsford CY MTI",
    Year: "Kingsford CY MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Litter CY MTI",
    Year: "Litter CY MTI PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Litter CY MTI",
    Year: "Litter CY MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Litter CY MTI",
    Year: "Litter CY MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "PPD CY MTI",
    Year: "PPD CY MTI PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "PPD CY MTI",
    Year: "PPD CY MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "PPD CY MTI",
    Year: "PPD CY MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "VMS CY MTI",
    Year: "VMS CY MTI PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "VMS CY MTI",
    Year: "VMS CY MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "VMS CY MTI",
    Year: "VMS CY MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Volt",
    Year: "Volt PY 1",
    actual: 244550.0000000002,
    reco: 0.0,
  },
  { Project_Name: "Volt", Year: "Volt PY 2", actual: 0.0, reco: 0.0 },
  { Project_Name: "Volt", Year: "Volt PY 3", actual: 0.0, reco: 0.0 },
  { Project_Name: "Octane", Year: "Octane PY 1", actual: 0.0, reco: 0.0 },
  { Project_Name: "Octane", Year: "Octane PY 2", actual: 0.0, reco: 0.0 },
  { Project_Name: "Octane", Year: "Octane PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "FY22 Rescue 2.0 with Elderberry",
    Year: "FY22 Rescue 2.0 with Elderberry PY 1",
    actual: 3882709.2600000026,
    reco: 0.0,
  },
  {
    Project_Name: "FY22 Rescue 2.0 with Elderberry",
    Year: "FY22 Rescue 2.0 with Elderberry PY 2",
    actual: 86369.46000000002,
    reco: 0.0,
  },
  {
    Project_Name: "FY22 Rescue 2.0 with Elderberry",
    Year: "FY22 Rescue 2.0 with Elderberry PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Ranch Night",
    Year: "Ranch Night PY 1",
    actual: 4060888.7634000024,
    reco: 0.0,
  },
  {
    Project_Name: "Ranch Night",
    Year: "Ranch Night PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Ranch Night",
    Year: "Ranch Night PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Clone Troopers",
    Year: "Clone Troopers PY 1",
    actual: 49464000.0,
    reco: 0.0,
  },
  {
    Project_Name: "Clone Troopers",
    Year: "Clone Troopers PY 2",
    actual: 80724.59999999998,
    reco: 0.0,
  },
  {
    Project_Name: "Clone Troopers",
    Year: "Clone Troopers PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  { Project_Name: "HOBO", Year: "HOBO PY 1", actual: 0.0, reco: 0.0 },
  { Project_Name: "HOBO", Year: "HOBO PY 2", actual: 0.0, reco: 0.0 },
  { Project_Name: "HOBO", Year: "HOBO PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: " Aftermath",
    Year: " Aftermath PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: " Aftermath",
    Year: " Aftermath PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: " Aftermath",
    Year: " Aftermath PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "International Current Launch FY22",
    Year: "International Current Launch FY22 PY 1",
    actual: 50000000.0,
    reco: 0.0,
  },
  {
    Project_Name: "International Current Launch FY22",
    Year: "International Current Launch FY22 PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "International Current Launch FY22",
    Year: "International Current Launch FY22 PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "VMS Current Launch FY22",
    Year: "VMS Current Launch FY22 PY 1",
    actual: 7000000.0,
    reco: 0.0,
  },
  {
    Project_Name: "VMS Current Launch FY22",
    Year: "VMS Current Launch FY22 PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "VMS Current Launch FY22",
    Year: "VMS Current Launch FY22 PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Dinosore",
    Year: "Dinosore PY 1",
    actual: 14813471.82000003,
    reco: 0.0,
  },
  {
    Project_Name: "Dinosore",
    Year: "Dinosore PY 2",
    actual: 73210.98,
    reco: 0.0,
  },
  { Project_Name: "Dinosore", Year: "Dinosore PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Project Triumph",
    Year: "Project Triumph PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Project Triumph",
    Year: "Project Triumph PY 2",
    actual: 145201.152,
    reco: 0.0,
  },
  {
    Project_Name: "Project Triumph",
    Year: "Project Triumph PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Tux",
    Year: "Tux PY 1",
    actual: 65521329.5880002,
    reco: 0.0,
  },
  {
    Project_Name: "Tux",
    Year: "Tux PY 2",
    actual: 1860790.6979999994,
    reco: 0.0,
  },
  { Project_Name: "Tux", Year: "Tux PY 3", actual: 0.0, reco: 0.0 },
  { Project_Name: "50 Cent", Year: "50 Cent PY 1", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "50 Cent",
    Year: "50 Cent PY 2",
    actual: 2938859.16,
    reco: 0.0,
  },
  { Project_Name: "50 Cent", Year: "50 Cent PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Simply Clean (Covid-19)",
    Year: "Simply Clean (Covid-19) PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Simply Clean (Covid-19)",
    Year: "Simply Clean (Covid-19) PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Simply Clean (Covid-19)",
    Year: "Simply Clean (Covid-19) PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  { Project_Name: "Dyson", Year: "Dyson PY 1", actual: 3013920.0, reco: 0.0 },
  {
    Project_Name: "Dyson",
    Year: "Dyson PY 2",
    actual: 10016964.158400001,
    reco: 0.0,
  },
  { Project_Name: "Dyson", Year: "Dyson PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Funkmaster Flex",
    Year: "Funkmaster Flex PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Funkmaster Flex",
    Year: "Funkmaster Flex PY 2",
    actual: 322154.235,
    reco: 0.0,
  },
  {
    Project_Name: "Funkmaster Flex",
    Year: "Funkmaster Flex PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  { Project_Name: "Proton", Year: "Proton PY 1", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Proton",
    Year: "Proton PY 2",
    actual: 807929.3422350001,
    reco: 0.0,
  },
  { Project_Name: "Proton", Year: "Proton PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Crossroads",
    Year: "Crossroads PY 1",
    actual: 7972419.779999996,
    reco: 0.0,
  },
  {
    Project_Name: "Crossroads",
    Year: "Crossroads PY 2",
    actual: 1491898.6655999993,
    reco: 0.0,
  },
  {
    Project_Name: "Crossroads",
    Year: "Crossroads PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Flash Gordon",
    Year: "Flash Gordon PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Flash Gordon",
    Year: "Flash Gordon PY 2",
    actual: 2905872.831599994,
    reco: 0.0,
  },
  {
    Project_Name: "Flash Gordon",
    Year: "Flash Gordon PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Avengers",
    Year: "Avengers PY 1",
    actual: 6815664.02343733,
    reco: 0.0,
  },
  {
    Project_Name: "Avengers",
    Year: "Avengers PY 2",
    actual: 600352.5570299997,
    reco: 0.0,
  },
  { Project_Name: "Avengers", Year: "Avengers PY 3", actual: 0.0, reco: 0.0 },
  { Project_Name: "Douglas", Year: "Douglas PY 1", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Douglas",
    Year: "Douglas PY 2",
    actual: 307055.7299999999,
    reco: 0.0,
  },
  { Project_Name: "Douglas", Year: "Douglas PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Blade Runner",
    Year: "Blade Runner PY 1",
    actual: 256908864.84374726,
    reco: 0.0,
  },
  {
    Project_Name: "Blade Runner",
    Year: "Blade Runner PY 2",
    actual: 10289534.92386019,
    reco: 0.0,
  },
  {
    Project_Name: "Blade Runner",
    Year: "Blade Runner PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Project Zen",
    Year: "Project Zen PY 1",
    actual: 1948385.9687999985,
    reco: 0.0,
  },
  {
    Project_Name: "Project Zen",
    Year: "Project Zen PY 2",
    actual: 198696.14580000006,
    reco: 0.0,
  },
  {
    Project_Name: "Project Zen",
    Year: "Project Zen PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Crypto_Secret Sauces Platform Y2",
    Year: "Crypto_Secret Sauces Platform Y2 PY 1",
    actual: 3466595.628000003,
    reco: 0.0,
  },
  {
    Project_Name: "Crypto_Secret Sauces Platform Y2",
    Year: "Crypto_Secret Sauces Platform Y2 PY 2",
    actual: 1285887.9599999986,
    reco: 0.0,
  },
  {
    Project_Name: "Crypto_Secret Sauces Platform Y2",
    Year: "Crypto_Secret Sauces Platform Y2 PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  { Project_Name: "Chia", Year: "Chia PY 1", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Chia",
    Year: "Chia PY 2",
    actual: 3691526.3212535954,
    reco: 0.0,
  },
  { Project_Name: "Chia", Year: "Chia PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "LL Cool T-360",
    Year: "LL Cool T-360 PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "LL Cool T-360",
    Year: "LL Cool T-360 PY 2",
    actual: 3847724.0700000008,
    reco: 0.0,
  },
  {
    Project_Name: "LL Cool T-360",
    Year: "LL Cool T-360 PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Sprinkles",
    Year: "Sprinkles PY 1",
    actual: 8044144.695000024,
    reco: 0.0,
  },
  {
    Project_Name: "Sprinkles",
    Year: "Sprinkles PY 2",
    actual: 2164171.7250000024,
    reco: 0.0,
  },
  { Project_Name: "Sprinkles", Year: "Sprinkles PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Warlock (1)",
    Year: "Warlock (1) PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Warlock (1)",
    Year: "Warlock (1) PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Warlock (1)",
    Year: "Warlock (1) PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Arcata (1)",
    Year: "Arcata (1) PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Arcata (1)",
    Year: "Arcata (1) PY 2",
    actual: 236464.44209999975,
    reco: 0.0,
  },
  {
    Project_Name: "Arcata (1)",
    Year: "Arcata (1) PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Renaissance",
    Year: "Renaissance PY 1",
    actual: 4653960.840000045,
    reco: 0.0,
  },
  {
    Project_Name: "Renaissance",
    Year: "Renaissance PY 2",
    actual: 17541789.150000297,
    reco: 0.0,
  },
  {
    Project_Name: "Renaissance",
    Year: "Renaissance PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "FY21 CBD",
    Year: "FY21 CBD PY 1",
    actual: 273510.57000000024,
    reco: 0.0,
  },
  {
    Project_Name: "FY21 CBD",
    Year: "FY21 CBD PY 2",
    actual: 488592.5699999997,
    reco: 0.0,
  },
  { Project_Name: "FY21 CBD", Year: "FY21 CBD PY 3", actual: 0.0, reco: 0.0 },
  { Project_Name: "Turmeric", Year: "Turmeric PY 1", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Turmeric",
    Year: "Turmeric PY 2",
    actual: 24522094.18720802,
    reco: 0.0,
  },
  { Project_Name: "Turmeric", Year: "Turmeric PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Brita PY2 MTI",
    Year: "Brita PY2 MTI PY 1",
    actual: 2300000.0,
    reco: 0.0,
  },
  {
    Project_Name: "Brita PY2 MTI",
    Year: "Brita PY2 MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Brita PY2 MTI",
    Year: "Brita PY2 MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Burts Bees PY2 MTI",
    Year: "Burts Bees PY2 MTI PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Burts Bees PY2 MTI",
    Year: "Burts Bees PY2 MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Burts Bees PY2 MTI",
    Year: "Burts Bees PY2 MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Cleaning PY2 MTI",
    Year: "Cleaning PY2 MTI PY 1",
    actual: 2100000.0,
    reco: 0.0,
  },
  {
    Project_Name: "Cleaning PY2 MTI",
    Year: "Cleaning PY2 MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Cleaning PY2 MTI",
    Year: "Cleaning PY2 MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Foods PY2 MTI",
    Year: "Foods PY2 MTI PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Foods PY2 MTI",
    Year: "Foods PY2 MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Foods PY2 MTI",
    Year: "Foods PY2 MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Glad PY2 MTI",
    Year: "Glad PY2 MTI PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Glad PY2 MTI",
    Year: "Glad PY2 MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Glad PY2 MTI",
    Year: "Glad PY2 MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "International PY2 MTI",
    Year: "International PY2 MTI PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "International PY2 MTI",
    Year: "International PY2 MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "International PY2 MTI",
    Year: "International PY2 MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Kingsford PY2 MTI",
    Year: "Kingsford PY2 MTI PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Kingsford PY2 MTI",
    Year: "Kingsford PY2 MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Kingsford PY2 MTI",
    Year: "Kingsford PY2 MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Litter PY2 MTI",
    Year: "Litter PY2 MTI PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Litter PY2 MTI",
    Year: "Litter PY2 MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Litter PY2 MTI",
    Year: "Litter PY2 MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "PPD PY2 MTI",
    Year: "PPD PY2 MTI PY 1",
    actual: 2200000.0,
    reco: 0.0,
  },
  {
    Project_Name: "PPD PY2 MTI",
    Year: "PPD PY2 MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "PPD PY2 MTI",
    Year: "PPD PY2 MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "VMS PY2 MTI",
    Year: "VMS PY2 MTI PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "VMS PY2 MTI",
    Year: "VMS PY2 MTI PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "VMS PY2 MTI",
    Year: "VMS PY2 MTI PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  { Project_Name: "ACDC", Year: "ACDC PY 1", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "ACDC",
    Year: "ACDC PY 2",
    actual: 4560007.679999996,
    reco: 0.0,
  },
  {
    Project_Name: "ACDC",
    Year: "ACDC PY 3",
    actual: 1459433.4899999995,
    reco: 0.0,
  },
  { Project_Name: "TNT", Year: "TNT PY 1", actual: 0.0, reco: 0.0 },
  { Project_Name: "TNT", Year: "TNT PY 2", actual: 0.0, reco: 0.0 },
  { Project_Name: "TNT", Year: "TNT PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "International Prior 2 year Launch FY22",
    Year: "International Prior 2 year Launch FY22 PY 1",
    actual: 90000000.0,
    reco: 0.0,
  },
  {
    Project_Name: "International Prior 2 year Launch FY22",
    Year: "International Prior 2 year Launch FY22 PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "International Prior 2 year Launch FY22",
    Year: "International Prior 2 year Launch FY22 PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Bears (Gain Scent)",
    Year: "Bears (Gain Scent) PY 1",
    actual: 20504400.0,
    reco: 0.0,
  },
  {
    Project_Name: "Bears (Gain Scent)",
    Year: "Bears (Gain Scent) PY 2",
    actual: 12386500.0,
    reco: 0.0,
  },
  {
    Project_Name: "Bears (Gain Scent)",
    Year: "Bears (Gain Scent) PY 3",
    actual: 417000.0,
    reco: 0.0,
  },
  {
    Project_Name: "VMS Prior 2 year Launch FY22",
    Year: "VMS Prior 2 year Launch FY22 PY 1",
    actual: 8000000.0,
    reco: 0.0,
  },
  {
    Project_Name: "VMS Prior 2 year Launch FY22",
    Year: "VMS Prior 2 year Launch FY22 PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "VMS Prior 2 year Launch FY22",
    Year: "VMS Prior 2 year Launch FY22 PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Ultimate Care Lip Balm FY21",
    Year: "Ultimate Care Lip Balm FY21 PY 1",
    actual: 4254714.0000000065,
    reco: 0.0,
  },
  {
    Project_Name: "Ultimate Care Lip Balm FY21",
    Year: "Ultimate Care Lip Balm FY21 PY 2",
    actual: 4482931.290000001,
    reco: 0.0,
  },
  {
    Project_Name: "Ultimate Care Lip Balm FY21",
    Year: "Ultimate Care Lip Balm FY21 PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Project Nosy",
    Year: "Project Nosy PY 1",
    actual: 172021365.3515557,
    reco: 0.0,
  },
  {
    Project_Name: "Project Nosy",
    Year: "Project Nosy PY 2",
    actual: 5631320.924351993,
    reco: 0.0,
  },
  {
    Project_Name: "Project Nosy",
    Year: "Project Nosy PY 3",
    actual: 265501.27912320005,
    reco: 0.0,
  },
  {
    Project_Name: "Tinted Squeeze Wax",
    Year: "Tinted Squeeze Wax PY 1",
    actual: 2218348.2689999924,
    reco: 0.0,
  },
  {
    Project_Name: "Tinted Squeeze Wax",
    Year: "Tinted Squeeze Wax PY 2",
    actual: 2663903.4659999944,
    reco: 0.0,
  },
  {
    Project_Name: "Tinted Squeeze Wax",
    Year: "Tinted Squeeze Wax PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  { Project_Name: "Split", Year: "Split PY 1", actual: 0.0, reco: 0.0 },
  { Project_Name: "Split", Year: "Split PY 2", actual: 0.0, reco: 0.0 },
  { Project_Name: "Split", Year: "Split PY 3", actual: 0.0, reco: 0.0 },
  { Project_Name: "Merlin", Year: "Merlin PY 1", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Merlin",
    Year: "Merlin PY 2",
    actual: 1668328.6517999996,
    reco: 0.0,
  },
  {
    Project_Name: "Merlin",
    Year: "Merlin PY 3",
    actual: 1806824.3346,
    reco: 0.0,
  },
  {
    Project_Name: "FY21 Facial Toners",
    Year: "FY21 Facial Toners PY 1",
    actual: 3234199.4400000055,
    reco: 0.0,
  },
  {
    Project_Name: "FY21 Facial Toners",
    Year: "FY21 Facial Toners PY 2",
    actual: 6942443.579999998,
    reco: 0.0,
  },
  {
    Project_Name: "FY21 Facial Toners",
    Year: "FY21 Facial Toners PY 3",
    actual: 1042069.2299999997,
    reco: 0.0,
  },
  {
    Project_Name: "Gilligan (1)",
    Year: "Gilligan (1) PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Gilligan (1)",
    Year: "Gilligan (1) PY 2",
    actual: 1793758.3650000016,
    reco: 0.0,
  },
  {
    Project_Name: "Gilligan (1)",
    Year: "Gilligan (1) PY 3",
    actual: 427651.29000000015,
    reco: 0.0,
  },
  {
    Project_Name: "Deja Blu",
    Year: "Deja Blu PY 1",
    actual: 8949000.0,
    reco: 0.0,
  },
  {
    Project_Name: "Deja Blu",
    Year: "Deja Blu PY 2",
    actual: 7032000.0,
    reco: 0.0,
  },
  { Project_Name: "Deja Blu", Year: "Deja Blu PY 3", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Galaxy",
    Year: "Galaxy PY 1",
    actual: 1844342.4899999967,
    reco: 0.0,
  },
  {
    Project_Name: "Galaxy",
    Year: "Galaxy PY 2",
    actual: 1503426.6119999979,
    reco: 0.0,
  },
  {
    Project_Name: "Galaxy",
    Year: "Galaxy PY 3",
    actual: 758639.1239999994,
    reco: 0.0,
  },
  {
    Project_Name: "Chedda-licious",
    Year: "Chedda-licious PY 1",
    actual: 543478.3920000006,
    reco: 0.0,
  },
  {
    Project_Name: "Chedda-licious",
    Year: "Chedda-licious PY 2",
    actual: 1399546.0800000057,
    reco: 0.0,
  },
  {
    Project_Name: "Chedda-licious",
    Year: "Chedda-licious PY 3",
    actual: 957693.7799999993,
    reco: 0.0,
  },
  { Project_Name: "Shark", Year: "Shark PY 1", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Shark",
    Year: "Shark PY 2",
    actual: 1641661.5299999989,
    reco: 0.0,
  },
  {
    Project_Name: "Shark",
    Year: "Shark PY 3",
    actual: 426240.00000000023,
    reco: 0.0,
  },
  {
    Project_Name: "Skipper",
    Year: "Skipper PY 1",
    actual: 468700.8374999997,
    reco: 0.0,
  },
  {
    Project_Name: "Skipper",
    Year: "Skipper PY 2",
    actual: 1158005.7675000008,
    reco: 0.0,
  },
  {
    Project_Name: "Skipper",
    Year: "Skipper PY 3",
    actual: 940628.1975000004,
    reco: 0.0,
  },
  {
    Project_Name: "Slim Jim 1",
    Year: "Slim Jim 1 PY 1",
    actual: 26638295.623799708,
    reco: 0.0,
  },
  {
    Project_Name: "Slim Jim 1",
    Year: "Slim Jim 1 PY 2",
    actual: 30483959.860199615,
    reco: 0.0,
  },
  {
    Project_Name: "Slim Jim 1",
    Year: "Slim Jim 1 PY 3",
    actual: 14614721.330999907,
    reco: 0.0,
  },
  {
    Project_Name: "Superior Protection",
    Year: "Superior Protection PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Superior Protection",
    Year: "Superior Protection PY 2",
    actual: 21002250.00000019,
    reco: 0.0,
  },
  {
    Project_Name: "Superior Protection",
    Year: "Superior Protection PY 3",
    actual: 7000760.250000063,
    reco: 0.0,
  },
  {
    Project_Name: "Armstrong (1)",
    Year: "Armstrong (1) PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Armstrong (1)",
    Year: "Armstrong (1) PY 2",
    actual: 27406512.085022286,
    reco: 0.0,
  },
  {
    Project_Name: "Armstrong (1)",
    Year: "Armstrong (1) PY 3",
    actual: 8476271.931042597,
    reco: 0.0,
  },
  {
    Project_Name: "Full Scoop",
    Year: "Full Scoop PY 1",
    actual: 2650618.214999997,
    reco: 0.0,
  },
  {
    Project_Name: "Full Scoop",
    Year: "Full Scoop PY 2",
    actual: 2624669.595000003,
    reco: 0.0,
  },
  {
    Project_Name: "Full Scoop",
    Year: "Full Scoop PY 3",
    actual: 1433989.515,
    reco: 0.0,
  },
  {
    Project_Name: "Galaga",
    Year: "Galaga PY 1",
    actual: 255450.94050000006,
    reco: 0.0,
  },
  {
    Project_Name: "Galaga",
    Year: "Galaga PY 2",
    actual: 453041.7779999992,
    reco: 0.0,
  },
  {
    Project_Name: "Galaga",
    Year: "Galaga PY 3",
    actual: 200816.08049999984,
    reco: 0.0,
  },
  { Project_Name: "Base Camp", Year: "Base Camp PY 1", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Base Camp",
    Year: "Base Camp PY 2",
    actual: 14611565.80800012,
    reco: 0.0,
  },
  {
    Project_Name: "Base Camp",
    Year: "Base Camp PY 3",
    actual: 4127088.527999991,
    reco: 0.0,
  },
  {
    Project_Name: "Project Polyjuice (1)",
    Year: "Project Polyjuice (1) PY 1",
    actual: 3961842.696000001,
    reco: 0.0,
  },
  {
    Project_Name: "Project Polyjuice (1)",
    Year: "Project Polyjuice (1) PY 2",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Project Polyjuice (1)",
    Year: "Project Polyjuice (1) PY 3",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Mens Relaunch",
    Year: "Mens Relaunch PY 1",
    actual: 1475630.220000004,
    reco: 0.0,
  },
  {
    Project_Name: "Mens Relaunch",
    Year: "Mens Relaunch PY 2",
    actual: 2333536.7999999966,
    reco: 0.0,
  },
  {
    Project_Name: "Mens Relaunch",
    Year: "Mens Relaunch PY 3",
    actual: 1088945.0699999998,
    reco: 0.0,
  },
  {
    Project_Name: "Python - (ME)",
    Year: "Python - (ME) PY 1",
    actual: 28151685.000000216,
    reco: 0.0,
  },
  {
    Project_Name: "Python - (ME)",
    Year: "Python - (ME) PY 2",
    actual: 25548548.15157298,
    reco: 0.0,
  },
  {
    Project_Name: "Python - (ME)",
    Year: "Python - (ME) PY 3",
    actual: 13225443.747633003,
    reco: 0.0,
  },
  {
    Project_Name: "Granola",
    Year: "Granola PY 1",
    actual: 7235252.226561988,
    reco: 0.0,
  },
  {
    Project_Name: "Granola",
    Year: "Granola PY 2",
    actual: 7957778.865059995,
    reco: 0.0,
  },
  {
    Project_Name: "Granola",
    Year: "Granola PY 3",
    actual: 8266239.913708765,
    reco: 0.0,
  },
  {
    Project_Name: "Rainbow Dash",
    Year: "Rainbow Dash PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Rainbow Dash",
    Year: "Rainbow Dash PY 2",
    actual: 18658665.181917023,
    reco: 0.0,
  },
  {
    Project_Name: "Rainbow Dash",
    Year: "Rainbow Dash PY 3",
    actual: 10589946.673782615,
    reco: 0.0,
  },
  {
    Project_Name: "Fowler - Retail packaging",
    Year: "Fowler - Retail packaging PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Fowler - Retail packaging",
    Year: "Fowler - Retail packaging PY 2",
    actual: 1147187.2980000004,
    reco: 0.0,
  },
  {
    Project_Name: "Fowler - Retail packaging",
    Year: "Fowler - Retail packaging PY 3",
    actual: 472151.71799999994,
    reco: 0.0,
  },
  {
    Project_Name: "Thundercats",
    Year: "Thundercats PY 1",
    actual: 250877085.46876454,
    reco: 0.0,
  },
  {
    Project_Name: "Thundercats",
    Year: "Thundercats PY 2",
    actual: 72460500.59640004,
    reco: 0.0,
  },
  {
    Project_Name: "Thundercats",
    Year: "Thundercats PY 3",
    actual: 11620000.604460018,
    reco: 0.0,
  },
  {
    Project_Name: "Project Blossom",
    Year: "Project Blossom PY 1",
    actual: 0.0,
    reco: 0.0,
  },
  {
    Project_Name: "Project Blossom",
    Year: "Project Blossom PY 2",
    actual: 7931.790000000001,
    reco: 0.0,
  },
  {
    Project_Name: "Project Blossom",
    Year: "Project Blossom PY 3",
    actual: 32438.67,
    reco: 0.0,
  },
  {
    Project_Name: "Hemp Skincare",
    Year: "Hemp Skincare PY 1",
    actual: 4529438.400000006,
    reco: 0.0,
  },
  {
    Project_Name: "Hemp Skincare",
    Year: "Hemp Skincare PY 2",
    actual: 6472869.120000016,
    reco: 0.0,
  },
  {
    Project_Name: "Hemp Skincare",
    Year: "Hemp Skincare PY 3",
    actual: 8122743.81000005,
    reco: 0.0,
  },
  { Project_Name: "Fowler", Year: "Fowler PY 1", actual: 0.0, reco: 0.0 },
  {
    Project_Name: "Fowler",
    Year: "Fowler PY 2",
    actual: 673915.6499999991,
    reco: 0.0,
  },
  {
    Project_Name: "Fowler",
    Year: "Fowler PY 3",
    actual: 804145.6680000002,
    reco: 0.0,
  },
];

export default mydata;
const Products = require("../../models/products.models");

Products.bulkCreate([
  {
    id: "11550a1a-2d58-4853-8db8-e7de3abfc11a",
    title: "Samsung Galaxy S22",
    description:
      "Smartphone, Factory Unlocked Android Cell Phone, 256GB, 8K Camera & Video, Brightest Display, Long Battery Life, Fast 4nm Processor, US Version. 8K SUPER STEADY VIDEO: Shoot videos that rival how epic your life is with stunning 8K recording, the highest recording resolution available on a smartphone; Video captured is effortlessly smooth, thanks to Auto Focus Video Stabilization on Galaxy S22*.",
    price: 850.0,
    imagesPackId: "830e6358-8e0f-4d19-b74d-90af55696a1b",
    userId: "39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9",
    categoryId: 1,
  },
  {
    id: "0353ff07-a7d5-4e51-b1fb-6f1330bdd811",
    title: "Samsung 32 inches QLED 4K Smart TV",
    description:
      "4K UHD Processor: a powerful processor optimizes your tv’ s performance with 4K picture quality Inputs & Outputs: 3 HDMI ports, 1 Ethernet port, 2 USB Ports (v 2.0), 1 Digital Audio Output (Optical), 1 Composite Input (AV), Dimensions with Stand | without Stand Weight: 11.7 lb. 4K UHD: see what you’ve been missing on a crisp, clear picture that’s 4x the resolution of Full HD Smart TV with Universal Guide: our simple on-screen Guide is an easy way to find streaming content and live TV showsHD: see shades of color that reveal more detail than HDTV can deliver.",
    price: 500.0,
    imagesPackId: "04735dc8-d14f-41a6-b541-eed5e433af6a",
    userId: "39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9",
    categoryId: 2,
  },
  {
    id: "44f5a2db-a5b9-45ef-a99f-085202c1d5b5",
    title: "BRAVIA 4K HDR Full Array LED",
    description:
      "COGNITIVE PROCESSOR XR™ – Revolutionary TV processing technology that understands how humans see and hear to deliver intense contrast with deep blacks, high peak brightness, and natural colors. Rediscover everything you watch with billions of accurate colors and see impressive picture quality that is natural and beautiful to the human eye. Precisely controlled backlighting brings out real-life depth and detail with deep blacks and high peak brightness.",
    price: 1099.0,
    imagesPackId: "4fdee44b-9ae1-4573-bb8f-26f9c6f181df",
    userId: "39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9",
    categoryId: 2,
  },
  {
    id: "a6b3fd35-4fb9-4cf8-a54f-dacf5c53d893",
    title: "2021 Apple MacBook Pro",
    description:
      "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU, and machine learning performance. Up to 10-core CPU delivers up to 3.7x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 13x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 11x faster machine learning performance. Longer battery life, up to 17 hours. Up to 64GB of unified memory so everything you do is fast and fluid.",
    price: 1300.0,
    imagesPackId: "4522b3f5-a634-44e5-8416-dcb6cc6ee318",
    userId: "39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9",
    categoryId: 3,
  },
  {
    id: "f87f8b36-5cf5-4f10-a534-46e5c6c0beb0",
    title: "Sony X85J 55 Inch smart TV",
    description:
      "4K Ultra HD LED Smart Google TV with Native 120HZ Refresh Rate, Dolby Vision HDR and Alexa Compatibility KD55X85J- 2021 Model,Black. 4K HDR PROCESSOR X1 – Powerful TV processing that delivers a picture that is smooth and clear, full of rich colors and detailed contrast. Reproduces more colors than a conventional TV resulting in picture quality that is natural and precise, and closer than ever to real life. Seamlessly browse 700,000+ movies and TV episodes from across your favorite streaming services, all in one place.",
    price: 1198.0,
    imagesPackId: "9624d5dc-b3c3-4e22-a7da-6c42fa4137a7",
    userId: "39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9",
    categoryId: 2,
  },
  {
    id: "56bc568b-189b-4601-b661-7f0c5f31e40c",
    title: "Pocophone X3 Pro",
    description:
      "This is the first POCO phone equipped with a 6nm chipset and powered by four super performance Arm Cortex-A78 cores which effectively balance between performance and energy consumption. With UFS 3.1, you can enjoy shorter loading times whether you are gaming or taking pictures. The multiple high-efficiency heat dissipation materials create flagship-level temperature control and rapid cooling. LiquidCool Technology 2.0 allows the phone to be in a high-performance state at any time, unleashing the maximum potential of the processor.",
    price: 275.0,
    imagesPackId: "908121d1-ea3c-4def-806f-2c717288e903",
    userId: "39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9",
    categoryId: 1,
  },
  {
    id: "ef3cfd34-50fa-4b4d-bed5-5ca0a00c3b0b",
    title: "Samsung 50 inches 4K Ultra HD Smart LED TV",
    description:
      "Samsung UN50TU7000 50 TU7000 QLED 4K UHD Smart TV (2020 Model) The TU7000 Crystal UHD TV unlocks hidden detail at four times the quality of Full HD. The ultra-fast processor transforms everything you watch into stunning 4K. The sleek, elegant, and minimalistic design draws you into the screen from any angle. UNDLE INCLUDES: Deco Home 31 Home Theater Premium Soundbar | Deco Mount Flat & Tilt Wall Mount for TV's.",
    price: 570.0,
    imagesPackId: "66fa90c6-0146-42bb-a8ba-a54a9256c436",
    userId: "39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9",
    categoryId: 2,
  },
  {
    id: "98d8a4be-e010-489d-9f03-a4b9ad4000d8",
    title: "SAMSUNG Galaxy Book Pro",
    description:
      "Book Pro Intel Evo Platform Laptop Computer 15.6 inches AMOLED Screen 11th Gen Intel Core i7 Processor 16GB Memory 512GB SSD Long-Lasting Battery, Mystic Blue. EASY ON THE EYES: Everything looks brilliant with the first 13.3/15.6 AMOLED screen in a Galaxy Book; Enjoy vibrant viewing while you work or school inside or in direct sunlight, and it lessens eye strain by reducing harmful blue light. Sleek, ultrathin and available in a stylish, dual color design, Galaxy Book Pro is the lightest laptop and won’t weigh you down.",
    price: 1050.0,
    imagesPackId: "be6f22ed-ad9f-4dba-bf1a-ecf36a0d7b2c",
    userId: "39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9",
    categoryId: 3,
  },
  {
    id: "fada0a25-516b-4f1e-abe2-d102c7e326fc",
    title: "iPhone 13 Pro",
    description:
      "6.1-inch Super Retina XDR display with ProMotion for a faster, more responsive feel. Cinematic mode adds shallow depth of field and shifts focus automatically in your videos. Pro camera system with new 12MP Telephoto, Wide, and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording. 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording. A15 Bionic chip for lightning-fast performance.",
    price: 1300.0,
    imagesPackId: "0abb52fa-bc4d-498d-aafe-2121764200f2",
    userId: "39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9",
    categoryId: 1,
  },
  {
    id: "a7f04a9e-f731-49f6-9393-c6060f48ffba",
    title: "iPhone 12",
    description:
      "A superpowerful chip. 5G speed. An advanced dual‑camera system. A Ceramic Shield front that's tougher than any smartphone glass. And a bright, beautiful OLED display. iPhone 12 has it all — in two great sizes. Our hardware and software work together seamlessly. Want to pair new AirPods with your iPhone? It’s a simple one‑tap setup. Want to share photos, videos, or contacts with friends nearby?",
    price: 600.0,
    imagesPackId: "4b691476-0300-461e-96c0-fd03a6e0b015",
    userId: "39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9",
    categoryId: 1,
  },
  {
    id: "c3e18cc2-f77a-45f1-a201-e45a9740f00e",
    title: "2021 Apple iMac",
    description:
      "Immersive 24-inch 4.5K Retina display with P3 wide color gamut and 500 nits of brightness, 24-inch, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB. Apple M1 chip delivers powerful performance with 8-core CPU and 8-core GPU, Strikingly thin 11.5 mm design in vibrant colors. 1080p FaceTime HD camera with M1 ISP for amazing video quality. Studio-quality three-mic array for crystal clear calls and voice recordings. Six-speaker sound system for a remarkably robust and high-quality audio experience.",
    price: 1500.0,
    imagesPackId: "ae3a08ae-9d28-478c-8768-67506fa340a1",
    userId: "39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9",
    categoryId: 3,
  },
]);

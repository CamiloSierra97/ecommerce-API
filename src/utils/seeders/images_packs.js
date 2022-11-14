const ImagesPacks = require("../../models/images_packs.models");

const createImagesPacks = () => {
  ImagesPacks.bulkCreate([
    {
      id: "830e6358-8e0f-4d19-b74d-90af55696a1b",
      total: 3,
    },
    {
      id: "04735dc8-d14f-41a6-b541-eed5e433af6a",
      total: 3,
    },
    {
      id: "4fdee44b-9ae1-4573-bb8f-26f9c6f181df",
      total: 3,
    },
    {
      id: "4522b3f5-a634-44e5-8416-dcb6cc6ee318",
      total: 3,
    },
    {
      id: "9624d5dc-b3c3-4e22-a7da-6c42fa4137a7",
      total: 3,
    },
    {
      id: "908121d1-ea3c-4def-806f-2c717288e903",
      total: 3,
    },
    {
      id: "66fa90c6-0146-42bb-a8ba-a54a9256c436",
      total: 3,
    },
    {
      id: "be6f22ed-ad9f-4dba-bf1a-ecf36a0d7b2c",
      total: 3,
    },
    {
      id: "0abb52fa-bc4d-498d-aafe-2121764200f2",
      total: 3,
    },
    {
      id: "4b691476-0300-461e-96c0-fd03a6e0b015",
      total: 3,
    },
    {
      id: "ae3a08ae-9d28-478c-8768-67506fa340a1",
      total: 3,
    },
  ]);
};

module.exports = createImagesPacks;

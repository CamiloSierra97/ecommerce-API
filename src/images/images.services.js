const imageControllers = require("./images.controllers");

const createImage = (req, res) => {
  const { url } = req.body;
  if (url) {
    //? Controller execution
    imageControllers
      .createImage({ url })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    //? Error when data is missing
    res.status(400).json({
      message: "All fields must be completed",
      fields: {
        url: "url",
      },
    });
  }
};

const updateImage = (req, res) => {
  const id = req.params.image_id;
  const { url } = req.body;
  imageControllers
    .updateImage(id, { url })
    .then((data) => {
      if (data[0]) {
        res
          .status(200)
          .json({ message: `Image with ID ${id}, edited succesfully` });
      } else {
        res.status(404).json({ message: "Invalid ID or missing data" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteImage = (req, res) => {
  const id = req.params.image_id;
  imageControllers
    .deleteImage(id)
    .then((data) => {
      if (data !== 0) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  createImage,
  updateImage,
  deleteImage,
};

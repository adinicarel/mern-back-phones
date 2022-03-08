import Phone from  '../models/models.js'

export const createPhone = (req, res) => {
    Phone.create(req.body)
    .then((phone) => {
      console.log({ phone });
      res.json({
        message: "Cheers!! You have successfully added a phone",
        phone,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your phone list cannot be added",
        error: err.message,
      });
    });
};

export const listPhones = (req, res) => {
    Phone.find()
    .then((phone) => {
      console.log({ phone });
      res.json(phone);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "There isn't any phone available", error: err.message });
    });
};

export const listPhoneById = (req, res) => {
  Phone.findById(req.params.id)
  .then((phone) => {
    console.log({ phone });
    res.json(phone);
  })
  .catch((err) => {
    res
      .status(404)
      .json({ message: "There isn't any phone available", error: err.message });
  });
};



export const updatePhone = (req, res) => {
    Phone.findByIdAndUpdate(req.params.id, req.body)
    .then((phone) => {
      console.log({ phone });
      return res.json({
        message: "Cheers!! You have successfully updated phone",
        phone,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your phone list cannot be updated",
        error: err.message,
      });
    });
};

export const deletePhone = (req, res) => {
    Phone.findByIdAndRemove(req.params.id, req.body)
    .then((phone) => {
      console.log({ phone });
      res.json({
        message: "Cheers!! You have successfully deleted your phone entry",
        phone,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your phone is not there",
        error: err.message,
      });
    });
};
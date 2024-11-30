const { VenuePhoto, Venue } = require("../model");
const { validateVenuePhoto } = require("../validation/venuePhoto.validation");

exports.createVenuePhoto = async (req, res) => {
  const { error } = validateVenuePhoto(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venuePhoto = await VenuePhoto.create(req.body);
    res.status(201).send(venuePhoto);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getVenuePhotos = async (req, res) => {
  try {
    const venuePhotos = await VenuePhoto.findAll();
    res.status(200).send(venuePhotos);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenuePhotoById = async (req, res) => {
  try {
    const venuePhoto = await venuePhoto.findByPk(req.params.id,{
       include: [
        {
          model: Venue,
          as: "venue",
        },    
       ]
    }); 
    if (!venuePhoto) return res.status(404).send("VenuePhoto not found");
    res.status(200).send(venuePhoto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenuePhoto = async (req, res) => {
  const { error } = validateVenuePhoto(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venuePhoto = await VenuePhoto.findByPk(req.params.id);
    if (!venuePhoto) return res.status(404).send("VenuePhoto not found");

    await venuePhoto.update(req.body);
    res.status(200).send(venuePhoto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteVenuePhoto = async (req, res) => {
  try {
    const venuePhoto = await VenuePhoto.findByPk(req.params.id);
    if (!venuePhoto) return res.status(404).send("VenuePhoto not found");

    const venuePhotoData = venuePhoto.toJSON();
    await venuePhoto.destroy();
    res.status(204).send(venuePhotoData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


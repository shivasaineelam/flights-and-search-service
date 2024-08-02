const { CityService } = require("../services");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    res.status(201).json({
      data: city,
      success: true,
      message: "City created successfully",
      err: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      message: "Error creating city",
      err: error.message,
    });
  }
};
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    res.status(201).json({
      data: city,
      success: true,
      message: "City updated successfully",
      err: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      message: "Error updating city",
      err: error.message,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    res.status(201).json({
      data: response,
      success: true,
      message: "City deleted successfully",
      err: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      message: "Error deleting city",
      err: error.message,
    });
  }
};

const get = async (req, res) => {
  try {
    const city = await cityService.getCity(parseInt(req.params.id));
    res.status(201).json({
      data: city,
      success: true,
      message: "fetched city details successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Error getting  city details",
      err: error.message,
    });
  }
};
const getAllcities=async(req,res)=>{
    try {
        const cities=await cityService.getAllCities();
        res.status(201).json({
            data:cities,
            success:true,
            message:"fetched all cities successfully",
            err:{}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:"unable to fetch the data",
            err:error
        });
        
    }
}

module.exports = {
  create,
  update,
  destroy,
  get,
  getAllcities
};

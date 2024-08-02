const { CityRepository } = require("./../repository");
const cityRepository = new CityRepository();
class CityService {
  async createCity(data) {
    try {
      const city = await cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw error;
    }
  }
  async deleteCity(cityId) {
    try {
      await cityRepository.deleteCity(cityId);
      return true;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw error;
    }
  }
  async updateCity(cityId, data) {
    try {
      const city = await cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      throw error;
    }
  }
  async getCity(cityId) {
    try {
      const city = await cityRepository.getCity(cityId);
      
      return city;
    } catch (error) {
      throw error;
    }
  }
  async getAllCities(){
    try {
        const cities=await cityRepository.getAllcities();
        return cities;
    } catch (error) {
        throw error;
    }
  }
}
module.exports = CityService;

import axios from "."
const apiUrl = process.env.REACT_APP_API_URL

export const getCountries = async () => {
  try {
    const response = await axios.get(`${apiUrl}/api/v1/country`)
    if (response.status !== 200) {
      throw new Error("Failed to fetch countries")
    }
    const data = response.data
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

import axios from "."
const apiUrl = process.env.REACT_APP_API_URL

export const postPackage = async (
  name,
  email,
  weight,
  boxColor,
  destination
) => {
  try {
    const response = await axios.post(`${apiUrl}/api/v1/package`, {
      name,
      email,
      weight,
      boxColor,
      destination,
    })
    if (response.status !== 200) {
      throw new Error(response.error)
    }
    const data = response.data
    return [null, data]
  } catch (error) {
    return [error.message, []]
  }
}

export const getPackages = async (email) => {
  try {
    const response = await axios.get(`${apiUrl}/api/v1/package/myemail`, {
      email,
    })
    if (response.status !== 200) {
      throw new Error("Failed to fetch your packes")
    }
    const data = response.data
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

import { getCountries } from "../../api/Country"

export function setCountries(countries) {
  return {
    type: "SET_COUNTRIES",
    payload: countries,
  }
}

export function fetchCountries() {
  return async (dispatch) => {
    try {
      const countries = await getCountries()
      dispatch(setCountries(countries))
    } catch (error) {
      console.error(error)
    }
  }
}

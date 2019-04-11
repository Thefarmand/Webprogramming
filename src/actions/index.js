import ergast from "../apis/ergast";

export const fecthDrivers = () => async dispatch => {
  const response = await ergast.get("api/f1/2019/drivers.json");
  dispatch({
    type: "FETCH_DRIVERS",
    payload: response.data.MRData.DriverTable.Drivers
  });
//  console.log(response.data.MRData.DriverTable.Drivers);
};

export const fecthConstructors = () => async dispatch => {
  const response = await ergast.get("api/f1/2019/constructors.json");
  dispatch({
    type: "FETCH_CONSTRUCTORS",
    payload: response.data.MRData.ConstructorTable.Constructors
  });
//  console.log(response.data.MRData.ConstructorTable.Constructors);
};

export const fecthRaces = () => async dispatch => {
  const response = await ergast.get("api/f1/2019/races.json");
  dispatch({
    type: "FETCH_RACES",
    payload: response.data.MRData.RaceTable.Races
  });
//  console.log(response.data.MRData.RaceTable.Races);
};

export const fecthDriverLastResult = () => async dispatch => {
  const response = await ergast.get("api/f1/current/last/results.json");
  dispatch({
    type: "FETCH_DRIVER_LAST_RESULT",
    payload: response.data.MRData.RaceTable.Races
  });
 console.log(response.data.MRData.RaceTable.Races);
};




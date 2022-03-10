// import { useDispatch } from "react-redux";
// import { setErrors } from "../actions"

const URL = process.env.POKE_API;

const fetchConf = async (url, options = {}) => {
  let json = null;
  // const dispatch = useDispatch();
  try {
    const result = await fetch(`${URL}${url}`, options);

    if (!result.ok)
      throw new Error(JSON.stringify({ code: result.status, where: "fetch" }));
    json = await result.json();
    return json;
  } catch (e) {
    const errorParse = JSON.parse(e.message);
    // console.log(errorParse, "Error fetch")

    const error = { ...errorParse, code: errorParse.code || "Code undefined" };
    throw error;
  }
  // return json;
};

export default fetchConf;

// import { useDispatch } from "react-redux";
// import { setErrors } from "../actions"

const URL = process.env.POKE_API;

const fetchConf = async (url, options = {}) => {
  let json = null;
  // const dispatch = useDispatch();
  try {
    const result = await fetch(`${URL}${url}`, options);
    if (!result.ok) throw Error(result.status);
    json = await result.json();
    return json;
  } catch (err) {
    return err;
  }
  // return json;
};

export default fetchConf;

import { useRef, useState } from "react";
import debounce from "lodash.debounce";
const Debouncing = () => {
  const [value, setValue] = useState();
  //debouncing
  /* const [typeData, SetTypeData] = useState();
  let filterTimeout;
  const Debounce = (timeshow) => {
    clearTimeout(filterTimeout);
    if (!timeshow) return SetTypeData();
    filterTimeout = setTimeout(() => {
      //console.log(timeshow);
      SetTypeData(timeshow);
    }, 2000);
  };
*/
  /*
  //useCallback
  const debounceSave = useCallback(
    debounce((nextValue) => setValue(nextValue), 2000),
    []
  );
  */

  const debounceSave = useRef(
    debounce((nextValue) => setValue(nextValue), 2000)
  ).current;
  function handleChange(e) {
    let nextValue = e.target.value;
    debounceSave(nextValue);
  }

  return (
    <>
      <h1>{value}</h1>
      <input type="text" onChange={handleChange} />
    </>
  );
};

export default Debouncing;

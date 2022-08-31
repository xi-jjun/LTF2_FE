import { useEffect, useState } from "react";

// ******************************
const useFilter = ({ initState, initList , filterModule }) => {
  const [state, setState] = useState(initState);
  const [list, setList] = useState(initList);

  // ******************************

  useEffect(() => {
    const filteredList = filterModule(state,list)
    setList(filteredList)
  }, [state]);
  
  // ******************************
  
  const handleChange = e => {
    const { name, value } = e.target;
    setState(() => ({
      ...state,
      [name]: value
    }));
  };


  return {
    handleChange,
    state,
    list
  };
};

export default useFilter;

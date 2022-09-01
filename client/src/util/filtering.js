export const filtering = (state, list) => {
    let filteredList = []
    
    list.map((item) => {
      // 1. filter에 걸러지는지(false) flg
      let isContained = true
      // 2. filter에 걸러지는지(false) 체크
      Object.keys(state).forEach((k) =>{
        if (!isContained) return false
        switch (k) {
          case "disCountType":
            // validateName(state.userName,errors);
            break;
          case "manufacturingCompany":
            isContained = filterCompany(state[k], item[k])
            break;
          case "storage":
            isContained = filterStorage(state[k],item.phoneInfo[k])
            break;
          case "memory":
            isContained = filterMemory(state[k], item.phoneInfo[k])
            break;
          default:
        }
      })
      // 3. 걸러지지 않는다면 filteredList에 넣기.
      if(isContained)
        filteredList.push(item)
    })
    return filteredList;
  };

// ******************************
function filterCompany(condition,data) {
    let result = true;
    if(condition ==="전체") return result

    return condition === data;
  }
// ******************************
function filterStorage(condition,data) {
  let result = true;

  switch (condition) {
    case "4000mAh이상":
      return 4000 <= data
    case "2500mAh~3000mAh":
      return 2500 <= data && data <= 3000
    case "3000mAh~4000mAh":
      return 3000 <= data && data <= 4000 
    default:
      break;
  }
  return result;
}

// ******************************
function filterMemory(condition,data) {
  let result = true;
  switch (condition) {
    case "1TB":
      return 1024 === data
    case "512GB 이상":
      return 512 <= data 
    case "256GB":
      return 256 === data 
    default:
      break;
  }
  return result;
}

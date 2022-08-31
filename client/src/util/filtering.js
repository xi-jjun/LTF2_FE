export const filtering = (state, list) => {
    let filteredList = []
    
    list.map((item) => {
      // 1. filter에 걸러지는지 flg
      let isFilter = false
      // 2. filter에 걸러지는지 체크
      Object.keys(state).forEach((k) =>{
        // if(isFilter) return false;
        switch (k) {
          case "plan":
            // validateUserID(state.userType, state.userId, errors);
            break;
          case "disCountType":
            // validateName(state.userName,errors);
            break;
          case "manufacturingCompany":
            filterCompany(state.k, item.k)
            break;
          case "storage":
            filterStorage(state.k, item.phoneInfo.k)
            break;
          case "memory":
            filterMemory(state.k, item.phoneInfo.k)
            break;
          default:
        }
      })
      // 3. 걸러지지 않는다면 filteredList에 넣기.
      if(!isFilter)
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
/* 
  전체
  4000mAh이상
  2500mAh~3000mAh
  3000mAh~4000mAh
*/
function filterStorage(condition,data) {
  let result = true;
  if(!data.contain("mAh")) return false
  data = Number(data.replace("mAh",""))
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
      return 1000 === data
    case "512GB 이상":
      return 512 <= data 
    case "256GB":
      return 256 === data 
    default:
      break;
  }
  return result;
}

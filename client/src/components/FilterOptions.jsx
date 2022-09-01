import React from 'react'

function FilterOptions() {
  return (
      <>
        <RadioGroup
                    value={defaultValue}
                    name={data[k].name}
                    onChange={(e) => {
                      handleChange(e, phones);
                    }}
                  >
                    {Options(data[k].values)}
        </RadioGroup>
      </>
  )
}

export default FilterOptions
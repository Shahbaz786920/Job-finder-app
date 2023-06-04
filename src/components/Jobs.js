import React, { useEffect, useState } from 'react';
import Job from './Job';

const Jobs = ({data, setKeywords, keywords}) => {
  console.log(data);

  const [filteredData,setfilteredData] = useState([])

  // const searchFunc =()=>{
  //   if(keywords.length > 0){
  //     const newData = filteredData.filter((d)=> {
  //       return d.position.toLocalLowerCase().includes(keywords);
  //     });
  //     setfilteredData(newData);
  //   }else{
  //     setfilteredData(data);
  //   }
  // };

  const modifiedData =()=>{
    if(keywords.length > 0){
      const newData = filteredData.filter(d => {
        return keywords.every((key)=> {
          return (
            d.role === key ||
            d.level === key ||
            d.languages.includes(key) ||
            d.tools.includes(key) 
          );
        });     
      });
      setfilteredData(newData);
    }else{
      setfilteredData(data)
    }
  };

  useEffect(()=> {
    modifiedData();
    // searchFunc();
  },[keywords]);

  return (
    <div className="jobs">
      {filteredData.map(d => 
      {
        return <Job key={d.id} data = {d} setKeywords={setKeywords}/>
      }
      )}
    </div>
  )
}

export default Jobs

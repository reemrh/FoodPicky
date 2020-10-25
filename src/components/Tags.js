import React from "react";

function Tags(props) {
  return (
    <div className=" range_section tags_section">
          <div>
              Popular tags
          </div>
          <div className="tags">       
             {
               props.tags.map(item => <p>{item}</p>)
             }                     
          </div>
      </div>
  );
}

export default Tags;

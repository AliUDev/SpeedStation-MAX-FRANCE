import React, { useState, useRef, useEffect } from "react";

const defaultOptions = [];
for (let i = 0; i < 10; i++) {
  defaultOptions.push(`option ${i}`);
}
const SearchAble = () => {
  // const { options, onInputChange } = props;
  const [options, setOptions] = useState([]);
  const ulRef = useRef();
  const inputRef = useRef();
  // console.log(options);
  // useEffect(() => {
  //   inputRef.current.addEventListener("click", (event) => {
  //     event.stopPropagation();
  //     ulRef.current.style.display = "flex";
  //     onInputChange(event);
  //   });
  //   document.addEventListener("click", (event) => {
  //     ulRef.current.style.display = "none";
  //   });
  // }, []);
  // const onInputChange = (event) => {
  //   setOptions(
  //     defaultOptions.filter((option) => option.includes(event.target.value))
  //   );
  // };
  return (
    <div className="searchable_Component">
      <div className="searchable_input">
        <input
          type="text"
          placeholder="search"
          ref={inputRef}
          // onChange={onInputChange}
        ></input>
        <div className="searchable_list">
          <ul id="results" ref={ulRef}>
            {options.map((option, index) => {
              return (
                <li
                  key={index}
                  // onClick={(e) => {
                  //   inputRef.current.value = option;
                  // }}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchAble;

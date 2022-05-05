import React, { useEffect, useState, useRef } from "react";

function Upload() {
  const fileChangeRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  // fileChangeRef.current 等于 val.target
  const handleChange = (val) => {
    console.log(
      val.target.value,
      val.target,
      val.target.files,
      fileChangeRef.current.files,
      fileChangeRef.current.value
    );
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple="multiple"
        id="upload-photo"
        aria-label="change picture button"
        value={inputValue}
        ref={fileChangeRef}
        onChange={handleChange}
      />
      {/* 常用方式 */}
      <form>
        <input type="file" name="pic" accept="image/*" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Upload;

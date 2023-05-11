import React from "react";

export default function Alert(props) {
    let firstLetterCap = (word)=>{
        let word1 = word.toLowerCase();
    //   let newWord1 = word1.substring(0,1).toUpperCase();
    //   let newWord2 = word1.substring(1,word1.length);
    //   let newWord = newWord1.concat(newWord2);
      return word1.charAt(0).toUpperCase() + word1.slice(1);
    }
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{firstLetterCap(props.alert.type)}</strong>: {props.alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}

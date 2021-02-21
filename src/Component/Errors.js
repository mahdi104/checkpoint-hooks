import React from "react";

const Errors = ({ history }) => {
  return (
    <div>
      <img src="https://assets.prestashop2.com/sites/default/files/blog/2019/10/banner_error_404.jpg" />
      <br />
      <button
        style={{
          color: "white",
          backgroundColor: "Highlight",
          marginTop: "2%",
        }}
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
    </div>
  );
};

export default Errors;

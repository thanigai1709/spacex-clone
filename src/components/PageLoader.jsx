import React from "react";
function PageLoader(props) {
  return (
    <div
      className={props.loading ? "page-loader-wrp active" : "page-loader-wrp"}
    >
      <div className="loader-outter">
        <div className="loader-inner">
          <div className="loader-cnt text-center">
            <div className="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageLoader;

import React from "react";

class SimpleAnalytics extends React.Component {
  render() {
    return (
      <div>
        <script async defer src="//simple.coreyja.com/app.js" />
        <noscript>
          <img src="//simple.coreyja.com/image.gif" alt="" />
        </noscript>
      </div>
    );
  }
}

export default SimpleAnalytics;

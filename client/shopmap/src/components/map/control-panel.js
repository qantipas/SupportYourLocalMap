import React, { PureComponent } from "react";

export default class SideBar extends PureComponent {
  render() {
    return (
      <div className="control-panel">
        <h3>Thsi Service is Provided by the Business:</h3>
        <p>
          Map showing top 20 most populated cities of the United States. Click
          on a marker to learn more.
        </p>
      </div>
    );
  }
}

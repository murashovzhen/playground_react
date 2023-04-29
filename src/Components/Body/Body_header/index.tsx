import React from "react";
import HeaderTitle from "./Header_title";
import HeaderTabs from "./Header_tabs/HeaderTabs";

const BodyHeader = () => {
  return (
    <div>
      <HeaderTitle text="Blog" />
      <HeaderTabs />
    </div>
  );
};

export default BodyHeader;

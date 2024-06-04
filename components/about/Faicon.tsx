import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Faicon = ({ icon, name }: { icon: IconProp; name: string }) => {
  return (
    <div className="rounded-lg bg-secondary/30 border border-secondary hover:shadow-md hover:bg-secondary/50 transition-all p-4 space-y-4">
      <div className="text-sm flex flex-col items-center justify-center space-y-2 text-center h-full">
        <FontAwesomeIcon
          icon={icon}
          style={{ width: "50px", height: "50px" }}
        />
        <p className="text-sm">{name}</p>
      </div>
    </div>
  );
};

export default Faicon;

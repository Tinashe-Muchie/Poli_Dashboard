import { ReactNode } from "react";

interface staff_info_fc {
  id: number;
  icon: ReactNode;
  title: string;
}

export const STAFF_INFO = () => {
  return (
    <div className="staff_info_wrapper">
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

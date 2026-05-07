import { Outlet } from "react-router-dom";

export default function DetailLayout() {
  return (
    <div className="font-extralight text-sm text-translucent leading-6">
      <Outlet />
    </div>
  );
}

import { useSelector } from "react-redux";
import { NavItem, NavLabel } from "@common/components";
import {
  DashboardIcon,
  UserControlIcon,
  ProgressIcon,
  ReportIcon,
  CubeIcon,
} from "@common/components/icons";
import ScaleIcon from "@common/components/icons/ScaleIcon";

export const SideBar = () => {
  const { navOpen } = useSelector((state) => state.adminLayout);
  return (
    <div className="text-[#514E4E]">
      <div
        className={`${
          navOpen == null && `w-0 pl-0 md:w-[274px] md:pl-[32px]`
        } ${
          navOpen == true ? `w-[274px] pl-[32px]` : `w-0 pl-0`
        } fixed top-[78px] left-0 overflow-x-hidden overflow-y-auto transition-[width_padding] flex flex-col gap-4 bg-white shadow-2xl py-[48px] h-full min-h-[calc(100vh_-_78px)]`}
      >
        <NavLabel>Menu</NavLabel>
        {/* <NavLabel className="my-0 mb-0">Home</NavLabel> */}
        <NavItem
          to={`dashboard`}
          label={`Dashboard`}
          icon={<DashboardIcon className="mr-3 -mb-1" />}
        />

        {/* <NavLabel>Internal</NavLabel> */}
        <NavItem
          to={"daily-progress-check"}
          label={`Daily Progress Check`}
          icon={<ProgressIcon className="mr-3 -mb-1" />}
        />

        <NavItem
          to={`report`}
          label={`Report`}
          icon={<ReportIcon className="mr-3 -mb-1" />}
        />
        <NavItem
          to={`weighting`}
          label={`Weighting`}
          icon={<ScaleIcon className="mr-3 -mb-1 w-6 h-6" />}
        />
        <NavItem
          label={`Master Data`}
          icon={<CubeIcon className="mr-3 -mb-1" />}
        >
          <NavItem
            to={"master-data/measurement-std"}
            label={"Measurement Std"}
          />
          <NavItem to={"master-data/part"} label={"Part"} />
          <NavItem to={"master-data/customer"} label={"Customer"} />
          <NavItem to={"master-data/machine"} label={"Machine"} />
          <NavItem to={"master-data/tool"} label={"Tools"} />
          <NavItem to={"master-data/material"} label={"Material"} />
          <NavItem to={"master-data/color"} label={"Color"} />
        </NavItem>
        <NavItem
          label={`User`}
          icon={<UserControlIcon className="mr-3 -mb-1" />}
        >
          <NavItem to={`user`} label={`Account`} />
          <NavItem to={`access`} label={`Access`} />
        </NavItem>
      </div>
    </div>
  );
};


export const DashboardCard = ({ label, content, icon }) => {
  return (
    <div className="flex flex-1 gap-4 p-4 bg-white rounded-md border border-[#D0D3D9]">
      <span>{icon}</span>
      <div>
        <div className="text-[20px] font-[900] text-[#6F6C6C]">{label}</div>
        <div className="text-[#9A9898] font-[400] text-sm">{content}</div>
      </div>
    </div>
  );
};
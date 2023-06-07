const CavasitySMeasurent = ({ model }) => {
  return (
    <div className="text-[#514E4E]">
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md pb-6 mt-4">
        <div className="w-full flex justify-between items-center px-8 py-[18px]">
          <h1 className="font-[700] text-2xl">Segment</h1>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-sm">
              <th
                className="font-[600] border-[#D0D3D9] border-t border-r border-b py-4"
                colSpan={4}
              >
                Standart
              </th>
              <th
                className="font-[600] border-[#D0D3D9] border-t border-r border-b py-4 bg-[#FDDDB3]"
                colSpan={2}
              >
                Special Accept
              </th>
              <th
                className="font-[600] border-[#D0D3D9] border-t py-4 bg-[#D0D3D9]"
                rowSpan={2}
              >
                Tools
              </th>
            </tr>
            <tr className="text-sm">
              <th className="font-[600] py-4 bg-[#D0D3D9]">Character</th>
              <th className="font-[600] py-4 bg-[#D0D3D9] border-[#F0F1F3] border-l">
                Nominal
              </th>
              <th className="font-[600] py-4 bg-[#D0D3D9] border-[#F0F1F3] border-l">
                Upper
              </th>
              <th className="font-[600] py-4 bg-[#D0D3D9] border-[#F0F1F3] border-l">
                Lower
              </th>
              <th className="font-[600] py-4 bg-[#F0F1F3] border-[#D0D3D9] border-l">
                Upper
              </th>
              <th className="font-[600] py-4 bg-[#F0F1F3] border-[#D0D3D9] border-l border-r">
                Lower
              </th>
            </tr>
          </thead>
          <tbody>
            {model.segments.map((item) => {
              return (
                <>
                  <tr>
                    <td className="py-4 border-t border-b border-[#D0D3D9] text-center">
                      {item.character}
                    </td>
                    <td className="py-4 border-l border-t border-[#D0D3D9] border-b text-center">
                      {!isNaN(parseInt(item.nominalValue))
                        ? `${item.nominal} (${item.nominalValue})`
                        : item.nominalValue}
                    </td>
                    <td className="py-4 border-l border-t border-[#D0D3D9] border-b text-center">
                      {item.upper}
                    </td>
                    <td className="py-4 border-l border-t border-[#D0D3D9] border-b text-center">
                      {item.lower}
                    </td>
                    <td className="py-4 border-l border-t border-[#D0D3D9] border-b text-center">
                      {item.saUpper}
                    </td>
                    <td className="py-4 border-l border-t border-[#D0D3D9] border-b text-center">
                      {item.saLower}
                    </td>
                    <td className="py-4 border-l border-t border-[#D0D3D9] border-b text-center">
                      {item.tool?.name}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CavasitySMeasurent;


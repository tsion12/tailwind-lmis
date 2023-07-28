import { BiSolidFolderMinus } from "react-icons/bi";
import { BsFileEarmarkXFill } from "react-icons/bs";
import {
  AiOutlineInfoCircle,
  AiFillEye,
  AiOutlineFileProtect,
} from "react-icons/ai";
const TableCard = () => {
  return (
    <div className="bg-white flex items-center justify-center rounded-xl  h-[50%]">
      <div className="flex flex-col justify-between gap-8">
        <div className="flex justify-start items-center gap-4">
          
          <p className="font-bold text-3xl">Recent Activity</p>
          <AiOutlineInfoCircle className="text-gray/50" />
        </div>
        <div>
          <div className="relative ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-6 py-3 text-xs text-[#3A3A49]">
                    <div className="flex items-center">
                      File Name
                      <a href="#">
                        <svg
                          className="w-3 h-3 ml-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs text-[#3A3A49]">
                    <div className="flex items-center">
                      Recieved Date
                      <a href="#">
                        <svg
                          className="w-3 h-3 ml-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs text-[#3A3A49]">
                    <div className="flex items-center">View</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Reject</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Approve</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-bgcolor rounded-full">
                  <td className="px-6 py-4">
                    <div className="bg-white rounded-md p-2">
                      <BiSolidFolderMinus
                        size={20}
                        className="text-[#36978D]"
                      />
                    </div>
                  </td>

                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Business Licence
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Dec 13, 2022
                  </th>

                  <td className="px-6 py-4">
                    <div className="bg-[#A8D3D3] rounded-full w-8 h-8 flex items-center justify-center text-white">
                      <AiFillEye />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {" "}
                    <div className="bg-[#EBD4D2] rounded-full w-8 h-8 flex items-center justify-center text-[#CC362F]">
                      <BsFileEarmarkXFill />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="bg-[#CEE8E2] rounded-full w-8 h-8 flex items-center justify-center text-[#32A583]">
                      <AiOutlineFileProtect />
                    </div>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">
                    <div className="bg-white rounded-md p-2">
                      <BiSolidFolderMinus
                        size={20}
                        className="text-[#36978D]"
                      />
                    </div>
                  </td>

                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Commercial Registration
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Dec 13, 2022
                  </th>

                  <td className="px-6 py-4">
                    <div className="bg-[#A8D3D3] rounded-full w-8 h-8 flex items-center justify-center text-white">
                      <AiFillEye />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {" "}
                    <div className="bg-[#EBD4D2] rounded-full w-8 h-8 flex items-center justify-center text-[#CC362F]">
                      <BsFileEarmarkXFill />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="bg-[#CEE8E2] rounded-full w-8 h-8 flex items-center justify-center text-[#32A583]">
                      <AiOutlineFileProtect />
                    </div>
                  </td>
                </tr>
                <tr className="bg-bgcolor">
                  <td className="px-6 py-4">
                    <div className="bg-white rounded-md p-2">
                      <BiSolidFolderMinus
                        size={20}
                        className="text-[#36978D]"
                      />
                    </div>
                  </td>

                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Power of Attorney and Acceptance Letter
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Dec 13, 2022
                  </th>

                  <td className="px-6 py-4">
                    <div className="bg-[#A8D3D3] rounded-full w-8 h-8 flex items-center justify-center text-white">
                      <AiFillEye />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {" "}
                    <div className="bg-[#EBD4D2] rounded-full w-8 h-8 flex items-center justify-center text-[#CC362F]">
                      <BsFileEarmarkXFill />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="bg-[#CEE8E2] rounded-full w-8 h-8 flex items-center justify-center text-[#32A583]">
                      <AiOutlineFileProtect />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableCard;

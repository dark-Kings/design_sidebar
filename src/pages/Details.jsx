import { LiaSearchSolid } from "react-icons/lia";
import { BiPencil } from "react-icons/bi"
import { AiOutlinePause, AiOutlineDownload, AiFillStar, AiOutlineStar, AiOutlineDown } from "react-icons/ai"
import { BsPlay, BsStarHalf } from "react-icons/bs"
import { SlLink } from "react-icons/sl"

const Details = () => {
  return (
    <div className="flex justify-center items-start border rounded-xl border-gray-300 min-h-screen drop-shadow-xl">
      <div className="flex flex-col justify-between w-full m-1 mt-5 ml-2 mr-2">


        <div className="flex justify-between items-center">
          <div className="mr-2 fle flex-wrap">
            <div className="bg-blue-500 p-3 text-white  @apply h-16 relative w-[173px] text-center leading-10  after:content-[''] after:absolute  after:border-l-[#3b83f6] after:border-[33px] after:border-solid after:border-transparent after:left-full after:bottom-0 background:#3b83f6 before:content-[''] before:absolute  before:border-l-[#f5f7fa] before:border-[33px] before:border-solid before:border-transparent before:left-0 before:bottom-0 background:#f5f7fa  pl-9 text-[15px]">IN/ OUT Gate Pass</div>
          </div>

          <div className="flex justify-center items-center relative">
            <input type="text" placeholder="     Search" className="border-[1px] rounded-lg border-gray-400" />
            <LiaSearchSolid className="absolute text-[#e6d8d8] left-1" />
            <button className="bg-green-400 text-white p-2 ml-5 rounded-md">New Gate Pass</button>
          </div>
        </div>


        <div className="flex justify-evenly items-center mt-10 flex-wrap">
          <div className="flex flex-col  justify-start items-start p-2 w-[250px] border-2 border-blue-500 rounded-lg m-3">
            <span className="text-[15px]">Stock <span className="border border-black rounded-full text-[10px]">&nbsp;&nbsp;i&nbsp;&nbsp;</span></span>
            <span className="text-xl font-semibold">100,000</span>
          </div>
          <div className="flex flex-col  justify-start items-start p-2 w-[250px] border-2 border-blue-500 rounded-lg m-3">
            <span className="text-[15px]">Stock <span className="border border-black rounded-full text-[10px]">&nbsp;&nbsp;i&nbsp;&nbsp;</span></span>
            <span className="text-xl font-semibold">100,000</span>
          </div>
          <div className="flex flex-col  justify-start items-start p-2 w-[250px] border-2 border-blue-500 rounded-lg m-3">
            <span className="text-[15px]">Stock <span className="border border-black rounded-full text-[10px]">&nbsp;&nbsp;i&nbsp;&nbsp;</span></span>
            <span className="text-xl font-semibold">100,000</span>
          </div>
          <div className="flex flex-col  justify-start items-start p-2 w-[250px] border-2 border-blue-500 rounded-lg m-3">
            <span className="text-[15px]">Stock <span className="border border-black rounded-full text-[10px]">&nbsp;&nbsp;i&nbsp;&nbsp;</span></span>
            <span className="text-xl font-semibold">100,000</span>
          </div>



        </div>

        <div className="mt-10 flex flex-col flex-1 relative border-2 rounded-md border-blue-400">

          <div className="flex w-full justify-between items-center bg-blue-500 flex-wrap p-2">

            <div className="flex justify-evenly items-center">
              <div className=" m-2 rounded-full bg-white w-6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div className=" m-2 pl-2 pr-2 rounded-xl bg-white text-blue-400">Slip Number #123456</div>
              <div className=" m-2 pl-2 pr-2 rounded-xl bg-white text-blue-400">Loading</div>
              <div className=" m-2 pl-2 pr-2 rounded-xl bg-white text-blue-400">Loading</div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex justify-evenly items-center">
                <span className="w-[65px] h-[10px] border-[1px] border-solid border-white rounded-lg  bg-gradient-to-r from-white from-0% to-gray-500 to-95%"></span>
                <span className="text-gray-200 text-sm ml-1">75%</span>
                <span className="bg-white text-blue-400 ml-2 p-[1px]"><BiPencil /></span>
                <span className="bg-white text-blue-400 ml-2 p-[1px]"><AiOutlinePause /></span>
                <span className="bg-white text-blue-400 ml-2 p-[1px]"><BsPlay /></span>
                <span className="bg-white text-blue-400 ml-2 p-[1px]"><AiOutlineDownload /></span>
                <span className="bg-white text-blue-400 ml-2 p-[1px]mr-2"><SlLink /></span>
              </div>
              <div className="flex justify-evenly ml-5"><span className="text-yellow-300 text-xl"><AiFillStar /></span>
                <span className="text-yellow-300 text-xl"><AiFillStar /></span>
                <span className="text-yellow-300 text-xl"><AiFillStar /></span>
                <span className="text-yellow-300 text-xl"><BsStarHalf /></span>
                <span className="text-yellow-300 text-xl"><AiOutlineStar /></span>
              </div>
            </div>

          </div>



          <div className="mt-3 p-2 flex justify-start flex-wrap">
            <div className="flex justify-evenly gap-8 flex-wrap">
              <div className="border-2 w-[150px] border-gray-400  rounded-lg text-black relative after:absolute after:content-['_Truck_Number_'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2">HR29 BD 2345</div>

              <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>

              <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>

              <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>

              <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>

              <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>

              <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>
            </div>


            <div className="flex justify-evenly gap-8 mt-8 flex-wrap">

              <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>
              <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>
              <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>
              <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>
              <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>
              <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>
              <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>
            </div>






          </div>




          <div className="flex justify-end items-center mt-5  p-2 bg-blue-400 "><span className="mr-5 text-white text-xl"><AiOutlineDown/></span></div>
          <div className="flex justify-center items-center w-full h-[100px]"></div>
        </div>
        <div className="mt-10 flex flex-col flex-1 relative border-2 rounded-md border-blue-400">

<div className="flex w-full justify-between items-center bg-blue-500 flex-wrap p-2">

  <div className="flex justify-evenly items-center">
    <div className=" m-2 rounded-full bg-white w-6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    <div className=" m-2 pl-2 pr-2 rounded-xl bg-white text-blue-400">Slip Number #123456</div>
    <div className=" m-2 pl-2 pr-2 rounded-xl bg-white text-blue-400">Loading</div>
    <div className=" m-2 pl-2 pr-2 rounded-xl bg-white text-blue-400">Loading</div>
  </div>

  <div className="flex justify-between items-center">
    <div className="flex justify-evenly items-center">
      <span className="w-[65px] h-[10px] border-[1px] border-solid border-white rounded-lg  bg-gradient-to-r from-white from-0% to-gray-500 to-95%"></span>
      <span className="text-gray-200 text-sm ml-1">75%</span>
      <span className="bg-white text-blue-400 ml-2 p-[1px]"><BiPencil /></span>
      <span className="bg-white text-blue-400 ml-2 p-[1px]"><AiOutlinePause /></span>
      <span className="bg-white text-blue-400 ml-2 p-[1px]"><BsPlay /></span>
      <span className="bg-white text-blue-400 ml-2 p-[1px]"><AiOutlineDownload /></span>
      <span className="bg-white text-blue-400 ml-2 p-[1px]mr-2"><SlLink /></span>
    </div>
    <div className="flex justify-evenly ml-5"><span className="text-yellow-300 text-xl"><AiFillStar /></span>
      <span className="text-yellow-300 text-xl"><AiFillStar /></span>
      <span className="text-yellow-300 text-xl"><AiFillStar /></span>
      <span className="text-yellow-300 text-xl"><BsStarHalf /></span>
      <span className="text-yellow-300 text-xl"><AiOutlineStar /></span>
    </div>
  </div>

</div>



<div className="mt-3 p-2 flex justify-start flex-wrap">
  <div className="flex justify-evenly gap-8 flex-wrap">
    <div className="border-2 w-[150px] border-gray-400  rounded-lg text-black relative after:absolute after:content-['_Truck_Number_'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2">HR29 BD 2345</div>

    <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>

    <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>

    <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>

    <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>

    <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>

    <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>
  </div>


  <div className="flex justify-evenly gap-8 mt-8 flex-wrap">

    <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>
    <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>
    <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>
    <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>
    <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>
    <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>
    <div className="border-2 w-[150px] border-gray-400 rounded-lg text-black relative after:absolute after:content-['Field'] after:text-gray-500 after:bottom-11 after:left-3 after:shadow-none after:bg-gray-100 text-center flex items-center justify-center h-[55px] font-semibold m-2"></div>
  </div>






</div>




<div className="flex justify-end items-center mt-5  p-2 bg-blue-400 "><span className="mr-5 text-white text-xl"><AiOutlineDown/></span></div>
<div className="flex justify-center items-center w-full h-[100px]"></div>
</div>

      </div>
    </div>
  )
}

export default Details




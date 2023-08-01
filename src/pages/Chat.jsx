
const Chat = () => {
  return (
      <div className="flex justify-center items-start border rounded-xl border-gray-300 min-h-screen drop-shadow-xl">
        <div className="flex flex-col justify-center">

          <div className="flex flex-col w-full justify-center items-center p-2 mt-10">
            <div className="flex flex-col w-full  text-center items-center justify-center space-y-3">
            
              <div className="text-xl font-semibold text-gray-400 flex justify-between">
              <div className="w-14 h-10   rounded-full ">
              <img src='./src/assets/details.png' className="h-full w-full" alt="hello" />
              </div>
              <span className="ml-2">Hi, Keval Here Choose one option.</span>
              </div>
              
              <div className="flex justify-evenly gap-4">
                <div className="ml-28 border-2 border-blue-500 rounded-lg p-1 pl-2 pr-2 text-blue-500">Menu</div>
                <div className="border-2 border-blue-500 rounded-lg p-1 pl-2 pr-2 text-blue-500">Notification</div>
                <div className="border-2 border-blue-500 rounded-lg p-1 pl-2 pr-2 text-blue-500">Most Searched</div>
              </div>
            </div>
        
          </div>
        </div>
      
      </div>
  )
}

export default Chat

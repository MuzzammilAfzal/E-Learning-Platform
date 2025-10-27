import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CopilotSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");
   const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm your Copilot assistant " },
  ]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    
    const newMessages = [...messages, { from: "user", text: inputValue }];

    
    setMessages([
      ...newMessages,
      { from: "bot", text: "Got it! Here's a response to: " + inputValue },
    ]);

    setInputValue("");
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-[#5c5470] rounded-l-2xl shadow-xl border-l border-gray-200 transition-all duration-300 ease-in-out ${
        isOpen ? "w-80" : "w-18"
      }`}
    >
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-[40%] left[-36px] bg-white border border-gray-300 rounded-full p-1 shadow-sm hover:bg-gray-50 transition"
      >
        {isOpen ? (
          <ChevronRight className="w-5 h-5 text-gray-600" />
        ) : (
            <div>
               <span className="font-bold">AI Assistant</span>
               <div className="flex justify-center">
                <ChevronLeft className="w-5 h-5 text-gray-600 font-bold" />
               </div>
            </div>
        )}
      </button>

      

     

      
      <div className="flex flex-col h-full p-4">
        {isOpen && (
          <>
            <h2 className="text-lg font-semibold mb-4 mt-4 text-center bg-[#c5c8cb] rounded-2xl text-black">Copilot</h2>
            
            <div className="flex-1 flex flex-col-reverse overflow-y-auto space-y-3 mb-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg text-sm ${
                    msg.from === "bot"
                      ? "bg-gray-100 text-gray-800 self-start"
                      : "bg-blue-500 text-white self-end ml-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            
            <div className="mt-auto">
              <input
                type="text"
                value={inputValue}
                onChange={(e) =>{ setInputValue(e.target.value); console.log(inputValue)}}
                onKeyDown={(e)=>{
                if(e.key=="Enter"){
                    handleSend()
                }
              }}
                placeholder="Ask something..."
                className="w-[75%] px-3 py-2 border text-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button onClick={handleSend} 
              className="w-fit px-3 py-2 border text-white border-gray-300 rounded-lg ml-2"
              >send</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CopilotSidebar;

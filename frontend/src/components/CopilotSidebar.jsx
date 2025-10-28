import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Loading from "./loading";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const CopilotSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm your Copilot assistant." },
  ]);
  const messagesEndRef = useRef(null);
  const [loading,setLoading]=useState(false)

  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

 

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage = { from: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    try {
      setLoading(true)
      const response = await fetch(`${backendUrl}/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();
      if(data){
        setLoading(false)
        setMessages((prev) => [
        ...prev,
        { from: "bot", text: data.reply  },
      ]);
      }
      
    } catch (error) {
      console.error("Error:", error)
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-[#5c5470] rounded-l-2xl shadow-xl border-l border-gray-200 transition-all duration-300 ease-in-out ${
        isOpen ? "w-80" : "w-16"
      }`}
    >
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-1/2 -left-5  bg-white border border-gray-300 rounded-full p-1 shadow-sm hover:bg-gray-50 transition"
      >
        {isOpen ? (
          <ChevronRight className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        )}
      </button>

      <div className="flex flex-col h-full p-4">
        {isOpen && (
          <>
            <h2 className="text-lg font-semibold mb-4 mt-4 text-center bg-[#c5c8cb] rounded-2xl text-black">
              Copilot
            </h2>

           
            <div className="flex-1 overflow-y-auto space-y-3 mb-3 scrollbar-thin scrollbar-thumb-gray-500">
              
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] p-2 rounded-lg text-sm wrap-break-word ${
                    msg.from === "bot"
                      ? "bg-gray-100 text-gray-800 self-start"
                      : "bg-blue-500 text-white self-end ml-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div className="w-[30%] p-2 rounded-lg ">
                <Loading loading={loading}/>
                </div>
              
              <div ref={messagesEndRef} />
              
            </div>

            
            <div className="mt-auto flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask something..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="ml-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CopilotSidebar;

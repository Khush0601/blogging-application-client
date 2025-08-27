import React, { useState } from "react";
import { faqData } from "./ChatbotData";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);
  
  const handleQuestionClick = (faq) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: faq.question },
      { sender: "bot", text: faq.answer },
    ]);
  };

  return (
   <div>
      
      <button
        className="fixed bottom-4 right-4 bg-amber-600 text-white p-3 rounded-full shadow-lg z-50"
        onClick={() => setOpen(!open)}
      >
        💬
      </button>

     
      {open && (
        <div className="fixed bottom-16  right-4 w-80 bg-white border shadow-lg rounded-lg overflow-hidden z-50">
          
          <div className="bg-amber-600 text-white p-3 font-semibold text-center sm:text-left">
            Help Assistant
          </div>

         
          <div className="h-64 sm:h-72 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-sm max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          
          <div className="border-t p-2 space-y-2 max-h-40 overflow-y-auto">
            {faqData.map((faq, idx) => (
              <button
                key={idx}
                className="w-full text-left text-sm p-2 bg-gray-100 rounded hover:bg-gray-200"
                onClick={() => handleQuestionClick(faq)}
              >
                {faq.question}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

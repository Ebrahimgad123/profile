"use client";
import React from "react";
import { FaFacebook,FaLinkedin, FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 text-white p-6">
     
      <p className="text-lg text-center mb-8 cairo">
      <span>📩</span>
       <bdi>هل لديك أي استفسار أو اقتراح؟ لا تتردد في التواصل معنا!</bdi>
      </p>
      
      <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg w-full max-w-lg mb-5">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="اسمك"
            className="cairo p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 border border-blue-400"
          />
          <input
            type="email"
            placeholder="بريدك الإلكتروني"
            className="cairo p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 border border-blue-400"
          />
          <textarea
            placeholder="رسالتك"
            rows={4}
            className="cairo p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 border border-blue-400"
          ></textarea>
          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg text-white font-semibold transition">
            إرسال الرسالة
          </button>
        </form>
      </div>
      <div className=" w-full text-center flex flex-col justify-center items-center bg-gray-900 text-white p-6 mt-5 mb-[20px]">
      <p className="text-4xl font-bold mb-6 font-serif">📞 تواصل معنا </p>

      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg text-center">
        <p className="text-lg mb-4 cairo">يمكنك الاتصال بنا عبر الرقم التالي:</p>
        <a 
          href="tel:+201234567890" 
          className="text-green-400 hover:text-green-300 underline text-xl font-semibold"
        >
          +20 01032243303
        </a>
      </div>
    </div>
    <div className="flex space-x-6">
        <a href="https://www.facebook.com/ibrahim.gad.5623" target="_blank" rel="noopener noreferrer" 
          className="text-black text-3xl hover:text-blue-400 transition">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/in/ibrahim-gad-1b614a264/" target="_blank" rel="noopener noreferrer" 
          className="text-black text-3xl hover:text-blue-500 transition">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Ebrahimgad123" target="_blank" rel="noopener noreferrer" 
          className="text-black text-3xl hover:text-gray-200 transition">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Contact;

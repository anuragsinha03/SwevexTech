import React from "react";
import whatsapp from "../../images/chat.svg";
function ChatWithUs() {
  return (
    <main>
      <section
        className="fixed right-4 bottom-4"
        title="Chat with us on Whatsapp!"
      >
        <a href="https://wa.me/9431567503" target="_blank" rel="noreferrer">
          <img
            className="hover:bg-[#25D366] hover:rounded-2xl w-[40px] rounded md:w-[35px] md:rounded-md"
            src={whatsapp}
            alt=""
          />
        </a>
      </section>
    </main>
  );
}

export default ChatWithUs;

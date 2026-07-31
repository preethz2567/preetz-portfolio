import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Mail = ({ isMaximized }) => {
  const form = useRef();
  const [notify, setNotify] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(<></>);

  const submitHandler = (e) => {
    e.preventDefault();
    const input = form.current;

    if (
      !input.email.value.includes("@") ||
      !input.email.value.includes(".com")
    ) {
      setNotification(
        <>
          <span style={{ color: "#e05555" }}>&#10006;</span> Invalid Email
        </>
      );
      setNotify(true);
      setTimeout(() => setNotify(false), 3000);
      return;
    }

    setIsLoading(true);
    const serviceId = "service_7isvhjm";
    const templateId = "template_jsxd2sx";
    const publicKey = "ns-YLmw0akeeK0kZU";

    emailjs
      .sendForm(serviceId, templateId, input, publicKey)
      .then(() => {
        setIsLoading(false);
        setNotification(
          <>
            <span style={{ color: "#4caf50" }}>&#10003;</span> Mail Sent Successfully!
          </>
        );
        setNotify(true);
        setTimeout(() => setNotify(false), 3000);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const fieldStyle = {
    background: "#fff",
    borderBottom: "1px solid var(--color-border-dark)",
    color: "var(--color-text-dark)",
  };

  return (
    <div
      className="h-full"
      style={{ background: "var(--color-window-content)" }}
    >
      <form
        className={`flex flex-col gap-0 h-full w-full overflow-y-auto ${
          isMaximized ? "px-1" : ""
        }`}
        onSubmit={submitHandler}
        ref={form}
      >
        {/* Notification toast */}
        <div className="w-full flex justify-end">
          <span
            className={`absolute m-3 px-4 py-2 text-sm transition-opacity ${
              notify ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: "var(--color-window-chrome)",
              color: "var(--color-text-light)",
            }}
          >
            {notification}
          </span>
        </div>

        {/* To */}
        <div className="m-[2px] p-[10px] flex gap-2 text-[16px] items-center" style={fieldStyle}>
          <label htmlFor="receiver" style={{ color: "#888", minWidth: 60 }}>To:</label>
          <input
            id="receiver"
            type="text"
            readOnly
            value="preethidurgaprasad@gmail.com"
            className="border-none shadow-none bg-transparent outline-none p-1 w-full"
            style={{ color: "var(--color-text-dark)" }}
          />
        </div>

        {/* From */}
        <div className="m-[2px] p-[10px] flex gap-2 text-[16px] items-center" style={fieldStyle}>
          <label htmlFor="email" style={{ color: "#888", minWidth: 60 }}>From:</label>
          <input
            id="email"
            name="email"
            type="text"
            required
            className="border-none shadow-none bg-transparent outline-none p-1 w-full"
            style={{ color: "var(--color-text-dark)" }}
          />
        </div>

        {/* Subject */}
        <div className="m-[2px] p-[10px] flex gap-2 text-[16px] items-center" style={fieldStyle}>
          <label htmlFor="subject" style={{ color: "#888", minWidth: 60 }}>Subject:</label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            className="border-none shadow-none bg-transparent outline-none p-1 w-full"
            style={{ color: "var(--color-text-dark)" }}
          />
        </div>

        {/* Body */}
        <textarea
          name="message"
          id="message"
          placeholder="Your message…"
          required
          className="text-[14px] min-h-[40%] p-2 px-3 m-[2px] outline-none resize-none"
          style={{
            background: "#fff",
            borderBottom: "1px solid var(--color-border-dark)",
            color: "var(--color-text-dark)",
            flex: 1,
          }}
        />

        <div className="flex justify-center m-2 p-2">
          <button
            type="submit"
            disabled={isLoading}
            className="flex justify-center items-center gap-2 px-6 py-1.5 text-sm disabled:opacity-60"
            style={{
              background: "var(--color-btn-face)",
              color: "var(--color-text-light)",
              border: "1px solid var(--color-border-dark)",
              cursor: "default",
            }}
          >
            {isLoading ? "Sending…" : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Mail;

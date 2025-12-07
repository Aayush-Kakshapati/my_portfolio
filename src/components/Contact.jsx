import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const body = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    setStatus("Sending...");

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      setStatus("Message sent!");
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-18 scroll-mt-12">
      <h2 className="text-3xl font-bold">Contact</h2>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 max-w-2xl">
        <input
          name="name"
          required
          className="p-3 border rounded"
          placeholder="Your name"
        />
        <input
          name="email"
          type="email"
          required
          className="p-3 border rounded"
          placeholder="Your email"
        />
        <textarea
          name="message"
          required
          rows="5"
          className="p-3 border rounded"
          placeholder="Your message"
        ></textarea>

        <button className="px-5 py-3 bg-primary-500 text-white rounded cursor-pointer">
          Send message
        </button>
      </form>

      {status && <p className="mt-4 text-sm">{status}</p>}
    </section>
  );
}

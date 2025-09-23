export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Contact</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Office</h3>
          <p className="text-slate-600">Kakkanad, Kochi, Kerala</p>
          <p className="text-slate-600">Email: hello@yourdomain.com</p>
          <p className="text-slate-600">Phone: +91-XXXXXXXXXX</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Message us</h3>
          <form action="#" className="space-y-3">
            <input
              className="w-full rounded-xl border border-slate-200 px-4 py-2"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-full rounded-xl border border-slate-200 px-4 py-2"
              placeholder="Email"
            />
            <textarea
              rows={4}
              className="w-full rounded-xl border border-slate-200 px-4 py-2"
              placeholder="How can we help?"
            />
            <button className="btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

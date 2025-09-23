export const metadata = { title: "Admissions" };

export default function AdmissionsPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Admissions</h1>
      <div className="card p-6 max-w-2xl">
        <p className="text-slate-600">
          Fill the form and we’ll reach out with the next steps and cohort
          dates.
        </p>
        <form action="#" className="mt-6 space-y-4">
          <input
            className="w-full rounded-xl border border-slate-200 px-4 py-2"
            placeholder="Full name"
          />
          <input
            type="email"
            className="w-full rounded-xl border border-slate-200 px-4 py-2"
            placeholder="Email"
          />
          <input
            className="w-full rounded-xl border border-slate-200 px-4 py-2"
            placeholder="Phone / WhatsApp"
          />
          <select className="w-full rounded-xl border border-slate-200 px-4 py-2">
            <option>Web Development</option>
            <option>Digital Marketing</option>
          </select>
          <button className="btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

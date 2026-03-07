export default function MapSection() {
  return (
    <section className="bg-surface py-16 px-4">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex flex-col gap-2">
          <p className="text-xs font-bold uppercase tracking-widest text-muted">
            Find Us
          </p>
          <h3 className="text-2xl font-black text-deepspace">
            Our Office — <span className="text-malachite">Ghaziabad, NCR</span>
          </h3>
        </div>

        {/* Map embed */}
        <div className="overflow-hidden rounded-2xl border border-border h-80 w-full bg-surface">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Tecorbitron Office Location — Ghaziabad, NCR"
          />
        </div>

        <p className="mt-4 text-xs text-muted font-medium text-center">
          Exact address shared upon appointment. Remote consultations available worldwide.
        </p>

      </div>
    </section>
  );
}

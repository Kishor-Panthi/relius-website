export function KpiStripe() {
  const metrics = [
    { value: "10+", label: "Hours Saved Per Week" },
    { value: "3x", label: "Faster Event Planning" },
    { value: "40%", label: "Higher Engagement" },
    { value: "25%", label: "Better Donor Retention" },
  ];

  return (
    <section className="py-16 px-6 lg:px-8 bg-primary text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="text-sm lg:text-base text-primary-100">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

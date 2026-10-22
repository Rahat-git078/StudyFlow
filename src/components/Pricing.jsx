import SectionHeader from "./shared/SectionHeader";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      price: 300,
      pricingTitle: "Basic",
      expiration: "forever",
      Features: [
        "Limited storage space",
        "Basic support",
        "Access to core features",
      ],
    },

    {
      id: 2,
      price: 500,
      pricingTitle: "Pro",
      expiration: "forever",
      Features: [
        "Unlimited storage space",
        "Priority support",
        "Access to all features",
        "Customizable dashboard",
      ],
    },
  ];

  return (
    <div id="pricing" className="container mx-auto py-12 space-y-8">
      <SectionHeader
        tittle={"Pricing"}
        subtitle={"Choose the plan that works best for you"}
      />

      <div className="grid grid-cols-2 gap-4 max-w-[650px] mx-auto">
          {plans.map((plan) => {
            console.log(plan.pricingTitle);

            return (
            <div
              key={plan.id}
              className={`bg-white rounded-lg p-6 mb-6 ${
                plan.pricingTitle === "Pro"
                  ? "border-2 border-[#0e7c66] shadow-lg"
                  : "border border-gray-100 shadow-md"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.pricingTitle}</h3>
              <p className="text-3xl font-bold mb-4">${plan.price.toFixed(2)}</p>
              <ul className="mb-4">
                {plan.Features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

               <button className="btn bg-[#0e7c66] hover:bg-green-700 text-white font-bold ">
                Get Started
              </button>

            </div>
            );
          })}

      </div>
    </div>
  );
};

export default Pricing;

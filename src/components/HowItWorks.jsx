import SectionHeader from "./shared/SectionHeader";


const HowItWorks = () => {

    const steps = [
        {
            title: " set a goal",
            description: "Sign up for an account"
        },
        {
            title: "breaks it into daily tasks",
            description: "Choose your study materials"
        },
        {
            title: "Track your progress",
            description: "Start learning"
        }
    ];

    return (
        <div id="how-it-works" className="container mx-auto py-[70px] space-y-4">
            <SectionHeader title="How It Works" />
            <div className="grid grid-cols-3  gap-4">
                {steps.map((step, index) => (
                       console.log(step, index ),

                    <div key={index} className="bg-white p-4 rounded shadow text-center">
                        <h1 className="text-3xl font-bold text-[#0e7c66] ">{index + 1}</h1>
                        <h3 className="text-xl font-semibold ">{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;

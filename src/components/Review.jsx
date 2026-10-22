import SectionHeader from "./shared/SectionHeader";


const Review = () => {
      
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            rating: 5,
            comment: "This product is amazing! Highly recommend it.",
            designation: "student"

        },


        {
            id: 2,
            name: "Jane Smith",
            rating: 4,
            comment: "Good quality, but a bit expensive.",
            designation: "student"
        },

        {
            id: 3,
            name: "Bob Johnson",
            rating: 5,
            comment: "Excellent product, exceeded my expectations!",
            designation: "student"
        },

          {
            id: 4,
            name: "Alice Williams",
            rating: 5,
            comment: "I love this product! It's exactly what I was looking for.",
            designation: "student"
        },


         {
            id: 5,
            name: "Charlie Brown",
            rating: 4,
            comment: "Good product overall, but could be improved.",
            designation: "student"
        },


         {

            id: 6,
            name: "Emily Davis",
            rating: 5,
            comment: "Fantastic product! I will definitely buy it again.",
            designation: "student"
         }
         
    ]

    return (
        <section id="reviews" className=" py-12 container mx-auto">
          <SectionHeader title={"students are getting more done"} />  
        <div className="grid grid-cols-3 gap-4">
            {reviews.map((review) => (
                <div key={review.id} className="bg-white p-6 card  rounded-lg shadow-md space-y-2">
                    <h3 className="text-lg font-semi-bold">{review.name}</h3>
                    <p className="text-yellow-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                    <p className="text-gray-600 mt-2">{review.comment}</p>
                    <p className="text-sm text-gray-500">{review.designation}</p>
                </div>
            ))}


        </div>
            
        </section>
    );
};

export default Review;
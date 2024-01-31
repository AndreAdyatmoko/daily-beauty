import React from "react";

const Featured = () => {
  const featuredData = [
    {
      imageSrc: "/assets/banner12.png",
      title: "Reviewing the Latest Beauty Innovations in 2023",
      description:
        "Stay on the cutting edge of beauty with a comprehensive review of the latest innovations in the industry. From skincare breakthroughs to high-tech beauty gadgets, explore what's new in 2023.",
      category: "featured",
    },
  ];

  const articleData = [
    {
      title: "Sustainable Beauty Practices and Devices",
      content:
        "In 2023, sustainability takes center stage in the beauty industry. From eco-friendly packaging to product formulations that prioritize environmental impact, beauty brands are embracing a holistic approach to sustainability. Look out for products that not only enhance your beauty but also contribute to a healthier planet. Smart skincare devices are taking personalized skincare to the next level. From AI-powered skin analysis tools to smart cleansing devices, these innovations provide tailored recommendations based on individual skin needs. Expect to see a surge in at-home devices designed to mimic professional spa treatments, offering a luxurious experience in the comfort of your own space.",
    },
    {
      title: "Biometric Beauty",
      content:
        "Biometric technology is making its mark in the beauty world. Customized skincare formulations based on individual biometric data, such as DNA and skin microbiome analysis, are becoming more prevalent. These personalized approaches ensure that beauty products are tailored to meet the specific needs of each user, unlocking the potential for truly individualized skincare. Virtual try-ons and augmented reality (AR) experiences are transforming the way we shop for beauty products online. Brands are integrating AR technology into their platforms, allowing users to virtually try on makeup, experiment with different hairstyles, and test skincare products before making a purchase. This immersive online shopping experience enhances user engagement and confidence in product selection.",
    },
    {
      title: "Neurocosmetics",
      content:
        "Neurocosmetics, blending neuroscience and beauty, is gaining momentum. Products enhance mood and well-being through sensory experiences. Skincare and makeup infused with ingredients promote relaxation and stress relief.",
    },
    {
      title: "Virtual Try-Ons and AR Experiences",
      content:
        "AR technology transforms online beauty shopping. Virtual try-ons allow users to experiment with makeup, hairstyles, and skincare products. Immersive online experiences enhance user confidence and engagement.",
    },
  ];

  return (
    <div
      className="container px-8"
      style={{ width: "1248px", height: "702px" }}
    >
      <div className="border-t border-gray-500">
        <div className="items-center font-serif text-gray-70 text-center">
          <div className="mt-20">
            {featuredData.map((featured, index) => (
              <div key={index}>
                <span className="text-pink-500 up items-center">
                  {featured.category}
                </span>
                <div className="max-w-3xl mx-auto">
                  <h1 className="text-4xl font-bold leading-tight">
                    {featured.title}
                  </h1>
                  <p className="text-lg mt-6 leading-relaxed">
                    {featured.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <img
          src={featuredData[0].imageSrc}
          alt="Skincare Products"
          className="w-full max-h-full object-cover"
        />
      </div>
      <div className="mt-4 px-28">
        {articleData.map((article, index) => (
          <div key={index} className={index > 0 ? "mt-4" : ""}>
            <h1 className="text-4xl font-bold leading-tight">
              {article.title}
            </h1>
            {article.title === "Neurocosmetics" ? (
              <ul className="list-disc list-inside text-lg mt-4">
                {article.content.split(". ").map((sentence, idx) => (
                  <li key={idx}>{sentence}</li>
                ))}
              </ul>
            ) : article.title === "Virtual Try-Ons and AR Experiences" ? (
              <ol className="list-decimal list-inside text-lg mt-4">
                {article.content.split(". ").map((sentence, idx) => (
                  <li key={idx}>{sentence}</li>
                ))}
              </ol>
            ) : (
              <p className="text-lg mt-4 leading-relaxed">{article.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;

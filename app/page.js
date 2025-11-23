'use client';

import { useState } from 'react';
import './globals.css';

const slides = [
  {
    title: "Indofil M-45",
    subtitle: "Advanced Fungicide for Crop Protection",
    content: [
      "Comprehensive Disease Management Solution",
      "Trusted by Farmers Worldwide",
      "Proven Performance Since 1962"
    ],
    bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    title: "What is Indofil M-45?",
    subtitle: "Product Overview",
    content: [
      "Active Ingredient: Mancozeb 75% WP",
      "Contact Fungicide with Protective Action",
      "Multi-site Mode of Action",
      "Broad Spectrum Disease Control",
      "Manufactured by Indofil Industries Limited"
    ],
    bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    title: "Key Features",
    subtitle: "Why Choose Indofil M-45?",
    content: [
      "✓ Broad Spectrum Control - Effective against multiple fungal diseases",
      "✓ Protective Action - Prevents disease establishment",
      "✓ Multi-Site Activity - Reduces resistance development",
      "✓ Cost-Effective - Economical disease management",
      "✓ Flexible Application - Compatible with various crops"
    ],
    bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  },
  {
    title: "Mode of Action",
    subtitle: "How It Works",
    content: [
      "Multi-site Inhibitor - Disrupts multiple enzyme systems",
      "Inhibits Spore Germination - Prevents fungal growth",
      "Protective Barrier - Forms a protective layer on plant surface",
      "Non-Systemic - Remains on plant surface for contact activity",
      "Low Resistance Risk - Multiple action sites prevent adaptation"
    ],
    bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
  },
  {
    title: "Target Crops",
    subtitle: "Wide Range of Applications",
    content: [
      "🌾 Cereals: Wheat, Rice, Barley",
      "🥔 Vegetables: Potato, Tomato, Chili, Onion",
      "🍇 Fruits: Grapes, Mango, Apple, Citrus",
      "🌱 Plantation: Tea, Coffee, Cardamom",
      "🌻 Oilseeds: Groundnut, Sunflower"
    ],
    bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
  },
  {
    title: "Disease Control Spectrum",
    subtitle: "Effective Against Major Diseases",
    content: [
      "Late Blight & Early Blight in Potato & Tomato",
      "Downy Mildew in Grapes & Vegetables",
      "Blast in Rice",
      "Rust in Wheat & Cereals",
      "Leaf Spots & Anthracnose in Various Crops",
      "Damping Off in Nurseries"
    ],
    bg: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
  },
  {
    title: "Application Guidelines",
    subtitle: "Recommended Usage",
    content: [
      "📊 Dosage: 2-2.5 kg per hectare",
      "💧 Spray Volume: 500-1000 liters per hectare",
      "⏱️ Frequency: 7-10 days interval",
      "🌤️ Timing: Apply as preventive measure before disease onset",
      "🔄 Number of Applications: 3-5 sprays per season"
    ],
    bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
  },
  {
    title: "Application Methods",
    subtitle: "Flexible Use Options",
    content: [
      "Foliar Spray - Most common method for disease prevention",
      "Seed Treatment - Protects seeds from soil-borne pathogens",
      "Seedling Dip - For transplanted crops",
      "Soil Drench - For damping off control in nurseries",
      "Compatible with most insecticides and fungicides"
    ],
    bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
  },
  {
    title: "Benefits to Farmers",
    subtitle: "Value Proposition",
    content: [
      "💰 Economic: Cost-effective disease management",
      "🛡️ Reliable: Consistent performance across conditions",
      "🌱 Crop Health: Maintains green foliage, improves photosynthesis",
      "📈 Yield: Increases crop productivity and quality",
      "⚡ Preventive: Stops diseases before they establish",
      "🔒 Tank Mix: Compatible with many other agrochemicals"
    ],
    bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
  },
  {
    title: "Safety & Precautions",
    subtitle: "Responsible Use",
    content: [
      "⚠️ Wear protective clothing during application",
      "🚫 Do not eat, drink or smoke during handling",
      "🧼 Wash hands and exposed skin after use",
      "🌾 Observe pre-harvest interval (PHI) as per label",
      "♻️ Dispose of empty containers properly",
      "🏥 Antidote: Symptomatic treatment"
    ],
    bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
  },
  {
    title: "Resistance Management",
    subtitle: "Sustainable Use Strategy",
    content: [
      "Rotate with fungicides of different modes of action",
      "Use recommended doses - avoid under-dosing",
      "Integrate with cultural practices",
      "Apply preventively rather than curatively",
      "Follow IPM (Integrated Pest Management) principles",
      "Monitor fields regularly for disease symptoms"
    ],
    bg: "linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)"
  },
  {
    title: "Storage & Handling",
    subtitle: "Best Practices",
    content: [
      "📦 Store in original container in cool, dry place",
      "🌡️ Keep away from direct sunlight and heat",
      "🔒 Keep out of reach of children and animals",
      "🚫 Do not store near food, feed or water sources",
      "⏳ Shelf Life: 2-3 years when stored properly",
      "♻️ Do not reuse empty containers"
    ],
    bg: "linear-gradient(135deg, #13547a 0%, #80d0c7 100%)"
  },
  {
    title: "Technical Specifications",
    subtitle: "Product Details",
    content: [
      "Chemical Group: Dithiocarbamate",
      "Formulation: Wettable Powder (WP)",
      "Concentration: 75% w/w",
      "Appearance: Yellowish-grey powder",
      "Solubility: Dispersible in water",
      "pH: 6.0-7.5 (1% suspension)",
      "Pack Sizes: 250g, 500g, 1kg, 25kg"
    ],
    bg: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)"
  },
  {
    title: "Environmental Impact",
    subtitle: "Eco-Friendly Considerations",
    content: [
      "🐝 Moderately toxic to bees - avoid spraying during flowering",
      "🐟 Toxic to fish and aquatic organisms - avoid water contamination",
      "🌍 Biodegradable in soil",
      "🦅 Low toxicity to birds when used as directed",
      "🌱 No phytotoxicity at recommended doses",
      "Follow label instructions for environmental safety"
    ],
    bg: "linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)"
  },
  {
    title: "Success Stories",
    subtitle: "Proven Results",
    content: [
      "🥔 Potato Farmers: 30-40% yield increase with blight control",
      "🍅 Tomato Growers: Extended crop season and better fruit quality",
      "🍇 Grape Vineyards: Effective downy mildew management",
      "🌾 Rice Farmers: Reduced blast incidence and improved grain quality",
      "Trusted by millions of farmers across 50+ countries"
    ],
    bg: "linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)"
  },
  {
    title: "Thank You",
    subtitle: "Indofil M-45 - Your Partner in Crop Protection",
    content: [
      "For more information:",
      "Visit: www.indofil.com",
      "Contact your local agricultural advisor",
      "Always read the label before use",
      "",
      "Protecting Crops, Empowering Farmers"
    ],
    bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  }
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  return (
    <div
      className="presentation-container"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{ background: slides[currentSlide].bg }}
    >
      <div className="slide">
        <div className="slide-content">
          <h1 className="slide-title">{slides[currentSlide].title}</h1>
          <h2 className="slide-subtitle">{slides[currentSlide].subtitle}</h2>
          <ul className="slide-list">
            {slides[currentSlide].content.map((item, index) => (
              <li key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="controls">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="nav-button"
        >
          ← Previous
        </button>

        <div className="slide-indicator">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="nav-button"
        >
          Next →
        </button>
      </div>

      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}

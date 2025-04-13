import "./App.css";
import "./index.css";
import { Button } from "@mui/material";
import { useState } from "react";

function App() {
  // State for form steps
  const [formStep, setFormStep] = useState(0);

  // State for form success message
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    propertyType: "",
    propertySize: "",
    notes: "",
    services: [] as string[],
  });

  // Function to show success message
  const showPageSnackbar = (message: string, duration = 3000) => {
    setSuccessMessage(message);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, duration);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-[#2f5d3a]">
                Gil Landscaping
              </div>
              <div className="hidden md:flex ml-10 space-x-8">
                <a
                  href="#services"
                  className="text-slate-700 hover:text-[#2f5d3a] transition-colors"
                >
                  Services
                </a>
                <a
                  href="#testimonials"
                  className="text-slate-700 hover:text-[#2f5d3a] transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#quote"
                  className="text-slate-700 hover:text-[#2f5d3a] transition-colors"
                >
                  Get a Quote
                </a>
                <a
                  href="#about"
                  className="text-slate-700 hover:text-[#2f5d3a] transition-colors"
                >
                  About Us
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Button
                variant="contained"
                size="medium"
                sx={{
                  bgcolor: "#2f5d3a",
                  "&:hover": {
                    bgcolor: "#1e3a25",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  },
                  textTransform: "none",
                  borderRadius: "0.375rem",
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                Free Estimate
              </Button>
              <button className="md:hidden ml-4 text-slate-700">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full bg-[#f0fdf4]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/3KrVDUHnnQU.jpg"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#2f5d3a]/80"></div>
        </div>

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Affordable Landscaping in Dallas
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Licensed professionals trusted by 250+ homeowners.
            </p>
            <Button
              variant="contained"
              size="large"
              aria-label="Request a free estimate"
              sx={{
                bgcolor: "#facc15",
                color: "#2f5d3a",
                "&:hover": {
                  bgcolor: "#eab308",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                },
                textTransform: "none",
                borderRadius: "0.375rem",
                padding: "0.75rem 2rem",
                fontSize: "1.125rem",
                fontWeight: "bold",
                transition: "all 0.2s ease-in-out",
              }}
            >
              Get a Free Estimate
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1f2937] mb-12">
            Our Landscaping Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div
              className="bg-[#f9fafb] rounded-lg shadow-md overflow-hidden hover:bg-[#f3f4f6] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => (window.location.href = "#quote")}
              role="button"
              aria-label="Learn more about Lawn Maintenance"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && (window.location.href = "#quote")
              }
            >
              <div className="relative">
                <img
                  src="/lawncare.jpeg"
                  alt="Professional lawn care with perfectly striped green grass"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1f2937] mb-2">
                  Lawn Maintenance
                </h3>
                <p className="text-gray-500">
                  Regular mowing, edging, and trimming to keep your lawn looking
                  its best.
                </p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div
              className="bg-[#f9fafb] rounded-lg shadow-md overflow-hidden hover:bg-[#f3f4f6] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => (window.location.href = "#quote")}
              role="button"
              aria-label="Learn more about Landscape Design"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && (window.location.href = "#quote")
              }
            >
              <div className="relative">
                <img
                  src="/landscape.jpeg"
                  alt="Beautiful backyard landscape with water feature and colorful flowers"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1f2937] mb-2">
                  Landscape Design
                </h3>
                <p className="text-gray-500">
                  Custom landscape designs to transform your outdoor space.
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div
              className="bg-[#f9fafb] rounded-lg shadow-md overflow-hidden hover:bg-[#f3f4f6] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => (window.location.href = "#quote")}
              role="button"
              aria-label="Learn more about Irrigation Systems"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && (window.location.href = "#quote")
              }
            >
              <div className="relative">
                <img
                  src="/irrigation.jpeg"
                  alt="Sprinkler system watering garden with vibrant flowers"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1f2937] mb-2">
                  Irrigation Systems
                </h3>
                <p className="text-gray-500">
                  Installation and maintenance of efficient irrigation systems.
                </p>
              </div>
            </div>

            {/* Service Card 4 */}
            <div
              className="bg-[#f9fafb] rounded-lg shadow-md overflow-hidden hover:bg-[#f3f4f6] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => (window.location.href = "#quote")}
              role="button"
              aria-label="Learn more about Hardscaping"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && (window.location.href = "#quote")
              }
            >
              <div className="relative">
                <img
                  src="/hardscape.jpeg"
                  alt="Elegant stone patio with outdoor furniture and landscaping"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1f2937] mb-2">
                  Hardscaping
                </h3>
                <p className="text-gray-500">
                  Patios, walkways, and retaining walls to enhance your
                  landscape.
                </p>
              </div>
            </div>

            {/* Service Card 5 */}
            <div
              className="bg-[#f9fafb] rounded-lg shadow-md overflow-hidden hover:bg-[#f3f4f6] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => (window.location.href = "#quote")}
              role="button"
              aria-label="Learn more about Planting & Gardening"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && (window.location.href = "#quote")
              }
            >
              <div className="relative">
                <img
                  src="/planting.jpeg"
                  alt="Gardener in blue planting a young tree in a garden"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1f2937] mb-2">
                  Planting & Gardening
                </h3>
                <p className="text-gray-500">
                  Selection and installation of plants, trees, and shrubs that
                  thrive in Dallas.
                </p>
              </div>
            </div>

            {/* Service Card 6 */}
            <div
              className="bg-[#f9fafb] rounded-lg shadow-md overflow-hidden hover:bg-[#f3f4f6] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => (window.location.href = "#quote")}
              role="button"
              aria-label="Learn more about Seasonal Cleanup"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && (window.location.href = "#quote")
              }
            >
              <div className="relative">
                <img
                  src="/cleanup.jpeg"
                  alt="Landscaper using leaf blower for fall cleanup in a tree-lined area"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1f2937] mb-2">
                  Seasonal Cleanup
                </h3>
                <p className="text-gray-500">
                  Spring and fall cleanup services to keep your property
                  pristine year-round.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div id="testimonials" className="bg-[#f2f4f1] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <svg
                  key={star}
                  className="w-8 h-8 text-[#facc15] animate-pulse hover:scale-110 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: "3s",
                  }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-2xl font-medium text-[#1f2937] mb-6">
              4.9 out of 5 stars from 120+ reviews
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img
                  src="https://placehold.co/100x100/e2e8f0/1e293b?text=Sarah"
                  alt="Sarah Johnson"
                  className="w-20 h-20 rounded-full border-2 border-[#2f5d3a] object-cover"
                />
                <div className="flex-1 text-left">
                  <p className="text-xl italic text-[#1f2937] mb-6">
                    "Gil Landscaping transformed our backyard from an overgrown
                    mess into a beautiful oasis. Their team was professional, on
                    time, and the quality of work exceeded our expectations."
                  </p>
                  <p className="font-bold text-[#1f2937]">
                    — Sarah Johnson, Dallas
                  </p>
                </div>
              </div>
            </div>

            <div
              className="flex flex-wrap justify-center gap-6 mt-8 opacity-0"
              id="trust-badges"
              style={{
                animation: "fadeIn 1s ease-in-out forwards",
                animationDelay: "0.3s",
              }}
            >
              {[
                { text: "BBB A+", delay: 0 },
                { text: "Licensed", delay: 0.2 },
                { text: "Insured", delay: 0.4 },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transform transition-all duration-500 hover:-translate-y-1"
                  style={{
                    opacity: 0,
                    animation: "fadeIn 0.5s ease-in-out forwards",
                    animationDelay: `${0.5 + badge.delay}s`,
                  }}
                >
                  <img
                    src={`https://placehold.co/120x60/e2e8f0/1e293b?text=${badge.text}`}
                    alt={badge.text}
                    className="h-8"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Mid-Page CTA */}
      <div
        className="bg-[#2f5d3a] text-white py-16 opacity-0"
        style={{
          animation: "fadeIn 1s ease-in-out forwards",
          animationDelay: "0.1s",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Landscape</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Free quote. No obligation. 24-hour response.
          </p>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "white",
              color: "#2f5d3a",
              "&:hover": {
                bgcolor: "#f3f4f6",
                transform: "translateY(-3px)",
                boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
              },
              textTransform: "none",
              borderRadius: "0.375rem",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
          >
            Get Your Estimate
          </Button>
          <p className="text-sm mt-4 text-white opacity-90 max-w-xl mx-auto">
            "Quick, painless, no-pressure process." - Recent Customer
          </p>
          <p className="text-xs mt-2 text-white opacity-80">
            Serving Dallas, Plano, Frisco. No credit card needed.
          </p>
        </div>
      </div>

      {/* Quote Form Section */}
      <div id="quote" className="py-16 bg-[#f3f4f6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1f2937] mb-12">
            Request a Free Estimate
          </h2>
          <div className="flex flex-col lg:flex-row lg:gap-6 space-y-8 lg:space-y-0">
            <div className="w-full lg:w-[60%]">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                {/* Form Steps Indicator */}
                <div className="flex justify-between mb-8 relative">
                  {/* Progress Line */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

                  {/* Step Indicators */}
                  {[
                    { label: "Contact Info", id: "contact" },
                    { label: "Property Details", id: "property" },
                    { label: "Service Needs", id: "services" },
                  ].map((step, index) => {
                    // Calculate if step is active or completed
                    const isActive = formStep === index;
                    const isCompleted = formStep > index;

                    return (
                      <div key={index} className="flex flex-col items-center">
                        <button
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium mb-2 transition-all duration-300 ${
                            isActive
                              ? "bg-[#2f5d3a] scale-110"
                              : isCompleted
                              ? "bg-[#2f5d3a] bg-opacity-80"
                              : "bg-gray-200"
                          }`}
                          onClick={() => {
                            // Only allow going back to completed steps
                            if (isCompleted) setFormStep(index);
                          }}
                        >
                          {isCompleted ? (
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          ) : (
                            index + 1
                          )}
                        </button>
                        <span
                          className={`text-sm font-medium ${
                            isActive
                              ? "text-[#2f5d3a]"
                              : isCompleted
                              ? "text-[#2f5d3a] text-opacity-80"
                              : "text-gray-500"
                          }`}
                        >
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Security Badge */}
                <div className="flex items-center justify-center mb-6 bg-[#f2f4f1] py-2 px-4 rounded-md">
                  <svg
                    className="w-5 h-5 text-[#2f5d3a] mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-[#2f5d3a]">
                    Your information is secure and will never be shared
                  </span>
                </div>

                {/* Step 1: Contact Form */}
                {formStep === 0 && (
                  <form
                    className="space-y-6 transition-all duration-500"
                    onSubmit={(e) => {
                      e.preventDefault();
                      // Validate and proceed to next step
                      setFormStep(1);
                      // Show success snackbar
                      showPageSnackbar(
                        "Information saved! Continuing to property details..."
                      );
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2f5d3a] focus:border-transparent transition-all duration-200"
                          placeholder="John Smith"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                        <p
                          className={`text-xs text-[#2f5d3a] mt-1 ${
                            formData.name ? "" : "hidden"
                          }`}
                        >
                          Looks good!
                        </p>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2f5d3a] focus:border-transparent transition-all duration-200"
                          placeholder="you@example.com"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                        <p
                          className={`text-xs text-red-500 mt-1 ${
                            formData.email && !formData.email.includes("@")
                              ? ""
                              : "hidden"
                          }`}
                        >
                          Please enter a valid email
                        </p>
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2f5d3a] focus:border-transparent transition-all duration-200"
                          placeholder="(214) 555-1234"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          We'll text you when your estimate is ready
                        </p>
                      </div>
                      <div>
                        <label
                          htmlFor="zip"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Zip Code <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="zip"
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                          placeholder="75001"
                          required
                          value={formData.zip}
                          onChange={(e) =>
                            setFormData({ ...formData, zip: e.target.value })
                          }
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          We serve Dallas and surrounding areas
                        </p>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 mt-2">
                      <p>
                        By submitting this form, you agree to our{" "}
                        <a href="#" className="text-green-700 underline">
                          privacy policy
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-green-700 underline">
                          terms of service
                        </a>
                        .
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          bgcolor: "#2f5d3a",
                          "&:hover": {
                            bgcolor: "#1e3a25",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                          },
                          textTransform: "none",
                          borderRadius: "0.375rem",
                          padding: "0.75rem 1.5rem",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Next: Property Details
                      </Button>
                    </div>
                  </form>
                )}

                {/* Step 2: Property Details Form */}
                {formStep === 1 && (
                  <form
                    className="space-y-6 transition-all duration-500"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormStep(2);
                      showPageSnackbar(
                        "Information saved! Continuing to service needs..."
                      );
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Property Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                          value={formData.propertyType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              propertyType: e.target.value,
                            })
                          }
                        >
                          <option value="">Select property type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Property Size (approx.){" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                          value={formData.propertySize}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              propertySize: e.target.value,
                            })
                          }
                        >
                          <option value="">Select size</option>
                          <option value="small">
                            Small (Less than 1/4 acre)
                          </option>
                          <option value="medium">
                            Medium (1/4 to 1/2 acre)
                          </option>
                          <option value="large">Large (Over 1/2 acre)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Notes
                      </label>
                      <textarea
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Anything else we should know about your property?"
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                      />
                    </div>

                    <div className="flex justify-between">
                      <Button
                        type="button"
                        variant="outlined"
                        onClick={() => setFormStep(0)}
                        sx={{
                          color: "#2f5d3a",
                          borderColor: "#2f5d3a",
                          "&:hover": {
                            borderColor: "#1e3a25",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          },
                          textTransform: "none",
                          borderRadius: "0.375rem",
                          padding: "0.75rem 1.5rem",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          bgcolor: "#2f5d3a",
                          "&:hover": {
                            bgcolor: "#1e3a25",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                          },
                          textTransform: "none",
                          borderRadius: "0.375rem",
                          padding: "0.75rem 1.5rem",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Next: Service Needs
                      </Button>
                    </div>
                  </form>
                )}

                {/* Step 3: Service Needs Form */}
                {formStep === 2 && (
                  <form
                    className="space-y-6 transition-all duration-500"
                    onSubmit={(e) => {
                      e.preventDefault();
                      // Show success message instead of alert
                      showPageSnackbar(
                        "Thank you! Your estimate request has been submitted. We'll be in touch within 24 hours.",
                        5000
                      );
                      // Reset the form after a delay to let the user see the message
                      setTimeout(() => {
                        setFormStep(0);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          zip: "",
                          propertyType: "",
                          propertySize: "",
                          notes: "",
                          services: [],
                        });
                      }, 2000);
                    }}
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Services You're Interested In{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <div className="space-y-3">
                        {[
                          { id: "lawn", label: "Lawn Maintenance" },
                          { id: "design", label: "Landscape Design" },
                          { id: "irrigation", label: "Irrigation Systems" },
                          { id: "hardscaping", label: "Hardscaping" },
                          { id: "planting", label: "Planting & Gardening" },
                          { id: "cleanup", label: "Seasonal Cleanup" },
                        ].map((service) => (
                          <div key={service.id} className="flex items-center">
                            <input
                              type="checkbox"
                              id={service.id}
                              className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                              checked={formData.services.includes(service.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setFormData({
                                    ...formData,
                                    services: [
                                      ...formData.services,
                                      service.id,
                                    ],
                                  });
                                } else {
                                  setFormData({
                                    ...formData,
                                    services: formData.services.filter(
                                      (s) => s !== service.id
                                    ),
                                  });
                                }
                              }}
                            />
                            <label
                              htmlFor={service.id}
                              className="ml-3 text-sm text-gray-700"
                            >
                              {service.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        type="button"
                        variant="outlined"
                        onClick={() => setFormStep(1)}
                        sx={{
                          color: "#2f5d3a",
                          borderColor: "#2f5d3a",
                          "&:hover": {
                            borderColor: "#1e3a25",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          },
                          textTransform: "none",
                          borderRadius: "0.375rem",
                          padding: "0.75rem 1.5rem",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          bgcolor: "#2f5d3a",
                          "&:hover": {
                            bgcolor: "#1e3a25",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                          },
                          textTransform: "none",
                          borderRadius: "0.375rem",
                          padding: "0.75rem 1.5rem",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Submit Request
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
            <div className="w-full lg:w-[40%] border-l-0 lg:border-l lg:pl-6 border-gray-200">
              <div className="rounded-lg overflow-hidden shadow-sm ring-1 ring-gray-100">
                <div style={{ height: "350px", width: "100%" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.14953893542!2d-96.88994514999999!3d32.8209826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1719444507602!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Gil Landscaping Service Area - Dallas, TX"
                    aria-label="Map showing our service area in Dallas, TX"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="about" className="bg-[#2f5d3a] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Gil Landscaping</h3>
              <p className="mb-2 opacity-90">
                Professional landscaping services in Dallas, TX
              </p>
              <p className="mb-2 opacity-90">License #: TX-12345</p>
              <p className="opacity-90">Fully insured and bonded</p>

              {/* Social Media Icons */}
              <div className="mt-4 text-sm flex justify-center md:justify-start">
                <div className="flex space-x-4">
                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Facebook page"
                    className="text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    className="text-gray-300 hover:text-pink-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.668.01 2.985.058 4.04.044.975.207 1.504.344 1.856.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.975-.044 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.352.3-.882.344-1.857.048-1.054.058-1.37.058-4.04 0-2.668-.01-2.985-.058-4.04-.044-.975-.207-1.504-.344-1.856a3.09 3.09 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.686a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                    </svg>
                  </a>

                  {/* Yelp */}
                  <a
                    href="https://yelp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Check our reviews on Yelp"
                    className="text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.16 12.594l-4.995 1.453c-.67.188-1.21-.34-1.21-1.182 0-.144 0-.627.132-.772.138-.138.342-.264.847-.42l5.09-1.523c.9-.276 1.66.514 1.42 1.092-.164.394-.738 1.165-1.284 1.35zm-5.618 3.71c-.17.146-.284.627-.284.772 0 .83.542 1.35 1.21 1.17l4.996-1.456c.55-.19 1.123-.96 1.282-1.348.237-.58-.52-1.37-1.42-1.098l-5.09 1.52c-.504.15-.706.284-.844.42v.02zm1.945-8.202c-.006-.006-1.058-2.746-1.058-2.746-.246-.57-1.14-.9-1.61-.126-.128.215-.73 1.63-.73 3.076 0 .438.07.732.252.84.624.36 1.49-.414 1.722-.642l1.424-2.402zm-2.963 4.922c-.216-.45-.6-.582-1.092-.21-.168.12-.216.293-.24.67-.047.704.06 1.92.12 2.746.06.826.168 1.398.462 1.582.75.492 2.016-.87 2.016-1.716 0-.12-.048-.24-.072-.36l-1.194-2.712zm-2.88-1.2H5.158c-.8.01-1.258.722-1.044 1.31.144.4.984 1.296 1.644 1.553l3.388 1.316c.52.2.874-.114.972-.744.036-.21 0-.438-.072-.648-.198-.366-.96-.55-1.284-.67l-3.27-1.254 1.127-.03c.78-.043 1.08-.904.804-1.394-.112-.193-.33-.414-.66-.427l-.078-.01z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="mb-2 opacity-90">Phone: (214) 555-1234</p>
              <p className="mb-2 opacity-90">Email: info@gillandscaping.com</p>
              <p className="opacity-90">
                Address: 1234 Green St, Dallas, TX 75001
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Service Areas</h3>
              <ul className="space-y-2 opacity-90">
                <li className="hover:opacity-100 transition-opacity">
                  <a href="#" className="hover:underline">
                    Dallas
                  </a>
                </li>
                <li className="hover:opacity-100 transition-opacity">
                  <a href="#" className="hover:underline">
                    Plano
                  </a>
                </li>
                <li className="hover:opacity-100 transition-opacity">
                  <a href="#" className="hover:underline">
                    Frisco
                  </a>
                </li>
                <li className="hover:opacity-100 transition-opacity">
                  <a href="#" className="hover:underline">
                    Richardson
                  </a>
                </li>
                <li className="hover:opacity-100 transition-opacity">
                  <a href="#" className="hover:underline">
                    Arlington
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>© 2025 Gil Landscaping. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Success Message Snackbar */}
      <div
        className={`fixed bottom-4 right-4 bg-[#2f5d3a] text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-500 transform ${
          showSuccessMessage
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0"
        }`}
      >
        <div className="flex items-center">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span>{successMessage}</span>
        </div>
      </div>
    </div>
  );
}

export default App;

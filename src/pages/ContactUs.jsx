import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const branches = [
  {
    id: 1,
    name: "Camp Road, Tambaram",
    address: "Camp Road, Tambaram, Chennai",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    photo: "https://via.placeholder.com/400x200.png?text=Branch+Photo",
    map: "https://www.google.com/maps/embed?pb=..." // replace with real embed
  },
  {
    id: 2,
    name: "Bharath University",
    address: "Deveraj Nagar, Chennai",
    phone: "+91 91234 56789",
    whatsapp: "+91 91234 56789",
    photo: "https://via.placeholder.com/400x200.png?text=Branch+Photo",
    map: "https://www.google.com/maps/embed?pb=..."
  },
  {
    id: 3,
    name: "Santhosapuram",
    address: "Medavakkam, Chennai",
    phone: "+91 99876 54321",
    whatsapp: "+91 99876 54321",
    photo: "https://via.placeholder.com/400x200.png?text=Branch+Photo",
    map: "https://www.google.com/maps/embed?pb=..."
  },
  {
    id: 4,
    name: "Cherry Road",
    address: "Salem",
    phone: "+91 90123 45678",
    whatsapp: "+91 90123 45678",
    photo: "https://via.placeholder.com/400x200.png?text=Branch+Photo",
    map: "https://www.google.com/maps/embed?pb=..."
  },
];

const ContactUs = () => {
  return (
    <div className="px-4 py-10 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-10">
        📍 Our Branches
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            {/* Branch Image */}
            <img
              src={branch.photo}
              alt={branch.name}
              className="w-full h-48 object-cover"
            />

            {/* Branch Info */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {branch.name}
              </h2>
              <p className="text-gray-600 mb-3">{branch.address}</p>

              {/* Contact Info */}
              <div className="flex items-center gap-4 mb-4">
                <a
                  href={`tel:${branch.phone}`}
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm transition"
                >
                  <Phone size={16} /> Call
                </a>
                <a
                  href={`https://wa.me/${branch.whatsapp.replace(/\s+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm transition"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src={branch.map}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={branch.name}
                ></iframe>
              </div>

              {/* Get Directions Button */}
              <button className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 rounded-lg transition">
                Get Directions
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;

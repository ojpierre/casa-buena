import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Create a custom pulsing red dot icon using Leaflet's divIcon
const createCustomIcon = () => {
  return L.divIcon({
    className: 'custom-leaflet-icon',
    html: `
      <div class="relative flex h-6 w-6 items-center justify-center -ml-3 -mt-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  });
};

const customIcon = createCustomIcon();

export function FindIt() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  // Westlands, Nairobi locations
  const locations = [
    { id: 'westgate', name: 'Westgate Mall', lat: -1.2580, lng: 36.8030, desc: 'Premium Liquor Store & Supermarket' },
    { id: 'sarit', name: 'Sarit Centre', lat: -1.2610, lng: 36.8010, desc: 'Carrefour & Specialized Wine Shops' },
    { id: 'alchemist', name: 'The Alchemist', lat: -1.2630, lng: 36.8050, desc: 'Bars & Nightlife' },
    { id: 'sankara', name: 'Sankara Nairobi', lat: -1.2640, lng: 36.8020, desc: 'Rooftop Lounge & Restaurant' },
    { id: 'js', name: "J's Fresh Bar & Kitchen", lat: -1.2680, lng: 36.8060, desc: 'Restaurant & Bar' },
  ];

  // Center on Westlands
  const mapCenter: [number, number] = [-1.2635, 36.8035];

  return (
    <section id="find-it" className="w-full bg-[#0A0004] py-24 md:py-32 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-4">Find your nearest Casa Buena.</h2>
          <p className="font-sans text-white/60 text-lg">Available across Kenya — in bottle and carton — wherever good moments happen.</p>
        </div>

        {/* Map Container */}
        <div className="relative w-full mx-auto h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10 mb-16 z-0">
          <MapContainer 
            center={mapCenter} 
            zoom={15} 
            scrollWheelZoom={false}
            className="h-full w-full bg-[#0A0004]"
          >
            {/* CartoDB Dark Matter tiles for a premium aesthetic */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            
            {locations.map((loc) => (
              <Marker 
                key={loc.id} 
                position={[loc.lat, loc.lng]} 
                icon={customIcon}
                eventHandlers={{
                  click: () => setActiveLocation(loc.id),
                }}
              >
                <Popup className="casa-popup">
                  <div className="font-sans p-1">
                    <h4 className="font-serif text-xl text-primary mb-1">{loc.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{loc.desc}</p>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Westlands, Nairobi</span>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          
          {/* Overlay gradient to blend map edges into the dark background */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10 shadow-[inset_0_0_40px_rgba(10,0,4,1)] z-10" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 border-b-4 border-b-primary hover:bg-white/10 transition-colors">
            <h3 className="font-serif text-2xl text-white mb-3">Bars & Clubs</h3>
            <p className="font-sans text-white/70 text-sm">Ask for Casa Buena at your favourite spot. The new bottle looks just as good on a table as it does in a glass.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 border-b-4 border-b-primary hover:bg-white/10 transition-colors">
            <h3 className="font-serif text-2xl text-white mb-3">Supermarkets</h3>
            <p className="font-sans text-white/70 text-sm">Pick up the bottle or the carton on the way. Available at Naivas, Carrefour, Quickmart, and local liquor stores.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 border-b-4 border-b-primary hover:bg-white/10 transition-colors">
            <h3 className="font-serif text-2xl text-white mb-3">Online Delivery</h3>
            <p className="font-sans text-white/70 text-sm">Some vendors deliver. Some don't. Either way, you won't have to look far. Casa Buena is everywhere the good moments are.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

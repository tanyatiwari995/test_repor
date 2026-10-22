"use client";

import { useState } from "react";
import { Building2, MapPin, Navigation, ExternalLink } from "lucide-react";

const locations = [
  {
    id: "delhi-ncr",
    tabLabel: "Delhi NCR",
    type: "Corporate Office (Delhi NCR)",
    company: "Tenacious Hub Pvt Ltd",
    address: "Ground Floor, F 294, Sector 63 Rd, Chotpur, F Block, Sector 63, Noida, UP 201309",
    fullAddress: "Tenacious Hub Pvt Ltd, Ground Floor, F 294, Sector 63 Rd, Chotpur, F Block, Sector 63, Noida, Uttar Pradesh 201309",
    directionsUrl: "https://www.google.com/maps/place/Tenacious+Hub+Pvt+Ltd/@28.6211304,77.3885094,17z/data=!3m1!4b1!4m6!3m5!1s0x390ceff4c29d77d1:0xa8f573d840307ee0!8m2!3d28.6211304!4d77.3885094!16s%2Fg%2F11tmsklpzc?entry=ttu",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2879628176706!2d77.38850939999999!3d28.6211304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff4c29d77d1%3A0xa8f573d840307ee0!2sTenacious%20Hub%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1790854405124!5m2!1sen!2sin",
  },
  {
    id: "rudrapur",
    tabLabel: "Rudrapur",
    type: "Regional Office (Rudrapur / Uttarakhand)",
    company: "Tenacious Hub Private Limited",
    address: "Gangapur Road, Rudrapur, Uttarakhand 263153",
    fullAddress: "Tenacious Hub Private Limited, Gangapur Road, Rudrapur, Uttarakhand 263153",
    directionsUrl: "https://maps.google.com/?q=Tenacious+Hub+Gangapur+Road+Rudrapur",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13961.536947417722!2d79.4183271!3d28.975983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf72f8eb3a1561d6b!2sTenacious+Hub!5e0!3m2!1sen!2sin!4v1469537854235",
  },
];

export function OfficeLocationsMap() {
  const [activeTab, setActiveTab] = useState<"delhi-ncr" | "rudrapur">("delhi-ncr");
  const currentLocation = locations.find((l) => l.id === activeTab) || locations[0];

  return (
    <div className="p-6 sm:p-8 rounded-3xl glass-card border border-[var(--glass-border)] shadow-xl space-y-6">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-main)]">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-[var(--text-main)] text-lg leading-tight">Office Locations</h3>
            <p className="text-xs text-[var(--text-muted)] font-medium">Official Corporate & Regional Centers</p>
          </div>
        </div>

        {/* Tab buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-black/5 dark:bg-white/5 rounded-full border border-[var(--border-main)] self-start sm:self-auto">
          {locations.map((loc) => {
            const isActive = activeTab === loc.id;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => setActiveTab(loc.id as "delhi-ncr" | "rudrapur")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[var(--primary)] text-white shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                {loc.tabLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* Address Info Banner */}
      <div className="p-4 rounded-2xl bg-[var(--primary)]/5 border border-[var(--primary)]/15 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-[var(--primary)] block mb-0.5">
              {currentLocation.type}
            </span>
            <p className="text-sm font-semibold text-[var(--text-main)] leading-snug">
              {currentLocation.fullAddress}
            </p>
          </div>
        </div>
        <a
          href={currentLocation.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 p-2 text-xs font-bold text-[var(--primary)] hover:bg-[var(--primary)]/10 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
          title="Open in Google Maps"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Directions</span>
          <ExternalLink className="w-3 h-3 ml-0.5" />
        </a>
      </div>

      {/* Embedded Google Map */}
      <div className="relative w-full h-[390px] rounded-2xl overflow-hidden border border-[var(--border-main)] shadow-inner bg-black/5 dark:bg-white/5">
        <iframe
          key={currentLocation.id}
          src={currentLocation.mapEmbedUrl}
          title={`${currentLocation.type} Map`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

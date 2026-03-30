import { SCRIPT_URL } from "../utils/api";
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, Info, Phone, Palette, Layers, Settings, Lightbulb } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Slider } from '../components/ui/slider';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { companyInfo, materialGuide } from '../data/mock';

const EstimatePage = () => {
  const [name, setName] = useState("");
const [phone, setPhone] = useState("");
  const [propertyType, setPropertyType] = useState('');
  const [area, setArea] = useState(1000);
  const [scope, setScope] = useState('');
  const [budget, setBudget] = useState('');

  const handleAreaChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    if (value >= 0 && value <= 10000) {
      setArea(value);
    }
  };

  const handleSliderChange = (values) => {
    setArea(values[0]);
  };

  const estimate = useMemo(() => {
    if (!propertyType || !scope || !budget || area < 100) return null;

    const baseRates = {
      '1bhk': 1200,
      '2bhk': 1300,
      '3bhk': 1400,
      '4bhk': 1500,
      'villa': 1600,
      'commercial': 1400
    };

    const scopeMultipliers = {
      'kitchen': 0.35,
      'wardrobe': 0.3,
      'modular': 0.6,
      'full': 1,
      'premium': 1.5
    };

    const budgetMultipliers = {
      'economy': 0.8,
      'standard': 1,
      'premium': 1.3,
      'luxury': 1.6
    };

    const baseRate = baseRates[propertyType] || 1300;
    const scopeMult = scopeMultipliers[scope] || 1;
    const budgetMult = budgetMultipliers[budget] || 1;

    const sqftRate = Math.round(baseRate * scopeMult * budgetMult);
    const totalMin = Math.round(sqftRate * area * 0.9);
    const totalMax = Math.round(sqftRate * area * 1.1);

    return {
      sqftRate,
      totalMin,
      totalMax
    };
  }, [propertyType, area, scope, budget]);

  const formatCurrency = (amount) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };


 const handleSubmit = (e) => {
  e.preventDefault();

  console.log("FORM SUBMITTED");

  if (!name || phone.length !== 10) {
    alert("Enter valid details");
    return;
  }

  // 🔥 Trigger action immediately (important)
  alert("Submitting your details...");

  // 🔥 Send data
  fetch(SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      name,
      phone,
      location: "Estimate Page",
      source: "Website",
    }),
  });

  // Reset
  setName("");
  setPhone("");
};


  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-[#C8A35F] font-medium mb-4 tracking-wide uppercase text-sm">Cost Estimator</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Get Your Free
              <span className="text-[#C8A35F]"> Estimate</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
              Use our interactive calculator to get an approximate estimate for your interior design project. This is a non-binding estimate to help you plan your budget.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Form */}



            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                <Calculator className="inline w-8 h-8 mr-3 text-[#C8A35F]" />
                Budget Calculator
              </h2>
              <div className="space-y-8">
                {/* Property Type */}
                <div className="space-y-3">
                  <Label className="text-[#1A1A1A] font-medium text-lg">Property Type</Label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger className="border-gray-200 focus:border-[#C8A35F] rounded-sm py-4 text-base">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1bhk">1 BHK Apartment</SelectItem>
                      <SelectItem value="2bhk">2 BHK Apartment</SelectItem>
                      <SelectItem value="3bhk">3 BHK Apartment</SelectItem>
                      <SelectItem value="4bhk">4+ BHK Apartment</SelectItem>
                      <SelectItem value="villa">Villa / Independent House</SelectItem>
                      <SelectItem value="commercial">Commercial / Office</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mt-8">
  <h3 className="text-lg font-semibold mb-4">Get Consultation</h3>

  <form
    onSubmit={(e) => {
      e.preventDefault();

      fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          name,
          phone,
          location: "Estimate Page",
          source: "Website",
        }),
      });

      alert("Submitted successfully");

      setName("");
      setPhone("");
    }}
    className="flex flex-col gap-4"
  >
    <input
      type="text"
      placeholder="Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      className="p-3 border rounded"
    />

    <input
      type="tel"
      placeholder="Phone Number"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      required
      className="p-3 border rounded"
    />

    <button
      type="submit"
      className="bg-[#C8A35F] text-black py-3 rounded font-semibold"
    >
      Submit
    </button>
  </form>
</div>

                {/* Area - Now with both input and slider */}
                <div className="space-y-3">
                  <Label className="text-[#1A1A1A] font-medium text-lg">Carpet Area (sq.ft)</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      value={area}
                      onChange={handleAreaChange}
                      min={100}
                      max={10000}
                      className="w-32 border-gray-200 focus:border-[#C8A35F] rounded-sm py-3 text-lg font-semibold text-center"
                    />
                    <span className="text-[#777777]">sq.ft</span>
                  </div>
                  <Slider
                    value={[area]}
                    onValueChange={handleSliderChange}
                    min={100}
                    max={5000}
                    step={50}
                    className="py-2"
                  />
                  <div className="flex justify-between text-sm text-[#777777]">
                    <span>100 sq.ft</span>
                    <span>5000 sq.ft</span>
                  </div>
                  <p className="text-xs text-[#777777]">
                    Tip: You can type the area directly or use the slider. For areas above 5000 sq.ft, please type manually.
                  </p>
                </div>

                {/* Scope */}
                <div className="space-y-3">
                  <Label className="text-[#1A1A1A] font-medium text-lg">Interior Scope</Label>
                  <Select value={scope} onValueChange={setScope}>
                    <SelectTrigger className="border-gray-200 focus:border-[#C8A35F] rounded-sm py-4 text-base">
                      <SelectValue placeholder="Select scope" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kitchen">Modular Kitchen Only</SelectItem>
                      <SelectItem value="wardrobe">Wardrobes Only</SelectItem>
                      <SelectItem value="modular">Modular Kitchen & Wardrobes</SelectItem>
                      <SelectItem value="full">Full Home Interior</SelectItem>
                      <SelectItem value="premium">Premium Full Home + Civil Work</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget Range */}
                <div className="space-y-3">
                  <Label className="text-[#1A1A1A] font-medium text-lg">Budget Preference</Label>
                  <Select value={budget} onValueChange={setBudget}>
                    <SelectTrigger className="border-gray-200 focus:border-[#C8A35F] rounded-sm py-4 text-base">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="economy">Economy (Budget-Friendly)</SelectItem>
                      <SelectItem value="standard">Standard (Value for Money)</SelectItem>
                      <SelectItem value="premium">Premium (High Quality)</SelectItem>
                      <SelectItem value="luxury">Luxury (Top-of-the-Line)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Estimate Display */}
            <div>
              <Card className="bg-[#1F1F1F] text-white rounded-sm sticky top-32">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Your Estimated Budget
                  </h3>
                  
                  {estimate ? (
                    <div className="space-y-6">
                      <div className="p-6 bg-white/5 rounded-sm">
                        <p className="text-white/70 mb-2">Estimated Range</p>
                        <p className="text-3xl md:text-4xl font-bold text-[#C8A35F]" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {formatCurrency(estimate.totalMin)} - {formatCurrency(estimate.totalMax)}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 rounded-sm">
                          <p className="text-white/70 text-sm">Rate per sq.ft</p>
                          <p className="text-xl font-semibold text-white">₹{estimate.sqftRate}</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-sm">
                          <p className="text-white/70 text-sm">Total Area</p>
                          <p className="text-xl font-semibold text-white">{area} sq.ft</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-[#C8A35F]/10 rounded-sm">
                        <Info className="w-5 h-5 text-[#C8A35F] flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-white/70">
                          This is an approximate estimate. Final pricing may vary based on design selections, site conditions, and material choices.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <Link to="/contact">
                          <Button className="w-full btn-gold py-4 rounded-sm font-semibold flex items-center justify-center gap-2">
                            Get Detailed Quote
                            <ArrowRight className="w-5 h-5" />
                          </Button>
                        </Link>
                        <a href={`tel:${companyInfo.primaryPhone}`}>
                          <Button className="w-full bg-white text-[#1F1F1F] hover:bg-white/90 py-4 rounded-sm font-semibold flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" />
                            Call {companyInfo.primaryPhone}
                          </Button>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Calculator className="w-16 h-16 text-[#C8A35F]/30 mx-auto mb-4" />
                      <p className="text-white/50">
                        Fill in the details on the left to get your estimated budget
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Material Guide Section */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-[#C8A35F] font-medium mb-3 tracking-wide uppercase text-sm">Material Guide</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Understanding Your Interior Materials
            </h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto">
              Make informed decisions about the materials that go into your home
            </p>
          </div>

          <Tabs defaultValue="plywood" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto mb-8">
              <TabsTrigger value="plywood" className="data-[state=active]:bg-[#C8A35F] data-[state=active]:text-[#1F1F1F] bg-white border border-gray-200 py-3 rounded-sm">
                <Layers className="w-4 h-4 mr-2" />
                Plywood
              </TabsTrigger>
              <TabsTrigger value="laminates" className="data-[state=active]:bg-[#C8A35F] data-[state=active]:text-[#1F1F1F] bg-white border border-gray-200 py-3 rounded-sm">
                <Palette className="w-4 h-4 mr-2" />
                Laminates
              </TabsTrigger>
              <TabsTrigger value="hardware" className="data-[state=active]:bg-[#C8A35F] data-[state=active]:text-[#1F1F1F] bg-white border border-gray-200 py-3 rounded-sm">
                <Settings className="w-4 h-4 mr-2" />
                Hardware
              </TabsTrigger>
              <TabsTrigger value="colors" className="data-[state=active]:bg-[#C8A35F] data-[state=active]:text-[#1F1F1F] bg-white border border-gray-200 py-3 rounded-sm">
                <Lightbulb className="w-4 h-4 mr-2" />
                Color Tips
              </TabsTrigger>
            </TabsList>

            {/* Plywood Tab */}
            <TabsContent value="plywood">
              <div className="bg-white p-8 rounded-sm">
                <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {materialGuide.plywood.title}
                </h3>
                <p className="text-[#4A4A4A] mb-6">{materialGuide.plywood.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {materialGuide.plywood.types.map((type, idx) => (
                    <div key={idx} className="p-6 border border-gray-100 rounded-sm hover:border-[#C8A35F] transition-colors">
                      <h4 className="font-semibold text-[#1A1A1A] mb-2">{type.name}</h4>
                      <p className="text-[#4A4A4A] text-sm mb-3">{type.description}</p>
                      <p className="text-[#777777] text-sm mb-2"><strong>Best for:</strong> {type.recommended}</p>
                      <p className="text-[#C8A35F] font-medium">{type.priceRange}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#F5F5F5] p-4 rounded-sm">
                  <p className="text-sm text-[#4A4A4A]">
                    <strong>Trusted Brands:</strong> {materialGuide.plywood.brands.join(', ')}
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Laminates Tab */}
            <TabsContent value="laminates">
              <div className="bg-white p-8 rounded-sm">
                <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {materialGuide.laminates.title}
                </h3>
                <p className="text-[#4A4A4A] mb-6">{materialGuide.laminates.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {materialGuide.laminates.types.map((type, idx) => (
                    <div key={idx} className="p-6 border border-gray-100 rounded-sm hover:border-[#C8A35F] transition-colors">
                      <h4 className="font-semibold text-[#1A1A1A] mb-2">{type.name}</h4>
                      <p className="text-[#4A4A4A] text-sm mb-3">{type.description}</p>
                      <p className="text-[#777777] text-sm mb-2"><strong>Best for:</strong> {type.recommended}</p>
                      <p className="text-[#C8A35F] font-medium">{type.priceRange}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#F5F5F5] p-4 rounded-sm">
                  <p className="text-sm text-[#4A4A4A]">
                    <strong>Trusted Brands:</strong> {materialGuide.laminates.brands.join(', ')}
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Hardware Tab */}
            <TabsContent value="hardware">
              <div className="bg-white p-8 rounded-sm">
                <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {materialGuide.hardware.title}
                </h3>
                <p className="text-[#4A4A4A] mb-6">{materialGuide.hardware.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {materialGuide.hardware.types.map((type, idx) => (
                    <div key={idx} className="p-6 border border-gray-100 rounded-sm hover:border-[#C8A35F] transition-colors">
                      <h4 className="font-semibold text-[#1A1A1A] mb-2">{type.name}</h4>
                      <p className="text-[#4A4A4A] text-sm mb-3">{type.description}</p>
                      <p className="text-[#777777] text-sm mb-2"><strong>Best for:</strong> {type.recommended}</p>
                      <p className="text-[#C8A35F] font-medium text-sm">Brands: {type.brands.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Color Tips Tab */}
            <TabsContent value="colors">
              <div className="bg-white p-8 rounded-sm">
                <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {materialGuide.colorGuidance.title}
                </h3>
                
                {/* Color Tips */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {materialGuide.colorGuidance.tips.map((tip, idx) => (
                    <div key={idx} className="p-5 bg-[#F5F5F5] rounded-sm">
                      <h4 className="font-semibold text-[#1A1A1A] mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-[#C8A35F]" />
                        {tip.title}
                      </h4>
                      <p className="text-[#4A4A4A] text-sm">{tip.description}</p>
                    </div>
                  ))}
                </div>

                {/* Popular Palettes */}
                <h4 className="text-xl font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Popular Color Palettes
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {materialGuide.colorGuidance.popularPalettes.map((palette, idx) => (
                    <div key={idx} className="p-6 border border-gray-100 rounded-sm hover:border-[#C8A35F] transition-colors">
                      <h5 className="font-semibold text-[#1A1A1A] mb-3">{palette.name}</h5>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {palette.colors.map((color, cidx) => (
                          <span key={cidx} className="px-3 py-1 bg-[#F5F5F5] text-[#4A4A4A] text-sm rounded">
                            {color}
                          </span>
                        ))}
                      </div>
                      <p className="text-[#777777] text-sm"><strong>Best for:</strong> {palette.bestFor}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

 

  <p className="text-sm text-gray-500 mt-2">
    Our expert will call you within 30 minutes.
  </p>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              What's Included in Our Pricing?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { title: 'Design & Planning', desc: 'Complete 2D/3D designs and material planning' },
                { title: 'Materials & Labor', desc: 'All materials, hardware, and installation labor' },
                { title: 'Project Management', desc: 'Dedicated manager and quality assurance' }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#F5F5F5] p-6 rounded-sm">
                  <div className="w-10 h-10 bg-[#C8A35F] text-[#1F1F1F] rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-[#777777] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstimatePage;

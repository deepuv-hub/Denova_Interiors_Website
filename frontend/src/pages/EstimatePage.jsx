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

  return (
    <div>

      {/* Calculator Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <div>

              {/* 🔥 FORM */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Get Consultation</h3>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    const cleanedPhone = phone.replace(/\D/g, "");

                    if (!name || cleanedPhone.length !== 10) {
                      alert("Enter valid details");
                      return;
                    }

                    fetch(SCRIPT_URL, {
                      method: "POST",
                      mode: "no-cors",
                      body: JSON.stringify({
                        name,
                        phone: cleanedPhone,
                        location: "Estimate Page",
                        source: "Website",
                      }),
                    });

                    window.location.href = "/thank-you?source=estimate";
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

            </div>

            {/* Estimate Display */}
            <div>
              <Card className="bg-[#1F1F1F] text-white rounded-sm">
                <CardContent className="p-8">

                  {estimate ? (
                    <div>
                      <p className="text-3xl text-[#C8A35F]">
                        {formatCurrency(estimate.totalMin)} - {formatCurrency(estimate.totalMax)}
                      </p>
                    </div>
                  ) : (
                    <p>Fill details to get estimate</p>
                  )}

                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default EstimatePage;
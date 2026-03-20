"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EnquirePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 })
  const [captchaAnswer, setCaptchaAnswer] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    phone: "",
    whatsapp: "",
    destination: "",
    dateOfTravel: "",
    numberOfPeople: "",
    vacationType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  useEffect(() => {
  setCaptcha({
    num1: Math.floor(Math.random() * 10) + 1,
    num2: Math.floor(Math.random() * 10) + 1,
  })

  const timer = setTimeout(() => {
    setIsOpen(true)
  }, 40000)

  return () => clearTimeout(timer)
}, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate captcha
    if (parseInt(captchaAnswer) !== captcha.num1 + captcha.num2) {
      setSubmitMessage("Incorrect captcha answer. Please try again.")
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("Thank you! We will contact you soon.")
      setTimeout(() => {
        setIsOpen(false)
      }, 2000)
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-primary px-6 py-4 flex items-center justify-between sticky top-0">
          <h2 className="text-sm font-bold tracking-widest text-gray-800 uppercase">
            Enquire Now
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#f5c518] transition-colors"
          />
          
          <input
            type="text"
            name="city"
            placeholder="City of Residence *"
            required
            value={formData.city}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#f5c518] transition-colors"
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#f5c518] transition-colors"
          />
          
          <div className="flex items-center border border-gray-300 rounded focus-within:border-[#f5c518] transition-colors">
            <span className="px-3 py-3 border-r border-gray-300 text-sm text-gray-600 flex items-center gap-2">
              <span className="text-lg">🇮🇳</span> +91
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="flex-1 px-4 py-3 focus:outline-none"
            />
          </div>
          
          <div className="flex items-center border border-gray-300 rounded focus-within:border-[#f5c518] transition-colors">
            <span className="px-3 py-3 border-r border-gray-300 text-sm text-gray-600 flex items-center gap-2">
              <span className="text-lg">🇮🇳</span> WhatsApp
            </span>
            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp Number"
              value={formData.whatsapp}
              onChange={handleInputChange}
              className="flex-1 px-4 py-3 focus:outline-none"
            />
          </div>
          
          <input
            type="text"
            name="destination"
            placeholder="Travel Destination *"
            required
            value={formData.destination}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#f5c518] transition-colors"
          />
          
          <input
            type="date"
            name="dateOfTravel"
            placeholder="Date of Travel *"
            required
            value={formData.dateOfTravel}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#f5c518] transition-colors"
          />
          
          <input
            type="number"
            name="numberOfPeople"
            placeholder="No. of People *"
            required
            min="1"
            value={formData.numberOfPeople}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#f5c518] transition-colors"
          />
          
          <select
            name="vacationType"
            required
            value={formData.vacationType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#f5c518] transition-colors text-gray-600"
          >
            <option value="">Vacation Type *</option>
            <option value="honeymoon">Honeymoon</option>
            <option value="family">Family Trip</option>
            <option value="adventure">Adventure</option>
            <option value="solo">Solo Travel</option>
            <option value="group">Group Tour</option>
            <option value="corporate">Corporate</option>
            <option value="pilgrimage">Pilgrimage</option>
            <option value="other">Other</option>
          </select>

          {/* Captcha */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Captcha <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3">
              <span className="text-lg font-medium">
                {captcha.num1} + {captcha.num2} =
              </span>
              <input
                type="text"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                required
                className="w-20 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f5c518] transition-colors"
              />
            </div>
          </div>

          {submitMessage && (
            <p className={`text-sm ${submitMessage.includes("Thank") ? "text-green-600" : "text-red-600"}`}>
              {submitMessage}
            </p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-[#e0b015] text-gray-900 font-bold py-4 rounded transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
          </Button>
        </form>
      </div>
    </div>
  )
}

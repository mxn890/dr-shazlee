import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Heart,
  Building2,
  Microscope,
  Stethoscope,
  Users,
  ChevronRight,
  ArrowRight,
  Activity,
  Brain,
  Eye,
  Radio,
  Zap,
  Menu,
  X,
  Phone,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-lg shadow-lg z-50 transition-all duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      {/* Logo Section with Image */}
      <div className="flex items-center space-x-3 group cursor-pointer">
        <div className="w-16 h-12 items-center justify-center  transition-transform duration-300 group-hover:scale-110 overflow-hidden">
          <img 
            src="/images/logo.png"
            alt="Dr. M. Kashif Shazlee"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Dr. M. Kashif Shazlee</h1>
          <p className="text-xs text-blue-600 font-medium">Interventional Radiologist</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {[
          { href: "#about", label: "About" },
          { href: "#career", label: "Career" },
          { href: "#procedures", label: "Procedures" },
          { href: "#contact", label: "Contact" }
        ].map((item) => (
          <a 
            key={item.href}
            href={item.href}
            className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 group"
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
        
        {/* CTA Button */}
        <a 
          href="#contact"
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ml-4"
        >
          Book Consultation
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 hover:bg-blue-100 transition-all duration-300 hover:scale-105"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {mobileMenuOpen && (
    <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-xl">
      <div className="px-4 py-6 space-y-4">
        {[
          { href: "#about", label: "About" },
          { href: "#career", label: "Career" },
          { href: "#procedures", label: "Procedures" },
          { href: "#contact", label: "Contact" }
        ].map((item) => (
          <a 
            key={item.href}
            href={item.href}
            className="block py-4 px-6 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-medium border-l-4 border-transparent hover:border-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        
        {/* Mobile CTA Button */}
        <a 
          href="#contact"
          className="block bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
          onClick={() => setMobileMenuOpen(false)}
        >
          Schedule Consultation
        </a>
      </div>
    </div>
  )}
</nav>

      {/* Hero Section 1 - Main Introduction */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20 pb-16 overflow-hidden">
  {/* Enhanced Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-blue-100/20 rounded-full blur-3xl"></div>
    <div className="absolute top-20 right-20 w-64 h-64 bg-blue-300/20 rounded-full blur-2xl"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Content - Text */}
      <div className="space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
          20+ Years of Clinical Excellence
        </div>

        {/* Main Heading */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Dr. M. Kashif{' '}
            <span className="bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent">
              Shazlee
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-blue-800 font-semibold">
            Associate Professor & Consultant Radiologist
          </p>
          
          <div className="border-l-4 border-blue-600 pl-6 py-2 bg-white/50 backdrop-blur-sm rounded-r-2xl">
            <p className="text-gray-800 text-lg font-medium">MBBS | MCPS | FCPS | FRCR (UK) | EDiR (Paris)</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 pt-4">
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-gray-900 mb-1">20+</span>
            <p className="text-gray-600 text-sm text-center font-medium">Research Publications</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-gray-900 mb-1">74</span>
            <p className="text-gray-600 text-sm text-center font-medium">Scientific Presentations</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#procedures"
            className="inline-flex items-center justify-center bg-white text-blue-700 border-2 border-blue-200 hover:border-blue-300 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Procedures
          </a>
        </div>
      </div>

      {/* Right Content - Images */}
      <div className="relative">
        <div className="grid grid-cols-2 gap-6 relative">
          
          {/* Main Doctor Image */}
          <div className="relative group">
            <div className="relative w-full aspect-[3/4]">
              {/* Background Effects */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl transform rotate-6 blur-xl opacity-20 group-hover:opacity-30 transition duration-700"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl transform -rotate-3 opacity-10 group-hover:opacity-20 transition duration-700 delay-100"></div>
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:scale-105 transition duration-700 border-4 border-white/80 backdrop-blur-sm h-full">
                <img
                  src="/images/dr1.jpg"
                  alt="Dr. M. Kashif Shazlee - Professional Portrait"
                  className="w-full h-full object-cover"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                
                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white">
                  <h3 className="text-lg font-bold text-gray-900">20+ Years</h3>
                  <p className="text-blue-600 text-sm font-medium">Clinical Excellence</p>
                </div>
              </div>
            </div>
            
            {/* Availability Indicator */}

          </div>

          {/* Second Doctor Image */}
          <div className="relative group mt-12">
            <div className="relative w-full aspect-[3/4]">
              {/* Background Effects */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl transform -rotate-6 blur-xl opacity-20 group-hover:opacity-30 transition duration-700"></div>
              
              {/* Second Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:scale-105 transition duration-700 border-4 border-white/80 backdrop-blur-sm h-full">
                <img
                  src="/images/dr3.jpg"
                  alt="Dr. M. Kashif Shazlee - Medical Practice"
                  className="w-full h-full object-cover"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent"></div>
                
                {/* Specialization Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white">
                  <h3 className="text-lg font-bold text-gray-900">Interventional</h3>
                  <p className="text-indigo-600 text-sm font-medium">Radiology Expert</p>
                </div>
              </div>
            </div>
            
            {/* Success Rate Indicator */}
            <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl shadow-2xl p-3 border border-blue-100">
              <div className="text-center">
                <div className="text-sm font-bold text-blue-700">100%</div>
                <div className="text-xs text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Certification Badge */}
        <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-2xl p-6 border border-white/20">
          <div className="text-center">
            <Award className="w-8 h-8 mx-auto mb-2" />
            <div className="text-sm font-semibold">Certified</div>
            <div className="text-xs opacity-90">FRCR UK</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="flex flex-col items-center">
      <span className="text-blue-600 text-sm font-medium mb-2">Scroll Down</span>
      <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
      </div>
    </div>
  </div>
</section>
      {/* Hero Section 3 - Leadership & Impact */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
  {/* Enhanced Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Content */}
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-6">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold">
            <span>🌟 Leadership Excellence</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Leadership in{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Healthcare
            </span>
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
            Pioneering excellence in diagnostic and interventional radiology across South Asia and the Middle East with transformative leadership.
          </p>
        </div>

        {/* Leadership Items */}
        <div className="space-y-6">
          {[
            {
              icon: Building2,
              title: "Ex-President, IRSP",
              description: "Interventional Radiology Society of Pakistan (2023-24)",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              icon: Briefcase,
              title: "Former Director & Chairman",
              description: "Led radiology departments at Ziauddin Hospital, Memon Medical Hospital, and Indus Hospital Network",
              gradient: "from-purple-500 to-pink-500"
            }
          ].map((item, index) => (
            <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-2xl mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-blue-100 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content - Stats Grid */}
      <div className="grid grid-cols-2 gap-6">
        {[
          { 
            number: "20+", 
            label: "Research Articles", 
            icon: BookOpen,
            gradient: "from-blue-500 to-cyan-500"
          },
          { 
            number: "74", 
            label: "Scientific Talks", 
            icon: Users,
            gradient: "from-green-500 to-emerald-500"
          },
          { 
            number: "14", 
            label: "Departments Led", 
            icon: Building2,
            gradient: "from-purple-500 to-pink-500"
          },
          { 
            number: "55+", 
            label: "Procedures", 
            icon: Award,
            gradient: "from-orange-500 to-red-500"
          }
        ].map((stat, index) => (
          <div 
            key={index}
            className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105"
          >
            <div className="text-center">
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="text-blue-200 font-semibold text-lg">
                {stat.label}
              </div>
              
              {/* Decorative Element */}
              <div className={`w-12 h-1 bg-gradient-to-r ${stat.gradient} rounded-full mx-auto mt-4 group-hover:w-16 transition-all duration-300`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-blue-100 font-semibold">Available for leadership consultations and medical partnerships</span>
      </div>
    </div>
  </div>
</section>
      {/* Hero Section 4 - Current Positions */}
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Current Professional Roles
      </h2>
      <p className="text-xl text-gray-600">
        Serving excellence across prestigious healthcare institutions
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="group relative bg-white p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-600 transition-all duration-300 shadow-lg hover:shadow-2xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-all duration-300"></div>
        <Heart className="w-12 h-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Visiting Consultant</h3>
        <p className="text-gray-700 font-medium mb-2">Dr. Ziauddin Hospital</p>
        <p className="text-gray-600">Karachi, Pakistan</p>
      </div>

      <div className="group relative bg-white p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-600 transition-all duration-300 shadow-lg hover:shadow-2xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-all duration-300"></div>
        <Activity className="w-12 h-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Visiting Consultant</h3>
        <p className="text-gray-700 font-medium mb-2">Indus Hospital & Health Network</p>
        <p className="text-gray-600">Karachi, Pakistan</p>
      </div>
    </div>
  </div>
</section>

      {/* About Section with Image */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-center mb-20">
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl transform rotate-3"></div>
                <img
                  src="/images/dr2.jpg"
                  alt="Dr. M. Kashif Shazlee - About"
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-3 space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Dr. Shazlee</h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dr. M. Kashif Shazlee is a distinguished Associate Professor and Consultant Radiologist with over 20 years of specialized experience in Interventional Radiology. His expertise spans across complex vascular interventions, oncology imaging, and advanced diagnostic procedures.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With international qualifications from the UK and Paris, Dr. Shazlee has contributed significantly to the field through 20 published research articles and 74 scientific presentations. He currently serves across prestigious institutions in the UAE and Pakistan, bringing world-class interventional radiology care to patients.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-xl shadow-md border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">UAE Success Rate</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">14</div>
                  <div className="text-sm text-gray-600">Departments Led</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Interests */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
            <p className="text-xl text-gray-600">Specialized focus areas in modern radiology</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "Body Imaging", desc: "Comprehensive diagnostic imaging" },
              { icon: Radio, title: "Oncology Imaging", desc: "Advanced cancer detection" },
              { icon: Activity, title: "PET CT", desc: "Molecular imaging expertise" },
              { icon: Brain, title: "MSK Radiology", desc: "Musculoskeletal diagnosis & intervention" },
              { icon: Heart, title: "Vascular Interventions", desc: "Whole-body vascular procedures" },
              { icon: Zap, title: "Vascular Anomalies", desc: "Diagnosis & treatment" },
              { icon: Microscope, title: "Research & Training", desc: "Academic excellence" },
              { icon: Stethoscope, title: "AI in Radiology", desc: "Future of medical imaging" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl hover:shadow-lg transition">
                <item.icon className="w-10 h-10 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section id="procedures" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interventional Procedures</h2>
            <p className="text-xl text-gray-600">Comprehensive range of minimally invasive treatments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Neuro & Head/Neck */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Brain className="w-6 h-6 text-blue-600 mr-2" />
                Neuro & Head/Neck
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Cerebral Angiography</li>
                <li>• Head & Neck Tumor Embolization</li>
                <li>• Aneurysmal Coiling</li>
              </ul>
            </div>

            {/* Chest & Thoracic */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Activity className="w-6 h-6 text-blue-600 mr-2" />
                Chest & Thoracic
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Bronchial Artery Embolization</li>
                <li>• Chest Tubes & Drainage</li>
                <li>• Mediastinal Biopsies</li>
              </ul>
            </div>

            {/* Vascular Access */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Heart className="w-6 h-6 text-blue-600 mr-2" />
                Vascular Access
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• AV Fistulograms & Fistuloplasty</li>
                <li>• Permacath Insertion</li>
                <li>• PICC Lines & Central Lines</li>
                <li>• Venograms (all types)</li>
              </ul>
            </div>

            {/* Peripheral & Abdominal */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Zap className="w-6 h-6 text-blue-600 mr-2" />
                Peripheral & Abdominal
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Peripheral Angiography & Angioplasty</li>
                <li>• Abdominal Angiography</li>
                <li>• GI Bleeding Embolization</li>
                <li>• Visceral Organ Embolization</li>
              </ul>
            </div>

            {/* Urology & Hepatobiliary */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Building2 className="w-6 h-6 text-blue-600 mr-2" />
                Urology & Hepatobiliary
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• PCN (Nephrostomy)</li>
                <li>• DJ Stenting</li>
                <li>• PTC & Stenting</li>
                <li>• Percutaneous Cholecystostomy</li>
              </ul>
            </div>

            {/* Oncology & Ablation */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Radio className="w-6 h-6 text-blue-600 mr-2" />
                Oncology & Ablation
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• TACE (Chemoembolization)</li>
                <li>• RFA (Liver, Kidneys, Bone)</li>
                <li>• Microwave Ablation for HCC</li>
                <li>• Varicose Vein Ablation (Laser)</li>
              </ul>
            </div>

            {/* Gynecology & Pelvic */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Heart className="w-6 h-6 text-blue-600 mr-2" />
                Gynecology & Pelvic
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Uterine Artery Embolization (55 cases, 100% success)</li>
                <li>• Uterine Fibroid Embolization</li>
                <li>• Pelvic Venous Syndrome</li>
                <li>• Testicular Venous Embolization</li>
              </ul>
            </div>

            {/* Image-Guided Procedures */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="w-6 h-6 text-blue-600 mr-2" />
                Image-Guided Procedures
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• US-guided Biopsies (all types)</li>
                <li>• CT-guided Biopsies (including bone)</li>
                <li>• Pigtail Catheters</li>
                <li>• PAIRs Procedure (Hydatid Cyst)</li>
                <li>• MSK Injections</li>
              </ul>
            </div>

            {/* Advanced Procedures */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Microscope className="w-6 h-6 text-blue-600 mr-2" />
                Advanced Hepatic
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Transjugular Liver Biopsy</li>
                <li>• IVC Filter Placement</li>
                <li>• Hepatic Wedge Pressure</li>
                <li>• Foreign Body Retrieval</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Career */}
      <section id="career" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Career</h2>
      <p className="text-xl text-gray-600">A legacy of leadership and innovation</p>
    </div>

    <div className="space-y-8 max-w-4xl mx-auto">
      {[
        {
          title: "HOD & Consultant Radiologist",
          org: "Abu Dhabi Stem Cell Therapy Centre",
          desc: "Leading advanced stem cell therapy and interventional radiology services",
          location: "Abu Dhabi, UAE"
        },
        {
          title: "Former Director of Radiology",
          org: "Dr. Ziauddin Hospital, Karachi",
          desc: "Led comprehensive radiology department operations"
        },
        {
          title: "Former HOD Radiology",
          org: "Memon Medical Hospital, Karachi",
          desc: "Managed departmental excellence and training"
        },
        {
          title: "Former Chairman Imaging Services",
          org: "Indus Hospital & Health Network, Karachi",
          desc: "Oversaw 14 imaging departments across the network"
        }
      ].map((career, index) => (
        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{career.title}</h3>
              <p className="text-blue-600 font-semibold mb-2">{career.org}</p>
              <p className="text-gray-600 mb-2">{career.desc}</p>
              {career.location && (
                <p className="text-gray-500 text-sm flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {career.location}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Organizations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Organizations</h2>
            <p className="text-xl text-gray-600">Active membership in leading medical societies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Ex-President, Interventional Radiology Society of Pakistan (IRSP) 2023-24",
              "Member, CIRSE",
              "Member, APSCVIR",
              "Member, RSP",
              "Member, IRSP",
              "Member, Rad Aid Organization"
            ].map((org, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:bg-blue-100 transition">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
      <p className="text-xl text-blue-100">
        Schedule your consultation today
      </p>
    </div>

    {/* Locations Grid */}
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition duration-300">
        <Building2 className="w-12 h-12 mx-auto mb-4 text-blue-300" />
        <h3 className="font-bold text-xl mb-3 text-center">Abu Dhabi</h3>
        <p className="text-blue-100 text-center mb-4">Stem Cell Therapy Centre</p>
        <div className="flex items-center justify-center space-x-2">
          <MapPin className="w-4 h-4 text-blue-300" />
          <span className="text-blue-100">United Arab Emirates</span>
        </div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition duration-300">
        <Heart className="w-12 h-12 mx-auto mb-4 text-blue-300" />
        <h3 className="font-bold text-xl mb-3 text-center">Karachi</h3>
        <p className="text-blue-100 text-center mb-4">Dr. Ziauddin Hospital</p>
        <div className="flex items-center justify-center space-x-2">
          <MapPin className="w-4 h-4 text-blue-300" />
          <span className="text-blue-100">Pakistan</span>
        </div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition duration-300">
        <Activity className="w-12 h-12 mx-auto mb-4 text-blue-300" />
        <h3 className="font-bold text-xl mb-3 text-center">Karachi</h3>
        <p className="text-blue-100 text-center mb-4">Indus Hospital Network</p>
        <div className="flex items-center justify-center space-x-2">
          <MapPin className="w-4 h-4 text-blue-300" />
          <span className="text-blue-100">Pakistan</span>
        </div>
      </div>
    </div>

    {/* Contact Info */}
    <div className="bg-white/10 backdrop-blur-sm p-12 rounded-2xl border border-white/20 text-center max-w-2xl mx-auto">
      <Phone className="w-16 h-16 mx-auto mb-6 text-blue-300" />
      <h3 className="text-3xl font-bold mb-4">Contact Number</h3>
      <a href="tel:03141133253" className="text-4xl font-bold hover:text-blue-200 transition duration-300 inline-block mb-6">
        0314-1133-253
      </a>
      <p className="text-blue-100 text-lg">Available for appointments and consultations</p>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-300 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Dr. M. Kashif Shazlee</h3>
                  <p className="text-sm text-blue-300">Interventional Radiologist</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                20+ years of excellence in Interventional Radiology, serving patients across UAE and Pakistan with world-class medical care.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-900/50 hover:bg-blue-800 rounded-full flex items-center justify-center transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-900/50 hover:bg-blue-800 rounded-full flex items-center justify-center transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-900/50 hover:bg-blue-800 rounded-full flex items-center justify-center transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-900/50 hover:bg-blue-800 rounded-full flex items-center justify-center transition">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition">About</a></li>
                <li><a href="#career" className="text-gray-400 hover:text-blue-400 transition">Career</a></li>
                <li><a href="#procedures" className="text-gray-400 hover:text-blue-400 transition">Procedures</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>00314-1133-253</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>info@drshazlee.com</span>
                </li>
                <li className="flex items-start space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                  <span>Abu Dhabi, UAE<br/>Karachi, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400">
                © 2025 Dr. M. Kashif Shazlee. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
                <a href="#" className="hover:text-blue-400 transition">Medical Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

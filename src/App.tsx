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
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Stethoscope className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dr. M. Kashif Shazlee</h1>
                <p className="text-xs text-blue-600">Interventional Radiologist</p>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#career" className="text-gray-700 hover:text-blue-600 transition">Career</a>
              <a href="#procedures" className="text-gray-700 hover:text-blue-600 transition">Procedures</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#about" className="block text-gray-700 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#career" className="block text-gray-700 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Career</a>
              <a href="#procedures" className="block text-gray-700 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Procedures</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section 1 - Main Introduction */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  20 Years of Excellence
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Dr. M. Kashif Shazlee
              </h1>
              <p className="text-2xl text-blue-600 font-semibold">
                Associate Professor & Consultant Radiologist
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                MBBS | MCPS | FCPS | FRCR (UK) | EDiR (Paris)
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 text-gray-700">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span>20 Research Articles</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>74 Scientific Talks</span>
                </div>
              </div>
              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
                >
                  Schedule Consultation
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl transform -rotate-3"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Dr. M. Kashif Shazlee"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/95 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">20+ Years</h3>
                    <p className="text-blue-100">Clinical Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 2 - Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Distinguished Qualifications
            </h2>
            <p className="text-xl text-gray-600">
              Internationally recognized expertise in Interventional Radiology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition">
              <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• MBBS (DOW 2002)</li>
                <li>• MCPS (2008)</li>
                <li>• FCPS (2008)</li>
                <li>• FRCR UK (2015)</li>
                <li>• EDiR Paris (2013)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fellowships</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Vascular & Interventional Radiology (Shaukat Khanum, 2010)</li>
                <li>• PET CT (University of Zurich, 2016)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition">
              <Microscope className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Role</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Approved Supervisor FCPS, MCPS, FRCR</li>
                <li>• Examiner MCPS, FCPS & IMM (since 2016)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 3 - Leadership & Impact */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Leadership in Healthcare
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Pioneering excellence in diagnostic and interventional radiology across South Asia and the Middle East
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Ex-President, IRSP</h4>
                    <p className="text-blue-100">Interventional Radiology Society of Pakistan (2023-24)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Former Director & Chairman</h4>
                    <p className="text-blue-100">Led radiology departments at Ziauddin Hospital, Memon Medical Hospital, and Indus Hospital Network</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-5xl font-bold mb-2">20</div>
                <div className="text-blue-100">Research Articles</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-5xl font-bold mb-2">74</div>
                <div className="text-blue-100">Scientific Talks</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-5xl font-bold mb-2">14</div>
                <div className="text-blue-100">Departments Led</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-5xl font-bold mb-2">55+</div>
                <div className="text-blue-100">UAE Cases</div>
              </div>
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
              Serving excellence across multiple prestigious institutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-600 transition shadow-lg hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition"></div>
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">HOD & Consultant</h3>
              <p className="text-gray-700 font-medium mb-2">Abu Dhabi Stem Cell Therapy Centre</p>
              <p className="text-gray-600">United Arab Emirates</p>
            </div>

            <div className="group relative bg-white p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-600 transition shadow-lg hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition"></div>
              <Heart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visiting Consultant</h3>
              <p className="text-gray-700 font-medium mb-2">Dr. Ziauddin Hospital</p>
              <p className="text-gray-600">Karachi, Pakistan</p>
            </div>

            <div className="group relative bg-white p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-600 transition shadow-lg hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition"></div>
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
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600"
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
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{career.title}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{career.org}</p>
                    <p className="text-gray-600">{career.desc}</p>
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
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-blue-100">
              Schedule your consultation today
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition">
              <Building2 className="w-10 h-10 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-3">Abu Dhabi</h3>
              <p className="text-sm text-blue-100 mb-4">Stem Cell Therapy Centre</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-blue-100">United Arab Emirates</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition">
              <Heart className="w-10 h-10 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-3">Karachi</h3>
              <p className="text-sm text-blue-100 mb-4">Dr. Ziauddin Hospital</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-blue-100">Pakistan</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition">
              <Activity className="w-10 h-10 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-3">Karachi</h3>
              <p className="text-sm text-blue-100 mb-4">Indus Hospital Network</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-blue-100">Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20 text-center max-w-2xl mx-auto">
            <Phone className="w-12 h-12 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Contact Number</h3>
            <a href="tel:03999999999" className="text-4xl font-bold hover:text-blue-200 transition inline-block">
              0399-9999-999
            </a>
            <p className="text-blue-100 mt-4">Available for appointments and consultations</p>
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
                  <span>0399-9999-999</span>
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

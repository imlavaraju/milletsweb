import Image from "next/image";
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Hero Image with Circular Shape and Icons */}
        <div className="relative w-full flex justify-center mb-8">
          <div className="relative w-[400px] h-[400px] rounded-full border-4 border-green-100 bg-green-50 flex items-center justify-center">
            {/* Corner Icons - positioned outside the circle */}
            <div className="absolute -top-6 -left-6 bg-white p-3 rounded-full shadow-lg z-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-3 rounded-full shadow-lg z-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-full shadow-lg z-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-full shadow-lg z-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
              </svg>
            </div>
            
            {/* Hero Image */}
            <div className="w-[320px] h-[320px] rounded-full overflow-hidden">
              <Image 
                src="/millets.jpg" 
                alt="Hero Image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Random Info Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 font-[family-name:var(--font-geist-sans)]">Welcome to Our Store</h1>
          <div className="text-gray-700 mb-4">
            <h2 className="text-2xl font-bold mb-2 font-telugu">🌾 స్వాగతం! మీ ఆరోగ్యానికి మిల్లెట్స్ తో శుభారంభం! 🌾</h2>
            <p className="font-semibold mb-3 font-telugu">100% స్వచ్ఛమైన, ఆర్గానిక్ మిల్లెట్స్ - నేరుగా రైతుల నుండి!</p>
            
            <h3 className="text-xl font-bold mt-4 mb-2 font-telugu">✅ మమ్మల్ని ఎందుకు ఎంచుకోవాలి?</h3>
            <ul className="space-y-2 mb-4 font-telugu">
              <li className="p-2 bg-green-50 rounded-md">🌱 <strong className="text-green-600">ఆర్గానిక్ మరియు తాజా మిల్లెట్స్</strong> మాత్రమే అందిస్తున్నాం. ఎటువంటి కెమికల్స్ లేదా ప్రిజర్వేటివ్స్ ఉండవు.</li>
              <li className="p-2 bg-green-50 rounded-md">🧑‍🌾 <strong className="text-green-600">రైతుల నుండి నేరుగా</strong> మిల్లెట్స్ సేకరిస్తాం. నాణ్యతపై కాంప్రమైజ్ ఉండదు.</li>
              <li className="p-2 bg-green-50 rounded-md">🔒 <strong className="text-green-600">మీ వ్యక్తిగత వివరాలు మా బాధ్యత</strong> – గోప్యతను కాపాడటం మాకు ముఖ్యం. మేము మీ డేటాను ఎప్పుడూ మూడో వ్యక్తితో షేర్ చేయము.</li>
              <li className="p-2 bg-green-50 rounded-md">🚚 <strong className="text-green-600">త్వరిత డెలివరీ మరియు ట్రాక్ చేయగల ఆర్డర్‌ వ్యవస్థ</strong></li>
              <li className="p-2 bg-green-50 rounded-md">💳 <strong className="text-green-600">సురక్షితమైన చెల్లింపు విధానం</strong> – అన్ని UPI, కార్డ్, మరియు నెట్‌బ్యాంకింగ్ సపోర్ట్</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-4 mb-3 font-telugu flex items-center">
              <span className="text-yellow-500 mr-2">🌟</span> 
              <span className="bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text">మా మిల్లెట్స్‌లో:</span>
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 font-telugu">
              <li className="flex items-center bg-yellow-50 p-2 rounded-lg border border-yellow-100">
                <span className="text-yellow-600 mr-2">🌾</span>
                <span>ఫోక్స్‌టెయిల్ మిల్లెట్ <span className="text-green-600 font-medium">(కొర్ర)</span></span>
              </li>
              <li className="flex items-center bg-yellow-50 p-2 rounded-lg border border-yellow-100">
                <span className="text-yellow-600 mr-2">🌾</span>
                <span>బార్నయార్డ్ మిల్లెట్ <span className="text-green-600 font-medium">(ఉదలు)</span></span>
              </li>
              <li className="flex items-center bg-yellow-50 p-2 rounded-lg border border-yellow-100">
                <span className="text-yellow-600 mr-2">🌾</span>
                <span>లిటిల్ మిల్లెట్ <span className="text-green-600 font-medium">(సామలు)</span></span>
              </li>
              <li className="flex items-center bg-yellow-50 p-2 rounded-lg border border-yellow-100">
                <span className="text-yellow-600 mr-2">🌾</span>
                <span>కుడివరగు <span className="text-green-600 font-medium">(కోడి మిల్లెట్)</span></span>
              </li>
              <li className="flex items-center bg-yellow-50 p-2 rounded-lg border border-yellow-100">
                <span className="text-yellow-600 mr-2">✨</span>
                <span>మరియు మరెన్నో...</span>
              </li>
            </ul>
            
            <p className="font-semibold mt-5 mb-4 font-telugu bg-green-50 p-3 rounded-lg border border-green-100 flex items-start">
              <span className="text-green-600 mr-2 mt-1">👨‍👩‍👧‍👦</span>
              <span>మీ కుటుంబం ఆరోగ్యంగా ఉండాలంటే... నేడు మిల్లెట్‌లు మొదలు పెట్టండి!</span>
            </p>
            
            <p className="mt-4 font-telugu bg-blue-50 p-3 rounded-lg border border-blue-100 flex items-start">
              <span className="text-blue-600 mr-2 mt-1">👉</span>
              <span>మా వెబ్‌సైట్‌లో బ్రౌజ్ చేయండి, ప్రీమియం క్వాలిటీ మిల్లెట్స్‌ను ఆర్డర్ చేయండి – <strong className="text-blue-600">ఆరోగ్యానికి ఇది మొదటి అడుగు!</strong></span>
            </p>
          </div>
          <Link href="/products" className="inline-block">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105 flex items-center justify-center mt-4 w-full md:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

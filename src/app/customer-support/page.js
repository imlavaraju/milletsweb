import Navbar from '../../../components/Navbar';

export default function CustomerSupport() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 font-[family-name:var(--font-geist-sans)]">Customer Support</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)]">Company Details</h2>
          <div className="mb-6 font-[family-name:var(--font-geist-sans)]">
            <p className="text-gray-700 mb-2"><strong>Company Name:</strong> Jagdeesh</p>
            <p className="text-gray-700 mb-2"><strong>Address:</strong> Gidajam, Andhra Pradesh</p>
            <p className="text-gray-700 mb-2"><strong>Email:</strong> jagdeesh@gmail.com</p>
            <p className="text-gray-700 mb-2"><strong>Business Hours:</strong> 24/7</p>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)]">Contact Information</h2>
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="font-[family-name:var(--font-geist-sans)]">
                <p className="font-semibold">Customer Service</p>
                <a href="tel:987654321" className="text-blue-500 hover:underline">987654321</a>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="font-[family-name:var(--font-geist-sans)]">
                <p className="font-semibold">Email Support</p>
                <a href="mailto:jagdeesh@gmail.com" className="text-blue-500 hover:underline">jagdeesh@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div className="font-[family-name:var(--font-geist-sans)]">
                <p className="font-semibold">WhatsApp Support</p>
                <a 
                  href="https://wa.me/987654321?text=Hello, I need support with my product" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  987654321
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)]">Get in Touch</h2>
            <a 
              href="tel:987654321" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded font-[family-name:var(--font-geist-sans)]"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 
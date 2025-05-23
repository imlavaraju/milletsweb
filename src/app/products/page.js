import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';

// Sample product data with improved formatting
const products = [
  {
    id: 1,
    name: 'Foxtail Millet (కొర్ర)',
    price: 199.99,
    image: '/millets.jpg',
    description: 'Rich in minerals and dietary fiber',
    benefits: ['High in protein', 'Gluten-free', 'Low glycemic index'],
    weight: '500g',
    origin: 'Organic farms in Rowthulapudi'
  },
  {
    id: 2,
    name: 'Barnyard Millet (ఉదలు)',
    price: 149.99,
    image: '/millets.jpg',
    description: 'Excellent source of micronutrients',
    benefits: ['High in iron', 'Rich in fiber', 'Supports weight loss'],
    weight: '500g',
    origin: 'Organic farms in Gidajam'
  },
  {
    id: 3,
    name: 'Little Millet (సామలు)',
    price: 299.99,
    image: '/millets.jpg',
    description: 'Perfect for diabetic-friendly diets',
    benefits: ['Controls blood sugar', 'Heart-healthy', 'High in antioxidants'],
    weight: '500g',
    origin: 'Organic farms in Gidajam'
  },
  {
    id: 4,
    name: 'Kodo Millet (కోడి)',
    price: 89.99,
    image: '/millets.jpg',
    description: 'Traditional superfood for everyday health',
    benefits: ['Improves digestion', 'Rich in B vitamins', 'Supports metabolism'],
    weight: '500g',
    origin: 'Organic farms in Gidajam'
  },
];

export default function Products() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 font-[family-name:var(--font-geist-sans)]">Our Premium Millets</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold font-[family-name:var(--font-geist-sans)] text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-1 font-[family-name:var(--font-geist-sans)] text-sm">{product.description}</p>
                
                <div className="mt-3 bg-gray-50 p-2 rounded-md">
                  <p className="text-sm font-semibold text-gray-700 mb-1 font-[family-name:var(--font-geist-sans)]">Key Benefits:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 font-[family-name:var(--font-geist-sans)]">
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center mt-3">
                  <div>
                    <p className="text-gray-500 text-sm font-[family-name:var(--font-geist-sans)]">Weight: <span className="font-semibold">{product.weight}</span></p>
                    <p className="text-gray-500 text-sm font-[family-name:var(--font-geist-sans)]">Origin: <span className="font-semibold">{product.origin}</span></p>
                  </div>
                  <p className="text-gray-900 font-bold text-xl font-[family-name:var(--font-geist-mono)]">₹{product.price.toFixed(2)}</p>
                </div>
                
                <div className="mt-4 flex flex-col space-y-2">
                  <a 
                    href="tel:987654321" 
                    className="bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded font-[family-name:var(--font-geist-sans)] flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call: <strong>987654321</strong>
                  </a>
                  <a 
                    href={`https://wa.me/987654321?text=Hello, I'm interested in buying ${product.name} (₹${product.price}). Please provide more details.`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded font-[family-name:var(--font-geist-sans)] flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Order
                  </a>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500 font-[family-name:var(--font-geist-sans)]">
                    <span className="font-semibold">Harvested:</span> {new Date().toLocaleDateString('en-IN', {year: 'numeric', month: 'short'})}
                  </p>
                  <p className="text-xs text-gray-500 font-[family-name:var(--font-geist-sans)]">
                    <span className="font-semibold">In stock:</span> <span className="text-green-600 font-semibold">Available</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 
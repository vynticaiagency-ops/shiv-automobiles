import Link from "next/link";
import { ArrowLeft, Home, Tractor, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-24">
      <div className="max-w-xl w-full text-center">
        <div className="w-24 h-24 bg-primary/10 text-primary rounded-[2.5rem] flex items-center justify-center mx-auto mb-12 animate-pulse">
          <span className="text-4xl font-black italic">404</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-dark mb-6 uppercase">
          Page Not Found
        </h1>
        
        <p className="text-xl text-gray-500 font-bold mb-12">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-col gap-4">
          <Link href="/" className="btn btn-primary w-full">
            <Home size={20} /> Back to Home Page
          </Link>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/tractors" className="btn btn-outline text-xs">
              <Tractor size={16} /> Our Tractors
            </Link>
            <Link href="/contact" className="btn btn-outline text-xs">
              <Phone size={16} /> Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

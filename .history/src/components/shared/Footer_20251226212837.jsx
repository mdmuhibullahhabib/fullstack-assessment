import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* ===== Top Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center font-bold rounded">
                Z
              </div>
              <span className="font-bold text-lg">Zaheen</span>
            </div>

            <p className="text-sm text-gray-600 flex items-center gap-2">
              📍 29 SE 2nd Ave, Miami, FL 33131, United States
            </p>
            <p className="text-sm text-gray-600">✉ info@zaheen.com</p>
            <p className="text-sm font-semibold">📞 (+92) 3942 7879</p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold mb-4">PAGES</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Our Services</Link></li>
              <li><Link href="#">Our Products</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-4">INFORMATION</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#">My Account</Link></li>
              <li><Link href="#">Corporate Enquiries</Link></li>
              <li><Link href="#">FAQs</Link></li>
            </ul>
          </div>

          {/* Payment Channels */}
          <div>
            <h4 className="font-semibold mb-4">PAYMENT CHANNELS</h4>
            <div className="grid grid-cols-4 gap-2">
              {[
                "VISA", "Master", "Amex", "bKash",
                "Nagad", "Rocket", "Upay", "UnionPay"
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border rounded flex items-center justify-center text-xs font-medium py-2"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Bottom Section ===== */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">

          <p>
            Copyright © <span className="text-orange-500">360D Soul Limited</span> 2025.
            All rights reserved.
          </p>

          <div className="flex gap-4">
            <span>f</span>
            <span>x</span>
            <span>📷</span>
          </div>

          <div className="flex gap-4">
            <Link href="#">Terms & Condition</Link>
            <Link href="#">Privacy & Policy</Link>
            <Link href="#">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* ===== Top Section ===== */}
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-10"> */}
        <div className=" md:flex gap-10">

          {/* Logo & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="logo" width={48} height={48} />
              <Image src="/logo2.png" alt="logo2" width={48} height={48} />
            </div>

            <p className="text-sm text-gray-600 flex gap-2">
              📍 29 SE 2nd Ave, Miami, FL 33131, United States
            </p>
            <p className="text-sm text-gray-600">
              ✉ info@zaheen.com
            </p>
            <p className="text-sm font-semibold">
              📞 (+92) 3942 7879
            </p>
          </div>

          {/* Pages */}
          <div className="flex gap-">
            <div>
              <h4 className="font-semibold mb-4 uppercase text-sm">Pages</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Our Services</Link></li>
                <li><Link href="#">Our Products</Link></li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h4 className="font-semibold mb-4 uppercase text-sm">Information</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#">My Account</Link></li>
                <li><Link href="#">Corporate Enquiries</Link></li>
                <li><Link href="#">FAQs</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== Payment Channels (SAME ROW STYLE) ===== */}
        <div className="mt-10">
          <h4 className="font-semibold text-sm mb-4">PAYMENT CHANNELS</h4>

          <div className="flex flex-wrap gap-3">
            {[
              "visa",
              "mastercard",
              "amex",
              "bKash",
              "nagad",
              "rocket",
              "upay",
              "tap",
              "citybank",
              "bracbank",
              "easternbank",
              "standardchartered",
            ].map((logo) => (
              <div
                key={logo}
                className="bg-white border rounded-md px-4 py-2 flex items-center justify-center"
              >
                <Image
                  src={`/payments/${logo}.png`}
                  alt={logo}
                  width={48}
                  height={28}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">

          <p>
            Copyright ©{" "}
            <span className="text-orange-500 font-medium">
              360D Soul Limited
            </span>{" "}
            2025. All rights reserved.
          </p>

          <div className="flex gap-4 text-lg">
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

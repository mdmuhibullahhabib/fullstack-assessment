import Image from "next/image";
import Link from "next/link";
import { FaInstagram , FaFacebookF, FaTwitter, FaLocationArrow} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/*  Top Section  */}
        <div className=" md:flex md:justify-between md:px-22 gap-10">

          {/* Logo & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="logo" width={48} height={48} />
              <Image src="/logo2.png" alt="logo2" width={48} height={48} />
            </div>

            <p className="text-sm text-gray-600 flex gap-2">
              <FaLocationArrow/> 29 SE 2nd Ave, Miami, FL 33131, United States
            </p>
            <p className="text-sm text-gray-600">
              <FaMail info@zaheen.com
            </p>
            <p className="text-sm font-semibold">
              📞 (+92) 3942 7879
            </p>
          </div>

          {/* Pages */}
          <div className="flex gap-12">
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

        {/*  Payment */}
        <div className="mt-10">
          <h4 className="font-semibold text-sm mb-4 md:ml-16">PAYMENT CHANNELS</h4>
         <div className="flex flex-wrap justify-center gap-4">
            {[
              "images.png",
              "images1.png",
              "images2.png",
              "images3.png",
              "images4.png",
              "images5.png",
              "images6.png",
              "images7.png",
              "images8.png",
              "images9.png",
              "images10.jpg",
              "images11.jfif",
            ].map((img) => (
              <div
                key={img}
                className="bg-white border rounded-md px-5 py-3 flex items-center justify-center hover:shadow-md transition"
              >
                <Image
                  src={`/payments/${img}`}
                  alt="payment method"
                  width={30}
                  height={20}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/*  Bottom Bar  */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">

          <p>
            Copyright ©{" "}
            <span className="text-orange-500 font-medium">
              360D Soul Limited
            </span>{" "}
            2025. All rights reserved.
          </p>

          <div className="flex gap-4 text-lg">
            <FaFacebookF />
            <FaTwitter />
          <FaInstagram />
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

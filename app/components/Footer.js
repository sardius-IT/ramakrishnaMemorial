import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-[#002c87] text-white md:px-16 px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-16 px-3">
        {/* Left: Logo and Description */}
        <div className="max-w-md">
          <Image
            src="/LOGO name.png" // Ensure this logo exists in your public folder
            alt="hospital"
            width={100}
            height={100}
            className="mb-4 rounded-2xl"
          />
          <p className="mb-6 text-lg leading-relaxed">
            Trusted for over 52 years, providing expert care in mother and child
            health, normal & cesarean deliveries, uterus operations, fertility
            support, and pediatric care — with compassion,
            safety, and experience.
          </p>

          <div className="flex gap-4 text-lg">
            <a
              href="https://www.facebook.com/profile.php?id=61574679346195"
              className="p-2 border rounded-full hover:bg-white hover:text-[#002c87] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/mouli_overseas_consultants/"
              className="p-2 border rounded-full hover:bg-white hover:text-[#002c87] transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/9912300697"
              className="p-2 border rounded-full hover:bg-white hover:text-[#002c87] transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right: Office Hours */}
        <div className="max-w-sm grid justify-start md:justify-end">
          <h3 className="font-semibold  mb-2 text-2xl">Hospital Hours</h3>
          <div className="flex items-center gap-2 text-yellow-400 mb-2">
            <IoMdTime  className="text-4xl"/>
            <span className="text-xl">24/7 Open</span>
            </div>
             <p className="text-2xl">
           <span className="text-yellow-500">contact :</span>{" "}991-230-0697
          </p>
          <p className="text-xl">
            Bhasker Theatre, Chilkaluripet-522616, Andhra Pradesh
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 border-t border-white/30 pt-6 text-xs text-white">
        <p>Copyright © 2025. All rights reserved.</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            PRIVACY POLICY
          </a>
          <a href="#" className="hover:underline">
            TERMS & CONDITIONS
          </a>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Github, Twitter } from "lucide-react";
import styles from "./css/Footer.module.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      setMessage("Please enter a valid email.");
      return;
    }

    // Simulate an API call or store the email
    setTimeout(() => {
      setMessage("Subscribed successfully!");
      setEmail(""); // Clear input
    }, 1000);
  };

  return (
    <footer className="bg-blue-50 text-gray-600 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl text-black ">ZenMate</span>
              <div className="border-l-2 border-gray-500 text-black pl-2">
                <div className="text-xs uppercase">Mental</div>
                <div className="text-xs uppercase">Wellness</div>
              </div>
            </div>
            <p className="text-sm text-justify">
            You are not alone. Every step you take towards mental well-being matters, and we're here to walk with you. Your journey is unique, and taking care of yourself is the most important thing you can do.
            </p>
            <div className="pt-3 flex gap-3">
              <div className={"bg-gray-200 p-2 rounded-[50%] hover:bg-blue-500 " + styles.icondivf}>
                <Facebook strokeWidth={0.2} size={25} className={"fill-blue-500 text-blue-500 " + styles.iconf} />
              </div>
              <div className={"bg-gray-200 p-2 rounded-[50%] hover:bg-pink-500 " + styles.icondivi}>
                <Instagram strokeWidth={2} size={25} className={"text-pink-500 " + styles.iconi} />
              </div>
              <div className={"bg-gray-200 p-2 rounded-[50%] hover:bg-gray-800 " + styles.icondivg}>
                <Github strokeWidth={0.2} size={25} className={"fill-gray-800 text-gray-800 " + styles.icong} />
              </div>
              <div className={"bg-gray-200 p-2 rounded-[50%] hover:bg-blue-700 " + styles.icondivf}>
                <Twitter strokeWidth={0.2} size={25} className={"fill-blue-700 text-blue-700 " + styles.iconf} />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3'>
            <div></div>
            <div>
              <h3 className="font-semibold mb-4 text-black">Useful Links</h3>
              <ul className="space-y-3 pt-1">
                <li><div className="cursor-pointer hover:text-gray-900"><Link to="/aboutus">About</Link></div></li>
                <li><div className="cursor-pointer hover:text-gray-900"><Link to="/articles">Articles</Link></div></li>
                <li><div className="cursor-pointer hover:text-gray-900"><Link to="/message">Chat</Link></div></li>
                <li><div className="cursor-pointer hover:text-gray-900"><Link to="/analysis">Analysis</Link></div></li>
                <li><div className="cursor-pointer hover:text-gray-900"><Link to="/notes">Notes</Link></div></li>
              </ul>
            </div>
            <div></div>
          </div>

          {/* Subscribe Section */}
          <div className="flex-[2] flex flex-col gap-6 h-full">
            <h1 className="text-xl text-gray-900 font-[600]">Subscribe</h1>
            <div className="flex flex-col">
              <p className="text-gray-700">Subscribe to ZenMate to get updates about mental health well being</p>
              <div className="flex flex-col justify-between h-full gap-3">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 p-2 outline-none focus:border-gray-600 border placeholder:text-gray-700 border-gray-400 rounded-md"
                />
                <button
                  onClick={handleSubscribe}
                  className="mt-3 p-3 w-full bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Subscribe
                </button>
                {message && <p className="text-sm text-gray-600">{message}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">© {new Date().getFullYear()} by ZenMate Team. All Rights Reserved</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-900">
                <Facebook strokeWidth={0.2} size={25} className={"fill-blue-500 text-blue-500 " + styles.iconf} />
              </a>
              <a href="#" className="hover:text-gray-900">
                <Instagram strokeWidth={2} size={25} className={"text-pink-500 " + styles.iconi} />
              </a>
              <a href="#" className="hover:text-gray-900">
                <Github strokeWidth={0.2} size={25} className={"fill-gray-800 text-gray-800 " + styles.icong} />
              </a>
              <a href="#" className="hover:text-gray-900">
                <Twitter strokeWidth={0.2} size={25} className={"fill-blue-700 text-blue-700 " + styles.iconf} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

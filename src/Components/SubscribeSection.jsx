import React from "react";

function SubscribeSection() {
  return (
    <div className="px-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to our awesome emails.
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Get our latest offers & news straight in your inbox.
          </p>

          <div className="flex justify-center mb-8">
            <input
              type="email"
              placeholder="Please enter your email address"
              className="p-4 w-[300px] rounded-l-lg border border-gray-300"
            />
            <button
              type="submit"
              className="bg-[#F470AB] text-white p-4 rounded-r-lg hover:bg-red-600 transition"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Download our apps</h3>
          <p className="text-lg text-gray-700 mb-6">
            Shop our products & offers on-the-go
          </p>

          <div className="flex justify-center gap-4">
            <button className="">
              <img
                src="./images/AppStore.png"
                alt="App Store"
                className="h-10 inline-block"
              />
            </button>
            <button className="">
              <img
                src="./images/play.png"
                alt="Google Play"
                className="h-10 inline-block"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeSection;

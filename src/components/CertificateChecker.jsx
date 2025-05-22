import { useState } from "react";

export default function CertificateChecker() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!code.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/certificates/checkCertificate/${code}`);
      const data = await res.json();

      if (res.ok && data?.email) {
        setResult({ status: "valid", data });
      } else {
        setResult({ status: "invalid" });
      }
    } catch (err) {
      setResult({ status: "error" });
    } finally {
      setLoading(false);
      setShowModal(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-blue-200 px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Certificate Verification</h1>

      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Enter Certificate Code (any string, auto lowercase)
        </label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.toLowerCase())}
          placeholder="type any code like abc123xyz"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleCheck}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          disabled={loading}
        >
          {loading ? "Checking..." : "Verify"}
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">
              {result?.status === "valid" && "✅ Certificate Verified"}
              {result?.status === "invalid" && "❌ Invalid Certificate"}
              {result?.status === "error" && "⚠️ Error Checking Certificate"}
            </h2>
            <p className="text-gray-600">
              {result?.status === "valid" &&
                `Certificate belongs to: ${result.data.name || result.data.email}`}
              {result?.status === "invalid" &&
                "This certificate code does not exist in our database."}
              {result?.status === "error" &&
                "Something went wrong. Please try again later."}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div
      className="min-h-screen bg-gray-100 py-20 px-5 sm:px-22"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-22 items-center p-5">
        {/* Left: Sign Up Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="input-field"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="input-field"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="input-field"
            />
            <input
              type="text"
              maxLength={11}
              pattern="\d{11}"
              placeholder="Contact No."
              required
              className="input-field"
            />
            <input
              type="text"
              placeholder="Address"
              required
              className="input-field"
            />

            <button type="submit" className="form-button">
              Register
            </button>
          </form>
          <p className="text-sm text-center text-gray-500 mt-4">
            Already have an account?
            <Link to="/login" className="text-blue-600 hover:underline ml-1">
              Login
            </Link>
          </p>
        </div>

        {/* Right: Welcome Message */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">
            Welcome to eBillMate!
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            We're glad you're here! With{" "}
            <span className="font-semibold">eBillMate</span>, managing your
            electricity usage and bills has never been easier. Sign up or log in
            to access your account, track your consumption, and pay your bills —
            fast, simple, and secure.
          </p>
        </div>
      </div>
    </div>
  );
}

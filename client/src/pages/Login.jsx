import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556745757-8d76bdb6984b')",
      }}
    >
      <div className="bg-white p-10 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-3xl font-semibold text-center mb-4">Sign in</h2>

        <p className="text-gray-500 text-center mb-6">
          Sign in below to access your account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Email address</label>
            <input
              type="email"
              className="w-full border p-2 rounded mt-1"
              placeholder="yourname@example.com"
            />
          </div>

          <div className="mb-6">
            <label>Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded mt-1"
              placeholder="********"
            />
          </div>

          <button className="w-full bg-black text-white py-2 rounded">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
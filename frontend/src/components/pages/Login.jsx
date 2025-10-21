import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Email
            </label>
            <input
              type="text"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'Invalid email format',
                },
              })}
              className={`focus:outline-none w-full border mt-1 py-2 px-4 rounded-lg ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="Enter Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              className={`focus:outline-none w-full border mt-1 py-2 px-4 rounded-lg ${
                errors.password ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="Enter Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="focus:outline-none w-full text-white bg-primary-color py-2 px-4 rounded-lg hover:bg-secondary-color transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-md text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link
            to={`/register`}
            className="text-md text-primary-color hover:underline font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login

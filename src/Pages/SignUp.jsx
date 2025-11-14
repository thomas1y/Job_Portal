import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    
    // Here you would typically make an API call to your backend
    console.log('Signup data:', formData)
    
    // For demo purposes, simulate successful signup and login
    const userData = {
      email: formData.email,
      fullName: formData.fullName
    }
    
    // Call login function from context
    login(userData)
    
    // Redirect to home page
    navigate('/')
  }

  return (
    <div className='max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6 text-center text-black'>Sign Up</h2>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <div>
          <label className='block text-sm font-medium text-black'>Full Name</label>
          <input 
            type="text" 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black'
            placeholder='Enter your full name'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-black'>Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black'
            placeholder='Enter your email'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-black'>Password</label>
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black'
            placeholder='Create a password'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-black'>Confirm Password</label>
          <input 
            type="password" 
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black'
            placeholder='Confirm your password'
            required
          />
        </div>
        <button 
          type="submit" 
          className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        >
          Sign Up
        </button>
      </form>
      <p className='mt-4 text-center text-gray-600'>
        Already have an account? <Link to="/login" className='text-blue-600 hover:text-blue-700'>Login</Link>
      </p>
    </div>
  )
}

export default SignUp
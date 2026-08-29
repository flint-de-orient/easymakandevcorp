import { useState } from 'react';
import { Lock, User, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

interface AdminLoginProps {
  onLogin: () => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const formData = new FormData(e.target as HTMLFormElement);
    const userId = formData.get('userId') as string;
    const password = formData.get('password') as string;

    setTimeout(() => {
      if (userId === 'admin' && password === 'easymakan2024') {
        setIsError(false);
        setMessage(`Login successful! Redirecting...`);
        setTimeout(() => onLogin(), 1500);
      } else {
        setIsError(true);
        setMessage('Invalid user ID or password. Please try again.');
      }
      setTimeout(() => setMessage(null), 5000);
      setIsLoading(false);
    }, 1000);
  };

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const formVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
  };

  return (
    <>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spin { animation: spin 1s linear infinite; }
      `}</style>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.5 }}
        style={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          backgroundColor: '#ffffff'
        }}
      >
        <motion.div
          variants={formVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '448px',
            padding: '40px',
            backgroundColor: '#ffffff',
            border: '1px solid #f3f4f6',
            borderRadius: '16px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >
          {/* Branding */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: '#d4af37',
              borderRadius: '16px',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              <Lock style={{ width: '32px', height: '32px', color: '#111827' }} />
            </div>
            <h1 style={{
              fontSize: '30px',
              fontWeight: 'bold',
              color: '#d4af37',
              margin: '0'
            }}>EASYMAKAN</h1>
            <p style={{
              color: '#6b7280',
              marginTop: '8px',
              fontSize: '14px',
              margin: '8px 0 0 0'
            }}>Administration Portal</p>
            <div style={{
              width: '96px',
              height: '4px',
              backgroundColor: '#d1d5db',
              margin: '16px auto 0',
              borderRadius: '2px'
            }}></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* User ID */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="userId" style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151'
              }}>User ID</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <User style={{
                  position: 'absolute',
                  left: '12px',
                  height: '20px',
                  width: '20px',
                  color: '#d4af37',
                  zIndex: 10,
                  pointerEvents: 'none'
                }} />
                <input
                  id="userId"
                  name="userId"
                  type="text"
                  autoComplete="username"
                  required
                  placeholder="Enter admin"
                  style={{
                    width: '100%',
                    height: '48px',
                    paddingLeft: '48px',
                    paddingRight: '16px',
                    backgroundColor: '#f9fafb',
                    border: '1px solid #d1d5db',
                    borderRadius: '12px',
                    color: '#111827',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#d4af37';
                    e.target.style.boxShadow = '0 0 0 2px rgba(79, 70, 229, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="password" style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151'
              }}>Password</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Lock style={{
                  position: 'absolute',
                  left: '12px',
                  height: '20px',
                  width: '20px',
                  color: '#d4af37',
                  zIndex: 10,
                  pointerEvents: 'none'
                }} />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="Enter password"
                  style={{
                    width: '100%',
                    height: '48px',
                    paddingLeft: '48px',
                    paddingRight: '48px',
                    backgroundColor: '#f9fafb',
                    border: '1px solid #d1d5db',
                    borderRadius: '12px',
                    color: '#111827',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#d4af375';
                    e.target.style.boxShadow = '0 0 0 2px rgba(79, 70, 229, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    color: '#d4af37',
                    background: 'none',
                    border: 'none',
                    padding: '4px',
                    cursor: 'pointer',
                    zIndex: 10
                  }}
                >
                  {showPassword ? <EyeOff style={{ height: '20px', width: '20px' }} /> : <Eye style={{ height: '20px', width: '20px' }} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '14px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  style={{
                    height: '16px',
                    width: '16px',
                    borderRadius: '4px',
                    accentColor: '#d4af37'
                  }}
                />
                <label htmlFor="remember-me" style={{
                  color: '#6b7280',
                  cursor: 'pointer'
                }}>Remember me</label>
              </div>
              <a href="#" style={{
                fontWeight: '500',
                color: '#d4af37',
                textDecoration: 'none'
              }}>Forgot Password?</a>
            </div>

            {/* Message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: '16px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '500',
                  backgroundColor: isError ? '#fef2f2' : '#f0fdf4',
                  color: isError ? '#dc2626' : '#d4af37',
                  border: isError ? '1px solid #fecaca' : '1px solid #bbf7d0'
                }}
              >
                {message}
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '14px 24px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                color: '#ffffff',
                backgroundColor: '#d4af37',
                border: 'none',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.5 : 1,
                boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.3)'
              }}
              onMouseEnter={(e) => {
                if (!isLoading) e.currentTarget.style.backgroundColor = '#d4af37';
              }}
              onMouseLeave={(e) => {
                if (!isLoading) e.currentTarget.style.backgroundColor = '#d4af37';
              }}
            >
              {isLoading ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}>
                  <div className="spin" style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderTop: '2px solid #ffffff',
                    borderRadius: '50%'
                  }}></div>
                  <span>Authenticating...</span>
                </div>
              ) : (
                'Sign In to Portal'
              )}
            </button>
          </form>

          {/* Footer */}
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <p style={{
              fontSize: '12px',
              color: '#6b7280',
              margin: '0'
            }}>
              © {new Date().getFullYear()} EASYMAKAN. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default AdminLogin;
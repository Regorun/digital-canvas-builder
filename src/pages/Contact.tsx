import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

const hiringOptions = [
  { value: 'contract', label: 'Contract Hire' },
  { value: 'fulltime', label: 'Full Time Hire' },
  { value: 'consulting', label: 'Consulting Only' },
];

const Contact = () => {
  const [email, setEmail] = useState('');
  const [hiringType, setHiringType] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !hiringType) return;

    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/knightzeus21@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email,
          'Hiring Type': hiringOptions.find(o => o.value === hiringType)?.label,
          message: message || 'No message provided',
          _subject: 'New Portfolio Contact Form Submission',
        }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
        setHiringType('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="content-section">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">Get in Touch</p>
        <h1 className="page-title">Contact</h1>
        <p className="page-subtitle mb-12">
          Interested in working together? Fill out the form below or book a time to chat.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card space-y-6"
        >
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email <span className="text-accent">*</span></label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="input-field w-full"
            />
          </div>

          {/* Hiring type */}
          <div>
            <label className="block text-sm font-medium mb-3">I'm looking to <span className="text-accent">*</span></label>
            <div className="space-y-3">
              {hiringOptions.map(opt => (
                <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    hiringType === opt.value ? 'border-primary bg-primary' : 'border-border group-hover:border-primary/50'
                  }`}>
                    {hiringType === opt.value && <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
                  </div>
                  <input
                    type="radio"
                    name="hiringType"
                    value={opt.value}
                    checked={hiringType === opt.value}
                    onChange={() => setHiringType(opt.value)}
                    className="sr-only"
                  />
                  <span className="text-sm">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">Message <span className="text-muted-foreground">(optional)</span></label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Tell me about your project..."
              rows={4}
              className="input-field w-full resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : <><Send className="w-4 h-4" /> Send Message</>}
          </button>

          {status === 'success' && (
            <div className="flex items-center gap-2 text-primary text-sm">
              <CheckCircle className="w-4 h-4" /> Message sent successfully!
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center gap-2 text-accent text-sm">
              <AlertCircle className="w-4 h-4" /> Something went wrong. Please try again.
            </div>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card flex flex-col items-center justify-center text-center"
        >
          <Calendar className="w-12 h-12 text-primary mb-4" />
          <h3 className="font-display font-semibold text-xl mb-2">Book a Meeting</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Prefer a live conversation? Schedule a time that works for you.
          </p>
          <a
            href="https://calendar.google.com/calendar/appointments"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent inline-flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" /> Book on Google Calendar
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

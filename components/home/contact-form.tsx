'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Zod schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Please enter a valid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Web3Forms configuration
      const formData = new FormData();
      formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY'); // Replace with your actual access key
      formData.append(
        'subject',
        'New Contact Form Submission from TALT Website'
      );
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('message', data.message);

      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-white py-16 sm:py-20 lg:py-24 text-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Become a Friend */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
              BECOME A FRIEND OF TALT TODAY!
            </h2>

            {/* Accordion Sections */}
            <div className="space-y-4">
              <div className="bg-primary backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    100% IMPACT
                  </h3>
                  <span className="text-2xl text-yellow-300">+</span>
                </div>
              </div>

              <div className="bg-primary backdrop-blur-sm border border-white/30 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    2 SCHOLARSHIPS
                  </h3>
                  <span className="text-2xl text-yellow-300">−</span>
                </div>
                <p className="text-gray-200">
                  Annual scholarships awarded to deserving students
                </p>
              </div>

              <div className="bg-primary backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    INFINITE POTENTIAL
                  </h3>
                  <span className="text-2xl text-yellow-300">+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-8">
              Contact Us
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white/90 border-gray-400 text-gray-900 placeholder-gray-700"
                  {...register('name')}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-300">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/90 border-gray-400 text-gray-900 placeholder-gray-700"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-300">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-white/90 border-gray-400 text-gray-900 placeholder-gray-700"
                  {...register('message')}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-300">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-300 text-center">
                    Thank you! Your message has been sent
                    successfully.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-300 text-center">
                    Sorry, there was an error sending your message.
                    Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;

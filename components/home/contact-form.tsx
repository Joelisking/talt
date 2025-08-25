'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Zod schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Please enter a valid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
}

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const [accordionItems, setAccordionItems] = useState<
    AccordionItem[]
  >([
    {
      id: 'impact',
      title: '100% IMPACT',
      content:
        'Your contribution goes a long way in ensuring the development of our future transformational global leaders!',
      isOpen: false,
    },
    {
      id: 'scholarships',
      title: '2 SCHOLARSHIPS',
      content: 'Annual scholarships awarded to deserving students',
      isOpen: false,
    },
    {
      id: 'potential',
      title: 'INFINITE POTENTIAL',
      content:
        'The limitless impact of developing transformational leaders',
      isOpen: false,
    },
  ]);

  const toggleAccordion = (id: string) => {
    setAccordionItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

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
      className="relative py-16 sm:py-20 lg:py-24 text-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Become a Friend */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
              BECOME A FRIEND OF TALT TODAY!
            </h2>

            {/* Accordion Sections */}
            <div className="space-y-4">
              {accordionItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-secondary backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/90 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-black">
                      {item.title}
                    </h3>
                    {item.isOpen ? (
                      <ChevronUp className="text-2xl text-primary transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="text-2xl text-primary transition-transform duration-200" />
                    )}
                  </button>

                  {item.isOpen && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-800 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
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

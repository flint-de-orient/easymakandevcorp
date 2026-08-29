// Google Analytics helper functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackContactForm = (method: 'whatsapp' | 'email') => {
  trackEvent('contact_form_submit', 'lead_generation', method);
};

export const trackProjectView = (projectName: string) => {
  trackEvent('view_project', 'engagement', projectName);
};

export const trackPhoneCall = () => {
  trackEvent('phone_call', 'lead_generation', 'header_phone');
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', 'lead_generation', 'contact_info');
};
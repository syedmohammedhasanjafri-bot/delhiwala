import { InquiryFormData } from '../types/index';

export const OFFICIAL_PHONE = '+91 78303 35445';
export const CLEAN_PHONE = '917830335445';
export const OFFICIAL_EMAIL = 'delhiwala.elevation@gmail.com';
export const OFFICIAL_INSTAGRAM = '@delhiwala.elevation';
export const OFFICIAL_INSTAGRAM_URL = 'https://www.instagram.com/delhiwala.elevation';

/**
 * Builds a direct WhatsApp message URL tailored for architectural consultations,
 * site measurements, and material supply estimation.
 */
export function buildWhatsAppInquiryUrl(data: InquiryFormData): string {
  const lines: string[] = [
    `*DELHIWALA ELEVATION — SITE EXECUTION & MATERIAL INQUIRY*`,
    `--------------------------------------------------`,
    `• *Full Name / Studio:* ${data.fullName ? data.fullName.trim() : 'Project Stakeholder'}`,
    `• *Contact Number:* ${data.phone ? data.phone.trim() : 'Direct via WhatsApp'}`,
    `• *Stakeholder Role:* ${data.role}`,
    `• *Primary Requirement:* ${data.requirement}`,
    `• *Project City / Site Location:* ${data.city ? data.city.trim() : 'Pan-India'}`,
    `• *Approximate Elevation / Scope Area:* ${data.approxArea ? data.approxArea.trim() : 'Drawing based estimation needed'}`,
    `• *Architectural & Execution Notes:* ${data.notes ? data.notes.trim() : 'Please review our elevation elevations and share material sample catalogs.'}`,
    `--------------------------------------------------`,
    `*Generated via delhiwalaelevation.com • Direct Execution Desk*`
  ];

  const encoded = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${CLEAN_PHONE}?text=${encoded}`;
}

/**
 * Quick WhatsApp trigger for instant project drawer or hero action.
 */
export function buildQuickWhatsAppUrl(topic: string, projectTitle?: string): string {
  const message = projectTitle 
    ? `Hello Delhiwala Elevation team, I am reviewing your completed project "${projectTitle}". I would like to discuss material supply and site execution feasibility for a similar elevation.`
    : `Hello Delhiwala Elevation team, I am inquiring about: ${topic}. Please connect me with your on-site execution engineer.`;

  return `https://wa.me/${CLEAN_PHONE}?text=${encodeURIComponent(message)}`;
}

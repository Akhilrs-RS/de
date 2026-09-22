/**
 * Centralized API service for Manick Dental Clinic
 * Connects both Desktop and Mobile views to the same backend server.
 */

// In development, the Vite proxy forwards '/api' and '/uploads' directly to the backend.
// In direct calls or production, fallback to port 5055 if needed.
export const API_BASE_URL = typeof window !== 'undefined' && window.location.hostname === 'localhost'
  ? ''
  : '';

export const FALLBACK_BACKEND_URL = 'http://localhost:5055';

/**
 * Helper to make API requests with automatic proxy and port 5055 fallback.
 */
async function request(endpoint, options = {}) {
  const url = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  try {
    const res = await fetch(url, options);
    return res;
  } catch (err) {
    // If relative fetch fails (e.g., in edge cases or direct non-browser calls), try direct localhost:5055
    console.warn(`Primary endpoint ${url} failed, attempting direct fallback to ${FALLBACK_BACKEND_URL}${url}`);
    try {
      const fallbackRes = await fetch(`${FALLBACK_BACKEND_URL}${url}`, options);
      return fallbackRes;
    } catch (fallbackErr) {
      console.warn(`Backend connection notice:`, fallbackErr);
      throw fallbackErr;
    }
  }
}

/**
 * Submit a new appointment request.
 * Matches backend CreateAppointmentDto.
 */
export async function createAppointment(data) {
  const payload = {
    fullName: data.fullName?.trim() || '',
    phoneNumber: data.phoneNumber?.trim() || '',
    preferredDate: data.preferredDate?.trim() || '',
    preferredTime: data.preferredTime?.trim() || 'Morning (9:30Am - 12:30PM)',
    service: data.service?.trim() || 'General Checkups',
    notes: data.notes?.trim() || ''
  };

  const res = await request('/api/appointments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  return res;
}

/**
 * Submit a contact / inquiry message.
 * Matches backend CreateContactMessageDto.
 */
export async function sendContactMessage(data) {
  const payload = {
    name: data.name?.trim() || '',
    email: data.email?.trim() || '',
    phone: data.phone?.trim() || '',
    subject: data.clinic ? `Inquiry from ${data.clinic.trim()}` : (data.subject?.trim() || 'General Inquiry'),
    message: data.message?.trim() || ''
  };

  const res = await request('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  return res;
}

/**
 * Fetch all page images and media configuration.
 */
export async function fetchMediaList() {
  const res = await request('/api/media');
  if (res.ok) {
    return await res.json();
  }
  throw new Error(`Media fetch returned status ${res.status}`);
}

/**
 * JENNAH BOUTIQUE — SUPABASE INTEGRATION CLIENT & ADAPTER
 * Connect your Supabase project by providing your SUPABASE_URL & SUPABASE_ANON_KEY.
 * If credentials are not set, it gracefully falls back to the local PRODUCTS_DATA & localStorage.
 */

const SUPABASE_CONFIG = {
  url: window.ENV_SUPABASE_URL || 'https://YOUR_PROJECT_ID.supabase.co',
  anonKey: window.ENV_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY',
  isConfigured() {
    return this.url !== 'https://YOUR_PROJECT_ID.supabase.co' && this.anonKey !== 'YOUR_SUPABASE_ANON_KEY';
  }
};

class JennahSupabaseClient {
  constructor() {
    this.client = null;
    this.init();
  }

  init() {
    if (window.supabase && SUPABASE_CONFIG.isConfigured()) {
      try {
        this.client = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
        console.info('[Jennah Boutique] Connected to Supabase backend successfully.');
      } catch (err) {
        console.warn('[Jennah Boutique] Supabase initialization failed, falling back to local store.', err);
      }
    } else {
      console.info('[Jennah Boutique] Running in Standalone/Demo mode with Local Data Store. (Ready for Supabase keys)');
    }
  }

  // 1. PRODUCTS
  async getProducts() {
    if (this.client) {
      try {
        const { data, error } = await this.client.from('products').select('*');
        if (!error && data && data.length > 0) return data;
      } catch (e) {
        console.warn('Error fetching products from Supabase:', e);
      }
    }
    return window.JENNAH_PRODUCTS || [];
  }

  async getProductById(id) {
    if (this.client) {
      try {
        const { data, error } = await this.client.from('products').select('*').eq('id', id).single();
        if (!error && data) return data;
      } catch (e) {
        console.warn('Error fetching product by ID from Supabase:', e);
      }
    }
    return (window.JENNAH_PRODUCTS || []).find(p => p.id === id);
  }

  // 2. AUTHENTICATION (Login / Register / User Profile)
  async signUp(email, password, fullName) {
    if (this.client) {
      const { data, error } = await this.client.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName } }
      });
      if (error) throw error;
      return data;
    }
    // Mock local signup
    const user = { id: 'usr_' + Date.now(), email, full_name: fullName };
    localStorage.setItem('jennah_mock_user', JSON.stringify(user));
    return { user, session: { access_token: 'mock_token_' + Date.now() } };
  }

  async signIn(email, password) {
    if (this.client) {
      const { data, error } = await this.client.auth.signInWithPassword({ email, password });
      if (error) throw error;
      return data;
    }
    // Mock local login
    const user = { id: 'usr_active', email, full_name: email.split('@')[0] };
    localStorage.setItem('jennah_mock_user', JSON.stringify(user));
    return { user, session: { access_token: 'mock_token_' + Date.now() } };
  }

  async signOut() {
    if (this.client) {
      await this.client.auth.signOut();
    }
    localStorage.removeItem('jennah_mock_user');
  }

  getCurrentUser() {
    if (this.client) {
      return this.client.auth.getUser();
    }
    const stored = localStorage.getItem('jennah_mock_user');
    return stored ? JSON.parse(stored) : null;
  }

  // 3. ORDERS
  async createOrder(orderPayload) {
    if (this.client) {
      try {
        const { data, error } = await this.client.from('orders').insert([orderPayload]).select();
        if (error) throw error;
        return data[0];
      } catch (err) {
        console.error('Supabase order creation error:', err);
      }
    }
    // Local mock order save
    const orders = JSON.parse(localStorage.getItem('jennah_orders') || '[]');
    const newOrder = {
      order_id: 'JB-' + Math.floor(100000 + Math.random() * 900000),
      created_at: new Date().toISOString(),
      ...orderPayload
    };
    orders.push(newOrder);
    localStorage.setItem('jennah_orders', JSON.stringify(orders));
    return newOrder;
  }

  // 4. VIP STYLING APPOINTMENTS
  async bookStylingAppointment(booking) {
    if (this.client) {
      try {
        const { data, error } = await this.client.from('appointments').insert([booking]).select();
        if (error) throw error;
        return data[0];
      } catch (err) {
        console.error('Supabase appointment error:', err);
      }
    }
    const bookings = JSON.parse(localStorage.getItem('jennah_appointments') || '[]');
    const newBooking = { id: 'apt_' + Date.now(), ...booking, created_at: new Date().toISOString() };
    bookings.push(newBooking);
    localStorage.setItem('jennah_appointments', JSON.stringify(bookings));
    return newBooking;
  }
}

window.jennahSupabase = new JennahSupabaseClient();

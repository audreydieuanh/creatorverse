import { createClient } from "@supabase/supabase-js";
const URL = 'https://afgrxqmsehvcjvdddrvq.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmZ3J4cW1zZWh2Y2p2ZGRkcnZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2NDY3NTgsImV4cCI6MjAzNDIyMjc1OH0.Ta3bhcGBleaw_kz9ToNZsUICXMXeyMkY47DrG9RaTxA';
export const supabase = createClient(URL, API_KEY);
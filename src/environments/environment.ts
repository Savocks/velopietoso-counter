const process = require('process')
export const environment = {
  supabaseUrl: process.ENV['SUPABASE_URL'],
  supabaseKey: process.ENV['SUPABASE_KEY']
};

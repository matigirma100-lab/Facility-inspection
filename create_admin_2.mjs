import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ivsiqivnomwmsxpznffw.supabase.co';
const supabaseKey = 'sb_publishable_zOfCgCJ07kpwyPGKuWRpYg_BqNsfSsz';
const supabase = createClient(supabaseUrl, supabaseKey);

async function createAdmin() {
  console.log('Attempting to sign up admin2@example.com...');
  const { data, error } = await supabase.auth.signUp({
    email: 'admin2@example.com',
    password: 'Password123!',
    options: {
      data: {
        full_name: 'Admin User 2',
      },
    },
  });

  if (error) {
    console.error('Error creating admin:', error.message);
  } else {
    console.log('Admin user signed up successfully!');
    console.log('Email:', data.user?.email);
    console.log('ID:', data.user?.id);
  }
}

createAdmin();

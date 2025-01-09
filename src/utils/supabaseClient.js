import { createClient } from '@supabase/supabase-js';
    
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
    
    export const supabase = createClient(supabaseUrl, supabaseKey);
    
    export const getCategories = async () => {
      try {
        const { data, error } = await supabase
          .from('categories')
          .select('*');
    
        if (error) {
          console.error('Error fetching categories:', error);
          return [];
        }
        return data;
      } catch (err) {
        console.error('Unexpected error:', err);
        return [];
      }
    };
    
    export const addCategory = async (category) => {
      try {
        const { error } = await supabase
          .from('categories')
          .insert([category]);
    
        if (error) {
          console.error('Error adding category:', error);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };
    
    export const deleteCategory = async (id) => {
      try {
        const { error } = await supabase
          .from('categories')
          .delete()
          .eq('id', id);
    
        if (error) {
          console.error('Error deleting category:', error);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };
    
    export const updateCategory = async (id, updatedCategory) => {
      try {
        const { error } = await supabase
          .from('categories')
          .update(updatedCategory)
          .eq('id', id);
    
        if (error) {
          console.error('Error updating category:', error);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

export const categoriesService = {
  async getAll() {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        fields: [
          {"field": {"Name": "Name"}},
          {"field": {"Name": "name_c"}},
          {"field": {"Name": "color_c"}},
          {"field": {"Name": "icon_c"}},
          {"field": {"Name": "order_c"}}
        ],
        orderBy: [{"fieldName": "order_c", "sorttype": "ASC"}]
      };

      const response = await apperClient.fetchRecords('category_c', params);
      
      if (!response.success) {
        console.error("Error fetching categories:", response.message);
        return [];
      }

      return response.data?.map(category => ({
        Id: category.Id,
        name: category.name_c || category.Name,
        color: category.color_c || "#5B21B6",
        icon: category.icon_c || "Folder",
        order: category.order_c || 1
      })) || [];
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  },

  async getById(id) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        fields: [
          {"field": {"Name": "Name"}},
          {"field": {"Name": "name_c"}},
          {"field": {"Name": "color_c"}},
          {"field": {"Name": "icon_c"}},
          {"field": {"Name": "order_c"}}
        ]
      };

      const response = await apperClient.getRecordById('category_c', parseInt(id), params);
      
      if (!response.success) {
        console.error("Error fetching category:", response.message);
        return null;
      }

      const category = response.data;
      if (!category) return null;

      return {
        Id: category.Id,
        name: category.name_c || category.Name,
        color: category.color_c || "#5B21B6",
        icon: category.icon_c || "Folder",
        order: category.order_c || 1
      };
    } catch (error) {
      console.error("Error fetching category:", error);
      return null;
    }
  },

  async create(categoryData) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        records: [{
          Name: categoryData.name || "New Category",
          name_c: categoryData.name || "New Category",
          color_c: categoryData.color || "#5B21B6",
          icon_c: categoryData.icon || "Folder",
          order_c: categoryData.order || 1
        }]
      };

      const response = await apperClient.createRecord('category_c', params);
      
      if (!response.success) {
        console.error("Error creating category:", response.message);
        return null;
      }

      if (response.results && response.results.length > 0) {
        const result = response.results[0];
        if (result.success) {
          const category = result.data;
          return {
            Id: category.Id,
            name: category.name_c || category.Name,
            color: category.color_c || "#5B21B6",
            icon: category.icon_c || "Folder",
            order: category.order_c || 1
          };
        } else {
          console.error("Error creating category:", result.message);
          return null;
        }
      }

      return null;
    } catch (error) {
      console.error("Error creating category:", error);
      return null;
    }
  },

  async update(id, updates) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        records: [{
          Id: parseInt(id),
          ...(updates.name && { Name: updates.name, name_c: updates.name }),
          ...(updates.color && { color_c: updates.color }),
          ...(updates.icon && { icon_c: updates.icon }),
          ...(updates.order !== undefined && { order_c: updates.order })
        }]
      };

      const response = await apperClient.updateRecord('category_c', params);
      
      if (!response.success) {
        console.error("Error updating category:", response.message);
        return null;
      }

      if (response.results && response.results.length > 0) {
        const result = response.results[0];
        if (result.success) {
          const category = result.data;
          return {
            Id: category.Id,
            name: category.name_c || category.Name,
            color: category.color_c || "#5B21B6",
            icon: category.icon_c || "Folder",
            order: category.order_c || 1
          };
        } else {
          console.error("Error updating category:", result.message);
          return null;
        }
      }

      return null;
    } catch (error) {
      console.error("Error updating category:", error);
      return null;
    }
  },

  async delete(id) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        RecordIds: [parseInt(id)]
      };

      const response = await apperClient.deleteRecord('category_c', params);
      
      if (!response.success) {
        console.error("Error deleting category:", response.message);
        return false;
      }

      if (response.results && response.results.length > 0) {
        return response.results[0].success;
      }

      return true;
    } catch (error) {
      console.error("Error deleting category:", error);
      return false;
    }
  },

  async updateOrder(categoryIds) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const records = categoryIds.map((id, index) => ({
        Id: parseInt(id),
        order_c: index + 1
      }));

      const params = { records };

      const response = await apperClient.updateRecord('category_c', params);
      
      if (!response.success) {
        console.error("Error updating category order:", response.message);
        return false;
      }

      return true;
    } catch (error) {
      console.error("Error updating category order:", error);
      return false;
    }
  }
};
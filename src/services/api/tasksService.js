export const tasksService = {
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
          {"field": {"Name": "title_c"}},
          {"field": {"Name": "description_c"}},
          {"field": {"Name": "priority_c"}},
          {"field": {"Name": "due_date_c"}},
          {"field": {"Name": "completed_c"}},
          {"field": {"Name": "completed_at_c"}},
          {"field": {"Name": "archived_c"}},
          {"field": {"Name": "created_at_c"}},
          {"field": {"Name": "order_c"}},
          {"field": {"Name": "category_id_c"}}
        ]
      };

      const response = await apperClient.fetchRecords('task_c', params);
      
      if (!response.success) {
        console.error("Error fetching tasks:", response.message);
        return [];
      }

      return response.data?.map(task => ({
        Id: task.Id,
        title: task.title_c || task.Name,
        description: task.description_c || "",
        categoryId: task.category_id_c?.Id?.toString() || task.category_id_c?.toString() || "",
        priority: task.priority_c || "medium",
        dueDate: task.due_date_c || null,
        completed: task.completed_c || false,
        completedAt: task.completed_at_c || null,
        archived: task.archived_c || false,
        createdAt: task.created_at_c || task.CreatedOn || new Date().toISOString(),
        order: task.order_c || 1
      })) || [];
    } catch (error) {
      console.error("Error fetching tasks:", error);
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
          {"field": {"Name": "title_c"}},
          {"field": {"Name": "description_c"}},
          {"field": {"Name": "priority_c"}},
          {"field": {"Name": "due_date_c"}},
          {"field": {"Name": "completed_c"}},
          {"field": {"Name": "completed_at_c"}},
          {"field": {"Name": "archived_c"}},
          {"field": {"Name": "created_at_c"}},
          {"field": {"Name": "order_c"}},
          {"field": {"Name": "category_id_c"}}
        ]
      };

      const response = await apperClient.getRecordById('task_c', parseInt(id), params);
      
      if (!response.success) {
        console.error("Error fetching task:", response.message);
        return null;
      }

      const task = response.data;
      if (!task) return null;

      return {
        Id: task.Id,
        title: task.title_c || task.Name,
        description: task.description_c || "",
        categoryId: task.category_id_c?.Id?.toString() || task.category_id_c?.toString() || "",
        priority: task.priority_c || "medium",
        dueDate: task.due_date_c || null,
        completed: task.completed_c || false,
        completedAt: task.completed_at_c || null,
        archived: task.archived_c || false,
        createdAt: task.created_at_c || task.CreatedOn || new Date().toISOString(),
        order: task.order_c || 1
      };
    } catch (error) {
      console.error("Error fetching task:", error);
      return null;
    }
  },

  async getByCategory(categoryId) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        fields: [
          {"field": {"Name": "Name"}},
          {"field": {"Name": "title_c"}},
          {"field": {"Name": "description_c"}},
          {"field": {"Name": "priority_c"}},
          {"field": {"Name": "due_date_c"}},
          {"field": {"Name": "completed_c"}},
          {"field": {"Name": "completed_at_c"}},
          {"field": {"Name": "archived_c"}},
          {"field": {"Name": "created_at_c"}},
          {"field": {"Name": "order_c"}},
          {"field": {"Name": "category_id_c"}}
        ],
        where: [
          {"FieldName": "category_id_c", "Operator": "EqualTo", "Values": [parseInt(categoryId)]}
        ]
      };

      const response = await apperClient.fetchRecords('task_c', params);
      
      if (!response.success) {
        console.error("Error fetching tasks by category:", response.message);
        return [];
      }

      return response.data?.map(task => ({
        Id: task.Id,
        title: task.title_c || task.Name,
        description: task.description_c || "",
        categoryId: task.category_id_c?.Id?.toString() || task.category_id_c?.toString() || "",
        priority: task.priority_c || "medium",
        dueDate: task.due_date_c || null,
        completed: task.completed_c || false,
        completedAt: task.completed_at_c || null,
        archived: task.archived_c || false,
        createdAt: task.created_at_c || task.CreatedOn || new Date().toISOString(),
        order: task.order_c || 1
      })) || [];
    } catch (error) {
      console.error("Error fetching tasks by category:", error);
      return [];
    }
  },

  async getArchived() {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        fields: [
          {"field": {"Name": "Name"}},
          {"field": {"Name": "title_c"}},
          {"field": {"Name": "description_c"}},
          {"field": {"Name": "priority_c"}},
          {"field": {"Name": "due_date_c"}},
          {"field": {"Name": "completed_c"}},
          {"field": {"Name": "completed_at_c"}},
          {"field": {"Name": "archived_c"}},
          {"field": {"Name": "created_at_c"}},
          {"field": {"Name": "order_c"}},
          {"field": {"Name": "category_id_c"}}
        ],
        where: [
          {"FieldName": "archived_c", "Operator": "EqualTo", "Values": [true]}
        ]
      };

      const response = await apperClient.fetchRecords('task_c', params);
      
      if (!response.success) {
        console.error("Error fetching archived tasks:", response.message);
        return [];
      }

      return response.data?.map(task => ({
        Id: task.Id,
        title: task.title_c || task.Name,
        description: task.description_c || "",
        categoryId: task.category_id_c?.Id?.toString() || task.category_id_c?.toString() || "",
        priority: task.priority_c || "medium",
        dueDate: task.due_date_c || null,
        completed: task.completed_c || false,
        completedAt: task.completed_at_c || null,
        archived: task.archived_c || false,
        createdAt: task.created_at_c || task.CreatedOn || new Date().toISOString(),
        order: task.order_c || 1
      })) || [];
    } catch (error) {
      console.error("Error fetching archived tasks:", error);
      return [];
    }
  },

  async getActive() {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        fields: [
          {"field": {"Name": "Name"}},
          {"field": {"Name": "title_c"}},
          {"field": {"Name": "description_c"}},
          {"field": {"Name": "priority_c"}},
          {"field": {"Name": "due_date_c"}},
          {"field": {"Name": "completed_c"}},
          {"field": {"Name": "completed_at_c"}},
          {"field": {"Name": "archived_c"}},
          {"field": {"Name": "created_at_c"}},
          {"field": {"Name": "order_c"}},
          {"field": {"Name": "category_id_c"}}
        ],
        where: [
          {"FieldName": "archived_c", "Operator": "EqualTo", "Values": [false], "Include": true}
        ]
      };

      const response = await apperClient.fetchRecords('task_c', params);
      
      if (!response.success) {
        console.error("Error fetching active tasks:", response.message);
        return [];
      }

      return response.data?.map(task => ({
        Id: task.Id,
        title: task.title_c || task.Name,
        description: task.description_c || "",
        categoryId: task.category_id_c?.Id?.toString() || task.category_id_c?.toString() || "",
        priority: task.priority_c || "medium",
        dueDate: task.due_date_c || null,
        completed: task.completed_c || false,
        completedAt: task.completed_at_c || null,
        archived: task.archived_c || false,
        createdAt: task.created_at_c || task.CreatedOn || new Date().toISOString(),
        order: task.order_c || 1
      })) || [];
    } catch (error) {
      console.error("Error fetching active tasks:", error);
      return [];
    }
  },

  async create(taskData) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        records: [{
          Name: taskData.title || "New Task",
          title_c: taskData.title || "New Task",
          description_c: taskData.description || "",
          category_id_c: parseInt(taskData.categoryId) || null,
          priority_c: taskData.priority || "medium",
          due_date_c: taskData.dueDate ? new Date(taskData.dueDate).toISOString().split('T')[0] : null,
          completed_c: false,
          completed_at_c: null,
          archived_c: false,
          created_at_c: new Date().toISOString(),
          order_c: taskData.order || 1
        }]
      };

      const response = await apperClient.createRecord('task_c', params);
      
      if (!response.success) {
        console.error("Error creating task:", response.message);
        return null;
      }

      if (response.results && response.results.length > 0) {
        const result = response.results[0];
        if (result.success) {
          const task = result.data;
          return {
            Id: task.Id,
            title: task.title_c || task.Name,
            description: task.description_c || "",
            categoryId: task.category_id_c?.Id?.toString() || task.category_id_c?.toString() || "",
            priority: task.priority_c || "medium",
            dueDate: task.due_date_c || null,
            completed: task.completed_c || false,
            completedAt: task.completed_at_c || null,
            archived: task.archived_c || false,
            createdAt: task.created_at_c || task.CreatedOn || new Date().toISOString(),
            order: task.order_c || 1
          };
        } else {
          console.error("Error creating task:", result.message);
          return null;
        }
      }

      return null;
    } catch (error) {
      console.error("Error creating task:", error);
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

      const updateData = {
        Id: parseInt(id)
      };

      if (updates.title !== undefined) {
        updateData.Name = updates.title;
        updateData.title_c = updates.title;
      }
      if (updates.description !== undefined) updateData.description_c = updates.description;
      if (updates.categoryId !== undefined) updateData.category_id_c = parseInt(updates.categoryId) || null;
      if (updates.priority !== undefined) updateData.priority_c = updates.priority;
      if (updates.dueDate !== undefined) updateData.due_date_c = updates.dueDate ? new Date(updates.dueDate).toISOString().split('T')[0] : null;
      if (updates.completed !== undefined) {
        updateData.completed_c = updates.completed;
        updateData.completed_at_c = updates.completed ? new Date().toISOString() : null;
      }
      if (updates.archived !== undefined) updateData.archived_c = updates.archived;
      if (updates.order !== undefined) updateData.order_c = updates.order;

      const params = { records: [updateData] };

      const response = await apperClient.updateRecord('task_c', params);
      
      if (!response.success) {
        console.error("Error updating task:", response.message);
        return null;
      }

      if (response.results && response.results.length > 0) {
        const result = response.results[0];
        if (result.success) {
          const task = result.data;
          return {
            Id: task.Id,
            title: task.title_c || task.Name,
            description: task.description_c || "",
            categoryId: task.category_id_c?.Id?.toString() || task.category_id_c?.toString() || "",
            priority: task.priority_c || "medium",
            dueDate: task.due_date_c || null,
            completed: task.completed_c || false,
            completedAt: task.completed_at_c || null,
            archived: task.archived_c || false,
            createdAt: task.created_at_c || task.CreatedOn || new Date().toISOString(),
            order: task.order_c || 1
          };
        } else {
          console.error("Error updating task:", result.message);
          return null;
        }
      }

      return null;
    } catch (error) {
      console.error("Error updating task:", error);
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

      const response = await apperClient.deleteRecord('task_c', params);
      
      if (!response.success) {
        console.error("Error deleting task:", response.message);
        return false;
      }

      if (response.results && response.results.length > 0) {
        return response.results[0].success;
      }

      return true;
    } catch (error) {
      console.error("Error deleting task:", error);
      return false;
    }
  },

  async toggleComplete(id) {
    try {
      // Get current task state first
      const currentTask = await this.getById(id);
      if (!currentTask) return null;

      // Toggle the completed state
      return await this.update(id, {
        completed: !currentTask.completed
      });
    } catch (error) {
      console.error("Error toggling task completion:", error);
      return null;
    }
  },

  async archive(id) {
    try {
      return await this.update(id, { archived: true });
    } catch (error) {
      console.error("Error archiving task:", error);
      return null;
    }
  },

  async restore(id) {
    try {
      return await this.update(id, { archived: false });
    } catch (error) {
      console.error("Error restoring task:", error);
      return null;
    }
  },

  async bulkDelete(ids) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        RecordIds: ids.map(id => parseInt(id))
      };

      const response = await apperClient.deleteRecord('task_c', params);
      
      if (!response.success) {
        console.error("Error bulk deleting tasks:", response.message);
        return false;
      }

      return true;
    } catch (error) {
      console.error("Error bulk deleting tasks:", error);
      return false;
    }
  },

  async search(query) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      if (!query.trim()) {
        return await this.getActive();
      }

      const params = {
        fields: [
          {"field": {"Name": "Name"}},
          {"field": {"Name": "title_c"}},
          {"field": {"Name": "description_c"}},
          {"field": {"Name": "priority_c"}},
          {"field": {"Name": "due_date_c"}},
          {"field": {"Name": "completed_c"}},
          {"field": {"Name": "completed_at_c"}},
          {"field": {"Name": "archived_c"}},
          {"field": {"Name": "created_at_c"}},
          {"field": {"Name": "order_c"}},
          {"field": {"Name": "category_id_c"}}
        ],
        whereGroups: [{
          operator: "OR",
          subGroups: [
            {
              conditions: [
                {"fieldName": "title_c", "operator": "Contains", "values": [query]}
              ],
              operator: "OR"
            },
            {
              conditions: [
                {"fieldName": "description_c", "operator": "Contains", "values": [query]}
              ],
              operator: "OR"
            }
          ]
        }]
      };

      const response = await apperClient.fetchRecords('task_c', params);
      
      if (!response.success) {
        console.error("Error searching tasks:", response.message);
        return [];
      }

      return response.data?.map(task => ({
        Id: task.Id,
        title: task.title_c || task.Name,
        description: task.description_c || "",
        categoryId: task.category_id_c?.Id?.toString() || task.category_id_c?.toString() || "",
        priority: task.priority_c || "medium",
        dueDate: task.due_date_c || null,
        completed: task.completed_c || false,
        completedAt: task.completed_at_c || null,
        archived: task.archived_c || false,
        createdAt: task.created_at_c || task.CreatedOn || new Date().toISOString(),
        order: task.order_c || 1
      })) || [];
    } catch (error) {
      console.error("Error searching tasks:", error);
      return [];
    }
  },

  async updateOrder(taskIds) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const records = taskIds.map((id, index) => ({
        Id: parseInt(id),
        order_c: index + 1
      }));

      const params = { records };

      const response = await apperClient.updateRecord('task_c', params);
      
      if (!response.success) {
        console.error("Error updating task order:", response.message);
        return false;
      }

      return true;
    } catch (error) {
      console.error("Error updating task order:", error);
      return false;
    }
  }
};
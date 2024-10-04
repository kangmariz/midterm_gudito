<script setup>
import { ref } from 'vue'

const tasks = ref([])
const newTask = ref('')

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push({ text: newTask.value, isEditing: false })
    newTask.value = ''
  }
}

const editTask = (index) => {
  tasks.value[index].isEditing = !tasks.value[index].isEditing
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>

<template>
  <div>
    <div class="task-form">
      <input
        type="text"
        v-model="newTask"
        placeholder="Enter a new task"
        @keypress.enter="addTask"
      />
      <button @click="addTask">Add Task</button>
    </div>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" class="task-item">
        <div v-if="!task.isEditing" class="task-text">
          {{ task.text }}
        </div>
        <input v-else type="text" v-model="task.text" class="edit-input" />

        <div class="button-container">
          <button class="edit-button" @click="editTask(index)">
            {{ task.isEditing ? 'Save' : 'Edit' }}
          </button>
          <button class="delete-button" @click="deleteTask(index)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.task-form {
  margin-bottom: 20px;
}

.task-form input {
  padding: 12px;
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 1em;
}

.task-form button {
  padding: 10px 18px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
  width: 90%;
}

.task-form button:hover {
  background-color: #218838;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #f9f9f9;
  margin-top: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  width: 90%;
  margin-left: 15px;
}

.button-container {
  display: flex;
  margin-top: 10px;
  text-align: center;
}

.edit-button,
.delete-button {
  padding: 5px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 50px;
  text-align: center;
}

.edit-button {
  background-color: #007bff;
  color: white;
  width: 60px;
}

.edit-button:hover {
  background-color: #0069d9;
}

.delete-button {
  background-color: #dc3545;
  color: white;
  width: 60px;
  text-align: center;
}

.delete-button:hover {
  background-color: #c82333;
}

.edit-input {
  padding: 5px;
  width: 90%;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
</style>

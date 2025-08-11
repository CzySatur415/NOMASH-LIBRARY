<template>
  <div>
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="number" id="isbn" v-model="isbn" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <button type="submit">Add Book</button>
    </form>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase/init";

export default {
  data() {
    return {
      isbn: null,
      name: "",
    };
  },
  methods: {
    async addBook() {
      try {
        await addDoc(collection(db, "books"), {
          isbn: this.isbn,
          name: this.name,
        });
        alert("Book added successfully!");
        this.isbn = null;
        this.name = "";
      } catch (error) {
        console.error("Error adding book: ", error);
      }
    },
  },
};
</script>

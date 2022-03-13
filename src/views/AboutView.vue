<template>
  <div class="about">
    <form>
      <h1>Please fill out</h1>
      <div class="row mb-3">
        <label for="inputDate" class="col-sm-2 col-form-label">Date</label>
        <div class="col-sm-10">
          <input
            v-model="ddate"
            type="date"
            class="form-control"
            id="inputDate"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputName" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input
            v-model="nname"
            type="name"
            class="form-control"
            id="inputName"
          />
        </div>
      </div>
      <fieldset class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">ATK Test Results</legend>
        <div class="col-sm-10">
          <div class="form-check">
            <input
              v-model="aatk"
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="gridRadios1"> + </label>
          </div>
          <div class="form-check">
            <input
              v-model="aatk"
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios2"
              value="option2"
            />
            <label class="form-check-label" for="gridRadios2"> - </label>
          </div>
        </div>
      </fieldset>
      <div class="row mb-3">
        <label for="inputPhone" class="col-sm-2 col-form-label">Phone</label>
        <div class="col-sm-10">
          <input
            v-model="pphone"
            type="phone"
            class="form-control"
            id="inputPhone"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input
            v-model="eemail"
            type="email"
            class="form-control"
            id="inputEmail"
          />
        </div>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineFormCheck"
          />
          <label class="form-check-label" for="inlineFormCheck">
            Remember me
          </label>
        </div>
      </div>
      <div class="row mb-3">
        <button @click="addData()">เพิ่มข้อมูล</button>
        <button @click="readData()">อ่านข้อมูล</button>
      </div>
    </form>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Date</th>
          <th scope="col">Name</th>
          <th scope="col">ATK</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in item" :key="index">
          <th>{{ item.ddate }}</th>
          <td>{{ item.nname }}</td>
          <td>{{ item.aatk }}</td>
          <td>{{ item.pphone }}</td>
          <td>{{ item.eemail }}</td>
        </tr>
        <tr v-for="(item, index) in item" :key="index">
          <th>{{ item.ddate }}</th>
          <td>{{ item.nname }}</td>
          <td>{{ item.aatk }}</td>
          <td>{{ item.pphone }}</td>
          <td>{{ item.eemail }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore";
import db from "../plugins/firebaselint";
export default {
  data() {
    return {
      ddate: "",
      nname: "",
      aatk: "",
      pphone: "",
      eemail: "",
    };
  },

  methods: {
    async addData() {
      try {
        const docRef = await addDoc(collection(db, "csmju"), {
          date: this.ddate,
          name: this.nname,
          atk: this.aatk,
          phone: this.pphone,
          email: this.eemail,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async readData() {
      const querySnapshot = await getDocs(collection(db, "csmju"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.return.push();
      });
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

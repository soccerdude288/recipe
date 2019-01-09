<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md8
      >
        <material-card
          color="green"
          title="Add Ingredient"

        >
        <v-btn flat small to="/setup/"><i aria-hidden="true" class="v-icon mdi mdi-arrow-left theme--light"></i></v-btn>
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Name"
                    class="purple-input"
                    v-model="nameVar"/>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="Abbriviation"
                    class="purple-input"
                    v-model="abbvrVar"/>
                </v-flex>
                <v-checkbox v-if="this.id !== null" :label="`Active`" v-model="active"></v-checkbox>
                <v-flex
                  xs12
                  text-xs-right
                >
                  <v-btn
                    class="mx-0 font-weight-light"
                    color="success"
                    v-on:click="saveData"
                  >
                    Save
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import router from '@/router';

export default {
  data() {
    return {
      id: null,
      nameVar: "",
      abbvrVar: "",
      active: true,
    };
  },
  methods: {
    saveData() {
      if (this.id !== null) {
        axios
          .post(`http://localhost:3128/update/ingredients`, {
            name: this.nameVar,
            abbvr: this.abbvrVar,
            ingredient_id: this.id,
            active: this.active,
          })
          .then((data) => {
            if (data.data.status) {
              router.push('/setup');
            }
          });
      } else {
        axios
          .post(`http://localhost:3128/add/ingredients`, {
            name: this.nameVar,
            abbvr: this.abbvrVar,
          })
          .then((data) => {
            if (data.data.status) {
              router.push('/setup');
            }
          });
      }
    },
  },
  mounted() {
    if (this.$route.params.id !== "new") {
      this.id = this.$route.params.id;
      axios
        .get(`http://localhost:3128/get/ingredients`, {
          params: {
            ingredient_id: this.id,
          },
        })
        .then((data) => {
          debugger;
          if (data.status === 200) {
            this.nameVar = data.data[0].name;
            this.abbvrVar = data.data[0].abbreviation;
            this.active = data.data[0].active;
          }
        });
    }
  },
};
</script>

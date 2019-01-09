<template>
<v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
<v-flex
        md12
        lg6
      >
        <material-card
          color="orange"
          title="Ingredients"
        >
<v-text-field
        v-model="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
          <v-data-table
            :headers="ingredientHeaders"
            :items="ingredientItems"
            :search="search"
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="font-weight-light text-warning text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ index, item }"
            >
              <td v-on:click="linkTo(item.ingredient_id)">{{ item.name }}</td>
            </template>
          </v-data-table>
          <v-card-text style="position: relative">
            <v-btn
              absolute
              dark
              fab
              top
              right
              color="pink"
              to="/setup/ingredients/new"
            >
              <v-icon medium>mdi-plus-circle</v-icon>
            </v-btn>
          </v-card-text>
        </material-card>
      </v-flex>
      <v-flex
        md12
        lg6
      >
        <material-card
          color="orange"
          title="Measurements"
        >
          <v-data-table
            :headers="measurementHeaders"
            :items="measurementItems"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="font-weight-light text-warning text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ index, item }"
            >
              <td>{{ item.name }}</td>
            </template>
          </v-data-table>
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
      search: '',
      ingredientItems: [
      ],
      ingredientHeaders: [
        {
          sortable: true,
          text: 'Name',
          value: 'name',
        },
      ],
      measurementItems: [
        {
          name: "Cups",
          id: 12346,
        },
        {
          name: "Tablespoons",
          id: 12345,
        },
        {
          name: "Teaspoons",
          id: 12344,
        },
      ],
      measurementHeaders: [
        {
          sortable: false,
          text: 'Name',
          value: 'name',
        },
      ],
    };
  },
  methods: {
    linkTo(link) {
      router.push(`/setup/ingredients/${link}`);
    },
  },
  mounted() {
    axios
      .get(`http://localhost:3128/get/ingredients`, {
        headers: {
          // "x-access-token": token,
        },
      })
      .then((data) => {
        this.ingredientItems = data.data;
      });
  },
};
</script>

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
        <v-toolbar>
            <v-fab-transition>
              <v-btn
                color="green"
                fab
                dark
                small
                absolute
                right
                to="/setup/ingredients/new"
              >
                <v-icon>add</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-toolbar>
          <v-data-table
            :headers="ingredientHeaders"
            :items="ingredientItems"
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
export default {
  data() {
    return {
      ingredientItems: [
        {
          name: "Milk",
          id: "1234",
        },
        {
          name: "Butter",
          id: "1235",
        },
        {
          name: "Eggs",
          id: "1236",
        },
        {
          name: "Sugar",
          id: "1237",
        },
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
};
</script>

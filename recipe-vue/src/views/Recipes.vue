<template>
  <v-container fill-height fluid grid-list-xl>
    <v-flex md12 lg12>
      <material-card color="orange" title="All Recipes" text>
        <v-data-table :headers="headers" :items="items" hide-actions>
          <template slot="headerCell" slot-scope="{ header }">
            <span class="font-weight-light text-warning text--darken-3" v-text="header.text"/>
          </template>
          <template slot="items" slot-scope="{ index, item }">
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td class="text-xs-right">${{ item.price }}</td>
            <td class="text-xs-right">{{ item.serves }}</td>
            <td class="text-xs-right">{{ item.addedBy }}</td>
          </template>
        </v-data-table>
      </material-card>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Alfredo",
          description: "Super creamy",
          price: 10,
          serves: 4,
          addedBy: "Taylor",
          id: "123",
        },
        {
          name: "Steak",
          description: "Super tender",
          price: 20,
          serves: 4,
          addedBy: "Ben",
          id: "123",
        },
        {
          name: "Soup",
          description: "Super soupy",
          price: 5,
          serves: 4,
          addedBy: "Cache",
          id: "123",
        },
        {
          name: "Hamburgers",
          description: "Super cheesy",
          price: 14,
          serves: 4,
          addedBy: "Tylar",
          id: "123",
        },
      ],
      headers: [
        {
          sortable: true,
          text: 'Name',
          value: 'name',
        },
        {
          sortable: false,
          text: 'Description',
          value: 'description',
        },
        {
          sortable: true,
          text: 'Price',
          value: 'price',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Serves',
          value: 'serves',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Added By',
          value: 'addedBy',
          align: 'right',
        },
      ],
    };
  },
};
</script>

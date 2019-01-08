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
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="Abbriviation"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  text-xs-right
                >
                  <v-btn
                    class="mx-0 font-weight-light"
                    color="success"
                  >
                  {{ $route.params.id }}
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
export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    saveData() {
      if (this.id !== null) {
        // update data
      } else {
        // save new data
      }
    },
  },
  mounted() {
    if (this.$route.params.id !== "new") {
      this.id = this.$route.params.id;
    }
  },
};
</script>

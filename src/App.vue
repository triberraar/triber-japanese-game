<template>
  <v-app light>
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer"
    >
      <v-list dense>
          <v-list-tile>
            <v-list-tile-action>
                <v-icon>translate</v-icon>
              </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Hiragana
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
                <v-icon>translate</v-icon>
              </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Katakana
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile>
            <v-list-tile-action>
                <v-icon>date_range</v-icon>
              </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Dates
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
                <v-icon>access_time</v-icon>
              </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Times
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-3"
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title  >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-btn icon>
          <v-icon>home</v-icon>
        </v-btn>
        <span class="hidden-xs-only">Triber japanese games</span>
      </v-toolbar-title>
      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon>
          <v-icon>settings</v-icon>
        </v-btn>
        <v-btn icon large>
          <v-avatar size="32px" class="teal">
            <span class="white--text headline">U</span>
          </v-avatar>
        </v-btn>
      </div>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    })
  }
</script>

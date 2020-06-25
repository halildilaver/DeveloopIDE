<template>
    <v-tooltip bottom>
        <v-btn color="primary darken-2" slot="activator" icon @click.native="$global.ui.addBottomTab('compile-logs','Derleme Kayıtları','./components/compile_logs/CompileLogs')">
            <v-icon dark>fa-list-alt</v-icon>
        </v-btn>
        <span>Derleme Kayıtları</span>
    </v-tooltip>
</template>
<script>
  export default {
    name: "ActionbarCompile",
  };
</script>

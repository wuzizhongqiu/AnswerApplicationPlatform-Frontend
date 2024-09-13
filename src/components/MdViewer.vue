<template>
  <Viewer :value="value" :plugins="plugins" />
</template>

<script setup lang="ts">
import gfm from "@bytemd/plugin-gfm";
import { Editor, Viewer } from "@bytemd/vue-next";
import highlight from "@bytemd/plugin-highlight";

interface Props {
  value: string;
}

const plugins = [
  gfm(),
  highlight()
  // Add more plugins here
];

const props = withDefaults(defineProps<Props>(), {
  value: () => ""
});

</script>
const NavigationMenuListItem = `<script setup lang="ts">
import { NavigationMenuLink } from 'radix-vue'

const props = defineProps({
  title: String,
})
<\/script>

<template>
  <li>
    <NavigationMenuLink as-child>
      <a
        v-bind="$attrs"
        class="ListItemLink"
      >
        <div class="ListItemHeading">
          {{ props.title }}
        </div>
        <p class="ListItemText">
          <slot />
        </p>
      </a>
    </NavigationMenuLink>
  </li>
</template>
`;
export {
  NavigationMenuListItem as default
};

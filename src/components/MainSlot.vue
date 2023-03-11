<template>
  <div class="header-section" :class="{[currentPath]: true }">
    <div class="header-bg">
      <slot name="header-bg"></slot>
    </div>

    <div class="container">
      <div class="header-content"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <h1 class="title">
          <slot name="title"></slot>
        </h1>
        <slot name="subtitle"></slot>
        
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const currentPath = ref("")
    
    onMounted(() => {
      currentPath.value = window.location.pathname.substring(1)
      console.log(currentPath.value);
    });

    return {
      currentPath
    }
  }
}
</script>

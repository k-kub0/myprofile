<template>
  <div ref="fade" :class="{fadein: visible, hidden: !visible}">
    <slot v-show="visible"></slot>
  </div>
</template>

<script>
export default {
  name: 'FadeIn',
  data () {
    return {
      visible: false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (!this.visible) {
        var top = this.$refs.fade.getBoundingClientRect().top
        this.visible = (top + 100) < window.innerHeight
      }
    }
  }
}
</script>

<style scoped>
.hidden {
  opacity: 0;
}

.fadein {
  animation: fadeIn 1s;
  opacity: 1;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
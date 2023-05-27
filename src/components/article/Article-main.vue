<script setup lang="ts">
import { onMounted } from 'vue'

import TypeCoffee from "./widgets/Type-Coffee.vue"

import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

var ani: any;

onMounted(() => {
  const sections = gsap.utils.toArray('.Article-Container .sections');

  HorizontalScrool(sections);
  ApperText(sections);
})

function HorizontalScrool(sections: any): void {
  ani = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".Article-Container",
      pin: true,
      scrub: 1,
      end: "+=3000"
    }
  })
}

function ApperText(sections: any): void {
  for(var i = 0; i < sections.length; i++) {
    let text = sections[i].querySelector(".Type-Coffee--text");

    if(i === 0) {
      gsap.from(text, {
        y: -130,
        duration: 1.5,
        opacity: 0,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sections[i],
          start: "left center",
          containerAnimation: ani,
        }
      })

      continue
    }
    gsap.from(text, {
      y: -130,
      duration: 1.5,
      opacity: 0,
      ease: "expo.out",
      scrollTrigger: {
        trigger: sections[i],
        start: "left center",
        end: "left center",
        containerAnimation: ani,
        toggleActions: "restart none reverse none",
      }
    })
  }
}
</script>

<template>
  <div class="Article-Container">
    <TypeCoffee class="sections" image="/images/hehe.png">
      <template #title>
        Yes, with Cookies
      </template>
      <template #paragraph>
        A warm, brewed drink, prepared from coffee beans. Consuming this drink
        on a regular basis transforms a kitten to a cat, and a cat to a nervous
        wreck.
      </template>
    </TypeCoffee>
    <TypeCoffee class="sections" image="/images/cookie_2.png">
      <template #title>
        Yes, with Coffee
      </template>
      <template #paragraph>
        Small baked biscuits, usually full of chocolate chips, raisins, or
        something else. Great for a quick snack, and also dropping crumbs
        everywhere.
      </template>
    </TypeCoffee>
    <TypeCoffee class="sections" image="/images/cat.png">
      <template #title>
        Ohhhhhhhhhhh!
      </template>
      <template #paragraph>
        This a cat.
      </template>
    </TypeCoffee>
  </div>
</template>

<style scoped>
  .Article-Container {
    display: flex;
    width: 300vw;

    background: #FF0055;
  }
</style>

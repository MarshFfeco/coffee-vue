<template>
  <div class="FooterMain">
    <div class="FooterMain--github">
      <a href="https://github.com/MarshFfeco?tab=repositories" target="_blank">
        <v-icon class="git" name="bi-github" scale="4" />
      </a>
    </div>
    <div class="FooterMain--linkedin">
      <a href="https://www.linkedin.com/in/anderson-borba-8861b91a2/" target="_blank">
        <v-icon class="link" name="bi-linkedin" scale="4" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
  a {
    width: 100%;
    height: 100%;
  }

  .FooterMain {
    @apply
      w-full
      h-full

      overflow-hidden

      flex;

    &--github,
    &--linkedin {
      width: 100%;
      height: 100%;
      position: relative;

      display: flex;
      justify-content: center;
      align-items: center;

      opacity: 0;

      transition: all 300ms ease-in-out;

      @media (max-width: 980px) {
        opacity: 1;
        color: black;
      }

      &:hover {
        opacity: 1;
        background-color: #FF0055;

        .git,
        .link {
          color: white;

          top: 50%;
          left: 50%;

          transform: translate(-50%, -50%);
        }
      }
    }

    .git,
    .link {
      position: absolute;

      top: 50%;
      transform: translate(-50%, -50%);

      transition: all 300ms ease-in-out;
    }

    .git {
      left: -100%;

      @media (max-width: 980px) {
        left: 50%;
      }
    }

    .link {
      left: 120%;

      @media (max-width: 980px) {
        left: 50%;
      }
    }
  }
</style>

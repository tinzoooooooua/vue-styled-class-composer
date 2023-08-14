# vue-styled-class-composer

---

## CSS Modules

First of all, we need to understand what css modules are in the vue environment. A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.

> https://vuejs.org/ >> https://vuejs.org/api/sfc-css-features.html#css-modules

> https://github.com/css-modules/css-modules


CSS Modules compile to a low-level interchange format called ICSS or Interoperable CSS, but are written like normal CSS files:


### Get started (how to install)

```bash
npm install vue-styled-class-composer
```

or

```bash
yarn add vue-styled-class-composer
```

or

```bash
pnpm add vue-styled-class-composer
```

### Example (how to use)

#### VUE
```vue
<script setup lang="ts">
    import styledClassComposer from "vue-styled-class-composer";
    const styledClassList = styledClassComposer("el-header");
</script>

<template>
    <div :class="styledClassList(
        'header',
        'header__common'
    )">Header components</div>
</template>

<style lang="scss" module="el-header"> // Use any lang. For example: lang="scss"
    @import "header"; // Use any file. For example: "header"
</style>
```

#### CSS
```scss
/* header.scss */
.header {
  background-color: oldlace;

    &__common {
        height: 70px;
        width: 100%;
    }
}
```

#### Why?

`No more conflicts. Explicit dependencies. No global scope.`

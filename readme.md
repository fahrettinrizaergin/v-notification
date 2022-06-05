# @fahrettinriza/v-notification
 
<!--lint disable no-html-->

## Install

npm

```sh
npm install @fahrettinriza/v-notification
```

yarn

```sh
yarn add @fahrettinriza/v-notification
```



### use of package container on page
```vue
<script>
import { vRender } from 'v-notification'
export default {
  mounted () {
    vRender()
  }
}
</script>

// Or

<template>
  <vRender />
</template>

<script>
import { vRender } from 'v-notification'
export default {
  components: {
    vRender
  }
}
</script>

// Or

Include "import { vRender } from '@fahrettinriza/v-notification'" in the src/main.js file and use it with .use(vRender)
```

### Use of message types
```vue
<template></template>
<style></style>
<script>
// The values that the position definition can take: 
// top-right, top-center, top-left, center, bottom-left, bottom-center, bottom-right
import { success, danger, warning, info, light, primary } from 'v-notification'
export default {
  mounted () {
    this.isOk()
  },
  methods: {
    isOk() {
      success({
        title: 'success!',
        message: 'test message',
        position: 'bottom-center'
      })
      danger({
        title: 'danger!',
        message: 'test message',
        position: 'bottom-center'
      })
      warning({
        title: 'warning!',
        message: 'test message',
        position: 'bottom-center'
      })
      info({
        title: 'info!',
        message: 'test message',
        position: 'bottom-center'
      })
      light({
        title: 'light!',
        message: 'test message',
        position: 'bottom-center'
      })
      primary({
        title: 'primary!',
        message: 'test message',
        position: 'bottom-center'
      })  
    }
  }
}
</script>
```
![Screenshot](https://img001.prntscr.com/file/img001/IhQyl0HdS4uDabRwoI50DA.png)
 
## License

[MIT][license] © [Fahrettin Rıza Ergin][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/vendors.svg

[build]: https://travis-ci.org/wooorm/vendors

[downloads-badge]: https://img.shields.io/npm/dm/vendors.svg

[downloads]: https://www.npmjs.com/package/vendors

[license]: license

[author]: https://www.instagram.com/fahrettin_riza_ergin/

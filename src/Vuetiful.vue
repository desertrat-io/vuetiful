<template>
    <div id="nav"/>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import { InvokeCommand, Lambda } from '@aws-sdk/client-lambda'
import * as config from '../config/vuetiful.config.json'
const lamdaInstance = new Lambda({
    region: config.aws.region
})
const params = {
    FunctionName: 'hello_world',
    InvocationType: 'RequestResponse',
    LogType: 'None'
}
export default defineComponent({
    setup () {
        (async () => {
            try {
                const data = await lamdaInstance.send(new InvokeCommand(params));
                console.log(data)
            } catch (err) {
                console.error(err)
            }
        })()
    }
})
</script>

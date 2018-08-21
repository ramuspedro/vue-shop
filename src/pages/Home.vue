<!-- ./src/components/Home.vue -->
<template>
  <div>
    <div style="margin-top: 3rem;">
      <TreeBrowser 
      :node="root"
      @onClick="nodeWasClicked"
      />
    </div>
  </div>
</template>

<script>
  import TreeBrowser from "../components/TreeBrowser";
  export default {
    name: 'home',
    components: {
      TreeBrowser
    },
    data () {
      return {
        root: {
          name: '/',
          children: [
            {
              name: 'music',
              children: [
                {
                  name: 'song.mp3'
                }
              ]
            },
            {
              name: 'workspace',
              children: [
                {
                  name: 'source.js'
                }
              ]
            }
          ]
        }
      }
    },
    methods: {
      nodeWasClicked(node) {
        alert(node.name)
      }
    }
  }
</script>
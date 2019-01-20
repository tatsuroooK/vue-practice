<template>
  <v-app>
    <v-container>
      <ChatBoard/>
      <ChatForm/>
      <ChatForm2/>
    </v-container>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ChatBoard from './components/ChatBoard'
import ChatForm from './components/Form'
import ChatForm2 from './components/Form2'

export default {
  name: 'App',
  components: {
    ChatBoard,
    ChatForm,
    ChatForm2,
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>

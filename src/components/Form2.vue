<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="inputComment"
      :rules="commentRules"
      label="コメント"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      @click="addComment"
    >
      送信
    </v-btn>
  </v-form>
</template>

<script>
  import {db} from '../plugins/firebase';

  export default {
    components: {
      name: 'CreateForm2'
    },
    data: () => ({
      inputComment: "",
      valid: true,
      commentRules: [
        v => !!v || 'コメントを入力してください',
      ],
      displayForm: false,
    }),

    methods: {
      addComment() {
        const now = new Date()

        db.collection('comments').add({
          content: this.inputComment,
          avatar: 'https://picsum.photos/50?image=' + (Math.floor(Math.random() * 400) + 1),
          createdAt: now,
        })

        this.clearContent()
      },
      clearContent() {
        this.$refs.form.reset()
      },
    }
  }
</script>
<template>
  <div>
    <section>
      <h1>Bug Test</h1>
      <h2>Reproduction Steps</h2>
      <ol>
        <li>Log in as "admin".</li>
        <li>Notice that all 3 buttons appear.</li>
        <li>Clicking each button opens the respective dialog.</li>
        <li>Clicking the close button in the dialog closes the dialog.</li>
        <li>Logout and log back in as "non-admin".</li>
        <li>Notice that now only button 2 appears since buttons 1 and 3 are authorized for admin only using <code>v-role:admin</code>.</li>
        <li>Click Button 2 and notice an additional button appears.</li>
        <li>Close the dialog and notice an 3rd button appears.</li>
        <li>Repeat this process a few times and generate a few buttons.</li>
        <li>Hover over the buttons and notice that the button is an admin button.</li>
        <li>Click on the button and notice that it opens the admin dialog.</li>
      </ol>
      <button v-role:admin @click="showDialogA" title="Button 1 - Admin Only">Button 1 - Admin Only</button>
      <button @click="showDialogB" title="Button 2">Button 2</button>
      <button v-role:admin @click="showDialogC" title="Button 3 - Admin Only">Button 3 - Admin Only</button>
    </section>
    <dialog-a v-if="dialogAVisible" @close="hideDialogA" />
    <dialog-b v-if="dialogBVisible" @close="hideDialogB" />
    <dialog-c v-if="dialogCVisible" @close="hideDialogC" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import DialogA from '../components/DialogA.vue';
import DialogB from '../components/DialogB.vue';
import DialogC from '../components/DialogC.vue';

export default {
  components: {
    DialogA,
    DialogB,
    DialogC,
  },
  data(){
    return {
      dialogAVisible: false,
      dialogBVisible: false,
      dialogCVisible: false,
    }
  },
  computed: {
    ...mapGetters('user', ['user']),
  },
  methods: {
    showDialogA(){
      this.dialogAVisible = true;
    },
    showDialogB(){
      this.dialogBVisible = true;
    },
    showDialogC(){
      this.dialogCVisible = true;
    },
    hideDialogA(){
      this.dialogAVisible = false;
    },
    hideDialogB(){
      this.dialogBVisible = false;
    },
    hideDialogC(){
      this.dialogCVisible = false;
    },
  }
}
</script>

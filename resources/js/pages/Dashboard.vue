<template>
    <div class="flex flex-center">
        <q-card style="width: 500px" elevated v-if="user" class="q-mt-xl" dark>
            <q-card-section class="text-h5 text-orange">Welcome</q-card-section>
            <q-card-section class="text-h6 text-positive">{{ user.email }}</q-card-section>
        </q-card>
    </div>
</template>

<script>
import user from '../api/user'
import { mapState } from 'vuex'
export default {
    data() {
        return {
            // user: {}
        }
    },
    computed: {
        ...mapState({
            user: state => state.auth.user
        })
    },
    mounted() {
        user.auth().then(response => {
            // console.log(response.data);
            this.$store.commit('AUTH_USER', response.data)
            this.user = response.data;
        }) 
    },
}
</script>
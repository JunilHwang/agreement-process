<template>
  <header class="site-header">
    <div class="container">
      <h3 class="logo"><router-link to="/"><img src="@/assets/aiia-logo.png" alt="aiia"></router-link></h3>
      <nav class="gnb">
        <router-link to="/dashboard">대시보드</router-link>
        <router-link to="/release">릴리즈 노트</router-link>
        <template v-if="$store.state.member">
          <span href="#" v-html="$store.state.member.name + ' 님'" />
          <a href="#" @click="$store.commit('logout')">로그아웃</a>
        </template>
        <template v-else>
          <a href="#"><img src="@/assets/btn-google-login.png" alt="google login" @click="signInByGoogle"></a>
        </template>
      </nav>
    </div>
  </header>
</template>

<script>
  import Api from '@/middleware/Api.js'
  export default {
    methods: {
      async signInByGoogle () {
        // google 에서 user 정보 가져오기 
        const user = await this.$gAuth.signIn()
        const member = {
          access_token: user.Zi.access_token,
          id: user.El,
          name: user.w3.ig,
          email: user.w3.U3,
          photo_url: user.w3.Paa
        }

        // DB에 회원 정보 등록 및 가져오기
        const memberData = await this.getApiData(Api.postMember(member))

        // store에 저장 및 layer 닫기
        this.$store.commit('loggedIn', memberData.member)
      },
    }
  }
</script>

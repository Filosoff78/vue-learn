<template>
  <!-- ***** Header Area Start ***** -->
  <header class="header-area">
    <div class="container-fluid ">
      <div class="row">
        <!-- Logo Area  -->
        <div class="logo-area d-none d-md-block col-6">
          <h1 @click="showmenu()" class="font500">Русская деревня</h1>
        </div>
        <div class="menu-content-area col-sm-12 col-md-6 align-self-center">
          <!-- Header Social Area -->
          <div class="row">
            <div class="header-social-area col-11 d-flex justify-content-end">
              <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest">
                <i class="fa fa-phone" aria-hidden="true"><span> 8 931 2278287</span></i>
              </a>
            </div>
            <!-- Menu Icon -->
            <div class="col-1">
              <div class="">
                <span class="navbar-toggler-icon " @click="showmenu()"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    showmenu() {
      this.eventBus.emit('showmenu')
    },
  }
}
</script>

<style scoped>
/* :: Header Area CSS */
@media (max-width: 767.98px) {
  .header-social-area {
    justify-content: space-between !important;
  }
}
.header-social-area span{
  font-family: var(--bs-body-font-family);
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
}
.page .header-area {
  position: inherit;
  padding: 15px 0;
}
.header-area {
  position: fixed;
  z-index: 995;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  -webkit-transition-duration: 1000ms;
  transition-duration: 1000ms;
  padding: 15px 30px;
}
.header-area .logo-area h1 {
  color: #ffffff;
  font-size: 36px;
  font-weight: 100;
  cursor: pointer; }
.header-area .menu-content-area .header-social-area a {
  font-size: 18px;
  padding: 0 10px;
  color: #ffffff; }



.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  cursor: pointer; }
</style>
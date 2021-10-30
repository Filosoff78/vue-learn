<template>
  <!-- ***** Header Area Start ***** -->
  <header class="header-area">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="menu-area d-flex justify-content-between">
            <!-- Logo Area  -->
            <div class="logo-area">
              <h1 @click="showmenu()">Русская деревня</h1>
            </div>

            <div class="menu-content-area d-flex align-items-center">
              <!-- Header Social Area -->
              <div class="header-social-area d-flex align-items-center">
                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
              </div>
              <!-- Menu Icon -->
              <span class="navbar-toggler-icon" @click="showmenu()"></span>
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
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  background-color: transparent;
  padding: 15px 30px; }
.header-area .logo-area h1 {
  color: #ffffff;
  font-size: 36px;
  font-weight: 100;
  cursor: pointer; }

.header-area .menu-content-area .header-social-area {
  margin-right: 30px; }
.header-area .menu-content-area .header-social-area a {
  font-size: 18px;
  padding: 0 10px;
  color: #ffffff; }



.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  cursor: pointer; }
</style>
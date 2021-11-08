<template>
  <div id="contact" class="m-2">
    <div class="row">
      <div class="col-sm-12 col-md-6 mb-2">
        <div class="contact-border me-md-2">
          <div class="m-3">
            <h1 class="d-flex justify-content-center">Офис</h1>
            <a href="#" data-toggle="tooltip" data-placement="bottom" class="d-flex justify-content-center">
              <h1><i class="fa fa-phone" aria-hidden="true"><span> 8 931 2278287</span></i></h1>
            </a>
            <h1>Адрес:<span> Набережная улица 1/27, Кировск, Ленинградская область, Россия</span></h1>
            <h1>Время работы:<span> Пн. – Пт. с 9:00 до 18:00</span></h1>
            <h1>Почта:<span> zakaz@stalspb.net</span></h1>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 mb-2">
        <div class="contact-border ms-md-2">
          <div class="m-3">
            <h1 class="d-flex justify-content-center">Производство</h1>
            <a href="#" data-toggle="tooltip" data-placement="bottom" class="d-flex justify-content-center">
              <h1><i class="fa fa-phone" aria-hidden="true"><span> 8 931 2278287</span></i></h1>
            </a>
            <h1>Адрес:<span> Набережная улица 1/27, Кировск, Ленинградская область, Россия</span></h1>
            <h1>Время работы:<span> Пн. – Пт. с 9:00 до 18:00</span></h1>
            <h1>Почта:<span> zakaz@stalspb.net</span></h1>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-border">
      <div id="map2" class="m-2"/>
    </div>
  </div>
</template>



<style scoped>
#contact h1 span{
  font-size: 18px;
  font-weight: 500;
}
#contact a span{
  font-family: var(--bs-body-font-family);
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  color: white;
}
#contact a i{
  color: white;
}
.contact-border {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid white;
  border-radius: 4px;
}
</style>
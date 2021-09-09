<template>
  <ul class="sidenav app-sidenav" :class="{open: modelValue}">
    <template
      v-for="link in links"
      :key="link.url"
      >
      <li v-if="Object.is(link.url, this.$route.path)" class="active">
        <router-link
          :to="link.url"
          class="waves-effect waves-orange pointer"
        >
          {{ link.title }}
        </router-link>
      </li>
      <li v-else>
        <router-link
          :to="link.url"
          class="waves-effect waves-orange pointer"
        >
          {{ link.title }}
        </router-link>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  data: () => ({
    links: [
      {title: 'О нас', url: '/'},
      {title: 'Заказ', url: '/history'},
      {title: 'Личный кабинет', url: '/planning'},
      //{title: 'Новая запись', url: '/record'},
      //{title: 'Категории', url: '/categories'},
    ]
  })
}
</script>
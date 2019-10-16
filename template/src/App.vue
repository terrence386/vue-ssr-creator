<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
        </router-link>
        <router-link to="/home">home</router-link>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

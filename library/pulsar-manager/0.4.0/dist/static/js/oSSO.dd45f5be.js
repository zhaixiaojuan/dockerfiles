(window.webpackJsonp=window.webpackJsonp||[]).push([["oSSO"],{oSSO:function(o,e,n){"use strict";n.r(e);var t={name:"Index",watch:{$route:{handler:function(o){var e=this;this.$store.dispatch("LoginByCasdoor",o.query.code,o.query.state).then(function(){e.$router.push({path:"/"})}).catch(function(){console.log("login error!!")})},immediate:!0}}},i=n("KHd+"),r=Object(i.a)(t,void 0,void 0,!1,null,null,null);r.options.__file="index.vue";e.default=r.exports}}]);
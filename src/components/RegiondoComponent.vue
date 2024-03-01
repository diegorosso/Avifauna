<template>
  <div>
  <button-widget
    widget-id="d7e0d09c-4df3-4cb2-8343-c02c6ea1e54f"
  ></button-widget>
  </div>
</template>

<script setup>

// let loading = ref(true);

const script = document.createElement("script");
script.src = "https://widgets.regiondo.net/button/v1/button-widget.min.js";
document.body.appendChild(script);

// const buttonElement = document.querySelector("button-widget");
// if (buttonElement) {
//   console.log(buttonElement.children);
//   loading.value = !buttonElement.children.length > 0;
// } else {
//   console.log("a");
// }
// // Check for data-wid after script loads (adjust selector as needed)
// const buttonElement = document.querySelector("button-widget");
// if (buttonElement) {
//   console.log(buttonElement.getAttribute("data-wid") === '1')
//   setTimeout(()=>{
//     hasDataWid.value = buttonElement.getAttribute("data-wid") === '1';

//   }, 500)
// }
</script>

<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://media-exp1.licdn.com/dms/image/C4D03AQH_Gbe5onoQsg/profile-displayphoto-shrink_800_800/0/1604687441381?e=1658966400&v=beta&t=hGx9JAbJJctauLYUZE8z31Err60Sekc96P4RGo5xWeo",
    };
  },
};
</script>

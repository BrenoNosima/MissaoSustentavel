<template>
  <div>
    <HeroSection @navigate="$emit('navigate', $event)" />
    <FeaturesSection />
    <StatsSection />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import StatsSection from "@/components/StatsSection.vue";

export default {
  name: "HomePage",
  components: {
    HeroSection,
    FeaturesSection,
    StatsSection
  }
}
</script>



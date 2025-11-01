<template>
  <div class="metric-card" :style="cardStyle">
    <div v-if="icon" class="metric-icon">{{ icon }}</div>
    <div class="metric-value">{{ value }}</div>
    <div class="metric-label">{{ label }}</div>
    <div v-if="detail" class="metric-detail">{{ detail }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  value: string
  label: string
  detail?: string
  icon?: string
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: '#48BB78', // Default to green (solution color)
})

const cardStyle = computed(() => ({
  borderColor: props.color,
  backgroundColor: `${props.color}15`, // 15 = ~8% opacity in hex
}))
</script>

<style scoped>
.metric-card {
  border: 2px solid;
  border-radius: var(--expanso-radius-large);
  padding: var(--expanso-padding-medium);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.metric-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--expanso-shadow-md);
}

.metric-icon {
  font-size: 40px;
  margin-bottom: 12px;
  opacity: 0.9;
}

.metric-value {
  font-size: 48px;
  font-weight: var(--expanso-weight-bold);
  color: var(--expanso-text-primary);
  line-height: 1;
  margin-bottom: 8px;
}

.metric-label {
  font-size: var(--expanso-font-small);
  color: var(--expanso-text-secondary);
  font-weight: var(--expanso-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.metric-detail {
  font-size: var(--expanso-font-small);
  color: var(--expanso-text-muted);
  font-weight: var(--expanso-weight-regular);
  margin-top: 8px;
}
</style>

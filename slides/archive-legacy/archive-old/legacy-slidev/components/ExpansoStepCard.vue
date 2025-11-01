<template>
  <div class="step-card">
    <div class="step-badge">{{ stepNumber }}</div>
    <h3 class="step-title">{{ title }}</h3>
    <p class="step-description">{{ description }}</p>
    <ul v-if="items && items.length" class="step-items">
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <div v-if="callout" class="step-callout">
      <strong>💡 {{ callout }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  stepNumber: string | number
  title: string
  description: string
  items?: string[]
  callout?: string
}

defineProps<Props>()
</script>

<style scoped>
.step-card {
  background: var(--expanso-bg-secondary);
  padding: var(--expanso-padding-medium);
  border-radius: var(--expanso-radius-large);
  border-left: 4px solid var(--expanso-accent-cyan);
  position: relative;
  transition: transform 0.2s ease;
}

.step-card:hover {
  transform: translateX(4px);
}

.step-badge {
  position: absolute;
  top: 20px;
  left: -20px;
  width: 40px;
  height: 40px;
  background: var(--expanso-accent-cyan);
  color: var(--expanso-bg-primary);
  font-size: 20px;
  font-weight: var(--expanso-weight-bold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--expanso-shadow-md);
}

.step-title {
  font-size: var(--expanso-font-subhead);
  font-weight: var(--expanso-weight-semibold);
  color: var(--expanso-text-primary);
  margin-bottom: 12px;
}

.step-description {
  font-size: var(--expanso-font-body);
  color: var(--expanso-text-secondary);
  line-height: var(--expanso-line-relaxed);
  margin-bottom: 16px;
}

.step-items {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.step-items li {
  font-size: var(--expanso-font-body);
  color: var(--expanso-text-secondary);
  padding-left: 24px;
  position: relative;
  margin-bottom: 8px;
}

.step-items li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--expanso-accent-cyan);
  font-weight: var(--expanso-weight-bold);
}

.step-callout {
  background: rgba(0, 217, 255, 0.1);
  border: 1px solid var(--expanso-accent-cyan);
  border-radius: var(--expanso-radius-small);
  padding: 12px 16px;
  margin-top: 16px;
  font-size: var(--expanso-font-small);
  color: var(--expanso-accent-cyan);
}
</style>

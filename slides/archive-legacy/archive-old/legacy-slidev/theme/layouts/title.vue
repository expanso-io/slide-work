<template>
  <div class="slidev-layout title-layout">
    <!-- Logo in top-left -->
    <div class="expanso-logo">
      EXPANSO
    </div>

    <!-- Main content centered -->
    <div class="title-content">
      <slot />
    </div>

    <!-- Footer contact info -->
    <div class="footer-contact">
      David Aronchick, CEO<br/>
      aronchick@expanso.io
    </div>

    <!-- Footer tagline -->
    <div class="footer-tagline">
      Expanso: Upstream Data Control
    </div>
  </div>
</template>

<style scoped>
.title-layout {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 80px;
}

.expanso-logo {
  position: absolute;
  top: 60px;
  left: 60px;
  width: 180px;
  height: 60px;
  background: linear-gradient(135deg, #00A9E0 0%, #63F5B4 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: #101921;
  letter-spacing: 2px;
}

.title-content {
  max-width: 1200px;
  text-align: center;
}

.title-content :deep(h1) {
  font-size: 54px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
  margin: 0 0 32px 0;
  color: #FFFFFF;
}

.title-content :deep(.highlight) {
  color: #00A9E0;
}

.title-content :deep(.subtitle) {
  font-size: 28px;
  font-weight: 400;
  line-height: 1.4;
  color: #CBD5E0;
  margin: 0 0 48px 0;
}

.title-content :deep(.subtitle strong) {
  font-weight: 500;
  color: #FFFFFF;
}

.title-content :deep(.flow-diagram) {
  width: 900px;
  height: 140px;
  margin: 0 auto;
  background: rgba(0, 169, 224, 0.05);
  border: 2px dashed rgba(0, 169, 224, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 32px;
}

.title-content :deep(.flow-box) {
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  color: #FFFFFF;
}

.title-content :deep(.flow-box.highlight) {
  border: 2px solid #00A9E0;
  background: rgba(0, 169, 224, 0.1);
  font-weight: 600;
}

.title-content :deep(.flow-arrow) {
  font-size: 32px;
  color: #00A9E0;
}

.footer-contact {
  position: absolute;
  bottom: 80px;
  left: 60px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #718096;
  text-align: left;
}

.footer-tagline {
  position: absolute;
  bottom: 60px;
  right: 60px;
  font-size: 14px;
  font-weight: 300;
  color: #718096;
}
</style>

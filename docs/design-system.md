# wHere 設計系統指南

## 設計理念

wHere 的設計風格參考 KSART.jp，強調：
- 柔和的大地色系和自然色調
- 低飽和度的暖色調
- 簡潔優雅的設計語言
- 避免高對比度和鮮豔色彩

## 色彩系統

### 主色調 - Warm Beige (#C4B59A)
```css
/* Primary color variations - Optimized for accessibility contrast */
--primary-50: #F7F5F0
--primary-100: #E8DCC6
--primary-200: #C4B59A  /* Adjusted primary color with improved contrast */
--primary-300: #B8A082
--primary-400: #A67C52
--primary-500: #947A47
--primary-600: #7A653C
--primary-700: #5F5038
--primary-800: #453B2A
--primary-900: #2A221C
```

### 輔助色調
```css
/* Warm neutral colors */
--neutral-50: #FEFDFB
--neutral-100: #F9F7F4
--neutral-200: #E8E6E1
--neutral-300: #D1CFC7
--neutral-400: #A8A69E
--neutral-500: #7C7A72
--neutral-600: #4A4843  /* Adjusted text contrast */
--neutral-700: #3C3A36
--neutral-800: #262420
--neutral-900: #1A1816
```

### 語意化色彩
```css
/* Success color - Soft green */
--success: #7A9B7E
--success-light: #A8C4A2
--success-dark: #5A7A5E

/* Warning color - Soft orange */
--warning: #B8956A
--warning-light: #D4B896
--warning-dark: #9A7B56

/* Error color - Soft red */
--error: #A67C7C
--error-light: #C4A2A2
--error-dark: #7A4A4A  /* Enhanced alert effect */

/* Info color - Soft blue */
--info: #7A8B9B
--info-light: #A2B0C4
--info-dark: #5F6F8B
```

## 陰影系統

### 陰影層級
```css
/* Shadow effects - Using warm-toned shadows */
--shadow-xs: 0 1px 2px rgba(26, 24, 22, 0.05);
--shadow-sm: 0 1px 3px rgba(26, 24, 22, 0.12);
--shadow-md: 0 4px 6px rgba(26, 24, 22, 0.15);
--shadow-lg: 0 10px 15px rgba(26, 24, 22, 0.1);
--shadow-xl: 0 20px 25px rgba(26, 24, 22, 0.1);

/* Inner shadow */
--shadow-inner: inset 0 2px 4px rgba(26, 24, 22, 0.06);

/* Colored shadows - For emphasized elements */
--shadow-primary: 0 4px 14px rgba(196, 181, 154, 0.3);
--shadow-success: 0 4px 14px rgba(122, 155, 126, 0.25);
--shadow-error: 0 4px 14px rgba(166, 124, 124, 0.25);
```

## 字體系統

### 字體家族
```css
/* Font definitions */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-accent: 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif;
--font-mono: 'SF Mono', 'Monaco', 'Consolas', monospace;

/* Font weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Line heights */
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;

/* Letter spacing */
--letter-spacing-tighter: -0.05em;
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
```

## 文字系統

### 標題層級
- H1: text-4xl lg:text-6xl (36px/60px), font-bold, text-neutral-900
- H2: text-3xl lg:text-4xl (30px/36px), font-bold, text-neutral-900  
- H3: text-2xl lg:text-3xl (24px/30px), font-semibold, text-neutral-800
- H4: text-xl lg:text-2xl (20px/24px), font-semibold, text-neutral-800
- H5: text-lg (18px), font-medium, text-neutral-700
- H6: text-base (16px), font-medium, text-neutral-700

### 內文文字
- 大內文: text-lg (18px), font-normal, text-neutral-600
- 一般內文: text-base (16px), font-normal, text-neutral-600
- 小內文: text-sm (14px), font-normal, text-neutral-500
- 說明文字: text-xs (12px), font-normal, text-neutral-400

## 組件設計

### 按鈕設計
```css
/* Primary button */
.btn-primary {
  @apply bg-primary-200 hover:bg-primary-300 text-white;
  @apply px-6 py-2 rounded-full font-medium;
  @apply shadow-sm hover:shadow-md transition-all duration-300;
}

/* Secondary button */
.btn-secondary {
  @apply border-2 border-neutral-300 text-neutral-700;
  @apply hover:border-primary-200 hover:text-primary-500;
  @apply px-6 py-2 rounded-full font-medium;
  @apply transition-all duration-300;
}

/* Text button */
.btn-text {
  @apply text-primary-500 hover:text-primary-600;
  @apply px-4 py-2 font-medium;
  @apply transition-colors duration-300;
}
```

### 卡片設計
```css
.card {
  @apply bg-white rounded-2xl shadow-sm hover:shadow-md;
  @apply p-6 transition-shadow duration-300;
  @apply border border-neutral-100;
}

.card-elevated {
  @apply bg-white rounded-2xl shadow-lg;
  @apply p-8 border border-neutral-100;
}
```

### 表單元素
```css
.form-input {
  @apply border-2 border-neutral-200 rounded-lg;
  @apply px-4 py-3 text-neutral-700;
  @apply focus:border-primary-200 focus:ring-2 focus:ring-primary-100;
  @apply transition-colors duration-300;
}

.form-label {
  @apply text-sm font-medium text-neutral-700 mb-2;
}
```

### Loading 狀態組件
```css
/* Loading indicator */
.spinner {
  @apply w-6 h-6 border-2 border-primary-100 border-t-primary-300;
  @apply rounded-full animate-spin;
}

.spinner-lg {
  @apply w-8 h-8 border-3 border-primary-100 border-t-primary-300;
  @apply rounded-full animate-spin;
}

/* Skeleton loading */
.skeleton {
  @apply bg-neutral-100 animate-pulse rounded;
}

.skeleton-text {
  @apply h-4 bg-neutral-100 animate-pulse rounded;
}

.skeleton-avatar {
  @apply w-12 h-12 bg-neutral-100 animate-pulse rounded-full;
}
```

### Toast 通知組件
```css
/* Success notification */
.toast-success {
  @apply bg-success-light text-success-dark;
  @apply p-4 rounded-lg shadow-md border-l-4 border-success;
  @apply flex items-center space-x-3;
}

/* Warning notification */
.toast-warning {
  @apply bg-warning-light text-warning-dark;
  @apply p-4 rounded-lg shadow-md border-l-4 border-warning;
  @apply flex items-center space-x-3;
}

/* Error notification */
.toast-error {
  @apply bg-error-light text-error-dark;
  @apply p-4 rounded-lg shadow-md border-l-4 border-error;
  @apply flex items-center space-x-3;
}

/* Info notification */
.toast-info {
  @apply bg-info-light text-info-dark;
  @apply p-4 rounded-lg shadow-md border-l-4 border-info;
  @apply flex items-center space-x-3;
}
```

### Modal 對話框組件
```css
/* Backdrop overlay */
.modal-backdrop {
  @apply fixed inset-0 bg-neutral-900 bg-opacity-50;
  @apply backdrop-blur-sm z-40;
  @apply flex items-center justify-center p-4;
}

/* Dialog content */
.modal-content {
  @apply bg-white rounded-2xl shadow-xl;
  @apply max-w-md w-full mx-auto p-6;
  @apply transform transition-all duration-300;
  @apply animate-[fadeInUp_0.3s_ease-out];
}

.modal-content-lg {
  @apply max-w-2xl;
}

/* Dialog title */
.modal-header {
  @apply flex items-center justify-between mb-4;
  @apply pb-4 border-b border-neutral-200;
}

.modal-title {
  @apply text-xl font-semibold text-neutral-900;
}

/* Close button */
.modal-close {
  @apply text-neutral-400 hover:text-neutral-600;
  @apply w-6 h-6 transition-colors duration-200;
}
```

### Badge 標籤組件
```css
/* Basic Badge */
.badge {
  @apply inline-flex items-center px-2.5 py-0.5;
  @apply text-xs font-medium rounded-full;
}

.badge-primary {
  @apply bg-primary-100 text-primary-700;
}

.badge-success {
  @apply bg-success-light text-success-dark;
}

.badge-warning {
  @apply bg-warning-light text-warning-dark;
}

.badge-error {
  @apply bg-error-light text-error-dark;
}

.badge-neutral {
  @apply bg-neutral-100 text-neutral-600;
}
```

### 分割線組件
```css
.divider {
  @apply border-t border-neutral-200;
}

.divider-vertical {
  @apply border-l border-neutral-200 h-full;
}

.divider-text {
  @apply relative flex items-center justify-center;
}

.divider-text::before {
  content: '';
  @apply flex-1 h-px bg-neutral-200;
}

.divider-text::after {
  content: '';
  @apply flex-1 h-px bg-neutral-200;
}

.divider-text span {
  @apply px-4 text-sm text-neutral-500 bg-white;
}
```

## 間距系統

### Padding 規範
- xs: 0.5rem (8px)
- sm: 0.75rem (12px)  
- base: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 2.5rem (40px)
- 3xl: 3rem (48px)

### 圓角規範
- sm: 0.375rem (6px)
- base: 0.5rem (8px)
- lg: 0.75rem (12px)
- xl: 1rem (16px)
- 2xl: 1.5rem (24px)
- full: 9999px (圓形)

## 狀態系統

### 互動狀態色彩
```css
/* Hover state */
--state-hover: rgba(196, 181, 154, 0.1);
--state-hover-neutral: rgba(124, 122, 114, 0.08);

/* Active state */
--state-active: rgba(196, 181, 154, 0.2);
--state-active-neutral: rgba(124, 122, 114, 0.15);

/* Focus state */
--state-focus: rgba(196, 181, 154, 0.3);
--state-focus-ring: 0 0 0 3px rgba(196, 181, 154, 0.2);

/* Disabled state */
--state-disabled: rgba(124, 122, 114, 0.3);
--state-disabled-bg: #F7F5F0;
--state-disabled-text: rgba(74, 72, 67, 0.4);

/* Selected state */
--state-selected: rgba(196, 181, 154, 0.15);
--state-selected-border: #C4B59A;
```

### 狀態混入類別
```css
/* Hover effects */
.hover-lift {
  @apply transition-transform duration-200;
  @apply hover:translate-y-[-2px];
}

.hover-scale {
  @apply transition-transform duration-200;
  @apply hover:scale-105;
}

/* Focus effects */
.focus-ring {
  @apply focus:ring-2 focus:ring-primary-200 focus:ring-opacity-50;
  @apply focus:outline-none;
}

/* Disabled state */
.disabled {
  @apply opacity-50 cursor-not-allowed;
  @apply pointer-events-none;
}
```

## 觸控友善設計

### 最小觸控區域
```css
/* Minimum touch target size (44px x 44px - iOS recommendation) */
.touch-target {
  min-height: 44px;
  min-width: 44px;
}

.touch-target-sm {
  min-height: 36px;  /* For dense interfaces */
  min-width: 36px;
}

/* Touch-friendly button version */
.btn-touch {
  @apply min-h-[44px] min-w-[44px] px-6 py-3;
  @apply flex items-center justify-center;
}

.btn-touch-sm {
  @apply min-h-[36px] min-w-[36px] px-4 py-2;
  @apply flex items-center justify-center;
}
```

### 間距調整（觸控友善）
```css
/* Element spacing - Ensure sufficient touch areas */
.touch-spacing {
  @apply space-y-2;  /* Vertical spacing at least 8px */
}

.touch-spacing-x {
  @apply space-x-2;  /* Horizontal spacing at least 8px */
}

/* Form control touch optimization */
.form-control-touch {
  @apply min-h-[44px] px-4 py-3;
  @apply text-base;  /* Prevent iOS zoom */
}

/* Menu item touch optimization */
.menu-item-touch {
  @apply min-h-[48px] px-4;
  @apply flex items-center;
}
```

### 層級系統（Z-index）
```css
/* Z-index layer definitions */
--z-base: 0;
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
--z-popover: 1060;
--z-tooltip: 1070;
--z-toast: 1080;
```

## 動畫效果

### 基礎動畫
```css
.fade-in {
  @apply opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards];
}

.slide-in-left {
  @apply opacity-0 animate-[slideInLeft_1s_ease-out_forwards];
}

.slide-in-right {
  @apply opacity-0 animate-[slideInRight_1s_ease-out_forwards];
}
```

### 互動效果
- 按鈕 hover: transform hover:scale-105
- 卡片 hover: hover:shadow-md
- 過渡時間: duration-300

## 響應式設計

### 斷點
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

### 網格系統
- 行動裝置: 單欄佈局，充足的觸控區域
- 平板: 2-3 欄佈局
- 桌面: 3-4 欄佈局，最大寬度 1280px

## 使用原則

1. **一致性**: 所有頁面都應遵循相同的色彩和組件規範
2. **可讀性**: 確保文字和背景有足夠的對比度
3. **簡潔性**: 避免過度裝飾，保持清潔的視覺層次
4. **溫暖感**: 使用暖色調營造友善、可信賴的感受
5. **實用性**: 優先考慮功能性和用戶體驗

## Tailwind CSS 完整配置

### tailwind.config.js 建議配置
```javascript
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F7F5F0',
          100: '#E8DCC6', 
          200: '#C4B59A',  // 主色調（已優化對比度）
          300: '#B8A082',
          400: '#A67C52',
          500: '#947A47',
          600: '#7A653C',
          700: '#5F5038',
          800: '#453B2A',
          900: '#2A221C',
        },
        neutral: {
          50: '#FEFDFB',
          100: '#F9F7F4',
          200: '#E8E6E1',
          300: '#D1CFC7',
          400: '#A8A69E',
          500: '#7C7A72',
          600: '#4A4843',  // 已優化文字對比度
          700: '#3C3A36',
          800: '#262420',
          900: '#1A1816',
        },
        success: {
          DEFAULT: '#7A9B7E',
          light: '#A8C4A2',
          dark: '#5A7A5E',
        },
        warning: {
          DEFAULT: '#B8956A',
          light: '#D4B896',
          dark: '#9A7B56',
        },
        error: {
          DEFAULT: '#A67C7C',
          light: '#C4A2A2',
          dark: '#7A4A4A',  // 已優化警示效果
        },
        info: {
          DEFAULT: '#7A8B9B',
          light: '#A2B0C4',
          dark: '#5F6F8B',
        },
      },
      fontFamily: {
        primary: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        accent: ['Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.625rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      boxShadow: {
        'warm-xs': '0 1px 2px rgba(26, 24, 22, 0.05)',
        'warm-sm': '0 1px 3px rgba(26, 24, 22, 0.12)',
        'warm-md': '0 4px 6px rgba(26, 24, 22, 0.15)',
        'warm-lg': '0 10px 15px rgba(26, 24, 22, 0.1)',
        'warm-xl': '0 20px 25px rgba(26, 24, 22, 0.1)',
        'inner': 'inset 0 2px 4px rgba(26, 24, 22, 0.06)',
        'primary': '0 4px 14px rgba(196, 181, 154, 0.3)',
        'success': '0 4px 14px rgba(122, 155, 126, 0.25)',
        'error': '0 4px 14px rgba(166, 124, 124, 0.25)',
      },
      borderRadius: {
        'xs': '0.125rem',
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '40': '40',
        '50': '50',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

## 實際使用範例

### 頁面佈局範例
```html
<!-- 主要頁面容器 -->
<div class="min-h-screen bg-neutral-50">
  <!-- 導航列 -->
  <nav class="bg-white shadow-warm-sm border-b border-neutral-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <h1 class="text-xl font-semibold text-neutral-900">wHere</h1>
        <div class="flex items-center space-x-3">
          <button class="btn-secondary btn-touch">登入</button>
          <button class="btn-primary btn-touch">註冊</button>
        </div>
      </div>
    </div>
  </nav>

  <!-- 主要內容區域 -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Hero 區塊 -->
    <section class="text-center py-16">
      <h1 class="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
        別再買重複的東西
      </h1>
      <p class="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
        wHere 幫你記住物品的家，讓多地生活更輕鬆一點
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <button class="btn-primary btn-touch hover-lift">
          免費試試看
        </button>
        <button class="btn-secondary btn-touch">
          了解怎麼用
        </button>
      </div>
    </section>

    <!-- 功能卡片 -->
    <section class="grid md:grid-cols-3 gap-6 py-16">
      <div class="card hover-lift">
        <div class="text-4xl mb-4">⏱️</div>
        <h3 class="text-xl font-semibold text-neutral-900 mb-3">省時間</h3>
        <p class="text-neutral-600">不再花時間翻箱倒櫃找東西，一秒定位物品位置</p>
      </div>
      
      <div class="card hover-lift border-primary-200">
        <div class="text-4xl mb-4">💸</div>
        <h3 class="text-xl font-semibold text-neutral-900 mb-3">省錢</h3>
        <p class="text-neutral-600">避免重複購買已有物品，每年節省數千元不必要支出</p>
        <div class="badge-primary mt-3">推薦</div>
      </div>
      
      <div class="card hover-lift">
        <div class="text-4xl mb-4">😌</div>
        <h3 class="text-xl font-semibold text-neutral-900 mb-3">省心</h3>
        <p class="text-neutral-600">隨時掌握物品位置的安心感，讓多地生活更從容</p>
      </div>
    </section>
  </main>
</div>
```

### 表單組件範例
```html
<!-- 登入表單 -->
<div class="modal-backdrop">
  <div class="modal-content">
    <div class="modal-header">
      <h2 class="modal-title">登入 wHere</h2>
      <button class="modal-close">×</button>
    </div>
    
    <form class="space-y-4">
      <div>
        <label class="form-label">電子郵件</label>
        <input 
          type="email" 
          class="form-input form-control-touch focus-ring w-full"
          placeholder="請輸入電子郵件"
        >
      </div>
      
      <div>
        <label class="form-label">密碼</label>
        <input 
          type="password" 
          class="form-input form-control-touch focus-ring w-full"
          placeholder="請輸入密碼"
        >
      </div>
      
      <div class="flex items-center justify-between">
        <label class="flex items-center">
          <input type="checkbox" class="touch-target-sm mr-2">
          <span class="text-sm text-neutral-600">記住我</span>
        </label>
        <a href="#" class="btn-text text-sm">忘記密碼？</a>
      </div>
      
      <button class="btn-primary btn-touch w-full">
        <span class="spinner mr-2 hidden"></span>
        登入
      </button>
    </form>
  </div>
</div>
```

### Toast 通知範例
```html
<!-- 成功通知 -->
<div class="toast-success">
  <div class="text-success-dark">✓</div>
  <div>
    <p class="font-medium">物品新增成功！</p>
    <p class="text-sm">你的筆記型電腦已記錄在「台北家」</p>
  </div>
</div>

<!-- 錯誤通知 -->
<div class="toast-error">
  <div class="text-error-dark">!</div>
  <div>
    <p class="font-medium">發生錯誤</p>
    <p class="text-sm">請檢查網路連線後重試</p>
  </div>
</div>
```

### 載入狀態範例
```html
<!-- 頁面載入 -->
<div class="flex items-center justify-center py-16">
  <div class="text-center">
    <div class="spinner-lg mx-auto mb-4"></div>
    <p class="text-neutral-600">正在載入你的物品清單...</p>
  </div>
</div>

<!-- 骨架載入 -->
<div class="space-y-4">
  <div class="flex items-center space-x-3">
    <div class="skeleton-avatar"></div>
    <div class="flex-1">
      <div class="skeleton-text w-3/4 mb-2"></div>
      <div class="skeleton-text w-1/2"></div>
    </div>
  </div>
</div>
```

這份完整的設計系統文檔現在包含了所有必要的元素，確保團隊能夠一致地開發出符合品牌調性的用戶介面。記得定期檢查和更新這些規範，以適應產品的發展需求。
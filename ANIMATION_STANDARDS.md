# MSB Law Office - Animation Standards & Guidelines

## 📋 **Overview**
Panduan standardisasi animasi dan enhancement untuk konsistensi di seluruh website MSB Law Office.

## 🎯 **Core Animation Components**

### 1. **PageWrapper** - Wrapper untuk semua halaman
```tsx
import PageWrapper from '@/components/ui/page-wrapper';

export default function YourPage() {
  return (
    <PageWrapper showScrollProgress={true}>
      {/* Content */}
    </PageWrapper>
  );
}
```

### 2. **AnimatedSection** - Section dengan scroll-triggered animations
```tsx
import AnimatedSection, { AnimatedItem } from '@/components/ui/animated-section';

// Basic usage
<AnimatedSection variant="fadeInUp" delay={0.2}>
  <YourContent />
</AnimatedSection>

// Staggered animations
<AnimatedSection stagger>
  <AnimatedItem>Item 1</AnimatedItem>
  <AnimatedItem>Item 2</AnimatedItem>
  <AnimatedItem>Item 3</AnimatedItem>
</AnimatedSection>
```

### 3. **Standard Animation Variants**
```tsx
import { fadeInUp, fadeInLeft, scaleIn, hoverScale } from '@/lib/animation-variants';

// Gunakan variants yang sudah terstandardisasi
<motion.div variants={fadeInUp} initial="initial" animate="animate">
  Content
</motion.div>
```

## 🎨 **Animation Variants Available**

| Variant | Description | Usage |
|---------|-------------|-------|
| `fadeInUp` | Fade in dari bawah | Hero sections, cards |
| `fadeInDown` | Fade in dari atas | Headers, notifications |
| `fadeInLeft` | Fade in dari kiri | Sidebar content |
| `fadeInRight` | Fade in dari kanan | Main content |
| `scaleIn` | Scale dari kecil | Buttons, icons |
| `slideInUp` | Slide dari bawah | Modals, drawers |

## 🔧 **Custom Hooks**

### useScrollAnimation
```tsx
import { useScrollAnimation } from '@/hooks/use-animations';

const { ref, isInView } = useScrollAnimation(0.3, true);
```

### useStaggeredAnimation
```tsx
import { useStaggeredAnimation } from '@/hooks/use-animations';

const { container, item } = useStaggeredAnimation(0.1);
```

## 🎯 **UI Enhancement Components**

### 1. **MagneticButton** - Buttons yang mengikuti mouse
```tsx
import MagneticButton from '@/components/ui/magnetic-button';

<MagneticButton strength={0.3}>
  <Button>Your Button</Button>
</MagneticButton>
```

### 2. **FloatingActionButton** - FAB untuk kontak
```tsx
import FloatingActionButton from '@/components/ui/floating-action-button';

// Otomatis muncul di bottom-right dengan contact options
<FloatingActionButton />
```

### 3. **TextReveal** - Text muncul kata per kata
```tsx
import TextReveal from '@/components/ui/text-reveal';

<TextReveal delay={0.2}>
  Your text content here
</TextReveal>
```

### 4. **Particles** - Background particles effect
```tsx
import Particles from '@/components/ui/particles';

<Particles count={30} className="opacity-20" />
```

### 5. **ScrollProgress** - Progress bar saat scroll
```tsx
import ScrollProgress from '@/components/ui/scroll-progress';

// Otomatis included di PageWrapper
<ScrollProgress />
```

## 📐 **Standard Durations & Easing**

```tsx
import { durations, easings } from '@/lib/animation-variants';

// Durations
durations.fast    // 0.2s
durations.normal  // 0.3s
durations.slow    // 0.5s
durations.verySlow // 0.8s

// Easing
easings.easeOut   // [0.0, 0.0, 0.2, 1]
easings.easeIn    // [0.4, 0.0, 1, 1]
easings.easeInOut // [0.4, 0.0, 0.2, 1]
easings.bounce    // [0.68, -0.55, 0.265, 1.55]
```

## 🎨 **Brand Colors for Animations**

```css
/* MSB Brand Colors */
--red-primary: #dc2626    /* Red-600 */
--red-hover: #b91c1c      /* Red-700 */
--yellow-accent: #eab308  /* Yellow-500 */
--yellow-hover: #ca8a04   /* Yellow-600 */
```

## 📱 **Implementation Guidelines**

### 1. **Page Structure**
```tsx
export default function YourPage() {
  return (
    <MainLayout>
      <PageWrapper>
        <AnimatedSection variant="fadeInUp">
          <YourHeroSection />
        </AnimatedSection>
        
        <AnimatedSection variant="fadeInLeft" delay={0.2}>
          <YourContentSection />
        </AnimatedSection>
        
        <FloatingActionButton />
      </PageWrapper>
    </MainLayout>
  );
}
```

### 2. **Performance Best Practices**
- Gunakan `once: true` untuk scroll animations yang tidak perlu repeat
- Limit particles count (max 50 untuk performance)
- Gunakan `will-change: transform` untuk elements yang sering dianimasi
- Prefer `transform` dan `opacity` untuk smooth animations

### 3. **Accessibility**
- Respect `prefers-reduced-motion` media query
- Provide fallback untuk users yang disable animations
- Ensure animations tidak mengganggu screen readers

## 🔄 **Migration Steps untuk Page Existing**

1. **Wrap dengan PageWrapper**
```tsx
// Before
export default function Page() {
  return <MainLayout><Content /></MainLayout>;
}

// After
export default function Page() {
  return (
    <MainLayout>
      <PageWrapper>
        <Content />
        <FloatingActionButton />
      </PageWrapper>
    </MainLayout>
  );
}
```

2. **Replace manual animations dengan AnimatedSection**
```tsx
// Before
<motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}}>

// After
<AnimatedSection variant="fadeInUp">
```

3. **Standardize button interactions**
```tsx
// Before
<Button className="hover:scale-105">

// After
<MagneticButton>
  <Button>
</MagneticButton>
```

## 📊 **Performance Monitoring**

- Monitor Core Web Vitals (LCP, FID, CLS)
- Test animations pada device low-end
- Ensure smooth 60fps animations
- Optimize bundle size dengan lazy loading

---

**Note**: Semua components sudah dioptimasi untuk MSB brand colors (red & yellow) dan professional law firm aesthetic.

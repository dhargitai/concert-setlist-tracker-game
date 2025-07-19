# Dead & Co Setlist Game UI/UX Specification

## 1. Design Philosophy & Vision

### Core Experience Principles
The Dead & Co Setlist Game should embody the spirit of a Grateful Dead concert - joyful, communal, and slightly magical. Every interaction should feel like a gentle journey rather than a task.

### Design Pillars
- **Flow State**: Seamless transitions that keep users engaged
- **Playful Discovery**: Hidden delights and micro-interactions that reward exploration  
- **Community Connection**: Visual metaphors that evoke the shared experience of Dead shows
- **Accessibility First**: WCAG AA compliance ensures everyone can participate in the magic

## 2. Visual Design System

### Color Palette - "Rainbow Tour"

#### Primary Colors
- **Sunshine Yellow**: `#FDE047` (Deadhead optimism)
- **Cosmic Purple**: `#A855F7` (Mystical experiences)
- **Ocean Teal**: `#22D3EE` (Flowing like water)
- **Rose Pink**: `#F472B6` (Love and community)

#### Secondary Colors
- **Sage Green**: `#10B981` (Nature connection)
- **Sunset Orange**: `#F97316` (Warm energy)
- **Sky Blue**: `#3B82F6` (Open possibilities)
- **Cream**: `#FEF7ED` (Canvas/base)

#### Gradient Accents
- **Rainbow Flow**: Linear gradient from purple → pink → orange → yellow
- **Cosmic Fade**: Purple to teal with subtle sparkle effects
- **Sunset Glow**: Orange to pink with soft edges

### Typography
- **Primary Font**: "Comic Neue" - Playful yet readable, evokes hand-drawn concert posters
- **Accent Font**: "Lobster" - Used sparingly for headers and special elements
- **Mono Font**: "Fira Code" - For technical elements like dates/times

### Spacing & Layout
- **Base Unit**: 8px grid system
- **Border Radius**: 16px for cards, 50% for circular elements
- **Shadows**: Soft, multi-layered shadows that suggest depth without harshness

### Iconography
- Hand-drawn style icons with slight imperfections
- Musical notes, dancing bears, roses, and tie-dye swirls
- Subtle animation on hover (gentle swaying or pulsing)

## 3. Core Interaction Patterns

### Duolingo-Style Drag & Drop System

#### Visual Language
- **Draggable Items**: Song cards with rounded corners, subtle shadows, and musical note icons
- **Drop Zones**: Glowing outlines that pulse gently when active
- **Feedback States**:
  - **Hover**: Target zone expands slightly with color transition
  - **Drag Start**: Original item fades to 50% opacity with ghost trail
  - **Valid Drop**: Satisfying "snap" animation with sparkle effect
  - **Invalid Drop**: Gentle bounce back with soft shake animation

#### Micro-interactions
- **Drag Start**: Subtle haptic feedback on mobile
- **During Drag**: Song card tilts slightly in direction of movement
- **Successful Drop**: Brief rainbow shimmer across the drop zone
- **Completion**: Gentle celebration animation with floating musical notes

### Navigation Flow
```
Homepage → Show Selection → Game Selection → Game Interface → Results
```

#### Transitions Between Screens
- **Slide transitions** with easing that feel like turning pages in a tour program
- **Fade elements** that suggest smoke or clouds passing
- **Scale animations** that grow from center, like expanding consciousness

## 4. Screen-by-Screen Specifications

### 4.1 Homepage - "Welcome to the Journey"

#### Layout
- **Hero Section**: Large, hand-drawn "Dead & Co" text with animated rainbow gradient
- **Show Cards**: Horizontal scroll on mobile, grid on desktop
- **Background**: Subtle tie-dye pattern that shifts colors slowly

#### Show Selection Cards
```
┌─────────────────────────────┐
│ 🌸 August 1, 2025          │
│    Boulder, CO             │
│    Folsom Field            │
│                            │
│ ┌───────────────────────┐  │
│ │  🎪 Enter the Show    │  │
│ └───────────────────────┘  │
└─────────────────────────────┘
```

#### Interactions
- Cards float slightly on hover
- Click triggers gentle expansion animation
- Ripple effect emanates from click point

### 4.2 Game Selection Screen - "Choose Your Adventure"

#### Layout
- **Header**: Show details with animated background that reflects venue
- **Game Grid**: 2x2 grid on desktop, single column on mobile
- **Floating Elements**: Subtle dancing bear animations in background

#### Game Cards Design
Each game mode presented as a "ticket stub":
- **Setlist Bingo**: Bingo card with musical notes
- **Guess the Opener**: Microphone with question mark
- **Guess the Encore**: Guitar with encore arrow
- **Fill the Setlist**: Setlist template with spaces

#### Visual Hierarchy
- Primary action: Game selection (largest, most colorful)
- Secondary: Back button (subtle, bottom-left)
- Tertiary: Info/help icons (floating, top-right)

### 4.3 Game Interfaces

#### Setlist Bingo Board
```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│   BINGO     │ │             │ │             │
│   SPACE     │ │   SPACE     │ │   SPACE     │
│   🎵        │ │   🎵        │ │   🎵        │
└─────────────┘ └─────────────┘ └─────────────┘
```

**Specifications:**
- 5x5 grid with rounded corners
- Each cell: 80px minimum touch target
- Drag indicators: Musical note icons in empty spaces
- Color coding: Different colors for each column (B-I-N-G-O)

#### Song Selection Panel
- **Collapsible drawer** from bottom on mobile, sidebar on desktop
- **Search bar** with auto-complete and recent selections
- **Song cards**: Horizontal scroll with album art placeholders
- **Categories**: Filter by era, popularity, alphabetical

#### Fill the Setlist Game
```
Set 1: ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐
       │     │ │     │ │     │ │     │
       │  ?  │ │  ?  │ │  ?  │ │  ?  │
       └─────┘ └─────┘ └─────┘ └─────┘

Set 2: ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐
       │     │ │     │ │     │ │     │
       │  ?  │ │  ?  │ │  ?  │ │  ?  │
       └─────┘ └─────┘ └─────┘ └─────┘

Encore: ┌─────┐
        │     │
        │  ?  │
        └─────┘
```

### 4.4 Results/Confirmation Screens

#### Success States
- **Rainbow confetti** that falls gently like flower petals
- **Completion message**: "Your vibes have been captured!"
- **Share button**: Creates colorful social card
- **Play again**: Returns to game selection with smooth transition

## 5. Responsive Design Specifications

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

### Mobile Optimizations
- **Touch targets**: Minimum 44x44px
- **Swipe gestures**: Horizontal swipe to navigate between games
- **Thumb-friendly**: Primary actions in bottom 2/3 of screen
- **Reduced animations**: Subtle effects to preserve battery

### Desktop Enhancements
- **Hover states**: Richer interactions with tooltips
- **Keyboard navigation**: Full tab support for accessibility
- **Drag preview**: Larger preview when dragging items
- **Multi-column layouts**: Efficient use of screen real estate

## 6. Accessibility Specifications

### WCAG AA Compliance
- **Color contrast**: All text meets 4.5:1 minimum
- **Focus indicators**: 2px rainbow borders for keyboard navigation
- **Screen reader support**: Full ARIA labels and descriptions
- **Reduced motion**: Respects user preferences
- **Alt text**: Descriptive for all decorative images

### Inclusive Design Features
- **Font scaling**: Supports up to 200% zoom without horizontal scroll
- **High contrast mode**: Alternative color scheme available
- **Keyboard shortcuts**: Quick navigation for power users
- **Voice commands**: Experimental support for "play bingo" etc.

## 7. Micro-interactions & Delight Features

### Loading States
- **Skeleton screens**: Shimmering tie-dye patterns
- **Progress indicators**: Dancing bear that fills up
- **Loading messages**: Fun facts about Dead shows

### Error Handling
- **Gentle error messages**: "Looks like we're experiencing some technical difficulties - the music will be back shortly!"
- **Retry animations**: Gentle pulse on retry buttons
- **Offline mode**: Cached content with "You're grooving offline" message

### Easter Eggs
- **Konami code**: Activates special rainbow mode
- **Long press**: Hidden menu with vintage show posters
- **Triple tap**: Activates "psychedelic mode" (subtle color shifts)

## 8. Component Library Structure

### Reusable Components
- **SongCard**: Draggable song representation
- **DropZone**: Reusable target areas
- **GameCard**: Consistent game mode presentation
- **ProgressIndicator**: Multi-step progress
- **CelebrationModal**: Success states

### Design Tokens
```css
--color-sunshine: #FDE047;
--color-cosmic: #A855F7;
--color-ocean: #22D3EE;
--color-rose: #F472B6;
--radius-lg: 16px;
--shadow-soft: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--animation-gentle: 0.3s ease-in-out;
```

## 9. Performance Considerations

### Animation Performance
- **CSS transforms** for smooth 60fps animations
- **Will-change** hints for drag operations
- **Reduced motion** queries for accessibility
- **Lazy loading** for song artwork and images

### Bundle Optimization
- **Code splitting** by game mode
- **Image optimization**: WebP with fallbacks
- **Font loading**: Critical fonts first, decorative second
- **Service worker** for offline functionality

## 10. Implementation Notes

### Technology Integration
- **Next.js App Router**: For smooth transitions
- **Framer Motion**: For complex animations
- **React DnD**: For drag-and-drop functionality
- **Tailwind CSS**: For consistent styling
- **shadcn/ui**: For accessible base components

### Testing Strategy
- **Visual regression testing**: For design consistency
- **Interaction testing**: Drag-and-drop scenarios
- **Performance testing**: Animation frame rates
- **Accessibility testing**: Screen reader compatibility

This specification provides the foundation for creating a delightful, accessible, and engaging experience that captures the joy of Dead shows while maintaining professional usability standards.
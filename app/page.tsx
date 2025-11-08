import LiquidEther from '@/components/liquid_ether';
import ASCIIText from '@/components/asciit_text';
import Menu from '@/components/menu';

export default function Home() {
  return (
    <div>
      <ASCIIText
        text='Shrey'
        enableWaves={true}
        asciiFontSize={8}
        textFontSize={200}
        textColor='#fdf9f3'
        planeBaseHeight={8}
         />
      <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={true}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={false}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6} />
      </div>
      <div style={{ height: '100vh', background: '#1a1a1a' }}>
        <Menu />
      </div>
    </div>
  );
}

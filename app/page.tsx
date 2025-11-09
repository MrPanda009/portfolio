import LiquidEther from '@/components/liquid_ether';
import ASCIIText from '@/components/asciit_text';
import PillNav from '@/components/nav';
import logo from '@/public/favicon.png';

export default function Home() {
  return (
      <div>
        <ASCIIText
          text='Shrey'
          enableWaves={true}
          textColor='#fdf9f3' />
        <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={20}
            cursorSize={100}
            isViscous={true}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.3}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6} />
        </div>
        <div style={{ position: 'absolute', top: '70%', left: '40%'}}>
          <PillNav
            logo={logo.src}
            logoAlt='Logo'
            items={[
              { label: 'Home', href: '/home' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' }
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="transparent"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
          />
        </div>
      </div>
  );
}

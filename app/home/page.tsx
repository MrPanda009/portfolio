import CardNav from '@/components/card_nav'
import logo from '@/public/favicon.png';
import ClickSpark from '@/components/click_spark';
import MagicBento from '@/components/magic_bento';
import BlurTextWrapper from '@/components/blur_text_wrapper';
import ScrollReveal from '@/components/scroll_reveal';
import LightRays from '@/components/light_rays';
import TiltedCard from '@/components/tilted_card';

export default function Home() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [ 
        { label: "Careers", href: "#", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [ 
        { label: "Featured", href: "#", ariaLabel: "Featured Projects" },
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [ 
        { label: "Email", href: "mailto:shrey33004@gmail.com", ariaLabel: "Email us" },
        { label: "Github", href: "https://github.com/MrPanda009", ariaLabel: "Github" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/shrey-singh-70898237b/", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <><LightRays
      raysOrigin="top-center"
      raysColor="#6A0DAD"
      raysSpeed={1.5}
      lightSpread={0.8}
      rayLength={1.2}
      followMouse={true}
      mouseInfluence={0.1}
      noiseAmount={0.1}
      distortion={0.05}
      className="fixed inset-0 z-[-1] custom-rays" />
      <div className="relative z-10 mt-[-100vh]">
        <CardNav
          logo={logo.src}
          items={items}
          baseColor="#1e1e1eff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out" />
        <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <div style={{ height: '100vh',width: '60vw', margin: '0 auto',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <BlurTextWrapper
              text="I'm Shrey Singh, a passionate software developer focused on building efficient, scalable, and user-centric solutions. My journey in technology is driven by a deep curiosity for how things work, from low-level systems to modern, interactive web applications."
              delay={50}
              animateBy="words"
              direction="top"
              className="text-2xl mb-8 font=roboto" />
          </div>
        </ClickSpark>
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen relative">
          <div className="lg:absolute lg:left-[5%] lg:min-h-screen">
              <ScrollReveal
                  baseOpacity={1}
                  enableBlur={true}
                  baseRotation={5}
                  blurStrength={10}
              >
                  Languages and platforms
              </ScrollReveal>
          </div>
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255" />
        </div>
        <div style={{ position: 'absolute', left: '5%', height: '100vh' }}>
          <div style={{ position: 'absolute', left: '5%', height: '100vh' }}>
            <ScrollReveal
              baseOpacity={1}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
            >
              Projects
            </ScrollReveal>
            <TiltedCard
            imageSrc="/samadhan_setu.jpg"
            captionText="Samadhan Setu"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
            <p className="bg-black bg-opacity-50 text-white p-2 rounded-md text-center">
              Samadhan Setu
              </p>
            }
            />
          </div>
        </div>
      </div></>
 )
}

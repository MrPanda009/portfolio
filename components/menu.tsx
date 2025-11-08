'use client'

import StaggeredMenu from '@/components/staggered_menu';

export default function Menu() {
    return (
        <StaggeredMenu
            position="right"
            items={[
                { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
                { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
                { label: 'Services', ariaLabel: 'View our services', link: '/services' },
                { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
            ]}
            socialItems={[
                { label: 'Twitter', link: 'https://twitter.com' },
                { label: 'GitHub', link: 'https://github.com' },
                { label: 'LinkedIn', link: 'https://linkedin.com' }
            ]}
            isFixed={true}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#fff"
            changeMenuColorOnOpen={true}
            colors={['#B19EEF', '#5227FF']}
            logoUrl="/path-to-your-logo.svg"
            accentColor="#ff6b6b"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
        />
    )
}

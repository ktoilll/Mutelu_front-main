// src/viewmodels/FooterViewModel.ts
interface FooterLink {
    id: string;
    label: string;
    href: string;
}

interface SocialLink {
    id: string;
    href: string;
    iconPath: string;
    altText: string;
}



export const useFooterViewModel = () => {
    const aboutLinks: FooterLink[] = [
        { id: '1', label: 'เกี่ยวกับเรา', href: '/about' },
        { id: '2', label: 'FAQ', href: '/faq' },
        { id: '3', label: 'เงื่อนไขการให้บริการ', href: '/terms' },
        { id: '4', label: 'ขอความช่วยเหลือ', href: '/help' },
        { id: '5', label: 'นโยบายการคุ้มครองข้อมูลส่วนบุคคล', href: '/privacy-policy' }
    ];

    const image_footer_logo = 'icon.png'; 
    return {
        aboutLinks,
        logo: image_footer_logo 
    };
};

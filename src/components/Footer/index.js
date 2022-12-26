import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia,SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };


  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/signin" us>How it works?</FooterLink>
                        <FooterLink to="/signin" us>Testimonials</FooterLink>
                        <FooterLink to="/signin" us>Careers</FooterLink>
                        <FooterLink to="/signin" us>Investors</FooterLink>
                        <FooterLink to="/signin" us>Terms of Service</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/signin" us>Submit video</FooterLink>
                        <FooterLink to="/signin" us>Ambassadors</FooterLink>
                        <FooterLink to="/signin" us>Agency</FooterLink>
                        <FooterLink to="/signin" us>Influencers</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/signin" us>Instagram</FooterLink>
                        <FooterLink to="/signin" us>Facebook</FooterLink>
                        <FooterLink to="/signin" us>Youtube</FooterLink>
                        <FooterLink to="/signin" us>Twitter</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/signin" us>Contact</FooterLink>
                        <FooterLink to="/signin" us>Support</FooterLink>
                        <FooterLink to="/signin" us>Destination</FooterLink>
                        <FooterLink to="/signin" us>Sponsorships</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                    coco
                </SocialLogo>
                <WebsiteRights>coco {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="//www.facebook.com/Disney" target="_blank" ari-label="Facebook">
                    <FaFacebook/>
                    </SocialIconLink>
                    <SocialIconLink href="//www.instagram.com/disney/" target="_blank" ari-label="Instagram">
                    <FaInstagram/>
                    </SocialIconLink>
                    <SocialIconLink href="//www.youtube.com/Disney" target="_blank" ari-label="Youtube">
                    <FaYoutube/>
                    </SocialIconLink>
                    <SocialIconLink href="//www.twitter.com/DisneyStudios" target="_blank" ari-label="Twitter">
                    <FaTwitter/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" ari-label="Linkedin">
                    <FaLinkedin/>
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer

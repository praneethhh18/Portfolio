"use client";
import React from 'react';
import styled from 'styled-components';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { WhatsAppIcon } from '../icons';
import { SOCIAL_LINKS } from '@/lib/data';


const SocialCard = () => {
    const socialLinks = {
        instagram: SOCIAL_LINKS.find(l => l.name === 'Instagram'),
        twitter: SOCIAL_LINKS.find(l => l.name === 'Twitter'),
        linkedin: SOCIAL_LINKS.find(l => l.name === 'LinkedIn'),
        whatsapp: SOCIAL_LINKS.find(l => l.name === 'WhatsApp'),
    };
  return (
    <StyledWrapper>
      <div className="card">
        {socialLinks.instagram && (
            <a href={socialLinks.instagram.url} target="_blank" rel="noopener noreferrer" className="socialContainer containerOne">
                <Instagram className="socialSvg" />
            </a>
        )}
         {socialLinks.linkedin && (
            <a href={socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer" className="socialContainer containerThree">
                <Linkedin className="socialSvg" />
            </a>
        )}
        {socialLinks.whatsapp && (
            <a href={socialLinks.whatsapp.url} target="_blank" rel="noopener noreferrer" className="socialContainer containerFour">
                <WhatsAppIcon className="socialSvg" />
            </a>
        )}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
    .card {
        width: fit-content;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .socialContainer {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: hsl(var(--card));
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition-duration: .3s;
        border: 1px solid hsl(var(--border));
    }
    
    .containerOne:hover {
        background-color: #d62976;
        transition-duration: .3s;
    }
    
    .containerTwo:hover {
        background-color: #00acee;
        transition-duration: .3s;
    }
    
    .containerThree:hover {
        background-color: #0072b1;
        transition-duration: .3s;
    }

    .containerFour:hover {
        background-color: #128C7E;
        transition-duration: .3s;
    }

    .socialContainer:active {
        transform: scale(0.9);
        transition-duration: .3s;
    }

    .socialSvg {
        width: 17px;
        color: hsl(var(--foreground));
    }

    .socialContainer:hover .socialSvg {
        animation: slide-in-top 0.3s both;
    }

    @keyframes slide-in-top {
        0% {
        transform: translateY(-50px);
        opacity: 0;
        }

        100% {
        transform: translateY(0);
        opacity: 1;
        }
    }
`;

export default SocialCard;

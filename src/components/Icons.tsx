import React from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
}

export const Verified: React.FC<IconProps> = ({ className = '', fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}>verified</span>
);

export const FactCheck: React.FC<IconProps> = ({ className = '', fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}>fact_check</span>
);

export const WorkspacePremium: React.FC<IconProps> = ({ className = '', fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}>workspace_premium</span>
);

export const LocalShipping: React.FC<IconProps> = ({ className = '', fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}>local_shipping</span>
);

export const Chat: React.FC<IconProps> = ({ className = '', fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}>chat</span>
);

export const ShoppingCart: React.FC<IconProps> = ({ className = '', fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}>shopping_cart</span>
);

export const AccountCircle: React.FC<IconProps> = ({ className = '', fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}>account_circle</span>
);

export const SearchIcon: React.FC<IconProps> = ({ className = '', fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}>search</span>
);

export const DescriptionIcon: React.FC<IconProps> = ({ className = '', fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}>description</span>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className = '', fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}>chevron_right</span>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className = '', fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}>chevron_left</span>
);

export const PublicIcon: React.FC<IconProps> = ({ className = '', fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}>public</span>
);

export const LocationOnIcon: React.FC<IconProps> = ({ className = '', fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}>location_on</span>
);

export const ScienceIcon: React.FC<IconProps> = ({ className = '', fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}>science</span>
);

export const LocalHospitalIcon: React.FC<IconProps> = ({ className = '', fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}>local_hospital</span>
);

export const RequestQuoteIcon: React.FC<IconProps> = ({ className = '', fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}>request_quote</span>
);

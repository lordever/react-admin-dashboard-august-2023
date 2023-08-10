// declaration.d.ts
// declare module
declare module '*.scss';

// configure for css-modules
declare module '*.less' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.json' {
    const value: any;
    export default value;
}

declare module '@constants/*' {
    import React from 'react';
    const content: React.ComponentType<any>;
    export default content;
}

//images
declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
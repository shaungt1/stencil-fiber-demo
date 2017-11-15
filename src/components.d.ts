/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


import {
  FiberDemo as FiberDemo
} from './components/app';

declare global {
  interface HTMLFiberDemoElement extends FiberDemo, HTMLElement {
  }
  var HTMLFiberDemoElement: {
    prototype: HTMLFiberDemoElement;
    new (): HTMLFiberDemoElement;
  };
  interface HTMLElementTagNameMap {
    "fiber-demo": HTMLFiberDemoElement;
  }
  interface ElementTagNameMap {
    "fiber-demo": HTMLFiberDemoElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "fiber-demo": JSXElements.FiberDemoAttributes;
    }
  }
  namespace JSXElements {
    export interface FiberDemoAttributes extends HTMLAttributes {
      
        elapsed?: number
    }
  }
}


import {
  FiberDot as FiberDot
} from './components/dot';

declare global {
  interface HTMLFiberDotElement extends FiberDot, HTMLElement {
  }
  var HTMLFiberDotElement: {
    prototype: HTMLFiberDotElement;
    new (): HTMLFiberDotElement;
  };
  interface HTMLElementTagNameMap {
    "fiber-dot": HTMLFiberDotElement;
  }
  interface ElementTagNameMap {
    "fiber-dot": HTMLFiberDotElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "fiber-dot": JSXElements.FiberDotAttributes;
    }
  }
  namespace JSXElements {
    export interface FiberDotAttributes extends HTMLAttributes {
      
        size?: number,
        x?: number,
        y?: number,
        text?: string
    }
  }
}


import {
  FiberTriangle as FiberTriangle
} from './components/triangle';

declare global {
  interface HTMLFiberTriangleElement extends FiberTriangle, HTMLElement {
  }
  var HTMLFiberTriangleElement: {
    prototype: HTMLFiberTriangleElement;
    new (): HTMLFiberTriangleElement;
  };
  interface HTMLElementTagNameMap {
    "fiber-triangle": HTMLFiberTriangleElement;
  }
  interface ElementTagNameMap {
    "fiber-triangle": HTMLFiberTriangleElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "fiber-triangle": JSXElements.FiberTriangleAttributes;
    }
  }
  namespace JSXElements {
    export interface FiberTriangleAttributes extends HTMLAttributes {
      
        x?: number,
        y?: number,
        s?: number,
        seconds?: number
    }
  }
}

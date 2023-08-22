// decs.d.ts

declare module 'react-hooks-global-state' {
    // Define the type for the useGlobalState function
    export function useGlobalState<T>(key: string, initialValue: T): [T, (newValue: T) => void];
  }
  
  declare module 'react-image-magnify' {
    interface SmallImageProps {
      alt: string;
      isFluidWidth?: boolean;
      src: string;
      // Add other properties if needed
    }
  
    interface LargeImageProps {
      src: string;
      width: number;
      height: number;
      // Add other properties if needed
    }
  
    interface ReactImageMagnifyProps {
      smallImage: SmallImageProps;
      largeImage: LargeImageProps;
      // Add other properties if needed
    }
  
    export default function ReactImageMagnify(props: ReactImageMagnifyProps): JSX.Element;
  }
  
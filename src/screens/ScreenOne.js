import React from 'react';
import { SvgCss} from 'react-native-svg';
import { Dimensions , StyleSheet } from 'react-native';

const markerRendering =`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 75 1850 3127.5"><defs><style>.cls-1{fill:#41444f;}.cls-1,.cls-2,.cls-3{stroke:#000;stroke-miterlimit:10;}.cls-2{fill:#61c7ed;}.cls-3{fill:#f5eee7;}</style></defs><title>Exemplo</title><path class="cls-1" d="M-192.65,1446.78c76.13-23.1,147.34-59.09,213.68-102.25,139.76-90.93,255.73-211.85,365.85-332.74,57.58-63.2,114.09-126.5,179.73-182.58C629,775.87,697.16,728,770.31,688.51c148.15-80,314.38-123.2,484.28-134.37,94.45-6.2,189.78-1.61,283.46,10.93,29.78,4,59.53,9,89,15.43V-166H-222V1455Q-207.28,1451.22-192.65,1446.78Z" transform="translate(222.5 166.5)"/><path class="cls-2" d="M702.89,2955q2.26-12.56,4.37-25.13c0-.2.17-1,.29-1.68s.22-1.34.26-1.6l1-6.26q.93-5.81,1.85-11.62c2.67-16.9,5.22-33.81,7.77-50.73,10.22-67.82,20.41-135.82,38.61-202.6,18.94-69.5,47.34-137.31,87.86-200.57,28.9-45.13,64.72-86.51,111.11-121,42.83-31.85,92-57.9,144.26-78.45,54.65-21.49,112.31-37.76,171.08-50.07,61.43-12.87,124.07-21.44,187-27.78,56-5.65,112.28-9.19,168.63-11.42V567.94c-57.87-11.64-117.33-18.45-176.57-22.25-91-5.83-182.36-5.12-272.86,4.79-162.58,17.8-317.27,65-452.92,140.1-68.73,38.06-131.57,82.76-189.15,131.53-60.57,51.29-114.87,107.3-173.19,160.25C249.84,1084.5,127.19,1183.73-20.27,1252.53c-63.1,29.44-131,53-201.73,67.42V2960.5H701.88C702.21,2958.67,702.56,2956.84,702.89,2955Z" transform="translate(222.5 166.5)"/><path class="cls-3" d="M1601,2094.18q-50.4,2.47-100.67,6.56-25.2,2.09-50.34,4.67-6.74.69-13.46,1.43l-6.27.69-.68.08c-7.94,1-15.89,1.88-23.83,2.89-65.76,8.37-131.11,19.83-194.82,36.17-30.63,7.85-60.87,16.84-90.46,27.22l-4,1.41c-.78.3-1.58.57-2.36.86q-5,1.85-10,3.74-10.68,4.08-21.22,8.41-20.87,8.59-41.08,18.27T1002,2227.27q-9.48,5.34-18.72,11-4.6,2.81-9.15,5.68l-4.52,2.9-.61.4c-23,16.26-45.36,32.66-65.61,51.5q-7.65,7.11-14.91,14.5-3.64,3.71-7.19,7.48c-1.16,1.24-2.3,2.48-3.45,3.73l0,0c-9.17,10.48-17.94,21.18-26,32.29-23.2,31.81-42.82,65.75-60,100.2l-1.36,2.78-1.44,3q-1.68,3.49-3.31,7-3,6.48-5.93,13-6.18,13.92-11.82,28-11.29,28.27-20.46,57.14a1091.42,1091.42,0,0,0-29,112.72q-5.8,28.26-10.58,56.66-2.4,14.11-4.63,28.24c0,.23-.07.47-.11.75l-.48,3c-.36,2.37-.73,4.75-1.09,7.12q-1,6.62-2,13.24c-5.69,38.21-10.89,76.48-16.65,114.69q-4.18,27.82-8.87,55.59h953V2093Q1614,2093.54,1601,2094.18Z" transform="translate(222.5 166.5)"/></svg>`;

export default function ScreenOne() {
    const { width, height } = Dimensions.get('screen');
    console.log(width, height);
    
    return (
            <SvgCss height={731} width={411} xml={markerRendering} />
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})



